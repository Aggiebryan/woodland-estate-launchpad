
import React from 'react';
import { BlogPost } from '@/types/blog';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface BlogPostAuthorProps {
  post: BlogPost;
}

const BlogPostAuthor = ({ post }: BlogPostAuthorProps) => {
  return (
    <Card className="bg-woodlands-darkpurple/50 border-woodlands-gold/20">
      <CardContent className="pt-6">
        <div className="flex items-start gap-4">
          <Avatar className="h-16 w-16 border-2 border-woodlands-gold/30">
            <AvatarImage src="/placeholder.svg" alt={post.author} />
            <AvatarFallback className="bg-woodlands-purple text-woodlands-cream">
              {post.author.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-lg font-serif text-woodlands-gold mb-2">{post.author}</h3>
            <p className="text-woodlands-cream/80 text-sm">
              Attorney at The Woodlands Law Firm specializing in estate planning and probate matters. 
              Dedicated to helping clients protect their assets and secure their family's future.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogPostAuthor;
