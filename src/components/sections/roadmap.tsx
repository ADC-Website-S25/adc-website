'use client'

import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, Users, Code, Wrench, Crown, Star } from 'lucide-react'
import { Button } from '../ui/button'

interface RoadmapPosition {
  id: number
  title: string
  description: string
  icon: React.ReactNode
  skills: string[]
  duration: string
  bgColor: string
  borderColor: string
}

const roadmapPositions: RoadmapPosition[] = [
  {
    id: 0,
    title: 'Bootcamp Member',
    description: 'Start your journey by learning the fundamentals of app development through our comprehensive bootcamp program.',
    icon: <Users className="w-8 h-8" />,
    skills: ['React Basics', 'JavaScript', 'Git/GitHub', 'UI/UX Principles'],
    duration: '8-10 weeks',
    bgColor: 'bg-gradient-to-br from-green-100 to-emerald-100',
    borderColor: 'border-green-400'
  },
  {
    id: 1,
    title: 'Shadow Position',
    description: 'Shadow experienced developers to gain real-world project experience and learn industry best practices.',
    icon: <Code className="w-8 h-8" />,
    skills: ['Project Collaboration', 'Code Review', 'Team Communication', 'Agile Methodology'],
    duration: '4-6 weeks',
    bgColor: 'bg-gradient-to-br from-blue-100 to-sky-100',
    borderColor: 'border-blue-400'
  },
  {
    id: 2,
    title: 'Project Engineer',
    description: 'Take ownership of features and contribute meaningfully to client projects with guidance from senior members.',
    icon: <Wrench className="w-8 h-8" />,
    skills: ['Full-Stack Development', 'Database Design', 'API Integration', 'Testing'],
    duration: 'Ongoing',
    bgColor: 'bg-gradient-to-br from-purple-100 to-violet-100',
    borderColor: 'border-purple-400'
  },
  {
    id: 3,
    title: 'Tech Lead',
    description: 'Lead technical decisions, mentor junior developers, and architect solutions for complex problems.',
    icon: <Crown className="w-8 h-8" />,
    skills: ['System Architecture', 'Mentoring', 'Technical Leadership', 'Performance Optimization'],
    duration: 'Ongoing',
    bgColor: 'bg-gradient-to-br from-orange-100 to-amber-100',
    borderColor: 'border-orange-400'
  },
  {
    id: 4,
    title: 'Leadership Role',
    description: 'Shape the future of ADC by taking on executive responsibilities and strategic decision-making.',
    icon: <Star className="w-8 h-8" />,
    skills: ['Strategic Planning', 'Team Management', 'Client Relations', 'Vision Setting'],
    duration: 'Executive Term',
    bgColor: 'bg-gradient-to-br from-red-100 to-pink-100',
    borderColor: 'border-red-400'
  }
]

const Roadmap = () => {
  const [currentPosition, setCurrentPosition] = useState(0)

  const nextPosition = () => {
    setCurrentPosition((prev) => (prev + 1) % roadmapPositions.length)
  }

  const prevPosition = () => {
    setCurrentPosition((prev) => (prev - 1 + roadmapPositions.length) % roadmapPositions.length)
  }

  const goToPosition = (index: number) => {
    setCurrentPosition(index)
  }

  const position = roadmapPositions[currentPosition]

  return (
    <section className="py-20 px-8 bg-gray-50" id="roadmap">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-blue-600 mb-4">
            Your ADC Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover your path through the App Development Club. From bootcamp member to leadership, 
            every step builds your skills and opens new opportunities.
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center items-center mb-12">
          <div className="flex items-center space-x-2">
            {roadmapPositions.map((_, index) => (
              <React.Fragment key={index}>
                <button
                  onClick={() => goToPosition(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentPosition
                      ? 'bg-blue-600 scale-125'
                      : index < currentPosition
                      ? 'bg-blue-400'
                      : 'bg-gray-300'
                  }`}
                />
                {index < roadmapPositions.length - 1 && (
                  <div
                    className={`w-8 h-0.5 transition-colors duration-300 ${
                      index < currentPosition ? 'bg-blue-400' : 'bg-gray-300'
                    }`}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Main Content Card */}
        <div className="relative">
          <div
            className={`${position.bgColor} ${position.borderColor} border-2 rounded-3xl p-8 shadow-lg transition-all duration-500 ease-in-out transform`}
          >
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Icon and Title */}
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-1/3">
                <div className="p-4 bg-white rounded-2xl shadow-md mb-4 text-blue-600">
                  {position.icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">
                  {position.title}
                </h3>
                <span className="text-sm font-medium text-gray-600 bg-white px-3 py-1 rounded-full">
                  {position.duration}
                </span>
              </div>

              {/* Description and Skills */}
              <div className="lg:w-2/3">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  {position.description}
                </p>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">
                    Key Skills & Responsibilities:
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {position.skills.map((skill, index) => (
                      <div
                        key={index}
                        className="bg-white bg-opacity-70 px-3 py-2 rounded-lg text-gray-700 font-medium text-sm"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            onClick={prevPosition}
            variant="outline"
            size="lg"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg hover:bg-gray-50 rounded-full p-3"
            disabled={currentPosition === 0}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <Button
            onClick={nextPosition}
            variant="outline"
            size="lg"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg hover:bg-gray-50 rounded-full p-3"
            disabled={currentPosition === roadmapPositions.length - 1}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>

        {/* Position Counter */}
        <div className="text-center mt-8">
          <span className="text-gray-600 font-medium">
            Step {currentPosition + 1} of {roadmapPositions.length}
          </span>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
            Start Your Journey Today
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Roadmap 