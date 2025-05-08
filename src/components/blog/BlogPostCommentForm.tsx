
import React, { useState } from 'react';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

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

const BlogPostCommentForm = () => {
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

  return (
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
  );
};

export default BlogPostCommentForm;
