
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  image: string;
  link?: string;
  delay: number;
}

const ProjectCard = ({ title, description, category, image, link, delay }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="opacity-0 animate-fade-in"
      style={{ animationDelay: `${delay}s` }}
    >
      <div 
        className={cn(
          "group relative bg-dark-card rounded-xl overflow-hidden transition-all duration-300",
          "hover:scale-[1.02] hover:shadow-xl hover:shadow-dark-accent1/10"
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="aspect-video overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className={cn(
            "absolute inset-0 bg-gradient-to-t from-dark-card to-transparent opacity-80",
            "transition-opacity duration-300",
            isHovered ? "opacity-90" : "opacity-50"
          )}></div>
        </div>
        
        <div className="absolute bottom-0 w-full p-6">
          <div className="mb-2">
            <span className="inline-block px-3 py-1 text-xs rounded-full bg-dark-accent1/20 text-dark-accent1">
              {category}
            </span>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">
            {title}
          </h3>
          <p className={cn(
            "text-dark-muted overflow-hidden transition-all duration-300",
            isHovered ? "max-h-24 opacity-100" : "max-h-0 opacity-0"
          )}>
            {description}
          </p>
          
          {link && (
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                "mt-3 text-dark-accent1 p-0 h-auto transform transition-all duration-300",
                isHovered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              )}
            >
              <ExternalLink size={16} className="mr-1" />
              View Project
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
