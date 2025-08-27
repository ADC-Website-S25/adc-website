import Navbar from "@/components/layout/navbar";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { ALL_PROJECTS, Project } from "@/data/projects";
import BlueBorderContainer from "@/components/ui/blue-border-container";
import { Button } from "@/components/ui/button";

const projectsByTerm = ALL_PROJECTS.reduce((acc, project) => {
  const key = `${project.semester} ${project.year}`;
  if (!acc[key]) {
    acc[key] = [];
  }
  acc[key].push(project);
  return acc;
}, {} as Record<string, Project[]>);

// Convert to array and sort
const sortedProjects = Object.entries(projectsByTerm)
  .sort(([a], [b]) => {
    // Extract year and semester for sorting
    const [semA, yearA] = a.split(' ');
    const [semB, yearB] = b.split(' ');
    
    if (yearA !== yearB) return parseInt(yearB) - parseInt(yearA);
    // Spring comes after Fall in the same academic year
    return semA === 'Spring' ? -1 : 1;
  });

function ProjectCard({ logo, title, description, slug }: { logo: string; title: string; description: string; slug: string }) {
  return (
    <BlueBorderContainer className="flex flex-col items-center gap-3 p-6 h-full">
      <div className="mb-3 w-32 h-32 flex items-center justify-center bg-blue-100 rounded-full">
        {logo ? (
          <Image src={logo} alt={title} width={128} height={128} unoptimized={logo.endsWith('.svg')} className="object-contain p-2" />
        ) : (
          <span className="text-blue-400 text-4xl font-bold">?</span>
        )}
      </div>
      <p className="text-2xl font-semibold text-gray-800 text-center mb-3">
        {title}
      </p>
      <p className="text-base text-gray-600 text-center mb-3">
        {description}
      </p>
      <Link href={`/projects/${slug}`} className="w-full mt-auto">
        <Button variant="roundedOutline" className="w-full py-5">
          Read more <ArrowRight className="ml-1" />
        </Button>
      </Link>
    </BlueBorderContainer>
  );
}

function ProjectGrid({ projects }: { projects: { logo: string; title: string; description: string; slug: string }[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full max-w-8xl mx-auto px-2 md:px-6">
      {projects.map((project, idx) => (
        <ProjectCard key={idx} {...project} />
      ))}
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <div className="pt-40 mx-auto relative z-10">
      <div className="w-full mx-auto max-w-6xl -mb-11 hidden md:block">
        <Link href="/#projects" className="mb-6">
          <Button variant={"ghost"} className="rounded-xl">
            <ArrowLeft className="mr-1" />
            Back to Home
          </Button>
        </Link>
      </div>
      <h1 className="text-4xl sm:text-5xl font-bold text-center text-blue-500 mb-12">Our Projects</h1>
      {sortedProjects.map(([term, projects]) => (
        <section className="mb-16" key={term}>
          <div className="relative flex items-center justify-center w-full my-8">
            <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-1 bg-blue-500 w-full z-0" />
            <h2 className="relative z-10 bg-white px-4 text-2xl sm:text-3xl font-bold text-subheader">
              {term}
            </h2>
          </div>
          <ProjectGrid projects={projects} />
        </section>
      ))}
    </div>
  );
} 