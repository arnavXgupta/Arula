"use client";

import type { ChatOption } from "@/types/chatbot";

interface OptionGridProps {
  options: ChatOption[];
  onSelect: (option: ChatOption) => void;
  disabled?: boolean;
}

export default function OptionGrid({
  options,
  onSelect,
  disabled,
}: OptionGridProps) {
  if (!options || options.length === 0) return null;

  return (
    <div className="flex flex-col gap-2 mt-2">
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => onSelect(option)}
          disabled={disabled}
          className="w-full text-left px-4 py-2 rounded-xl bg-white border border-[#E6E2FF] text-[#5B4FE3] hover:bg-[#7C6CF6] hover:text-white transition-all text-sm"
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}