import { notFound } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/layout/navbar";
import Link from "next/link";

// Add a type for Project
interface Project {
  slug: string;
  logo: string;
  title: string;
  description: string;
  members?: { name: string; title: string }[];
}

// Project data (should ideally be imported from a shared file, but duplicating for now)
const spring2025Projects: Project[] = [
  {
    slug: 'trachsense',
    logo: '/images/childrensnational.png',
    title: 'TrachSense',
    description: 'TrachSense is a medical app that monitors and ensures proper breathing tube placement for tracheotomy patients.',
    members: [
        { name: 'Hannah Chan', title: 'Team Lead' },
        { name: 'Yashas Bhat', title: 'Tech Lead' },
        { name: 'Mohammad Abd-Elmoniem', title: 'Tech Lead' },
        { name: 'Olivia', title: 'UI/UX' },
        { name: 'Matthew', title: 'Frontend' },
        { name: 'Eswar Karavadi', title: 'Frontend' },
        { name: 'Amogh', title: 'Backend' },
        { name: 'Tanmay', title: 'Backend' },
        { name: 'Tommy', title: 'Backend' },
        { name: 'Surabhi', title: 'Backend' },
        { name: 'Richard', title: 'Backend' },
        { name: 'Pranav', title: 'Backend' },
        { name: 'Michelle', title: 'Backend' },
        { name: 'Jay', title: 'Backend' },
        { name: 'Kira', title: 'Backend' },
    ],
  },
  {
    slug: 'spring-2025-project-2',
    logo: '',
    title: 'Spring 2025 Project 2',
    description: 'Short description of project 2',
    members: [
      { name: 'David Kim', title: 'Team Lead' },
      { name: 'Eva Brown', title: 'Developer' },
      { name: 'Frank Green', title: 'Designer' },
    ],
  },
  {
    slug: 'spring-2025-project-3',
    logo: '',
    title: 'Spring 2025 Project 3',
    description: 'Short description of project 3',
    members: [
      { name: 'Grace White', title: 'Team Lead' },
      { name: 'Henry Black', title: 'Developer' },
      { name: 'Ivy Wilson', title: 'Designer' },
    ],
  },
  {
    slug: 'spring-2025-project-4',
    logo: '',
    title: 'Spring 2025 Project 4',
    description: 'Short description of project 4',
    members: [
      { name: 'Jack Taylor', title: 'Team Lead' },
      { name: 'Kara Adams', title: 'Developer' },
      { name: 'Liam Scott', title: 'Designer' },
    ],
  },
  {
    slug: 'spring-2025-project-5',
    logo: '',
    title: 'Spring 2025 Project 5',
    description: 'Short description of project 5',
    members: [
      { name: 'Mia Clark', title: 'Team Lead' },
      { name: 'Nora White', title: 'Developer' },
      { name: 'Oliver Brown', title: 'Designer' },
    ],
  },
  {
    slug: 'spring-2025-project-6',
    logo: '',
    title: 'Spring 2025 Project 6',
    description: 'Short description of project 6',
    members: [
      { name: 'Peter Green', title: 'Team Lead' },
      { name: 'Queen Adams', title: 'Developer' },
      { name: 'Riley Black', title: 'Designer' },
    ],
  },
  {
    slug: 'spring-2025-project-7',
    logo: '',
    title: 'Spring 2025 Project 7',
    description: 'Short description of project 7',
    members: [
      { name: 'Sofia Wilson', title: 'Team Lead' },
      { name: 'Tom Lee', title: 'Developer' },
      { name: 'Uma Patel', title: 'Designer' },
    ],
  },
  {
    slug: 'spring-2025-project-8',
    logo: '',
    title: 'Spring 2025 Project 8',
    description: 'Short description of project 8',
    members: [
      { name: 'Victor Kim', title: 'Team Lead' },
      { name: 'Wendy Brown', title: 'Developer' },
      { name: 'Xander Green', title: 'Designer' },
    ],
  },
  {
    slug: 'spring-2025-project-9',
    logo: '',
    title: 'Spring 2025 Project 9',
    description: 'Short description of project 9',
    members: [
      { name: 'Yara Black', title: 'Team Lead' },
      { name: 'Zane Wilson', title: 'Developer' },
      { name: 'Amy Clark', title: 'Designer' },
    ],
  },
];

const fall2024Projects: Project[] = [
  {
    slug: 'fall-2024-project-1',
    logo: '',
    title: 'Fall 2024 Project 1',
    description: 'Short description of project 1',
    members: [
      { name: 'Brian Hall', title: 'Team Lead' },
      { name: 'Cathy Young', title: 'Developer' },
      { name: 'Derek Fox', title: 'Designer' },
    ],
  },
  {
    slug: 'fall-2024-project-2',
    logo: '',
    title: 'Fall 2024 Project 2',
    description: 'Short description of project 2',
    members: [
      { name: 'Ella King', title: 'Team Lead' },
      { name: 'Finn Moore', title: 'Developer' },
      { name: 'Gina Ray', title: 'Designer' },
    ],
  },
  {
    slug: 'fall-2024-project-3',
    logo: '',
    title: 'Fall 2024 Project 3',
    description: 'Short description of project 3',
    members: [
      { name: 'Holly West', title: 'Team Lead' },
      { name: 'Ian Bell', title: 'Developer' },
      { name: 'Judy Snow', title: 'Designer' },
    ],
  },
];

const allProjects: Project[] = [...spring2025Projects, ...fall2024Projects];

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = allProjects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  // Only use actual members, do not fill with placeholders
  const members = project.members || [];

  return (
    <main className="relative w-full min-h-screen bg-white pb-16">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-blue z-0" />
      <div className="relative z-10">
        <Navbar />
      </div>
      <div className="pt-40 px-2 sm:px-6 max-w-5xl mx-auto relative z-10 flex flex-col items-center">
        <Link href="/projects" className="text-blue-500 hover:underline mb-8 inline-block self-start">&larr; Back to Projects</Link>
        {/* Top rounded rectangle with logo and text split */}
        <div className="w-full border-2 border-blue-300 rounded-3xl p-10 mb-16 flex flex-row items-center bg-white shadow-sm" style={{boxShadow: '0 0 0 1.5px #93c5fd', minHeight: '160px'}}>
          {/* Left: Logo */}
          <div className="flex-1 flex items-center justify-center h-full">
            {project.logo ? (
              <Image src={project.logo} alt={project.title} width={600} height={600} className="object-contain max-h-32 max-w-100" />
            ) : (
              <div className="w-28 h-28 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-blue-400 text-4xl font-bold">?</span>
              </div>
            )}
          </div>
          {/* Right: Title and Description */}
          <div className="flex-1 flex flex-col justify-center items-start pl-8">
            <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
            <p className="text-lg text-gray-600">{project.description}</p>
          </div>
        </div>
        {/* Large rectangle placeholder for image */}
        <div className="w-full max-w-3xl h-64 bg-gray-200 rounded-md mb-16 flex items-center justify-center">
          {/* Optionally, put an image here in the future */}
        </div>
        {/* Team members grid */}
        <div className="w-full grid grid-cols-5 gap-y-10 gap-x-4 justify-items-center">
          {members.map((member, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-gray-200 mb-2" />
              <div className="text-base font-medium text-gray-800">{member.name}</div>
              <div className="text-sm text-gray-500">{member.title}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export const dynamicParams = true; 