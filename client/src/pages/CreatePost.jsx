import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormField, Loader } from '../components';
import { getRandomPrompt } from '../utils';

const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', prompt: '', photo: '' });
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  };

  const generateImage = async () => {
    if (!form.prompt) {
      alert('Please enter a prompt first');
      return;
    }
    setGeneratingImg(true);
    try {
      const response = await fetch('/api/v1/dalle', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: form.prompt }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Image generation failed');
      }
      setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` });
    } catch (err) {
      alert(err.message || err);
    } finally {
      setGeneratingImg(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.prompt || !form.photo) {
      alert('Please generate an image before sharing');
      return;
    }
    setLoading(true);
    try {
      const response = await fetch('/api/v1/post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (!response.ok) {
        const msg =
          typeof data?.message === 'string'
            ? data.message
            : typeof data?.error === 'string'
              ? data.error
              : 'Failed to share post';
        throw new Error(msg);
      }
      navigate('/');
    } catch (err) {
      alert(err?.message || String(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-[#f0f0f5] to-[#9898b0] bg-clip-text text-transparent">
          Create with AI
        </h1>
        <p className="mt-4 text-[#9898b0] text-lg leading-relaxed max-w-xl">
          Generate stunning AI images using Stable Diffusion and share them with the community.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid lg:grid-cols-2 gap-10">
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-6">
            <div className="bg-[#16161d] border border-[#2a2a38] rounded-2xl p-6 flex flex-col gap-5">
              <FormField
                labelName="Your Name"
                type="text"
                name="name"
                placeholder="John Doe"
                value={form.name}
                handleChange={handleChange}
              />
              <FormField
                labelName="Prompt"
                type="text"
                name="prompt"
                placeholder="A futuristic cityscape at sunset..."
                value={form.prompt}
                handleChange={handleChange}
                isSurpriseMe
                handleSurpriseMe={handleSurpriseMe}
              />
            </div>
            <button
              type="button"
              onClick={generateImage}
              disabled={generatingImg}
              className="w-full bg-[#22c55e] hover:bg-[#16a34a] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3.5 rounded-xl transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] flex items-center justify-center gap-2"
            >
              {generatingImg ? (
                <>
                  <Loader size="sm" />
                  <span>Generating<span className="animate-pulse">...</span></span>
                </>
              ) : (
                'Generate Image'
              )}
            </button>
          </div>

          {/* RIGHT COLUMN */}
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-[#2a2a38] bg-[#16161d]">
            {form.photo ? (
              <img
                src={form.photo}
                alt={form.prompt}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center gap-4 p-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-16 h-16 text-[#2a2a38]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <p className="text-[#5a5a75] text-sm text-center">Your image will appear here</p>
              </div>
            )}
            {generatingImg && (
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center rounded-2xl">
                <Loader size="lg" />
              </div>
            )}
          </div>
        </div>

        <div className="mt-8">
          <p className="text-[#9898b0] text-sm mb-4 leading-relaxed">
            Once you have generated an image, you can share it with the community.
          </p>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#6469ff] hover:bg-[#4f54e0] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3.5 rounded-xl transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(100,105,255,0.3)] flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader size="sm" />
                <span>Sharing<span className="animate-pulse">...</span></span>
              </>
            ) : (
              'Share with Community'
            )}
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreatePost;
