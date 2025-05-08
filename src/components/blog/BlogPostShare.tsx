
import React from 'react';
import { BlogPost } from '@/types/blog';
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Linkedin, Mail } from 'lucide-react';

interface BlogPostShareProps {
  post: BlogPost;
}

const BlogPostShare = ({ post }: BlogPostShareProps) => {
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
  );
};

export default BlogPostShare;
