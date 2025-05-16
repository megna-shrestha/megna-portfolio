
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Brush, Code, Palette } from "lucide-react";

const skillsData = [
  {
    icon: <Palette size={32} />,
    category: "UI/UX Design",
    skills: ["User Research","User Interface", "Wireframing", "Prototyping", "Usability Testing", "Interaction Design", "Information Architecture", "Market Research"],
    color: "dark-accent1",
  },
  {
    icon: <Brush size={32} />,
    category: "Graphic Design",
    skills: ["Brand Identity", "Logo Design", "Adobe Illustrator", "Adobe Photoshop", "Marketing Graphics", "Digital Assets","Logo Design", "Visual Identity","Typography","Color Theory"],
    color: "dark-accent2",
  },
  {
    icon: <Code size={32} />,
    category: "Frontend Development",
    skills: ["HTML", "CSS", "JavaScript", "React", "Responsive Design", "Version Control"],
    color: "dark-accent1",
  },
];

const SkillCard = ({ icon, category, skills, color, delay }) => {
  return (
    <div
      className="opacity-0 animate-fade-in"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className={`bg-dark-card p-6 md:p-8 rounded-xl h-full glass transition-all duration-300 hover:shadow-lg hover:shadow-${color}/10 border border-${color}/20 group hover:border-${color}/40`}>
        <div className={`flex items-center justify-center w-16 h-16 rounded-lg mb-6 bg-${color}/10 text-${color}`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-4">{category}</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span 
              key={skill} 
              className={`px-3 py-1 text-sm rounded-full bg-${color}/10 text-${color} transition-all duration-300 group-hover:bg-${color}/20`}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
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

    const section = document.getElementById("skills");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="skills" className="py-20 bg-dark-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            className={cn(
              "text-3xl md:text-4xl font-bold mb-4 opacity-0",
              isInView && "animate-fade-in"
            )}
          >
            My <span className="gradient-text">Skills</span>
          </h2>
          <p
            className={cn(
              "text-dark-muted max-w-2xl mx-auto opacity-0",
              isInView && "animate-fade-in"
            )}
            style={{ animationDelay: "0.2s" }}
          >
            I've developed expertise across design and development disciplines,
            allowing me to create cohesive digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skill, index) => (
            <SkillCard
              key={skill.category}
              icon={skill.icon}
              category={skill.category}
              skills={skill.skills}
              color={skill.color}
              delay={0.3 + index * 0.1}
            />
          ))}
        </div>

        <div className="mt-16">
          <div
            className={cn(
              "grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8 opacity-0",
              isInView && "animate-fade-in"
            )}
            style={{ animationDelay: "0.6s" }}
          >
            <div className="bg-dark-card rounded-lg p-4 text-center glass">
              <h3 className="font-bold text-3xl md:text-4xl text-dark-accent1">3+</h3>
              <p className="text-dark-muted mt-2">Years Experience</p>
            </div>
            <div className="bg-dark-card rounded-lg p-4 text-center glass">
              <h3 className="font-bold text-3xl md:text-4xl text-dark-accent2">15+</h3>
              <p className="text-dark-muted mt-2">Projects Completed</p>
            </div>
            <div className="bg-dark-card rounded-lg p-4 text-center glass">
              <h3 className="font-bold text-3xl md:text-4xl text-dark-accent1">5+</h3>
              <p className="text-dark-muted mt-2">Happy Clients</p>
            </div>
            <div className="bg-dark-card rounded-lg p-4 text-center glass">
              <h3 className="font-bold text-3xl md:text-4xl text-dark-accent2">4+</h3>
              <p className="text-dark-muted mt-2">Companies Worked With</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
