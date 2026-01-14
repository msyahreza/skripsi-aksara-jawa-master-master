import axios from 'axios'

async function sendData(canvas, ref) {
    const file = canvas.toDataURL("image/png");
    let data = new FormData();
    data.append('img', file)
    axios.post(`/classify`, data)
        .then(function (response) {
            ref.changeState(response.data.classID, response.data.name)
        })
        .catch(function (error) {
            console.log(error);
        })
}

export default sendData;