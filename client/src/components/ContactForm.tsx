import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
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
import { Send, CheckCircle } from "lucide-react";
import { useState } from "react";

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(data: ContactFormData) {
    const subject = encodeURIComponent(`New Inquiry from ${data.name}`);
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone || "Not provided"}\n\nMessage:\n${data.message}`
    );
    window.location.href = `mailto:Todd.Greenbaum@appleinsurance.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    form.reset();
    setTimeout(() => setSubmitted(false), 5000);
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-8 border border-slate-100 flex flex-col items-center justify-center min-h-[400px] text-center" data-testid="form-success">
        <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
        <h3 className="text-2xl font-heading font-bold text-slate-900 mb-2">Opening Your Email</h3>
        <p className="text-slate-600">Your email app should open with the message pre-filled. Just hit send!</p>
        <p className="text-slate-500 text-sm mt-4">If your email didn't open, you can reach me directly at<br /><a href="mailto:Todd.Greenbaum@appleinsurance.com" className="text-secondary font-medium hover:underline">Todd.Greenbaum@appleinsurance.com</a></p>
      </div>
    );
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
                    data-testid="input-name"
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
                      data-testid="input-email"
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
                      data-testid="input-phone"
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
                    data-testid="input-message"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            className="w-full h-12 rounded-xl bg-secondary hover:bg-secondary/90 text-white font-semibold text-lg shadow-lg shadow-secondary/25 transition-all hover:-translate-y-0.5"
            data-testid="button-submit"
          >
            Send Message
            <Send className="ml-2 h-5 w-5" />
          </Button>
        </form>
      </Form>
    </div>
  );
}
