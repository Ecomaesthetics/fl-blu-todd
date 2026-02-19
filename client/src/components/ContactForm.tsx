import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema } from "@shared/schema";
import { useCreateInquiry } from "@/hooks/use-inquiries";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2, Send } from "lucide-react";
import type { InsertInquiry } from "@shared/schema";

export function ContactForm() {
  const { mutate, isPending } = useCreateInquiry();
  
  const form = useForm<InsertInquiry>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(data: InsertInquiry) {
    mutate(data, {
      onSuccess: () => {
        form.reset();
      },
    });
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-8 border border-slate-100">
      <div className="mb-6">
        <h3 className="text-2xl font-heading font-bold text-slate-900 mb-2">
          Get in Touch
        </h3>
        <p className="text-slate-600 text-sm">
          Fill out the form below and I'll get back to you as soon as possible.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-700 font-semibold">Name</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="John Doe" 
                    className="h-12 rounded-xl border-slate-200 focus:border-secondary focus:ring-secondary/20 bg-slate-50/50" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-700 font-semibold">Email</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="john@example.com" 
                      className="h-12 rounded-xl border-slate-200 focus:border-secondary focus:ring-secondary/20 bg-slate-50/50" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-700 font-semibold">Phone (Optional)</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="(555) 123-4567" 
                      className="h-12 rounded-xl border-slate-200 focus:border-secondary focus:ring-secondary/20 bg-slate-50/50" 
                      {...field} 
                      value={field.value || ''}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-700 font-semibold">Message</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="How can I help you today?" 
                    className="min-h-[120px] rounded-xl border-slate-200 focus:border-secondary focus:ring-secondary/20 bg-slate-50/50 resize-none" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            disabled={isPending}
            className="w-full h-12 rounded-xl bg-secondary hover:bg-secondary/90 text-white font-semibold text-lg shadow-lg shadow-secondary/25 transition-all hover:-translate-y-0.5"
          >
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
