
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ConsultationCTAProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  className?: string;
  variant?: "light" | "dark";
}

const ConsultationCTA = ({
  title = "Need Expert Estate Planning Advice?",
  subtitle = "Schedule a free 15-minute consultation with our experienced attorneys.",
  buttonText = "Free Consultation",
  className = "",
  variant = "light",
}: ConsultationCTAProps) => {
  return (
    <div
      className={`${
        variant === "light" ? "bg-woodlands-cream" : "bg-woodlands-darkpurple"
      } ${className} py-12 px-4 sm:px-6 md:px-12 rounded-lg`}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2
          className={`text-3xl md:text-4xl font-serif font-semibold mb-4 ${
            variant === "light" ? "text-woodlands-purple" : "text-woodlands-gold"
          }`}
        >
          {title}
        </h2>
        <p
          className={`text-lg mb-8 ${
            variant === "light"
              ? "text-woodlands-darkpurple"
              : "text-woodlands-cream"
          }`}
        >
          {subtitle}
        </p>
        <Link
          to="/contact"
          className={`inline-flex items-center px-6 py-3 rounded-md text-lg font-medium transition-all duration-200 ${
            variant === "light"
              ? "bg-woodlands-gold text-woodlands-purple hover:bg-woodlands-lightgold"
              : "bg-woodlands-gold text-woodlands-purple hover:bg-woodlands-lightgold"
          }`}
        >
          {buttonText}
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </div>
  );
};

export default ConsultationCTA;
