import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Download, User } from "lucide-react";

const About = () => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("about");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute -inset-1/2 bg-gradient-radial from-dark-accent1/10 to-transparent blur-3xl opacity-30 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image section */}
          <div
            className={cn(
              "w-full lg:w-5/12 opacity-0",
              isInView && "animate-fade-in"
            )}
          >
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto rounded-2xl overflow-hidden neon-border">
                <div className="w-full h-full bg-dark-card flex items-center justify-center">
                  <User size={120} className="text-dark-muted" />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-dark-accent2/20 rounded-full blur-xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-dark-accent1/20 rounded-full blur-xl"></div>
            </div>
          </div>

          {/* Content section */}
          <div className="w-full lg:w-7/12">
            <h2
              className={cn(
                "text-3xl md:text-4xl font-bold mb-6 opacity-0",
                isInView && "animate-fade-in"
              )}
              style={{ animationDelay: "0.2s" }}
            >
              About <span className="gradient-text">Me</span>
            </h2>

            <p
              className={cn(
                "text-dark-muted mb-4 opacity-0",
                isInView && "animate-fade-in"
              )}
              style={{ animationDelay: "0.3s" }}
            >
              I'm Megna Shrestha, a creative and detail-oriented UI/UX Designer with over 3 years of experience in web and mobile design, branding. I am skilled in wireframing, prototyping, and user-centric design practices using tools like Figma and Adobe Creative Suite.
            </p>

            <p
              className={cn(
                "text-dark-muted mb-6 opacity-0",
                isInView && "animate-fade-in"
              )}
              style={{ animationDelay: "0.4s" }}
            >
              I graduated from Deerwalk Institute of Technology with a Bachelor's degree in Science of Computer Science and Information Technology. Currently, I'm working as a UI/UX Designer at Whovian Soft Pvt. Ltd in Kathmandu, Nepal. 
            </p>

            <div
              className={cn(
                "grid grid-cols-2 gap-4 mb-8 opacity-0",
                isInView && "animate-fade-in"
              )}
              style={{ animationDelay: "0.5s" }}
            >
              <div>
                <h3 className="text-xl font-semibold text-dark-accent1 mb-3">
                  My Skills
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="inline-block w-1.5 h-1.5 bg-dark-accent1 rounded-full mr-2"></span>
                    UI/UX Design
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block w-1.5 h-1.5 bg-dark-accent1 rounded-full mr-2"></span>
                   Grapgic Design
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block w-1.5 h-1.5 bg-dark-accent1 rounded-full mr-2"></span>
                    Branding
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-dark-accent2 mb-3">
                  Tools I Use
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="inline-block w-1.5 h-1.5 bg-dark-accent2 rounded-full mr-2"></span>
                    Figma
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block w-1.5 h-1.5 bg-dark-accent2 rounded-full mr-2"></span>
                    Adobe Illustrator, Photoshop, After Effects
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block w-1.5 h-1.5 bg-dark-accent2 rounded-full mr-2"></span>
                    HTML, CSS, JavaScript, React
                  </li>
                </ul>
              </div>
            </div>

            <Button
              className={cn(
                "bg-dark-accent1 hover:bg-dark-accent1/90 opacity-0",
                isInView && "animate-fade-in"
              )}
              style={{ animationDelay: "0.6s" }}
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/assets/resume.pdf'; // Make sure to add your resume file in public/assets folder
                link.download = 'Megna_Shrestha_Resume.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              <Download size={16} className="mr-2" /> Download CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
