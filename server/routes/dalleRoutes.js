import express from 'express';

const router = express.Router();

// Sử dụng HuggingFace Inference API - miễn phí
const HF_MODEL = 'https://router.huggingface.co/hf-inference/models/stabilityai/stable-diffusion-xl-base-1.0';

router.post('/', async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    const response = await fetch(HF_MODEL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.HF_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ inputs: prompt }),
    });

    if (response.status === 503) {
      return res.status(503).json({ error: 'Model is loading, please wait 20 seconds and try again.' });
    }

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(errText);
    }

    const arrayBuffer = await response.arrayBuffer();
    const base64 = Buffer.from(arrayBuffer).toString('base64');

    res.status(200).json({ photo: base64 });
  } catch (error) {
    console.error('Image generation error:', error?.message);
    res.status(500).json({ error: error?.message || 'Image generation failed' });
  }
});

export default router;
