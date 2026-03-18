# AI Image Generator

Free AI image generation app using HuggingFace Stable Diffusion XL.

## Features

- 🎨 Generate AI images from text prompts
- 🆓 Free with HuggingFace API
- 🌐 Community showcase
- 📱 Responsive design
- 💾 Download images

## Tech Stack

### Frontend
- React 18
- Vite
- TailwindCSS
- React Router

### Backend
- Node.js
- Express.js
- MongoDB
- Cloudinary
- HuggingFace Inference API

## Quick Start

### Option 1: Docker (Recommended)
```bash
# Clone repo
git clone https://github.com/nguyendodary/ai-image-generator.git
cd ai-image-generator

# Setup environment
cp .env.example .env
# Edit .env with your credentials

# Run with Docker
docker-compose up --build

# Access at http://localhost:80
```

### Option 2: Local Development
```bash
# Clone repo
git clone https://github.com/nguyendodary/ai-image-generator.git
cd ai-image-generator

# Install dependencies
# Server
cd server
npm install

# Client
cd ../client
npm install

# Setup environment
cp server/.env.example server/.env
# Edit server/.env with your credentials

# Run application
# Terminal 1 - Server
cd server
npm start

# Terminal 2 - Client
cd client
npm run dev

# Access at http://localhost:5173
```

## API Endpoints

- `POST /api/v1/dalle` - Generate image
- `GET /api/v1/post` - Get all posts
- `POST /api/v1/post` - Create post

## License

MIT License
