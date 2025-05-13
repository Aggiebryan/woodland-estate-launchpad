
import React from 'react';

interface QA {
  question: string;
  answer: string;
}

interface QandABlockProps {
  questions: QA[];
  title?: string;
}

const QandABlock: React.FC<QandABlockProps> = ({ questions, title = "Questions & Answers" }) => {
  return (
    <div className="py-10">
      <h2 className="text-3xl font-serif font-bold text-woodlands-gold mb-8">{title}</h2>
      
      <div className="space-y-8">
        {questions.map((qa, index) => (
          <div key={index} className="bg-white/5 p-6 rounded-lg border border-woodlands-gold/20">
            <h3 className="text-xl text-woodlands-lightgold font-semibold mb-3">{qa.question}</h3>
            <p className="text-woodlands-cream">{qa.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QandABlock;
