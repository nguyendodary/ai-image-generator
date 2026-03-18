# AI Image Generator

Ứng dụng tạo ảnh AI miễn phí sử dụng HuggingFace Stable Diffusion XL.

## Features

- 🎨 Tạo ảnh AI từ text prompts
- 🆓 Miễn phí với HuggingFace API
- 🌐 Community showcase
- 📱 Responsive design
- 💾 Download ảnh

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

### Prerequisites
- Node.js 18+
- MongoDB Atlas account
- HuggingFace token

### Installation

1. Clone repo
```bash
git clone https://github.com/nguyendodary/ai-image-generator.git
cd ai-image-generator
```

2. Install dependencies
```bash
# Server
cd server
npm install

# Client
cd ../client
npm install
```

3. Environment variables
```bash
# server/.env
HF_API_KEY=your_huggingface_token
MONGODB_URL=your_mongodb_url
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
```

4. Run application
```bash
# Terminal 1 - Server
cd server
npm start

# Terminal 2 - Client
cd client
npm run dev
```

5. Open http://localhost:5173

## API Endpoints

- `POST /api/v1/dalle` - Generate image
- `GET /api/v1/post` - Get all posts
- `POST /api/v1/post` - Create post

## License

MIT License
