import { LeadershipMember, leadershipMembers } from "@/data/leadership"
import Image from "next/image"

const Leadership = () => {
  return (
<<<<<<< Updated upstream
    <section id='leadership' className='flex flex-col items-center justify-center w-full mt-24 gap-12'>
      <h3 className="relative z-10 bg-white px-6 text-4xl font-bold text-subheader">
        Our Leadership
      </h3>
      <div className="flex flex-wrap justify-center gap-y-10 gap-x-5 max-w-7xl px-4">
        {leadershipMembers.map((member, index) => (
          <Member 
            key={index}
            name={member.name}
            role={member.role}
            src={member.src}
          />
        ))}
=======
    <section className="mt-15 pb-16" id="leadership">
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
>>>>>>> Stashed changes
      </div>
    </section>
  )
}


const Member = ({ name, role, src }: LeadershipMember) => {
  return (
    <div className='flex flex-col items-center md:w-56 w-36'>
      {src ?
      <Image
        src={src}
        alt={`${name}'s photo`}
        title={name}
        draggable={false}
        loading='lazy'
        priority={false}
        width={160}
        height={160}
        className='rounded-full mb-2 md:w-40 md:h-40 w-28 h-28'
      />
      :
      <div
        title={name}
        className='bg-gray-200 rounded-full mb-2 flex items-center justify-center md:w-40 md:h-40 w-28 h-28 text-center'
      />
      }
      <h4 className='mt-2 md:text-lg text-base font-semibold text-center'>{name}</h4>
      <p className='md:text-sm text-xs text-gray-600 text-center'>{role}</p>
    </div>
  )
}

export default Leadership