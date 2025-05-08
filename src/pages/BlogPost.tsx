
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { fetchWordPressPostById } from '@/services/wordpressApi';
import { BlogPost as BlogPostType } from '@/types/blog';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2, ArrowLeft, Calendar, User, Tag, Facebook, Twitter, Linkedin, Mail } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts'; // Fallback data
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const commentSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  comment: z.string().min(1, {
    message: "Comment cannot be empty.",
  }),
});

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [submittingComment, setSubmittingComment] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof commentSchema>>({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      name: "",
      email: "",
      comment: "",
    },
  });

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

  const onSubmitComment = async (values: z.infer<typeof commentSchema>) => {
    setSubmittingComment(true);
    
    try {
      // In a real app, this would send the comment to the server
      console.log("Comment submitted:", values);
      
      // Show success message
      toast({
        title: "Comment Submitted",
        description: "Your comment has been submitted for review.",
        variant: "default",
      });
      
      // Reset the form
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit your comment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setSubmittingComment(false);
    }
  };

  const handleShare = (platform: string) => {
    if (!post) return;
    
    const title = post.title.replace(/<[^>]*>?/gm, '');
    const url = window.location.href;
    
    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`, '_blank');
        break;
      case 'email':
        window.open(`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`, '_blank');
        break;
      default:
        break;
    }
  };

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

              {/* Share Section */}
              <div className="pt-8 pb-4 border-t border-woodlands-gold/20">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-woodlands-cream/80 font-serif">Share this:</span>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="bg-[#4267B2]/10 hover:bg-[#4267B2]/20 border-[#4267B2]/30 text-woodlands-cream"
                    onClick={() => handleShare('facebook')}
                  >
                    <Facebook size={16} className="mr-2" /> Facebook
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="bg-[#1DA1F2]/10 hover:bg-[#1DA1F2]/20 border-[#1DA1F2]/30 text-woodlands-cream"
                    onClick={() => handleShare('twitter')}
                  >
                    <Twitter size={16} className="mr-2" /> Twitter
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="bg-[#0A66C2]/10 hover:bg-[#0A66C2]/20 border-[#0A66C2]/30 text-woodlands-cream"
                    onClick={() => handleShare('linkedin')}
                  >
                    <Linkedin size={16} className="mr-2" /> LinkedIn
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="bg-woodlands-gold/10 hover:bg-woodlands-gold/20 border-woodlands-gold/30 text-woodlands-cream"
                    onClick={() => handleShare('email')}
                  >
                    <Mail size={16} className="mr-2" /> Email
                  </Button>
                </div>
              </div>

              {/* Author Section */}
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

              {/* Comments Section */}
              <div className="pt-8 border-t border-woodlands-gold/20">
                <h2 className="text-2xl font-serif text-woodlands-gold mb-6">Leave a Reply</h2>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmitComment)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-woodlands-cream">Name*</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Your name" 
                                className="bg-woodlands-darkpurple/30 border-woodlands-gold/20 text-woodlands-cream" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-woodlands-cream">Email*</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="your.email@example.com" 
                                className="bg-woodlands-darkpurple/30 border-woodlands-gold/20 text-woodlands-cream" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="comment"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-woodlands-cream">Comment*</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Share your thoughts..." 
                              className="bg-woodlands-darkpurple/30 border-woodlands-gold/20 text-woodlands-cream min-h-[150px]" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="bg-woodlands-gold hover:bg-woodlands-lightgold text-woodlands-darkpurple font-medium"
                      disabled={submittingComment}
                    >
                      {submittingComment && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                      Post Comment
                    </Button>
                  </form>
                </Form>
              </div>
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
