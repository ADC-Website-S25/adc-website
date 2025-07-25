import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link';

const projects = [
  {
    slug: 'trachsense',
    logo: '/images/childrensnational.png',
    alt: "Children's National logo",
    title: 'TrachSense',
    description: 'TrachSense is a medical app that monitors and ensures proper breathing tube placement for tracheotomy patients.',
  },
  {
    slug: 'amazonkuiper',
    logo: '/images/amazonkuiper.png',
    alt: 'Amazon Project Kuiper logo',
    title: 'Project Title',
    description: 'Short description of project',
  },
  {
    slug: 'mitre',
    logo: '/images/mitre.png',
    alt: 'MITRE logo',
    title: 'Project Title',
    description: 'Short description of project',
  },
]

const Projects = () => {
  return (
    <section className="mt-15" id="projects">
      <div className="w-full my-8 flex items-center justify-center">
        <h2 className="text-5xl font-bold text-blue-600 bg-white px-6 text-center">
          Featured Projects
        </h2>
      </div>
      <div className="w-full px-2 sm:px-4 flex flex-col gap-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-[#00B5FF] to-[#0083FF] p-[4px] rounded-4xl shadow-lg hover:scale-[1.01] transition-transform h-full w-full"
            >
              <div className="bg-white rounded-[calc(2rem-4px)] flex flex-col items-center gap-3 p-8 h-80 w-full">
                <div className="flex justify-center items-center mb-2">
                  <Image src={project.logo} alt={project.alt} width={128} height={128} className="object-contain h-24 w-52" />
                </div>
                <div className="text-lg font-semibold mb-1 text-gray-800 text-center">
                  {project.title}
                </div>
                <div className="text-sm text-gray-600 mb-4 text-center">
                  {project.description}
                </div>
                <Link href={`/projects/${project.slug}`} className="w-full">
                  <Button variant="outline" className="mt-auto w-full">
                    Read more <ArrowRight className="ml-1" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <Link href="/projects">
            <Button size="lg" variant="default">
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Projects