
import { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const projects = [
  {
    id: 1,
    title: "RCA E-commerce Website Design",
    description: "Defined brand guidelines, color palette, typography, spacing system, icons, and responsive grid layout. Created complete website flow, wireframes and high-fidelity interactive prototypes using Figma.",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    link: "#"
  },
  {
    id: 2,
    title: "Dragon Pain Relief Website Revamp",
    description: "Revamped the existing web UI to enhance visual consistency and user experience. Redesigned shop and product pages to optimize customer funneling and improve SEO-friendly content layout.",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    link: "#"
  },
  {
    id: 3,
    title: "Deerwalk Auto Services Mobile App",
    description: "Led the UI/UX design for a mobile app offering auto services. Designed full application flow with a focus on user control, navigation, and responsiveness. Collaborated with frontend developers to ensure design accuracy.",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    link: "#"
  },
  {
    id: 4,
    title: "Ryan Energy – Branding & Product Graphics",
    description: "Designed marketing and promotional graphics for e-vehicle products (e-rickshaw, e-scooter). Created product brochures, defined brand typography and color schemes aligned with the brand vision.",
    category: "Graphic Design",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    link: "#"
  },
  {
    id: 5,
    title: "Bala Style Station – Logo & Graphic Design",
    description: "Developed company logo, brand colors, and font system. Created social media graphics and business cards for brand identity and promotion.",
    category: "Graphic Design",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    link: "#"
  },
  {
    id: 6,
    title: "USAID Application Frontend",
    description: "Assisted in frontend slicing and UI/UX design for USAID application, focusing on clean layout implementation and user-friendly interaction patterns.",
    category: "Frontend Development",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    link: "#"
  }
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [isInView, setIsInView] = useState(false);
  const categories = ['All', 'UI/UX Design', 'Graphic Design', 'Frontend Development'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('projects');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 
            className={cn(
              "text-3xl md:text-4xl font-bold mb-4 opacity-0",
              isInView && "animate-fade-in"
            )}
          >
            My <span className="gradient-text">Projects</span>
          </h2>
          <p 
            className={cn(
              "text-dark-muted max-w-2xl mx-auto opacity-0",
              isInView && "animate-fade-in"
            )}
            style={{ animationDelay: "0.2s" }}
          >
            Explore my recent work across UI/UX design, graphic design, and frontend development
          </p>
        </div>

        <div 
          className={cn(
            "flex flex-wrap justify-center gap-3 mb-12 opacity-0",
            isInView && "animate-fade-in"
          )}
          style={{ animationDelay: "0.3s" }}
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? "default" : "outline"}
              className={cn(
                activeFilter === category 
                  ? "bg-dark-accent1 hover:bg-dark-accent1/90" 
                  : "border-dark-muted/30 text-dark-muted hover:bg-dark-accent1/10 hover:text-dark-accent1"
              )}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              category={project.category}
              image={project.image}
              link={project.link}
              delay={0.4 + (index * 0.1)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
