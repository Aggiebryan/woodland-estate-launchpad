
import React from 'react';
import { Search } from 'lucide-react';
import { Input } from "@/components/ui/input";

interface BlogSearchProps {
  searchTerm: string;
  onSearch: (term: string) => void;
}

const BlogSearch = ({ searchTerm, onSearch }: BlogSearchProps) => {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-woodlands-cream/50 h-4 w-4" />
      <Input
        type="text"
        placeholder="Search posts..."
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
        className="pl-10 bg-woodlands-darkpurple/30 border-woodlands-gold/20 text-woodlands-cream placeholder:text-woodlands-cream/50"
      />
    </div>
  );
};

export default BlogSearch;
