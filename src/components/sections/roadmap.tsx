'use client'

import React from 'react'
import { Users, Code, Wrench, Crown, Star, ArrowRight, ArrowDown, ArrowLeft, GitBranch } from 'lucide-react'
import { Button } from '../ui/button'
import {
  MorphingPopover,
  MorphingPopoverContent,
  MorphingPopoverTrigger,
} from '@/components/motion-primitives/morphing-popover'
import * as motion from 'motion/react-client'

import type { ReactElement } from 'react'
import Link from 'next/link'
import { applicationLink } from '@/data/links'

interface RoadmapPosition {
  id: number
  title: string
  description: string
  icon: ReactElement
  skills: string[]
  duration: string
  bgColor: string
  borderColor: string
  iconBg: string
  position: { row: number; col: number }
}

const roadmapPositions: RoadmapPosition[] = [
  {
    id: 0,
    title: 'Bootcamp Member',
    description: 'Start your journey by learning the fundamentals of app development through our comprehensive bootcamp program.',
    icon: <Users className="w-6 h-6" />,
    skills: ['React Basics', 'JavaScript', 'Git/GitHub', 'UI/UX Principles'],
    duration: '8-10 weeks',
    bgColor: 'bg-gradient-to-br from-green-100 to-emerald-100',
    borderColor: 'border-green-400',
    iconBg: 'from-green-400 to-emerald-500',
    position: { row: 0, col: 0 }
  },
  {
    id: 1,
    title: 'Shadow Position',
    description: 'Shadow experienced developers to gain real-world project experience and learn industry best practices.',
    icon: <Code className="w-6 h-6" />,
    skills: ['Project Collaboration', 'Code Review', 'Team Communication', 'Agile Methodology'],
    duration: '4-6 weeks',
    bgColor: 'bg-gradient-to-br from-blue-100 to-sky-100',
    borderColor: 'border-sky-400',
    iconBg: 'from-sky-500 to-blue-600',
    position: { row: 0, col: 1 }
  },
  {
    id: 2,
    title: 'Project Engineer',
    description: 'Take ownership of features and contribute meaningfully to client projects with guidance from senior members.',
    icon: <Wrench className="w-6 h-6" />,
    skills: ['Full-Stack Development', 'Database Design', 'API Integration', 'Testing'],
    duration: '8-10 weeks',
    bgColor: 'bg-gradient-to-br from-purple-100 to-indigo-100',
    borderColor: 'border-purple-400',
    iconBg: 'from-purple-400 to-indigo-500',
    position: { row: 1, col: 1 }
  },
  {
    id: 3,
    title: 'Tech Lead',
    description: 'Lead technical decisions, mentor junior developers, and architect solutions for complex problems.',
    icon: <GitBranch className="w-6 h-6" />,
    skills: ['System Architecture', 'Mentoring', 'Technical Leadership', 'Performance Optimization'],
    duration: '8-10 weeks',
    bgColor: 'bg-gradient-to-br from-orange-100 to-amber-100',
    borderColor: 'border-orange-300',
    iconBg: 'from-orange-300 to-amber-500',
    position: { row: 1, col: 2 }
  },
  {
    id: 4,
    title: 'Project Lead',
    description: 'Oversee project delivery, manage company relationships, and ensure team success from start to finish.',
    icon: <Crown className="w-6 h-6" />,
    skills: ['Strategic Planning', 'Team Management', 'Company Relations', 'Vision Setting'],
    duration: 'Ongoing',
    bgColor: 'bg-gradient-to-br from-teal-100 to-sky-100',
    borderColor: 'border-teal-400',
    iconBg: 'from-teal-400 to-sky-500',
    position: { row: 1, col: 0 }
  },
  {
    id: 5,
    title: 'Leadership Role',
    description: 'Shape the future of ADC by taking on executive responsibilities and strategic decision-making.',
    icon: <Star className="w-6 h-6" />,
    skills: ['Strategic Planning', 'Team Management', 'Client Relations', 'Vision Setting'],
    duration: 'Executive Term',
    bgColor: 'bg-gradient-to-br from-red-100 to-pink-100',
    borderColor: 'border-red-400',
    iconBg: 'from-red-400 to-pink-500',
    position: { row: 1, col: 0 }
  }
]

