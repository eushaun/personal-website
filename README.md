# Personal Website

A simple personal website using React frontend containerized with Docker.

DISCLAIMER: This website was built by AI. Initial template was generated by Claude 3.7 Sonnet, and polished by Qwen2.5-coder:14b using Continue extension in VS Code. 

My role in this project is AI prompting, adding content, dockerizing and deploying the app.

## Project Structure

```
personal-website/
├── public/
├── src/
├── tailwind.config.js
├── postcss.config.js
├── package.json
├── package-lock.json
├── nginx.conf
├── Dockerfile            # To build docker image
├── docker-compose.yml    # To run docker container
└── README.md
```

## Features

- Responsive personal website with Home, Projects, and Contact pages
- React frontend with React Router for navigation
- Dockerized for easy deployment

## Running the Application

### Prerequisites

- Docker and Docker Compose installed on your system
- For development - install Node.js from [nodejs.org](https://nodejs.org/en/download)
- If on Windows, WSL

### Steps to Run

1. Clone the repository:
   ```
   git clone <repository-url>
   cd personal-website
   ```

2. Start the application using Docker Compose:
   ```
   docker compose up -d (deploy current image)
   docker compose up -d --build react-frontend (to rebuild image)
   ```

3. Access the website at http://localhost

### Development Mode

To run the application in development mode:

#### Frontend

```
cd personal-website
npm install
npm start
```

This will start the React development server at http://localhost:3000.

## Technologies Used

- **Frontend:**
  - React
  - React Router
  - CSS for styling
  - Tailwind CSS for styling (configured in `tailwind.config.js` and processed by `postcss.config.js`)

- **Deployment:**
  - Docker
  - Nginx (for serving the frontend)
