"use client";

import { useState } from "react";

type Message = {
  role: "bot" | "user";
  content: string;
};

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      content:
        "Hi! I’m the Twins Customs assistant. I can help with tint, wraps, PPF, ceramic coating, custom graphics, pricing questions, and getting you to the quote page.",
    },
  ]);

  async function sendMessage() {
    if (!input.trim()) return;

    const userMessage = input.trim();
    const updatedMessages = [...messages, { role: "user" as const, content: userMessage }];
    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chatbot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await res.json();

      setMessages([
        ...updatedMessages,
        {
          role: "bot",
          content: data.reply || "Sorry, I couldn’t process that right now.",
        },
      ]);
    } catch {
      setMessages([
        ...updatedMessages,
        {
          role: "bot",
          content:
            "I’m having trouble responding right now. You can still call Twins Customs or use the quote page.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="fixed bottom-6 right-6 z-50 rounded-full bg-[#00b7d6] px-5 py-3 text-sm font-extrabold uppercase tracking-[0.12em] text-white shadow-[0_8px_30px_rgba(0,0,0,0.35)] transition hover:bg-[#0cc6e7]"
        aria-label="Open chatbot"
      >
        {open ? "Close Chat" : "Chat Now"}
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 flex h-[540px] w-[360px] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-2xl border border-[#2a2a2a] bg-[#0b0b0b] shadow-[0_12px_40px_rgba(0,0,0,0.45)]">
          <div className="border-b border-[#1f1f1f] bg-[linear-gradient(180deg,#111,#090909)] px-4 py-4">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[#d3a55b]">
              Twins Customs Assistant
            </p>
            <h3 className="mt-1 text-sm font-bold text-white">
              Sales & service help
            </h3>
            <p className="mt-1 text-xs text-white/60">
              Ask about services, pricing, location, or how to get a quote.
            </p>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-6 ${
                  msg.role === "user"
                    ? "ml-auto bg-[#00b7d6] text-white"
                    : "bg-[#171717] text-white/85"
                }`}
              >
                {msg.content}
              </div>
            ))}

            {loading && (
              <div className="max-w-[85%] rounded-2xl bg-[#171717] px-3 py-2 text-sm text-white/70">
                Typing...
              </div>
            )}
          </div>

          <div className="border-t border-[#1f1f1f] p-3">
            <div className="flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") sendMessage();
                }}
                placeholder="Ask about tint, wraps, pricing..."
                className="flex-1 rounded-md border border-white/10 bg-[#151515] px-3 py-2 text-sm text-white placeholder:text-white/35 focus:border-[#00b7d6] focus:outline-none"
              />
              <button
                onClick={sendMessage}
                className="rounded-md bg-[#00b7d6] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#0cc6e7]"
              >
                Send
              </button>
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {[
                "What services do you offer?",
                "How do I get a quote?",
                "Where are you located?",
              ].map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => setInput(prompt)}
                  className="rounded-full border border-white/10 px-3 py-1.5 text-[0.68rem] text-white/70 hover:border-[#00b7d6] hover:text-[#00b7d6]"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}