const PositionPopover = ({ position }: { position: RoadmapPosition }) => {
  const layoutId = `position-${position.id}`
  
  return (
    <MorphingPopover>
      <MorphingPopoverTrigger asChild>
        <div className={`${position.bgColor} ${position.borderColor} border-2 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full h-full cursor-pointer`}>
          <div className="p-6 h-full">
            <div className="flex items-start gap-4 h-full">
              <div className={`p-3 bg-gradient-to-br ${position.iconBg} rounded-xl shadow-md text-white flex-shrink-0`}>
                {position.icon}
              </div>
              <div className="flex flex-col">
                <motion.h3 
                  layoutId={`${layoutId}-title`}
                  layout='position'
                  className="text-xl font-bold text-gray-800 mb-1"
                >
                  {position.title}
                </motion.h3>
                <motion.span 
                  layoutId={`${layoutId}-duration`}
                  layout='position'
                  className="text-sm text-gray-600"
                >
                  {position.duration}
                </motion.span>
              </div>
            </div>
            <div className="mt-3 text-xs font-medium flex gap-1 text-foreground bg-white rounded-full w-fit px-3 py-1">
              Learn More
              <ArrowRight className="w-4 h-4 text-foreground" />
            </div>
          </div>
        </div>
      </MorphingPopoverTrigger>
      <MorphingPopoverContent className='w-96 p-6 shadow-xl border border-gray-200 z-50'>
        <div className='grid gap-4'>
          <div className='space-y-3'>
            <div className='flex items-center gap-3'>
              <div className={`p-2 bg-gradient-to-br ${position.iconBg} rounded-lg text-white`}>
                {React.isValidElement(position.icon) ? React.cloneElement(position.icon as React.ReactElement<any>, { className: "w-5 h-5" }) : position.icon}
              </div>
              <div>
                <motion.h4
                  layoutId={`${layoutId}-title`}
                  layout='position'
                  className='text-lg font-bold text-gray-800 leading-none'
                >
                  {position.title}
                </motion.h4>
                <motion.p
                  layoutId={`${layoutId}-duration`}
                  layout='position'
                  className='text-sm text-gray-600 mt-1'
                >
                  Duration: {position.duration}
                </motion.p>
              </div>
            </div>
            <p className='text-sm text-gray-700 leading-relaxed'>
              {position.description}
            </p>
          </div>
          <div className='space-y-3'>
            <h5 className='text-sm font-semibold text-gray-800'>
              Key Skills & Responsibilities:
            </h5>
            <div className='grid grid-cols-1 gap-2'>
              {position.skills.map((skill, index) => (
                <div
                  key={index}
                  className={`${position.bgColor} ${position.borderColor} border px-3 py-2 rounded-lg text-xs font-medium text-gray-700 shadow-sm`}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </MorphingPopoverContent>
    </MorphingPopover>
  )
}


const Roadmap = () => {
  return (
    <section className="py-12 md:py-20 px-4 md:px-8" id="roadmap">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-blue-600 mb-2 md:mb-4">
            Your ADC Journey
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Follow the path through the App Development Club. From bootcamp member to leadership, 
            every step builds your skills and opens new opportunities.
          </p>
          <p className='text-neutral-500 mt-3 px-4'>Not everyone starts in the bootcamp, many people join directly as a Project Engineer too!</p>
        </div>

        {/* Desktop Flow Layout */}
        <div className="hidden md:block relative w-3xl lg:w-5xl xl:w-6xl">
          {/* First Row: Bootcamp -> Shadow */}
          <div className="flex items-center gap-0 mb-6 lg:mr-32">
            <div className="flex-1 max-w-32 hidden lg:flex items-center justify-center pr-8">
              <div className="w-full h-[3px] bg-blue-500 relative rounded-md">
                <ArrowRight className="w-8 h-8 text-blue-500 absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2" />
              </div>
            </div>

            <div className="w-80">
              <PositionPopover position={roadmapPositions[0]} />
            </div>
            
            {/* Full-width arrow */}
            <div className="flex-1 flex items-center justify-center px-8">
              <div className="w-full h-[3px] bg-blue-500 relative rounded-md">
                <ArrowRight className="w-8 h-8 text-blue-500 absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2" />
              </div>
            </div>
            
            <div className="w-80">
              <PositionPopover position={roadmapPositions[1]} />
            </div>
          </div>

          {/* Vertical connection */}
          <div className="flex justify-end my-6">
            <div className="mr-40 lg:mr-72">
              <div className="w-[3px] h-16 bg-blue-500 relative mx-auto rounded-md">
                <ArrowDown className="w-8 h-8 text-blue-500 absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2" />
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="flex items-center gap-0 lg:mx-32">
            <div className="w-80">
              <PositionPopover position={roadmapPositions[3]} />
            </div>
            
            {/* Full-width arrow */}
            <div className="flex-1 flex items-center justify-center px-8">
              <div className="w-full h-[3px] bg-blue-500 relative rounded-md">
                <ArrowLeft className="w-8 h-8 text-blue-500 absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2" />
              </div>
            </div>
            
            <div className="w-80">
              <PositionPopover position={roadmapPositions[2]} />
            </div>
          </div>

          {/* Vertical connection */}
          <div className="flex justify-start my-6">
            <div className="ml-40 lg:ml-72">
              <div className="w-[3px] h-16 bg-blue-500 relative mx-auto rounded-md">
                <ArrowDown className="w-8 h-8 text-blue-500 absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2" />
              </div>
            </div>
          </div>

          {/* Third Row */}
          <div className='flex items-center gap-0 lg:mx-32'>
            <div className="w-80">
              <PositionPopover position={roadmapPositions[4]} />
            </div>

            {/* Full-width arrow */}
            <div className="flex-1 flex items-center justify-center px-8">
              <div className="w-full h-[3px] bg-blue-500 relative rounded-md">
                <ArrowRight className="w-8 h-8 text-blue-500 absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2" />
              </div>
            </div>
            
            <div className="w-80">
              <PositionPopover position={roadmapPositions[5]} />
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Vertical Layout */}
        <div className="md:hidden">
          {roadmapPositions.map((position, index) => (
            <div key={position.id} className="flex flex-col items-center">
              <div className="w-full max-w-md h-36 pt-0.5">
                <PositionPopover position={position} />
              </div>
              
              {/* Vertical arrow (except for last item) */}
              {index < roadmapPositions.length - 1 && (
                <div className="my-2">
                  <div className="w-[3px] h-8 bg-blue-500 relative mx-auto rounded-md">
                    <ArrowDown className="w-8 h-8 text-blue-500 absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Instructions */}
        <div className="text-center mt-20">
          <p className="text-neutral-500 mb-6">Click on any position to explore the role details</p>
          <Link href={applicationLink} target='_blank'>
            <Button size="lg" variant={"default"} className='text-lg font-semibold'>
              Start Your Journey Today
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Roadmap