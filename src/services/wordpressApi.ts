
import { BlogPost } from '@/types/blog';

const WP_API_URL = 'https://woodlandslaw.info/wp/wp-json/wp/v2';

// Transform WordPress post to our BlogPost format
const transformWordPressPost = (wpPost: any): BlogPost => {
  return {
    id: wpPost.slug,
    title: wpPost.title.rendered,
    excerpt: wpPost.excerpt.rendered.replace(/<\/?[^>]+(>|$)/g, "").substring(0, 150) + "...",
    content: wpPost.content.rendered,
    date: wpPost.date,
    author: wpPost._embedded?.author?.[0]?.name || "The Woodlands Law Firm",
    tags: wpPost._embedded?.['wp:term']?.[1]?.map((tag: any) => tag.name) || []
  };
};

export const fetchWordPressPosts = async (page = 1, perPage = 10, searchTerm = ''): Promise<{posts: BlogPost[], totalPages: number}> => {
  try {
    const searchQuery = searchTerm ? `&search=${encodeURIComponent(searchTerm)}` : '';
    const response = await fetch(`${WP_API_URL}/posts?page=${page}&per_page=${perPage}${searchQuery}&_embed`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    
    const totalPages = parseInt(response.headers.get('X-WP-TotalPages') || '1', 10);
    const wpPosts = await response.json();
    const posts = wpPosts.map(transformWordPressPost);
    
    return { posts, totalPages };
  } catch (error) {
    console.error('Error fetching WordPress posts:', error);
    return { posts: [], totalPages: 0 };
  }
};

export const fetchWordPressPostById = async (slug: string): Promise<BlogPost | null> => {
  try {
    const response = await fetch(`${WP_API_URL}/posts?slug=${slug}&_embed`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch post');
    }
    
    const wpPosts = await response.json();
    
    if (wpPosts.length === 0) {
      return null;
    }
    
    return transformWordPressPost(wpPosts[0]);
  } catch (error) {
    console.error('Error fetching WordPress post:', error);
    return null;
  }
};

export const fetchWordPressCategories = async () => {
  try {
    const response = await fetch(`${WP_API_URL}/categories`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch categories');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching WordPress categories:', error);
    return [];
  }
};
