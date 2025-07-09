import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { photoGallery } from '@/data/photo-gallery'

const Landing = () => {
  return (
    <section className='w-full bg-gradient-blue pt-36 pb-44 flex flex-col items-center px-40'>
      <div className='w-full flex justify-between'>
        <div className='flex flex-col justify-center gap-4 text-white text-7xl font-bold'>
          <h2>Empower Code.</h2>
          <h2>Inspire Design.</h2>
          <h2>Drive Innovation.</h2>
        </div>

        {/* Image gallery */}
        <Carousel 
          opts={{
            loop: true,
          }}
          className='w-[630px] h-[386px] rounded-xl overflow-hidde'
        >
          <CarouselContent className=''>
            {photoGallery.map((photo, index) => (
              <CarouselItem key={index}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={630}
                  height={386}
                  className="w-[630px] h-[386px] object-cover rounded-xl"
                  priority={index === 0} // Load the first image with priority only
                  decoding='async' // Use async decoding for better performance
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
          <CarouselDots />
        </Carousel>
      </div>

      <div className='flex w-full justify-around mt-20'>
        <span className='flex flex-col items-center justify-center text-white'>
          <p className='text-6xl font-bold'>$1,000,000+</p>
          <p className='text-2xl'>Dollars Saved</p>
        </span>

        <span className='flex flex-col items-center justify-center text-white'>
          <p className='text-6xl font-bold'>300+</p>
          <p className='text-2xl'>Members</p>
        </span>

        <span className='flex flex-col items-center justify-center text-white'>
          <p className='text-6xl font-bold'>90,000+</p>
          <p className='text-2xl'>Lines of Code</p>
        </span>
      </div>
    </section>
  )
}

export default Landing