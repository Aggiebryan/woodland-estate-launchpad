
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import BlogSidebar from '@/components/blog/BlogSidebar';
import BlogSearch from '@/components/blog/BlogSearch';
import BlogPostList from '@/components/blog/BlogPostList';
import BlogPagination from '@/components/blog/BlogPagination';
import { blogPosts } from '@/data/blogPosts'; // Keep for fallback
import { fetchWordPressPosts } from '@/services/wordpressApi';
import { BlogPost } from '@/types/blog';
import { useToast } from '@/hooks/use-toast';

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
  
  const handleCategoryClick = (categoryId: number) => {
    setSearchTerm('');
    setSearchParams({ category: categoryId.toString() });
    setCurrentPage(1);
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
              
              <BlogPostList 
                posts={posts}
                loading={loading}
                error={error}
                onCategoryClick={handleCategoryClick}
              />
              
              <BlogPagination 
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
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
