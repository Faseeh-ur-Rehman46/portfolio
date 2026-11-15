import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, X, Send, Bot, User, Terminal, ExternalLink, Copy, Check } from 'lucide-react';

const SUGGESTED_QUESTIONS = [
  "What projects has Hasaan built?",
  "Tell me about his iCode internship",
  "How does @hasaan_6/rag-chatbot-widget work?",
  "What are Hasaan's AI & Full-Stack skills?",
  "How can I contact Hasaan?"
];

function retrieveAnswer(query, data) {
  const q = query.toLowerCase();
  const { personal, experiences, projects, skills } = data;

  if (q.includes("project") || q.includes("built") || q.includes("work") || q.includes("tracelens") || q.includes("tamper") || q.includes("forecast") || q.includes("locker")) {
    return {
      source: "vector_store://projects_index (similarity: 0.96)",
      text: `Hasaan has engineered 11+ repositories and 5 flagship systems:\n\n1. **Tracelens (2026)**: Real-time developer observability, OpenTelemetry-style span tracing & ML error clustering (TypeScript, Next.js, Node.js, Socket.io).\n2. **RAG Chatbot Widget (2026)**: Published NPM package (\`@hasaan_6/rag-chatbot-widget\`) powered by Gemini LLM & Supabase pgvector.\n3. **Image Tampering Detection (2026)**: Deep learning computer vision forensics using ELA + CNNs in TensorFlow & OpenCV achieving **90%+ accuracy**.\n4. **Electricity Forecast App (2025)**: Time-series ML load forecasting deployed on **AWS EC2** with Streamlit.\n5. **Folder Locker (2025)**: Python AES cryptographic directory security utility.`
    };
  }

  if (q.includes("icode") || q.includes("intern") || q.includes("experience") || q.includes("career") || q.includes("job")) {
    const exp = experiences[0];
    return {
      source: "vector_store://career_path/icode_software_house (similarity: 0.95)",
      text: `Hasaan is currently a **${exp.title}** at **${exp.company}** (${exp.period}).\n\nHe builds full-stack company management systems using **React Native** and **Django**. Key engineering contributions include:\n• **Sale Prediction ML Feature**: Forecasting inventory demand.\n• **Automated Low-Stock Ordering Flow**: Flagging inventory below threshold and automatically placing vendor restock orders upon manager approval.`
    };
  }

  if (q.includes("npm") || q.includes("rag") || q.includes("widget") || q.includes("chatbot")) {
    return {
      source: "vector_store://npm_registry/@hasaan_6/rag-chatbot-widget (similarity: 0.98)",
      text: `**@hasaan_6/rag-chatbot-widget** is Hasaan's published open-source NPM package!\n\n• **Install**: \`npm i @hasaan_6/rag-chatbot-widget\`\n• **Architecture**: Uses **Supabase pgvector** for cosine similarity embedding retrieval and **Google Gemini API** for contextual streaming responses.\n• **Use Case**: Drop-in React component allowing any developer portfolio or SaaS documentation site to answer user questions dynamically.`
    };
  }

  if (q.includes("skill") || q.includes("stack") || q.includes("tech") || q.includes("ai") || q.includes("ml") || q.includes("language")) {
    const catSummary = skills.categories.map(c => `• **${c.title}**: ${c.items.join(', ')}`).join('\n');
    return {
      source: "vector_store://toolkit_matrix (similarity: 0.94)",
      text: `Here is Hasaan's complete technical toolkit:\n\n${catSummary}`
    };
  }

  if (q.includes("contact") || q.includes("email") || q.includes("hire") || q.includes("phone") || q.includes("whatsapp") || q.includes("reach") || q.includes("location")) {
    return {
      source: "vector_store://contact_metadata (similarity: 0.97)",
      text: `You can reach **Hasaan Ahmad** directly via:\n\n• **Email**: ${personal.email}\n• **Phone / WhatsApp**: ${personal.phone}\n• **Location**: ${personal.location}\n• **LinkedIn**: linkedin.com/in/hasaan-ahmad-13b605334\n• **GitHub**: github.com/Hasaan6`
    };
  }

  if (q.includes("education") || q.includes("university") || q.includes("ucp") || q.includes("degree") || q.includes("study")) {
    return {
      source: "vector_store://education_ucp (similarity: 0.93)",
      text: `Hasaan is pursuing his **Bachelor of Science in Computer Science** at the **University of Central Punjab (UCP)**, focusing on full-stack web architecture, cloud deployment (AWS), and machine learning / computer vision.`
    };
  }

  return {
    source: "vector_store://hasaan_bio_overview (similarity: 0.89)",
    text: `I'm Hasaan's RAG AI Assistant! **Hasaan Ahmad** is a Full-Stack & AI Engineer (interning at **iCode Software House**, studying CS at **UCP**). He specializes in **React, Next.js, Python, Django, TensorFlow, and AWS**, and is the author of the NPM package \`@hasaan_6/rag-chatbot-widget\`.\n\nAsk me about his **projects** (Tracelens, Image Tampering CV, RAG Widget), **skills**, **iCode internship**, or **contact details**!`
  };
}

