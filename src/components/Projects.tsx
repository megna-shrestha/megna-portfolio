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
    image: "/assets/RRca.jpg",
    link: "https://dribbble.com/shots/26058044-E-commerce-UI-UX-Design-with-detailed-case-study"
  },
  {
    id: 2,
    title: "Dragon Pain Relief Website Revamp",
    description: "Revamped the existing web UI to enhance visual consistency and user experience. Redesigned shop and product pages to optimize customer funneling and improve SEO-friendly content layout.",
    category: "UI/UX Design",
    image: "/assets/dpr.jpg",
    link: "https://dribbble.com/megna-1"
  },
  {
    id: 3,
    title: "Deerwalk Auto Services Mobile App",
    description: "Led the UI/UX design for a mobile app offering auto services. Designed full application flow with a focus on user control, navigation, and responsiveness. Collaborated with frontend developers to ensure design accuracy.",
    category: "UDesignI/UX Design",
    image: "/assets/mobileapp.png",
    link: "https://dribbble.com/shots/23813999-Mobile-UI-UX"
  },
  {
    id: 4,
    title: "Ryan Energy – Branding & Product Graphics",
    description: "Designed marketing and promotional graphics for e-vehicle products (e-rickshaw). Created product brochures, defined brand typography and color schemes aligned with the brand vision.",
    category: "Graphic Design",
    image: "/assets/tempo.png",
    link: "https://dribbble.com/shots/23817330-Brochure-Design"
  },
  {
    id: 5,
    title: "Bala Style Station – Logo & Graphic Design",
    description: "Developed company logo, brand colors, and font system. Created social media graphics and business cards for brand identity and promotion.",
    category: "Graphic ",
    image: "/assets/project-img1.png",
    link: "https://dribbble.com/shots/23817483-Simple-and-Elegant-Visiting-card"
  },
  {
    id: 6,
    title: "Golden Lion – Branding & Product Graphics",
    description: "Designed marketing and promotional graphics for e-vehicle products (e-scooty). Created product brochures, defined brand typography and color schemes aligned with the brand vision.",
    category: "Graphic Design",
    image: "/assets/escooty.png",
    link: "https://dribbble.com/shots/23942588-e-scooty-brochure-design"
  },
  {
    id: 7,
    title: "Travel Website",
    description: " UI/UX design for a Travel Website. Designed full application flow with a focus on user control, navigation, and responsiveness.",
    category: "UI/UX Design",
    image: "/assets/mockuptt.jpg",
    link: "https://dribbble.com/shots/25617693-Travel-Website-Design"
  },
    {
    id: 8,
    title: "Wellnes Company Website",
    description: " UI/UX design for a dubai based Wellnes company. Designed full website flow with a focus on user control, navigation, and responsiveness.",
    category: "UI/UX Design",
    image: "/assets/vyana.jpg",
    link: "https://dribbble.com/shots/25618596-Wellness-website-UI-Design-SaaS-Website-Design"
  },
  {
    id: 9,
    title: "AI Work Managemnet System",
      description: " Ad Campaign for a AI Work Managemnet System. Designed ad campaign post for social media.",
    category: "Graphic Design",
    image: "/assets/project-img2.png",
    link: "https://www.behance.net/gallery/220701291/AI-project-manager-ad-campaign"
  },
  {
    id: 10,
    title: "Tihar festive Greeting Campaign",
      description: " Tihar festive greeting - Social media posts.",
    category: "Graphic Design",
    image: "/assets/tihar.png",
    link: "https://www.behance.net/gallery/212755219/Happy-Tihar-Tihar-greetings"
  },
  {
    id: 11,
    title: "Website Redesign - Christmas themed",
    description: "Redesigned a website for a Christmas themed website. ",
    category: "UI/UX Design",
    image: "/assets/med.jpg",
    link: "https://dribbble.com/shots/25618344-Christmas-Themed-Landing-Page-UI-design-Revamped"
    },
    {
    id: 12,
    title: "Christmas themed - Discount Coupon ",
    description: "Discount post for Christmas. ",
    category: "Graphic Design",
    image: "/assets/project-img3.png",
    link: "https://www.behance.net/gallery/219108961/Christmas-Offer-Banner"
  },
  {
    id: 13,
    title: "Kiosk UI Design ",
    description: "Kiosk UI design for banking system in nepal. ",
    category: "UI/UX Design",
    image: "/assets/kiosk.jpg",
    link: "https://dribbble.com/shots/25617885-Kiosk-Design-for-banking-system"
  }
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [isInView, setIsInView] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState(6); // Show 6 projects initially (2 rows)
  const categories = ['All', 'UI/UX Design', 'Graphic Design'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const handleLoadMore = () => {
    setVisibleProjects(prev => prev + 6); // Load 6 more projects
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
              onClick={() => {
                setActiveFilter(category);
                setVisibleProjects(6); // Reset visible projects when filter changes
              }}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.slice(0, visibleProjects).map((project, index) => (
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

        {visibleProjects < filteredProjects.length && (
          <div className="text-center mt-12">
            <Button
              onClick={handleLoadMore}
              className="bg-dark-accent1 hover:bg-dark-accent1/90"
            >
              Load More
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
