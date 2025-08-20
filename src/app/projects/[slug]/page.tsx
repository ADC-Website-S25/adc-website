import { notFound } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/layout/navbar";
import Link from "next/link";
import { ALL_PROJECTS } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import VideoEmbed from "@/components/ui/video-embed";

export async function generateStaticParams() {
  return ALL_PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

<<<<<<< Updated upstream
export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = ALL_PROJECTS.find((p) => p.slug === slug);
=======
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

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = allProjects.find((p) => p.slug === slug);
>>>>>>> Stashed changes

  if (!project) {
    notFound();
  }

  // Only use actual members, do not fill with placeholders
  const members = project.members || [];

  return (
    <div className="pt-40 max-w-6xl mx-auto z-10 flex flex-col items-center">
      <Link href="/projects" className="self-start mb-6 hidden md:inline-block">
        <Button variant={"ghost"} className="rounded-xl">
          <ArrowLeft className="mr-1" />
          Back to Projects
        </Button>
      </Link>

      <div className="px-2 sm:px-4 flex flex-col items-center w-full">
        {/* Top rounded rectangle with logo and text split */}
        <div className="w-full border-2 border-blue-300 rounded-3xl p-10 mb-16 gap-6 md:gap-4 flex flex-col md:flex-row items-center bg-white shadow-lg">
          <div className="flex-[0.5] flex items-center justify-center h-full">
            {project.logo ? (
              <Image src={project.logo} alt={project.title} width={400} height={400} className="object-contain max-h-20 max-w-full md:max-w-100" draggable={false} />
            ) : (
              <div className="w-28 h-28 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-blue-400 text-4xl font-bold">?</span>
              </div>
            )}
          </div>
          <div className="flex-1 flex flex-col justify-center items-center text-center md:items-start md:text-start">
            <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
            <p className="text-lg text-gray-600">{project.description}</p>
          </div>
        </div>
        {project.showcaseContent && (
          <div className="w-full flex flex-col items-center gap-2 mb-16">
            <div className="w-full max-w-5xl flex items-center justify-center relative">
              {project.showcaseContent.image ? (
                <Image
                  src={project.showcaseContent?.image}
                  alt="Project Image"
                  width={900}
                  height={400}
                  className="object-contain w-auto h-auto max-h-[30rem] max-w-full border rounded-md"
                />
              ) : (
                <VideoEmbed url={project.showcaseContent.videoUrl || ""} />
              )}
            </div>
          <p className="text-gray-600 text-center">{project.showcaseContent?.description}</p>
        </div>
        )}
        <div className="relative flex items-center justify-center w-full my-8">
            <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-1 bg-blue-500 w-full z-0" />
            <h2 className="relative z-10 bg-white px-4 text-2xl sm:text-3xl font-bold text-subheader">
              Team Members
            </h2>
          </div>
        <div className="w-full flex flex-wrap justify-center gap-y-5 md:gap-x-25 gap-x-20 text-center">
          {members.map((member, idx) => (
            <div key={idx} className="flex flex-col items-center w-32">
              {member.photo ? (
                <div className="w-24 h-24 rounded-full overflow-hidden mb-2">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={120}
                    height={120}
                    className={`object-cover transform ${member.zoomPhotoIn ? "scale-150" : ""}`}
                    draggable={false}
                  />
                </div>
              ) : (
                <div className="w-24 h-24 rounded-full bg-gray-200 mb-2" />
              )}
              <div className="text-base font-medium text-gray-800">{member.name}</div>
              <div className="text-sm text-gray-500">{member.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const dynamicParams = true; 