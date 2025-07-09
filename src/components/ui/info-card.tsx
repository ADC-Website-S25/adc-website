
interface InfoCardProps {
  title: string;
  description: string;
}

const InfoCard = ({ title, description }: InfoCardProps) => {
  return (
    <div className="bg-gradient-to-br from-[#00B5FF] to-[#0083FF] p-[4px] rounded-4xl shadow-lg hover:scale-[1.01] transition-transform">
      <div className="bg-white rounded-[calc(2rem-4px)] flex flex-col items-center gap-5 p-10 h-80 w-72">
        <h3 className="text-2xl font-bold uppercase">{title}</h3>
        <p className="mt-5">{description}</p>
      </div>
    </div>
  )
}

export default InfoCard