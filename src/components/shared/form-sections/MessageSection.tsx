
import React from "react";
import { Textarea } from "@/components/ui/textarea";

interface MessageSectionProps {
  message: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const MessageSection = ({ message, handleChange }: MessageSectionProps) => {
  return (
    <div>
      <label htmlFor="message" className="block text-sm font-medium text-woodlands-gold mb-1">
        Brief Description of Your Needs
      </label>
      <Textarea
        id="message"
        name="message"
        rows={4}
        placeholder="Please provide a brief description of your situation and what you're looking to accomplish."
        value={message}
        onChange={handleChange}
        className="bg-white/10 border-woodlands-gold/30 text-woodlands-cream placeholder:text-woodlands-cream/50 focus:border-woodlands-gold"
      />
    </div>
  );
};

export default MessageSection;
