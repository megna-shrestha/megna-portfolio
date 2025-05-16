import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentJob, setCurrentJob] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  
  const jobs = [
    "UI/UX Designer",
    "Graphic Designer",
    "Product Designer"
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      if (currentCharIndex < jobs[currentJob].length) {
        setCurrentCharIndex((prev) => prev + 1);
      } else {
        setCurrentCharIndex(0);
        setCurrentJob((prev) => (prev + 1) % jobs.length);
      }
    }, 200); // Adjust speed as needed
    return () => clearInterval(interval);
  }, [currentJob, currentCharIndex, jobs.length]);

  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center pt-16"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col items-start max-w-3xl">
          <div 
            className={`opacity-0 ${
              isVisible ? "animate-fade-in" : ""
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            <span className="text-dark-muted">Hello, I'm</span>
          </div>
          
          <h1 
            className={`text-4xl md:text-6xl lg:text-7xl font-bold mt-2 opacity-0 ${
              isVisible ? "animate-fade-in" : ""
            }`}
            style={{ animationDelay: "0.4s" }}
          >
            <span className="gradient-text">Megna</span> Shrestha
          </h1>
          
          <div 
            className={`mt-4 min-h-[40px] opacity-0 ${
              isVisible ? "animate-fade-in" : ""
            }`}
            style={{ animationDelay: "0.6s" }}
          >
            <div className="text-xl md:text-2xl font-medium text-dark-accent2 flex items-center">
              <span className="mr-2">I am a</span>
              <span className="relative overflow-hidden inline-block">
                {jobs[currentJob].substring(0, currentCharIndex)}
                <span className="typed-cursor"></span>
              </span>
            </div>
          </div>
          
          <p 
            className={`text-dark-muted mt-6 text-lg max-w-2xl opacity-0 ${
              isVisible ? "animate-fade-in" : ""
            }`}
            style={{ animationDelay: "0.8s" }}
          >
            Creative and detail-oriented UI/UX Designer with over 3 years of experience in web and mobile design,
            branding, and graphic design. Skilled in wireframing, prototyping, and user-centric design
            practices using tools like Figma and Adobe Creative Suite. Proficient in HTML, CSS, and JavaScript.
          </p>
          
          <div 
            className={`mt-8 flex flex-wrap gap-4 opacity-0 ${
              isVisible ? "animate-fade-in" : ""
            }`}
            style={{ animationDelay: "1s" }}
          >
            <Button 
              size="lg" 
              className="bg-dark-accent1 hover:bg-dark-accent1/90"
              onClick={() => document.getElementById('projects')?.scrollIntoView({behavior: 'smooth'})}
            >
              View Projects
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-dark-accent2 text-dark-accent2 hover:bg-dark-accent2/10"
              onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
            >
              Contact Me
            </Button>
          </div>
        </div>
        <div className="mt-8 md:mt-0 md:ml-8">
          <img src="/assets/hero.png" alt="Hero" className="rounded-lg shadow-lg w-80 h-100 object-cover" />
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-0 animate-fade-in" style={{ animationDelay: "1.5s" }}>
        <span className="text-dark-muted text-sm mb-2">Scroll Down</span>
        <div className="w-0.5 h-8 bg-dark-muted/30 relative">
          <div className="absolute w-0.5 h-2 bg-dark-accent1 top-0 animate-[bounce_2s_infinite]"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
