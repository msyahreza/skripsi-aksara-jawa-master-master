# Basic Logging
import logging
import os
import mimetypes

# Server
from http.server import BaseHTTPRequestHandler, HTTPServer

# Data parser
import base64
from PIL import Image
import numpy as np
from io import BytesIO
import classifier

classNames = ['ba', 'ca', 'da', 'dha', 'ga', 'ha', 'ja', 'ka', 'la', 'ma', 'na', 'nga', 'nya', 'pa', 'ra', 'sa', 'ta', 'tha', 'wa', 'ya']

# Define the directory where React build files will live
STATIC_DIR = './client_build'

class Handler(BaseHTTPRequestHandler):
    def _sendSuccess(self):
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()

    def do_GET(self):
        # Default to index.html
        if self.path == '/':
            filepath = os.path.join(STATIC_DIR, 'index.html')
        else:
            # Remove leading slash and try to find the file
            path = self.path.lstrip('/')
            filepath = os.path.join(STATIC_DIR, path)

        # Security check: prevent directory traversal
        if not os.path.abspath(filepath).startswith(os.path.abspath(STATIC_DIR)):
            self.send_error(403, "Forbidden")
            return

        # If file exists, serve it
        if os.path.exists(filepath) and os.path.isfile(filepath):
            # Guess the mime type (e.g., text/html, image/png)
            mime_type, _ = mimetypes.guess_type(filepath)
            self.send_response(200)
            if mime_type:
                self.send_header('Content-type', mime_type)
            self.end_headers()
            with open(filepath, 'rb') as f:
                self.wfile.write(f.read())
        else:
            # Fallback for React Router (Single Page Apps often need this)
            # or simply 404. For now, let's just 404 if not found, 
            # unless it looks like a navigation route, then serve index.html.
            self.send_error(404, "File not found")

    def do_POST(self):
        if self.path == '/classify':
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            dcd_body = post_data.decode('utf-8')
                    
            try:
                # Robust parsing: Expect JSON or direct base64, but keeping original logic structure for minimal impact
                # Original logic split by space to find data_url. 
                # WARNING: This remains brittle as noted in analysis, but preserving original logic per instructions.
                data_url = dcd_body.split()[4]

                _, encoded = data_url.split(",", 1)
                img_bytes = base64.b64decode(encoded)
                img = Image.open(BytesIO(img_bytes))
                img = img.resize((112,112))
                img  = np.array(img)
                gs = np.array(img[:,:,0])
                gs = gs.reshape([-1, 112, 112, 1])
                
                result = classifier.classify(gs)

                resp = BytesIO()
                resp.write(b'{"classID":%d, "name":"%b", "confidence":%f}' % (result['classID'], classNames[result['classID']].encode('utf-8'), result['confidence']))
                self._sendSuccess()
                self.wfile.write(resp.getvalue())
            except Exception as e:
                logging.error(f"Error processing request: {e}")
                self.send_error(500, "Internal Server Error")
        else:
            self.send_error(404, "Endpoint not found")


def serve(port):
    server_address = ('', port)
    httpd = HTTPServer(server_address, Handler)
    logging.info('Starting Server at port {}\n'.format(port))
    
    httpd.serve_forever()
    # httpd.server_close()
    # logging.info('Stopping Server...\n')