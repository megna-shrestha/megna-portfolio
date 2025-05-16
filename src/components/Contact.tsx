import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

// Initialize EmailJS
emailjs.init("leX70T9QvMJg8JczS");

const ContactItem = ({ icon, title, content, delay }) => {
  return (
    <div 
      className="opacity-0 animate-fade-in flex items-start gap-4"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="p-3 rounded-lg bg-dark-accent1/10 text-dark-accent1">
        {icon}
      </div>
      <div>
        <h4 className="font-medium text-dark-text">{title}</h4>
        <p className="text-dark-muted">{content}</p>
      </div>
    </div>
  );
};

const Contact = () => {
  const [isInView, setIsInView] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const result = await emailjs.send(
        'service_clgv5e4',
        'template_oinfz2v', // Removed the extra space
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Megna',
          reply_to: formData.email,
        }
      );

      if (result.text === 'OK') {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("contact");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="contact" className="py-20 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-dark-accent2/10 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-dark-accent1/10 rounded-full blur-3xl opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h2
            className={cn(
              "text-3xl md:text-4xl font-bold mb-4 opacity-0",
              isInView && "animate-fade-in"
            )}
          >
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p
            className={cn(
              "text-dark-muted max-w-2xl mx-auto opacity-0",
              isInView && "animate-fade-in"
            )}
            style={{ animationDelay: "0.2s" }}
          >
            Have a project in mind or want to discuss opportunities? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact information column */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              <ContactItem
                icon={<Mail size={24} />}
                title="Email"
                content="megna.sth1@gmail.com"
                delay={0.3}
              />
              <ContactItem
                icon={<Phone size={24} />}
                title="Phone"
                content="977 – 9841410352"
                delay={0.4}
              />
              <ContactItem
                icon={<MapPin size={24} />}
                title="Location"
                content="Kathmandu, Nepal"
                delay={0.5}
              />
            </div>

            <div 
              className="mt-8 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              <h3 className="text-xl font-bold mb-4">Let's Connect</h3>
              <div className="flex gap-4">
                <a href="https://linkedin.com/in/megna-shrestha-411969189" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-dark-accent1/10 text-dark-accent1 hover:bg-dark-accent1/20 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="https://github.com/megna-shrestha" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-dark-accent1/10 text-dark-accent1 hover:bg-dark-accent1/20 transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://dribbble.com/megna-1" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-dark-accent1/10 text-dark-accent1 hover:bg-dark-accent1/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>
                  </svg>
                </a>
                <a href="https://www.behance.net/megnashrestha1" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-dark-accent1/10 text-dark-accent1 hover:bg-dark-accent1/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 8h6m-6 4h10m-6 4h4"></path>
                    <rect width="8" height="8" x="2" y="8" rx="1"></rect>
                    <path d="M18 3v14a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1Z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact form column */}
          <div
            className={cn(
              "lg:col-span-3 opacity-0",
              isInView && "animate-fade-in"
            )}
            style={{ animationDelay: "0.7s" }}
          >
            <form onSubmit={handleSubmit} className="space-y-4 p-6 bg-dark-card rounded-xl glass">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm text-dark-muted">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-dark-background border-dark-muted/30 focus:border-dark-accent1"
                    placeholder="First Last"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm text-dark-muted">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-dark-background border-dark-muted/30 focus:border-dark-accent1"
                    placeholder="name@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm text-dark-muted">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-dark-background border-dark-muted/30 focus:border-dark-accent1"
                  placeholder="Project Inquiry"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm text-dark-muted">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-dark-background border-dark-muted/30 focus:border-dark-accent1 min-h-[120px]"
                  placeholder="Tell me about your project..."
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-dark-accent2 hover:bg-dark-accent2/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
