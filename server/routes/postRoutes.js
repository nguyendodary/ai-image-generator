import express from 'express';
import { v2 as cloudinary } from 'cloudinary';
import Post from '../mongodb/models/post.js';

const router = express.Router();

cloudinary.config({
  cloud_name: 'dzhu3koqr',
  api_key: '682139975712174',
  api_secret: 'tAgb8WVRhk-7jSzEpJ3OnQXP4fk',
});

// Debug: Log Cloudinary config (ẩn secret)
console.log('Cloudinary config:', {
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY ? 'SET' : 'MISSING',
  api_secret: process.env.CLOUDINARY_API_SECRET ? 'SET' : 'MISSING',
});

router.get('/', async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).json({ success: true, data: posts.reverse() });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error?.message || 'Failed to fetch posts' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { name, prompt, photo } = req.body;
    const photoUrl = await cloudinary.uploader.upload(photo);
    const newPost = await Post.create({ name, prompt, photo: photoUrl.url });
    res.status(201).json({ success: true, data: newPost });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error?.message || 'Failed to create post' });
  }
});

export default router;
