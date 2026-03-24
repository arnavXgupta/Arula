"use client";

import { useState } from "react";
import Chatbot from "./Chatbot";

export default function ChatbotWrapper() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && <Chatbot />}

      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-5 right-5 z-50 bg-black text-white px-4 py-2 rounded-full shadow-lg"
      >
        Chat
      </button>
    </>
  );
}