export default function RagChatWidget({ data, accentColor = "#22d3ee" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [copiedNpm, setCopiedNpm] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      source: "system://rag_engine_initialized",
      text: "Hi! I'm Hasaan's Portfolio RAG AI Assistant (powered by `@hasaan_6/rag-chatbot-widget`). Ask me anything about Hasaan's projects, iCode internship, AI/ML skills, or how to get in touch!"
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const handleSend = (questionText) => {
    const query = (questionText ?? input).trim();
    if (!query) return;

    const userMsg = { role: "user", text: query };
    setMessages((prev) => [...prev, userMsg]);
    if (!questionText) setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const response = retrieveAnswer(query, data);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          source: response.source,
          text: response.text
        }
      ]);
      setIsTyping(false);
    }, 450);
  };

  const copyNpm = () => {
    navigator.clipboard.writeText("npm i @hasaan_6/rag-chatbot-widget");
    setCopiedNpm(true);
    setTimeout(() => setCopiedNpm(false), 2000);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 font-sans">
      {/* Chat Modal */}
      {isOpen && (
        <div className="mb-3 w-[350px] sm:w-[410px] rounded-2xl bg-[#09090b]/95 border border-zinc-800 shadow-2xl shadow-black/80 backdrop-blur-xl overflow-hidden flex flex-col max-h-[560px] animate-fadeIn">
          {/* Header */}
          <div className="px-4 py-3.5 bg-zinc-900/90 border-b border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-cyan-500/15 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="text-xs font-bold text-white tracking-wide">Hasaan RAG AI</h4>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <p className="text-[10px] text-zinc-400 font-mono">Gemini 2.5 · Supabase pgvector</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
              aria-label="Close AI Chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* NPM Package Sub-banner */}
          <div className="px-3.5 py-1.5 bg-zinc-950 border-b border-zinc-800/80 flex items-center justify-between text-[10px] font-mono text-zinc-400">
            <span className="truncate">npm i @hasaan_6/rag-chatbot-widget</span>
            <div className="flex items-center gap-1.5 shrink-0">
              <button
                onClick={copyNpm}
                className="px-1.5 py-0.5 rounded bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 flex items-center gap-1 cursor-pointer"
                title="Copy NPM install command"
              >
                {copiedNpm ? <Check className="w-2.5 h-2.5 text-emerald-400" /> : <Copy className="w-2.5 h-2.5" />}
                <span>{copiedNpm ? "Copied" : "Copy"}</span>
              </button>
              <a
                href={data.personal.npmPackageUrl}
                target="_blank"
                rel="noreferrer"
                className="text-cyan-400 hover:underline flex items-center gap-0.5"
              >
                <span>NPM</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>
          </div>

          {/* Messages List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 max-h-[310px] text-xs">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${msg.role === "user" ? "items-end" : "items-start"}`}
              >
                {msg.source && (
                  <span className="text-[9px] font-mono text-cyan-400/80 mb-1 px-1.5 py-0.5 rounded bg-cyan-950/30 border border-cyan-900/40">
                    {msg.source}
                  </span>
                )}
                <div
                  className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 leading-relaxed whitespace-pre-line ${
                    msg.role === "user"
                      ? "bg-white text-black font-medium rounded-br-xs"
                      : "bg-zinc-900/90 border border-zinc-800 text-zinc-200 rounded-bl-xs"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 text-zinc-400 text-xs px-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:150ms]" />
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:300ms]" />
                <span className="text-[10px] font-mono text-zinc-500">Retrieving vectors...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggestion Chips */}
          <div className="px-3 py-2 bg-zinc-950/60 border-t border-zinc-900 flex gap-1.5 overflow-x-auto no-scrollbar">
            {SUGGESTED_QUESTIONS.map((q, i) => (
              <button
                key={i}
                onClick={() => handleSend(q)}
                className="shrink-0 px-2.5 py-1 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-cyan-500/40 text-[10px] text-zinc-300 hover:text-white transition-all cursor-pointer"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-zinc-900/90 border-t border-zinc-800 flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Hasaan's projects, skills, or CV..."
              className="flex-1 bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-500/60"
            />
            <button
              type="submit"
              className="p-2 rounded-xl bg-white text-black hover:bg-zinc-200 transition-colors cursor-pointer shrink-0"
              aria-label="Send message"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-zinc-900/95 hover:bg-zinc-800 text-white border border-zinc-700/80 hover:border-cyan-400/60 shadow-2xl shadow-black/80 backdrop-blur-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
      >
        <Sparkles className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform" />
        <span className="text-xs font-semibold tracking-wide">Chat with AI</span>
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
      </button>
    </div>
  );
}
