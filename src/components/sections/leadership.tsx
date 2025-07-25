import React from 'react'

const leaders = [
  { name: 'Alice Smith', title: 'President' },
  { name: 'Bob Johnson', title: 'Vice President' },
  { name: 'Carol Lee', title: 'Treasurer' },
  { name: 'David Kim', title: 'Secretary' },
  { name: 'Eva Brown', title: 'Project Manager' },
  { name: 'Frank White', title: 'Tech Lead' },
  { name: 'Grace Green', title: 'Design Lead' },
  { name: 'Henry Black', title: 'Marketing Lead' },
  { name: 'Ivy Blue', title: 'Events Chair' },
  { name: 'Jack Red', title: 'Outreach Chair' },
  { name: 'Kara Gold', title: 'Membership Chair' },
  { name: 'Leo Silver', title: 'Advisor' },
]

const Leadership = () => {
  return (
    <section className="mt-15" id="leadership">
      <div className="w-full my-8 flex items-center justify-center">
        <h2 className="text-5xl font-bold text-blue-600 bg-white px-6 text-center">
          Our Leadership
        </h2>
      </div>
      <div className="w-full px-2 sm:px-4 flex flex-col gap-12">
        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-9 text-center w-full"
        >
          {leaders.map((leader, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full bg-gray-300 mb-3 flex items-center justify-center"></div>
              <div className="text-sm font-semibold text-gray-700">{leader.name}</div>
              <div className="text-xs text-gray-500">{leader.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Leadership