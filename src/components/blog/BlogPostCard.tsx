
import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '@/types/blog';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Image } from 'lucide-react';

interface BlogPostCardProps {
  post: BlogPost;
  onCategoryClick: (categoryId: number) => void;
}

const BlogPostCard = ({ post, onCategoryClick }: BlogPostCardProps) => {
  return (
    <Card className="backdrop-blur-sm bg-woodlands-darkpurple/30 border-woodlands-gold/20 hover:border-woodlands-gold/40 transition-colors">
      <CardHeader className="flex flex-col md:flex-row gap-4">
        {post.featuredImage ? (
          <Link 
            to={`/blog/${post.id}`}
            className="md:w-1/3 shrink-0"
          >
            <img 
              src={post.featuredImage} 
              alt={post.title}
              className="w-full h-48 md:h-32 object-cover rounded-md"
            />
          </Link>
        ) : (
          <div className="md:w-1/3 h-32 bg-woodlands-purple/20 rounded-md flex items-center justify-center">
            <Image className="w-8 h-8 text-woodlands-cream/40" />
          </div>
        )}
        <div className="md:w-2/3 flex flex-col">
          <CardTitle>
            <Link 
              to={`/blog/${post.id}`}
              className="text-woodlands-gold hover:text-woodlands-lightgold transition-colors"
              dangerouslySetInnerHTML={{ __html: post.title }}
            ></Link>
          </CardTitle>
          <div className="text-sm text-woodlands-cream/60 mt-2">
            <span>Written by: {post.author}</span> • <span>{new Date(post.date).toLocaleDateString()}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div 
          className="text-woodlands-cream/90 mb-4 line-clamp-5 text-base"
          dangerouslySetInnerHTML={{ __html: post.excerpt }}
          style={{ minHeight: 'auto', maxHeight: '130px' }}
        ></div>
        <div className="mt-4 flex flex-wrap gap-2">
          {post.categories?.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryClick(category.id)}
              className="px-2 py-1 text-xs bg-woodlands-gold text-white hover:bg-woodlands-lightgold transition-colors"
            >
              {category.name}
            </button>
          ))}
          {post.tags?.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs rounded-full bg-woodlands-purple/30 text-woodlands-cream/80"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogPostCard;
