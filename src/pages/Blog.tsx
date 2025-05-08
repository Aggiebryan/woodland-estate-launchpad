
import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import BlogSidebar from '@/components/blog/BlogSidebar';
import BlogSearch from '@/components/blog/BlogSearch';
import { blogPosts } from '@/data/blogPosts'; // Keep for fallback
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { fetchWordPressPosts } from '@/services/wordpressApi';
import { BlogPost } from '@/types/blog';
import { useToast } from '@/hooks/use-toast';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, PaginationEllipsis } from "@/components/ui/pagination";
import { Loader2, Image } from 'lucide-react';

const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(parseInt(searchParams.get('page') || '1', 10));
  const [totalPages, setTotalPages] = useState(1);
  const { toast } = useToast();
  const postsPerPage = 10;
  
  const categoryId = parseInt(searchParams.get('category') || '0', 10);

  useEffect(() => {
    // Update URL params when state changes
    const params = new URLSearchParams();
    if (searchTerm) params.set('search', searchTerm);
    if (currentPage > 1) params.set('page', currentPage.toString());
    if (categoryId > 0) params.set('category', categoryId.toString());
    setSearchParams(params);
    
    const loadPosts = async () => {
      setLoading(true);
      try {
        const { posts: fetchedPosts, totalPages } = await fetchWordPressPosts(
          currentPage,
          postsPerPage,
          searchTerm,
          categoryId
        );
        
        setPosts(fetchedPosts);
        setTotalPages(totalPages);
        setError(null);
      } catch (err) {
        console.error('Failed to fetch posts:', err);
        setPosts(blogPosts); // Fallback to static data
        setError('Failed to load posts from WordPress. Showing cached posts instead.');
        toast({
          title: "Connection Error",
          description: "Could not load posts from WordPress. Showing cached posts instead.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, [currentPage, searchTerm, categoryId, toast, setSearchParams]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setCurrentPage(1); // Reset to first page on new search
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo(0, 0); // Scroll to top on page change
  };

  // Get recent posts for sidebar
  const recentPosts = [...posts].slice(0, 5);

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
                <BlogSearch searchTerm={searchTerm} onSearch={handleSearch} />
              </div>
              
              {loading ? (
                <div className="flex justify-center items-center h-64">
                  <Loader2 className="w-8 h-8 text-woodlands-gold animate-spin" />
                </div>
              ) : error ? (
                <Card className="bg-woodlands-darkpurple/30 border-red-500/30">
                  <CardContent className="pt-6">
                    <p className="text-woodlands-cream/90">{error}</p>
                  </CardContent>
                </Card>
              ) : posts.length === 0 ? (
                <Card className="backdrop-blur-sm bg-woodlands-darkpurple/30 border-woodlands-gold/20">
                  <CardContent className="pt-6">
                    <p className="text-woodlands-cream/90">No posts found matching your search criteria.</p>
                  </CardContent>
                </Card>
              ) : (
                <div className="space-y-6">
                  {posts.map((post) => (
                    <Card key={post.id} className="backdrop-blur-sm bg-woodlands-darkpurple/30 border-woodlands-gold/20 hover:border-woodlands-gold/40 transition-colors">
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
                          className="text-woodlands-cream/90 mb-4 min-h-[7.5rem] line-clamp-5 text-base"
                          dangerouslySetInnerHTML={{ __html: post.excerpt }}
                        ></div>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {post.categories?.map((category) => (
                            <button
                              key={category.id}
                              onClick={() => {
                                setSearchTerm('');
                                setSearchParams({ category: category.id.toString() });
                              }}
                              className="px-2 py-1 text-xs rounded-full bg-woodlands-purple/40 text-woodlands-cream/90 hover:bg-woodlands-purple/60 transition-colors"
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
                  ))}
                </div>
              )}
              
              {/* Pagination */}
              {totalPages > 1 && (
                <Pagination className="mt-8">
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious 
                        onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                        className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                      />
                    </PaginationItem>
                    
                    {[...Array(totalPages)].map((_, i) => {
                      const page = i + 1;
                      // Show current page, first, last, and siblings
                      if (
                        page === 1 || 
                        page === totalPages ||
                        (page >= currentPage - 1 && page <= currentPage + 1)
                      ) {
                        return (
                          <PaginationItem key={page}>
                            <PaginationLink
                              isActive={page === currentPage}
                              onClick={() => handlePageChange(page)}
                            >
                              {page}
                            </PaginationLink>
                          </PaginationItem>
                        );
                      } else if (
                        (page === 2 && currentPage > 3) || 
                        (page === totalPages - 1 && currentPage < totalPages - 2)
                      ) {
                        return <PaginationItem key={page}><PaginationEllipsis /></PaginationItem>;
                      }
                      return null;
                    })}
                    
                    <PaginationItem>
                      <PaginationNext 
                        onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                        className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              )}
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
