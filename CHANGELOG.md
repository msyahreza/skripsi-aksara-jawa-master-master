# Changelog

All notable changes to this project will be documented in this file.

## [1.2.0] - 2026-01-14 (Monolith Migration)
### Changed
- **Architecture**: Merged Frontend and Backend into a single "Monolithic" Docker image (`raid/aksara-monolith`).
- **Backend**: Python server (`server.py`) now serves both the React static files and the Classification API.
- **Docker**: Created `Dockerfile.monolith` to build the combined application.
- **Kubernetes**: Replaced separate frontend/backend deployments with a single `aksara-app` deployment (3 replicas).
- **Scripts**: Added `start-all.ps1` and `stop-all.ps1` for easy management of both Docker Compose and Kubernetes environments.

### Fixed
- **Bug**: Fixed `ImagePullBackOff` error in Kubernetes by correcting image names.
- **Bug**: Fixed broken logo in Navbar by renaming "SR-Logo 1.png" to "SR-Logo.png" to remove spaces.
- **Config**: Removed obsolete `version` attribute from `docker-compose.yml`.

## [1.1.0] - 2026-01-14 (Kubernetes & Docker Compose Support)
### Added
- **Kubernetes**: Added `k8s/` configuration files for separate Frontend and Backend deployments.
- **Docker**: Configured `docker-compose.yml` to run the application locally.
- **Frontend**: Added `nginx.conf` to handle reverse proxying to the backend.
- **Frontend**: Updated `Client.js` to use relative API paths (`/classify`) instead of hardcoded `localhost`.

## [1.0.0] - 2026-01-14 (Initial Release)
### Added
- **Frontend**: React application with drawing canvas (`p5.js`) and API integration.
- **Backend**: Python HTTP server using TensorFlow/Keras for Aksara Jawa classification.
- **Model**: Integrated pre-trained CNN model (`model.h5`).
