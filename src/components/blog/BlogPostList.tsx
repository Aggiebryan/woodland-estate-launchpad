
import React from 'react';
import { BlogPost } from '@/types/blog';
import BlogPostCard from './BlogPostCard';
import { Card, CardContent } from "@/components/ui/card";
import { Loader2 } from 'lucide-react';

interface BlogPostListProps {
  posts: BlogPost[];
  loading: boolean;
  error: string | null;
  onCategoryClick: (categoryId: number) => void;
}

const BlogPostList = ({ posts, loading, error, onCategoryClick }: BlogPostListProps) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="w-8 h-8 text-woodlands-gold animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <Card className="bg-woodlands-darkpurple/30 border-red-500/30">
        <CardContent className="pt-6">
          <p className="text-woodlands-cream/90">{error}</p>
        </CardContent>
      </Card>
    );
  }

  if (posts.length === 0) {
    return (
      <Card className="backdrop-blur-sm bg-woodlands-darkpurple/30 border-woodlands-gold/20">
        <CardContent className="pt-6">
          <p className="text-woodlands-cream/90">No posts found matching your search criteria.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <BlogPostCard 
          key={post.id} 
          post={post} 
          onCategoryClick={onCategoryClick}
        />
      ))}
    </div>
  );
};

export default BlogPostList;
