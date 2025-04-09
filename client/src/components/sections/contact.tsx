import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import { Form, FormItem, FormLabel, FormControl, FormMessage, FormField } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { MaterialIcon } from '@/components/ui/icons';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' })
});

type ContactFormValues = z.infer<typeof formSchema>;

const Contact: React.FC = () => {
  const { toast } = useToast();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    }
  });

  const mutation = useMutation({
    mutationFn: (data: ContactFormValues) => 
      apiRequest('POST', '/api/contact', data),
    onSuccess: () => {
      toast({
        title: 'Message sent!',
        description: 'We will get back to you as soon as possible.',
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: 'Error',
        description: 'There was an error sending your message. Please try again.',
        variant: 'destructive',
      });
    }
  });

  const onSubmit = (data: ContactFormValues) => {
    mutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: 'location_on',
      title: 'Address',
      content: 'Al Hamra Tower, Kuwait City, Kuwait'
    },
    {
      icon: 'phone',
      title: 'Phone',
      content: '+965 2200 0000'
    },
    {
      icon: 'email',
      title: 'Email',
      content: 'info@bickuwait.com'
    },
    {
      icon: 'schedule',
      title: 'Business Hours',
      content: 'Sunday - Thursday: 8:00 AM - 5:00 PM'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Reach out to our team to discuss your technology needs and discover how we can help your business grow.</p>
        </div>
        
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-900 font-semibold">Full Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="John Doe" 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" 
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
                        <FormLabel className="text-gray-900 font-semibold">Email Address</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="john.doe@example.com" 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" 
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
                        <FormLabel className="text-gray-900 font-semibold">Phone Number</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="+965 xxxx xxxx" 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-900 font-semibold">Company Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Company LLC" 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-900 font-semibold">Your Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your project or inquiry..." 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" 
                            rows={5}
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-lg transition"
                    disabled={mutation.isPending}
                  >
                    {mutation.isPending ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
          
          <div className="lg:w-1/2 lg:pl-12">
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <MaterialIcon icon={info.icon} className="text-primary mr-4" />
                    <div>
                      <h4 className="font-bold text-gray-900">{info.title}</h4>
                      <p className="text-gray-600">{info.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Location</h3>
              <div className="h-80 bg-gray-100 rounded-lg flex items-center justify-center">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3471.795798243364!2d47.977972!3d29.375883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf851dfb11c357%3A0xfa91bf8bb2f5175c!2sAl%20Hamra%20Tower%2C%20Kuwait%20City%2C%20Kuwait!5e0!3m2!1sen!2sus!4v1696347153050!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  className="rounded-lg border-0"
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="BIC Kuwait Location"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
