
import React from 'react';
import { BlogPost } from '@/types/blog';
import { Calendar, User } from 'lucide-react';

interface BlogPostHeroProps {
  post: BlogPost;
}

const BlogPostHero = ({ post }: BlogPostHeroProps) => {
  return (
    <div 
      className="relative bg-cover bg-center h-80 flex items-center justify-center text-center px-4"
      style={{ 
        backgroundImage: 'url("/lovable-uploads/9aecbe80-5ebf-4a07-be93-fadd11c88611.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-woodlands-darkpurple/60"></div>
      <div className="relative z-10 max-w-4xl mx-auto">
        {post.categories && post.categories.length > 0 && (
          <div className="mb-5 flex gap-2 justify-center flex-wrap">
            {post.categories.map(category => (
              <div 
                key={category.id}
                className="bg-woodlands-gold text-white text-sm font-medium px-3 py-1"
              >
                {category.name}
              </div>
            ))}
          </div>
        )}
        <h1 
          className="text-4xl md:text-5xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-woodlands-gold via-woodlands-lightgold to-woodlands-gold"
          dangerouslySetInnerHTML={{ __html: post.title }}
        ></h1>
        <div className="flex flex-wrap justify-center items-center gap-4 text-woodlands-cream/80 mt-4">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}</span>
          </div>
          <div className="flex items-center">
            <User className="w-4 h-4 mr-2" />
            <span>{post.author}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostHero;
