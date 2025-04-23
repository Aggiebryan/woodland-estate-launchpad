
import React from "react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role?: string;
  imgSrc?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  quote, 
  author, 
  role = "", 
  imgSrc = "" 
}) => {
  return (
    <div className="bg-woodlands-cream/10 p-6 rounded-lg border border-woodlands-gold/20 shadow-lg relative">
      <svg
        className="absolute top-4 left-4 w-10 h-10 text-woodlands-gold/20"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        fill="currentColor"
      >
        <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
      </svg>
      
      <blockquote className="text-woodlands-cream italic mt-8 mb-4 relative z-10">
        "{quote}"
      </blockquote>
      
      <div className="flex items-center mt-4">
        {imgSrc && (
          <div className="mr-3">
            <img 
              src={imgSrc} 
              alt={author} 
              className="w-12 h-12 rounded-full object-cover border-2 border-woodlands-gold" 
            />
          </div>
        )}
        <div>
          <p className="font-semibold text-woodlands-gold">{author}</p>
          {role && <p className="text-woodlands-cream/70 text-sm">{role}</p>}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
