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

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = ALL_PROJECTS.find((p) => p.slug === slug);

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

      <div className="px-2 sm:px-4 flex flex-col items-center">
        {/* Top rounded rectangle with logo and text split */}
        <div className="w-full border-2 border-blue-300 rounded-3xl p-10 mb-16 gap-6 md:gap-4 flex flex-col md:flex-row items-center bg-white shadow-lg">
          <div className="flex-1 flex items-center justify-center h-full">
            {project.logo ? (
              <Image src={project.logo} alt={project.title} width={500} height={500} className="object-contain max-h-32 max-w-full md:max-w-100" draggable={false} />
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
                  className="object-contain w-auto h-auto max-h-[30rem] max-w-full"
                />
              ) : (
                <VideoEmbed url={project.showcaseContent.videoUrl || ""} />
              )}
            </div>
          <p className="text-gray-600 text-center">{project.showcaseContent?.description}</p>
        </div>
        )}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-5 gap-x-4 justify-items-center text-center">
          {members.map((member, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-gray-200 mb-2" />
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