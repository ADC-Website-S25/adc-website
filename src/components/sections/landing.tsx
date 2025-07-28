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
import SlidingNumber from '../ui/sliding-number'

const Landing = () => {
  return (
    <section className='w-full bg-gradient-blue pt-32 lg:pt-44 pb-32 flex flex-col items-center lg:px-12 xl:px-8 2xl:px-40' id='home'>
      <div className='w-full max-w-8xl flex flex-col lg:flex-row max-lg:items-center lg:justify-between max-lg:gap-10 max-lg:px-4'>
        <div className='max-lg:text-center flex flex-col justify-center gap-4 text-white text-4xl md:text-6xl xl:text-7xl font-bold'>
          <h2>Empower Code.</h2>
          <h2>Inspire Design.</h2>
          <h2>Drive Innovation.</h2>
        </div>

        {/* Image gallery */}
        <Carousel 
          opts={{
            loop: true,
          }}
          className='w-full max-w-xl aspect-[630/386] lg:w-[420px] lg:h-[257px] xl:w-[630px] xl:h-[386px] rounded-xl overflow-hidden'
        >
          <CarouselContent>
            {photoGallery.map((photo, index) => (
              <CarouselItem key={index}>
                <div className="w-full h-full overflow-hidden rounded-xl">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={630}
                    height={386}
                    className="w-full max-w-xl aspect-[630/386] lg:w-[420px] lg:h-[257px] xl:w-[630px] xl:h-[386px] object-cover rounded-xl"
                    draggable={false}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    priority={index === 0}
                    decoding='async'
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
          <CarouselDots />
        </Carousel>
      </div>

      <div className='w-full max-w-8xl flex flex-col lg:flex-row justify-around items-center mt-20 gap-8 lg:gap-0'>
        <span className='flex flex-col items-center justify-center text-white'>
          <span className='flex items-baseline'>
            <p className='text-5xl xl:text-6xl font-bold'>$</p>
            <SlidingNumber
              value={1000000}
              className='text-5xl xl:text-6xl font-bold'
            />
            <p className='text-5xl xl:text-6xl font-bold'>+</p>
          </span>
          <p className='text-2xl'>Dollars Saved</p>
        </span>

        <div className='hidden md:flex lg:contents flex-row justify-around w-full max-w-4xl'>
          <span className='flex flex-col items-center justify-center text-white'>
            <span className='flex items-baseline'>
              <SlidingNumber
                value={300}
                className='text-5xl xl:text-6xl font-bold'
              />
              <p className='text-5xl xl:text-6xl font-bold'>+</p>
            </span>
            <p className='text-2xl'>Members</p>
          </span>

          <span className='flex flex-col items-center justify-center text-white'>
            <span className='flex items-baseline'>
              <SlidingNumber
                value={90000}
                className='text-5xl xl:text-6xl font-bold'
              />
              <p className='text-5xl xl:text-6xl font-bold'>+</p>
            </span>
            <p className='text-2xl'>Lines of Code</p>
          </span>
        </div>

        <span className='flex flex-col items-center justify-center text-white md:hidden'>
          <span className='flex items-baseline'>
            <SlidingNumber
              value={90000}
              className='text-5xl xl:text-6xl font-bold'
            />
            <p className='text-5xl xl:text-6xl font-bold'>+</p>
          </span>
          <p className='text-2xl'>Lines of Code</p>
        </span>
        
        <span className='flex flex-col items-center justify-center text-white md:hidden'>
          <span className='flex items-baseline'>
            <SlidingNumber
              value={300}
              className='text-5xl xl:text-6xl font-bold'
            />
            <p className='text-5xl xl:text-6xl font-bold'>+</p>
          </span>
          <p className='text-2xl'>Members</p>
        </span>
      </div>
    </section>
  )
}

export default Landing