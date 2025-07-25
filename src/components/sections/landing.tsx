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
    <section className='w-full bg-gradient-blue pt-44 pb-44 flex flex-col items-center lg:px-12 xl:px-8 2xl:px-40' id='home'>
      <div className='w-full max-w-8xl flex justify-between'>
        <div className='flex flex-col justify-center gap-4 text-white text-6xl xl:text-7xl font-bold xl:bg-green-400'>
          <h2>Empower Code.</h2>
          <h2>Inspire Design.</h2>
          <h2>Drive Innovation.</h2>
        </div>

        {/* Image gallery */}
        <Carousel 
          opts={{
            loop: true,
          }}
          className='lg:w-[420px] lg:h-[257px] xl:w-[630px] xl:h-[386px] rounded-xl overflow-hidden'
        >
          <CarouselContent>
            {photoGallery.map((photo, index) => (
              <CarouselItem key={index}>
          <Image
            src={photo.src}
            alt={photo.alt}
            width={420}
            height={257}
            className="lg:w-[420px] lg:h-[257px] xl:w-[630px] xl:h-[386px] object-cover rounded-xl"
            draggable={false}
            loading={index === 0 ? 'eager' : 'lazy'}
            priority={index === 0}
            decoding='async'
          />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
          <CarouselDots />
        </Carousel>
      </div>

      <div className='w-full max-w-8xl flex justify-around mt-20'>
        <span className='flex flex-col items-center justify-center text-white'>
          <p className='text-5xl xl:text-6xl font-bold'>$1,000,000+</p>
          <p className='text-2xl'>Dollars Saved</p>
        </span>

        <span className='flex flex-col items-center justify-center text-white'>
          <p className='text-5xl xl:text-6xl font-bold'>300+</p>
          <p className='text-2xl'>Members</p>
        </span>

        <span className='flex flex-col items-center justify-center text-white'>
          <p className='text-5xl xl:text-6xl font-bold'>90,000+</p>
          <p className='text-2xl'>Lines of Code</p>
        </span>
      </div>
    </section>
  )
}

export default Landing