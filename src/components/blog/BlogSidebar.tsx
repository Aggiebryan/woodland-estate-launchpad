
import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '@/types/blog';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface BlogSidebarProps {
  recentPosts: BlogPost[];
}

const BlogSidebar = ({ recentPosts }: BlogSidebarProps) => {
  return (
    <Card className="bg-woodlands-darkpurple/30 border-woodlands-gold/20">
      <CardHeader>
        <CardTitle className="text-woodlands-gold">Recent Posts</CardTitle>
      </CardHeader>
      <CardContent>
        {recentPosts.length > 0 ? (
          <ul className="space-y-4">
            {recentPosts.map((post) => (
              <li key={post.id}>
                <Link 
                  to={`/blog/${post.id}`} 
                  className="block hover:bg-woodlands-purple/20 p-2 rounded transition-colors"
                >
                  <h3 
                    className="text-woodlands-cream/90 hover:text-woodlands-gold transition-colors"
                    dangerouslySetInnerHTML={{ __html: post.title }}
                  ></h3>
                  <p className="text-sm text-woodlands-cream/60">
                    {new Date(post.date).toLocaleDateString()}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-woodlands-cream/70">No recent posts available</p>
        )}
      </CardContent>
    </Card>
  );
};

export default BlogSidebar;
