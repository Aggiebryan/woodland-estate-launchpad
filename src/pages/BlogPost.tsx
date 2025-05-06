
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { fetchWordPressPostById } from '@/services/wordpressApi';
import { BlogPost as BlogPostType } from '@/types/blog';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent } from "@/components/ui/card";
import { Loader2, ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts'; // Fallback data

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const loadPost = async () => {
      if (!slug) return;
      
      setLoading(true);
      try {
        // First try to fetch from WordPress
        const fetchedPost = await fetchWordPressPostById(slug);
        
        if (fetchedPost) {
          setPost(fetchedPost);
          setError(null);
        } else {
          // If not found in WordPress, try fallback data
          const fallbackPost = blogPosts.find(p => p.id === slug);
          if (fallbackPost) {
            setPost(fallbackPost);
            setError('This post was loaded from cached data.');
            toast({
              title: "Notice",
              description: "This post was loaded from cached data instead of WordPress.",
              variant: "default",
            });
          } else {
            setError('Post not found.');
            toast({
              title: "Error",
              description: "The requested post could not be found.",
              variant: "destructive",
            });
          }
        }
      } catch (err) {
        console.error('Failed to fetch post:', err);
        
        // Try fallback
        const fallbackPost = blogPosts.find(p => p.id === slug);
        if (fallbackPost) {
          setPost(fallbackPost);
          setError('Failed to load from WordPress. Showing cached post instead.');
          toast({
            title: "Connection Error",
            description: "Could not load from WordPress. Showing cached post instead.",
            variant: "destructive",
          });
        } else {
          setError('Post not found.');
        }
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [slug, toast]);

  return (
    <MainLayout>
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-woodlands-gold hover:text-woodlands-lightgold mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <Loader2 className="w-8 h-8 text-woodlands-gold animate-spin" />
            </div>
          ) : error && !post ? (
            <Card className="bg-woodlands-darkpurple/30 border-red-500/30">
              <CardContent className="pt-6">
                <p className="text-woodlands-cream/90">{error}</p>
              </CardContent>
            </Card>
          ) : post ? (
            <div className="space-y-6">
              {error && (
                <Card className="bg-woodlands-darkpurple/30 border-yellow-500/30">
                  <CardContent className="pt-6">
                    <p className="text-woodlands-cream/90">{error}</p>
                  </CardContent>
                </Card>
              )}
              
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
            </div>
          ) : (
            <Card className="bg-woodlands-darkpurple/30 border-red-500/30">
              <CardContent className="pt-6">
                <p className="text-woodlands-cream/90">Post not found</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default BlogPost;
