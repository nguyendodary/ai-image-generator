import React from 'react';

const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <label htmlFor={name} className="text-sm font-medium text-[#9898b0]">
          {labelName}
        </label>
        {isSurpriseMe && (
          <button
            type="button"
            onClick={handleSurpriseMe}
            className="text-xs bg-[#1e1e28] hover:bg-[#2a2a38] text-[#6469ff] px-3 py-1 rounded-lg border border-[#2a2a38] hover:border-[#6469ff]/50 transition-all duration-200 font-medium"
          >
            Surprise Me
          </button>
        )}
      </div>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className="w-full bg-[#1e1e28] border border-[#2a2a38] rounded-xl px-4 py-3 text-[#f0f0f5] placeholder-[#5a5a75] text-sm focus:outline-none focus:border-[#6469ff] focus:ring-2 focus:ring-[#6469ff]/20 transition-all duration-200"
      />
    </div>
  );
};

export default FormField;
