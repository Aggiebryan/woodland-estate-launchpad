
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BlogPost } from '@/types/blog';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { fetchWordPressCategories } from '@/services/wordpressApi';
import { Loader2 } from 'lucide-react';

interface BlogSidebarProps {
  recentPosts: BlogPost[];
}

interface Category {
  id: number;
  name: string;
  slug: string;
  count?: number;
}

const BlogSidebar = ({ recentPosts }: BlogSidebarProps) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const fetchedCategories = await fetchWordPressCategories();
        // Filter out categories with no posts and sort by post count
        const filteredCategories = fetchedCategories
          .filter((cat: any) => cat.count > 0)
          .sort((a: any, b: any) => b.count - a.count);
        
        setCategories(filteredCategories);
      } catch (error) {
        console.error('Error loading categories:', error);
      } finally {
        setLoadingCategories(false);
      }
    };

    loadCategories();
  }, []);

  const handleCategoryClick = (categoryId: number) => {
    navigate(`/blog?category=${categoryId}`);
  };

  return (
    <div className="space-y-8">
      {/* Recent Posts Section */}
      <Card className="bg-woodlands-darkpurple/30 border-woodlands-gold/20">
        <CardHeader>
          <CardTitle className="text-woodlands-gold">Recent Posts</CardTitle>
        </CardHeader>
        <CardContent>
          {recentPosts.length > 0 ? (
            <ul className="space-y-4">
              {recentPosts.map((post) => (
                <li key={post.id} className="flex items-start gap-3">
                  {post.featuredImage && (
                    <Link to={`/blog/${post.id}`} className="shrink-0">
                      <img 
                        src={post.featuredImage} 
                        alt={post.title}
                        className="w-16 h-16 rounded object-cover"
                      />
                    </Link>
                  )}
                  <div className="flex-1 min-w-0">
                    <Link 
                      to={`/blog/${post.id}`} 
                      className="block hover:bg-woodlands-purple/20 p-2 rounded transition-colors"
                    >
                      <h3 
                        className="text-woodlands-cream/90 hover:text-woodlands-gold transition-colors text-sm line-clamp-2"
                        dangerouslySetInnerHTML={{ __html: post.title }}
                      ></h3>
                      <p className="text-xs text-woodlands-cream/60">
                        {new Date(post.date).toLocaleDateString()}
                      </p>
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-woodlands-cream/70">No recent posts available</p>
          )}
        </CardContent>
      </Card>

      {/* Categories Section */}
      <Card className="bg-woodlands-darkpurple/30 border-woodlands-gold/20">
        <CardHeader>
          <CardTitle className="text-woodlands-gold">Categories</CardTitle>
        </CardHeader>
        <CardContent>
          {loadingCategories ? (
            <div className="flex justify-center py-4">
              <Loader2 className="w-5 h-5 text-woodlands-gold animate-spin" />
            </div>
          ) : categories.length > 0 ? (
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.id}>
                  <button
                    onClick={() => handleCategoryClick(category.id)}
                    className="flex justify-between items-center w-full px-3 py-2 rounded text-left text-woodlands-cream/90 hover:bg-woodlands-purple/20 hover:text-woodlands-gold transition-colors"
                  >
                    <span>{category.name}</span>
                    {category.count && (
                      <span className="text-xs bg-woodlands-purple/40 px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-woodlands-cream/70">No categories available</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogSidebar;
