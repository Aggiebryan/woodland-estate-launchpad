
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { fetchWordPressPostById, fetchWordPressPosts } from '@/services/wordpressApi';
import { BlogPost as BlogPostType } from '@/types/blog';
import { useToast } from '@/hooks/use-toast';
import { Loader2, ArrowLeft } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts'; // Fallback data
import BlogSidebar from '@/components/blog/BlogSidebar';
import BlogPostHero from '@/components/blog/BlogPostHero';
import BlogPostContent from '@/components/blog/BlogPostContent';
import BlogPostAuthor from '@/components/blog/BlogPostAuthor';
import BlogPostCommentForm from '@/components/blog/BlogPostCommentForm';
import BlogPostShare from '@/components/blog/BlogPostShare';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [recentPosts, setRecentPosts] = useState<BlogPostType[]>([]);
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

    // Load recent posts for the sidebar
    const loadRecentPosts = async () => {
      try {
        // Try to fetch recent posts from WordPress
        const result = await fetchWordPressPosts(1, 5);
        if (result.posts.length > 0) {
          setRecentPosts(result.posts);
        } else {
          // Use fallback data if WordPress API fails
          setRecentPosts(blogPosts.slice(0, 5));
        }
      } catch (err) {
        console.error('Failed to fetch recent posts:', err);
        // Fallback to static data
        setRecentPosts(blogPosts.slice(0, 5));
      }
    };

    loadPost();
    loadRecentPosts();
  }, [slug, toast]);

  return (
    <MainLayout>
      {post && <BlogPostHero post={post} />}

      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-woodlands-gold hover:text-woodlands-lightgold mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content - Takes up 2/3 of the width on large screens */}
            <div className="lg:col-span-2">
              {loading ? (
                <div className="flex justify-center items-center h-64">
                  <Loader2 className="w-8 h-8 text-woodlands-gold animate-spin" />
                </div>
              ) : error && !post ? (
                <div className="bg-woodlands-darkpurple/30 border border-red-500/30 p-4 rounded-lg">
                  <p className="text-woodlands-cream/90">{error}</p>
                </div>
              ) : post ? (
                <div className="space-y-6">
                  {error && (
                    <div className="bg-woodlands-darkpurple/30 border border-yellow-500/30 p-4 rounded-lg">
                      <p className="text-woodlands-cream/90">{error}</p>
                    </div>
                  )}
                  
                  <BlogPostContent post={post} />
                  <BlogPostShare post={post} />
                  <BlogPostAuthor post={post} />
                  <BlogPostCommentForm />
                </div>
              ) : (
                <div className="bg-woodlands-darkpurple/30 border border-red-500/30 p-4 rounded-lg">
                  <p className="text-woodlands-cream/90">Post not found</p>
                </div>
              )}
            </div>

            {/* Sidebar - Takes up 1/3 of the width on large screens */}
            <div className="lg:col-span-1">
              <BlogSidebar recentPosts={recentPosts} />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default BlogPost;
