import { LeadershipMember, leadershipMembers } from "@/data/leadership"
import Image from "next/image"

const Leadership = () => {
  return (
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
      </div>
    </section>
  )
}


const Member = ({ name, role, src }: LeadershipMember) => {
  return (
    <div className='flex flex-col items-center w-56'>
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
          className='w-40 h-40 rounded-full mb-2'
        />
        :
        <div 
          title={name}
          className='w-40 h-40 bg-gray-200 rounded-full mb-2 flex items-center justify-center'
        />
      }
      <h4 className='mt-2 text-lg font-semibold text-center'>{name}</h4>
      <p className='text-sm text-gray-600'>{role}</p>
    </div>
  )
}

export default Leadership