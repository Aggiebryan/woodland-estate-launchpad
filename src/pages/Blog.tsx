
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import BlogSidebar from '@/components/blog/BlogSidebar';
import BlogSearch from '@/components/blog/BlogSearch';
import { blogPosts } from '@/data/blogPosts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = useMemo(() => {
    const lowercaseSearch = searchTerm.toLowerCase();
    return blogPosts.filter(
      post =>
        post.title.toLowerCase().includes(lowercaseSearch) ||
        post.excerpt.toLowerCase().includes(lowercaseSearch) ||
        post.tags.some(tag => tag.toLowerCase().includes(lowercaseSearch))
    );
  }, [searchTerm]);

  const recentPosts = [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  return (
    <MainLayout>
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div className="mb-8">
                <h1 className="text-3xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-woodlands-gold via-woodlands-lightgold to-woodlands-gold mb-4">
                  Blog
                </h1>
                <BlogSearch searchTerm={searchTerm} onSearch={setSearchTerm} />
              </div>
              
              <div className="space-y-6">
                {filteredPosts.map((post) => (
                  <Card key={post.id} className="backdrop-blur-sm bg-woodlands-darkpurple/30 border-woodlands-gold/20 hover:border-woodlands-gold/40 transition-colors">
                    <CardHeader>
                      <CardTitle>
                        <Link 
                          to={`/blog/${post.id}`}
                          className="text-woodlands-gold hover:text-woodlands-lightgold transition-colors"
                        >
                          {post.title}
                        </Link>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-woodlands-cream/90 mb-4">{post.excerpt}</p>
                      <div className="flex justify-between items-center text-sm text-woodlands-cream/60">
                        <span>{post.author}</span>
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="mt-4 flex gap-2 flex-wrap">
                        {post.tags.map((tag) => (
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
                ))}
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <BlogSidebar recentPosts={recentPosts} />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Blog;
