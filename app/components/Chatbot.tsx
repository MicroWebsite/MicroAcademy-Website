"use client";

import { FormEvent, useCallback, useEffect, useRef, useState } from "react";
import { welcomeMessage } from "./chatbot/data";
import { generateBotResponse } from "./chatbot/generateResponse";
import { ChatMessage } from "@/app/types/chatbot";
import ChatWindow from "./chatbot/ChatWindow";
import ChatToggleButton from "./chatbot/ChatToggleButton";
import GreetingTooltip from "./chatbot/GreetingTooltip";
import useStrapiData from "./chatbot/useStrapiData";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const strapiData = useStrapiData();

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessages([
        {
          id: "welcome",
          text: welcomeMessage,
          sender: "bot",
          timestamp: new Date(),
        },
      ]);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const sendMessage = useCallback(
    (text: string) => {
      if (!text.trim()) return;

      const trimmedText = text.trim();
      const userMsg: ChatMessage = {
        id: `user-${Date.now()}`,
        text: trimmedText,
        sender: "user",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, userMsg]);
      setInputValue("");
      setIsTyping(true);

      setTimeout(
        () => {
          const botReply: ChatMessage = {
            id: `bot-${Date.now()}`,
            text: generateBotResponse(trimmedText, strapiData),
            sender: "bot",
            timestamp: new Date(),
          };

          setMessages((prev) => [...prev, botReply]);
          setIsTyping(false);
        },
        800 + Math.random() * 700,
      );
    },
    [strapiData],
  );

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      sendMessage(inputValue);
    },
    [inputValue, sendMessage],
  );

  return (
    <>
      <ChatWindow
        isOpen={isOpen}
        messages={messages}
        isTyping={isTyping}
        inputValue={inputValue}
        inputRef={inputRef}
        messagesEndRef={messagesEndRef}
        onClose={() => setIsOpen(false)}
        onInputChange={setInputValue}
        onSubmit={handleSubmit}
        onQuickAction={sendMessage}
      />

      <ChatToggleButton isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />

      {!isOpen && <GreetingTooltip />}
    </>
  );
}
