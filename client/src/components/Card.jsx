import React from 'react';
import { downloadImage } from '../utils';

const Card = ({ _id, name, prompt, photo }) => {
  return (
    <div className="group relative rounded-2xl overflow-hidden cursor-pointer border border-white/5 bg-[#16161d] hover:border-[#6469ff]/30 hover:shadow-[0_0_30px_rgba(100,105,255,0.15)] transition-all duration-300">
      <img
        src={photo}
        alt={prompt}
        className="w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <p className="text-white text-sm line-clamp-3 mb-3">{prompt}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#6469ff] flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
              {name[0].toUpperCase()}
            </div>
            <p className="text-[#f0f0f5] text-sm font-medium truncate max-w-[120px]">{name}</p>
          </div>
          <button
            onClick={() => downloadImage(_id, photo)}
            className="text-white hover:bg-white/20 rounded-lg p-1.5 transition-all duration-200"
            title="Download image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
