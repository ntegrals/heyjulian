"use client";
import { useChat } from "ai/react";
import React, { useEffect, useRef } from "react";
import UserMessage from "../components/chat/UserMessage";
import AIMessage from "../components/chat/AIMessage";
import { motion } from "framer-motion";

export default function page() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log(inputRef.current);
    inputRef.current?.focus();
  });

  const messagesEndRef = useRef<any>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  const focusOnRef = () => {
    inputRef.current?.focus();
  };

  useEffect(() => {
    focusOnRef;
    scrollToBottom();
  }, [messages]);

  return (
    <div className="relative overflow-hidden bg-[#0D0E12] h-screen lg:flex lg:gap-2 lg:justify-center lg:items-center">
      <div className="lg:flex lg:items-center lg:justify-center">
        {/* Chatbot */}
        <div className="m-4 md:m-0">
          <div
            id="message"
            className=" no-scrollbar h-96 md:h-[458px] block p-2.5 pt-4 md:w-[550px] text-sm border-[#23262E] border-t border-l border-r rounded-t-2xl bg-[#14171C]  placeholder-gray-400 text-white focus:ring-white focus:border-white overflow-y-scroll"
          >
            {[
              {
                id: "dqKAYs2njL",
                role: "ai",
                content:
                  "Hello, I'm Julian. Nice to meet you!\n\n How are you doing?",
              },
              ...messages,
            ].map((m) => (
              <div key={m.id}>
                {m.role === "user" ? (
                  <UserMessage message={m.content} />
                ) : (
                  <AIMessage message={m.content} />
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="">
            <label htmlFor="chat" className="sr-only">
              Your message
            </label>
            <div className="items-center pr-3 py-2 rounded-b-2xl border-[#23262E] border-b border-l border-r  bg-[#14171C]">
              <form className="flex space-x-4" onSubmit={handleSubmit}>
                <input
                  autoFocus
                  id="chat"
                  className="block ml-4 mr-2 p-2.5 w-full text-sm rounded-md border focus:outline-none  bg-[#1E2025] border-gray-800 placeholder-gray-400 text-white "
                  placeholder="Your message..."
                  ref={inputRef}
                  value={input}
                  onChange={handleInputChange}
                ></input>

                <button
                  type="submit"
                  className="inline-flex justify-center p-2 rounded-full cursor-pointer text-white hover:bg-gray-600"
                >
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6 rotate-90"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                  </svg>
                  <span className="sr-only">Send message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-10 md:mt-0 rounded-lg"
        >
          <img src="./images/me5.png" alt="Me" width={550} />
        </motion.div>
      </div>
    </div>
  );
}
