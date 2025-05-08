
import React from 'react';
import { BlogPost } from '@/types/blog';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { User, Calendar, Tag } from 'lucide-react';

interface BlogPostContentProps {
  post: BlogPost;
}

const BlogPostContent = ({ post }: BlogPostContentProps) => {
  return (
    <>
      <h1 
        className="text-4xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-woodlands-gold via-woodlands-lightgold to-woodlands-gold"
        dangerouslySetInnerHTML={{ __html: post.title }}
      ></h1>
      
      <div className="flex flex-wrap items-center gap-6 text-sm text-woodlands-cream/70">
        <div className="flex items-center">
          <Calendar className="w-4 h-4 mr-2" />
          <span>{new Date(post.date).toLocaleDateString()}</span>
        </div>
        <div className="flex items-center">
          <User className="w-4 h-4 mr-2" />
          <span>{post.author}</span>
        </div>
      </div>
      
      {post.featuredImage && (
        <div className="my-6">
          <img 
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-auto max-h-96 object-cover rounded-lg"
          />
        </div>
      )}
      
      <Card className="backdrop-blur-sm bg-woodlands-darkpurple/30 border-woodlands-gold/20">
        <CardContent className="pt-6">
          <div 
            className="prose prose-invert prose-gold max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></div>
        </CardContent>
      </Card>
      
      {post.categories && post.categories.length > 0 && (
        <div className="flex items-center gap-2 flex-wrap pt-4">
          <span className="text-woodlands-cream/60 text-sm">Categories:</span>
          {post.categories.map(category => (
            <Link 
              key={category.id}
              to={`/blog?category=${category.id}`}
              className="px-2 py-1 text-xs rounded-full bg-woodlands-purple/40 text-woodlands-cream/90 hover:bg-woodlands-purple/60 transition-colors"
            >
              {category.name}
            </Link>
          ))}
        </div>
      )}
      
      {post.tags && post.tags.length > 0 && (
        <div className="flex items-center gap-2 flex-wrap pt-4">
          <Tag className="w-4 h-4 text-woodlands-cream/60" />
          {post.tags.map(tag => (
            <span 
              key={tag}
              className="px-2 py-1 text-xs rounded-full bg-woodlands-purple/30 text-woodlands-cream/80"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </>
  );
};

export default BlogPostContent;
