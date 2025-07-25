import Navbar from "@/components/layout/navbar";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const spring2025Projects = [
  {
    slug: 'trachsense',
    logo: '/images/childrensnational.png',
    title: 'TrachSense',
    description: 'TrachSense is a medical app that monitors and ensures proper breathing tube placement for tracheotomy patients.',
  },
  {
    slug: 'spring-2025-project-2',
    logo: '',
    title: 'Spring 2025 Project 2',
    description: 'Short description of project 2',
  },
  {
    slug: 'spring-2025-project-3',
    logo: '',
    title: 'Spring 2025 Project 3',
    description: 'Short description of project 3',
  },
  {
    slug: 'spring-2025-project-4',
    logo: '',
    title: 'Spring 2025 Project 4',
    description: 'Short description of project 4',
  },
  {
    slug: 'spring-2025-project-5',
    logo: '',
    title: 'Spring 2025 Project 5',
    description: 'Short description of project 5',
  },
  {
    slug: 'spring-2025-project-6',
    logo: '',
    title: 'Spring 2025 Project 6',
    description: 'Short description of project 6',
  },
  {
    slug: 'spring-2025-project-7',
    logo: '',
    title: 'Spring 2025 Project 7',
    description: 'Short description of project 7',
  },
  {
    slug: 'spring-2025-project-8',
    logo: '',
    title: 'Spring 2025 Project 8',
    description: 'Short description of project 8',
  },
  {
    slug: 'spring-2025-project-9',
    logo: '',
    title: 'Spring 2025 Project 9',
    description: 'Short description of project 9',
  },
];

const fall2024Projects = [
  {
    slug: 'fall-2024-project-1',
    logo: '',
    title: 'Fall 2024 Project 1',
    description: 'Short description of project 1',
  },
  {
    slug: 'fall-2024-project-2',
    logo: '',
    title: 'Fall 2024 Project 2',
    description: 'Short description of project 2',
  },
  {
    slug: 'fall-2024-project-3',
    logo: '',
    title: 'Fall 2024 Project 3',
    description: 'Short description of project 3',
  },
];

function ProjectCard({ logo, title, description, slug }: { logo: string; title: string; description: string; slug: string }) {
  return (
    <div className="flex flex-col items-center border-2 border-blue-500 rounded-3xl bg-white shadow-lg p-10 h-full min-h-[340px] min-w-0">
      <div className="mb-6 w-28 h-28 flex items-center justify-center bg-blue-100 rounded-full">
        {logo ? (
          <Image src={logo} alt={title} width={80} height={80} className="object-contain" />
        ) : (
          <span className="text-blue-400 text-4xl font-bold">?</span>
        )}
      </div>
      <div className="text-2xl font-semibold text-gray-800 text-center mb-3">{title}</div>
      <div className="text-base text-gray-600 text-center mb-6">{description}</div>
      <Link href={`/projects/${slug}`} className="mt-auto w-full flex justify-center">
        <button className="flex items-center gap-2 px-6 py-3 border-2 border-blue-500 text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition text-lg w-full">
          Read more <ArrowRight className="w-5 h-5" />
        </button>
      </Link>
    </div>
  );
}

function ProjectGrid({ projects }: { projects: { logo: string; title: string; description: string; slug: string }[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 w-full max-w-[1600px] mx-auto">
      {projects.map((project, idx) => (
        <ProjectCard key={idx} {...project} />
      ))}
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <main className="relative w-full min-h-screen bg-white pb-16">
      {/* Blue bar behind the navbar */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-blue z-0" />
      {/* Navbar (z-10 to be above the blue bar) */}
      <div className="relative z-10">
        <Navbar />
      </div>
      {/* Our Projects Section */}
      <div className="pt-40 px-2 sm:px-6 max-w-[1800px] mx-auto relative z-10">
        <h1 className="text-4xl sm:text-5xl font-bold text-center text-blue-500 mb-12">Our Projects</h1>
        <section className="mb-16">
          <div className="relative flex items-center justify-center w-screen max-w-none left-1/2 right-1/2 -translate-x-1/2 my-8 mb-8">
            <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-1 bg-blue-500 w-full z-0" />
            <h2 className="relative z-10 bg-white px-6 text-2xl sm:text-3xl font-bold text-blue-500">
              Spring 2025
            </h2>
          </div>
          <ProjectGrid projects={spring2025Projects} />
        </section>
        <section>
          <div className="relative flex items-center justify-center w-screen max-w-none left-1/2 right-1/2 -translate-x-1/2 my-8 mb-8">
            <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-1 bg-blue-500 w-full z-0" />
            <h2 className="relative z-10 bg-white px-6 text-2xl sm:text-3xl font-bold text-blue-500">
              Fall 2024
            </h2>
          </div>
          <ProjectGrid projects={fall2024Projects} />
        </section>
      </div>
    </main>
  );
} 