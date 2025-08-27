import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link';
import { FEATURED_PROJECTS } from '@/data/projects';
import BlueBorderContainer from '../ui/blue-border-container'; 
import FadeSlideIn from '../ui/fade-slide-in';

const Projects = () => {
  return (
    <section className="mt-15 scroll-mt-32" id="projects">
      <div className="w-full my-8 flex items-center justify-center relative">
        <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-1 bg-blue-500 w-full z-0" />
        <h2 className="text-5xl font-bold text-blue-600 bg-white px-6 text-center z-10">
          Featured Projects
        </h2>
      </div>
      <div className="w-full max-w-8xl mx-auto px-2 sm:px-4 flex flex-col gap-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full items-stretch">
          {FEATURED_PROJECTS.map((project, idx) => {
            const isLastOddItem = idx === FEATURED_PROJECTS.length - 1 && FEATURED_PROJECTS.length % 2 === 1;

            return (
              <FadeSlideIn 
                key={project.title} 
                delay={idx + 1 * 50} 
                direction={idx === 0 ? 'right' : idx === 2 ? 'left' : 'up'}
                className='h-full'
              >
                <BlueBorderContainer
                  className="flex flex-col items-center gap-3 p-6 h-full"
                  key={idx}
                  parentClassName={`${isLastOddItem ? "md:col-span-2 lg:col-span-1" : ""} h-full`}
                >
                  <div className="flex justify-center items-center mb-2">
                    <Image 
                      src={project.logo} 
                      alt={project?.logoAlt || "Project Logo"} 
                      width={208} 
                      height={96} 
                      unoptimized={project.logo.endsWith('.svg')}
                      className="object-contain h-24 w-52" 
                    />
                  </div>
                  <div className="text-lg font-semibold mb-1 text-gray-800 text-center">
                    {project.title}
                  </div>
                  <div className="text-sm text-gray-600 mb-4 text-center flex-grow">
                    {project.description}
                  </div>
                  <Link href={`/projects/${project.slug}`} className="w-full mt-auto">
                    <Button variant="roundedOutline" className="w-full py-5">
                      Read more <ArrowRight className="ml-1" />
                    </Button>
                  </Link>
                </BlueBorderContainer>
              </FadeSlideIn>
            )
          })}
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