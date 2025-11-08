'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import Slider from 'react-slick'
import { useState } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Events = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const events = [
    { 
      imgSrc: '/images/testimonial/dbust.png',
      heading: 'Anniversary HITA Banten 2023',
      date: '12 August 2023',
      location: 'Azana Style Hotel Bandara',
      seats: 150,
      description: 'EXHIBITIONS | UPGRADE KNOWLEDGE | INTRODUCTION OF INNOVATIONS TECHNOLOGY. DEBUS BANTEN | SOCIALIZATION | TALK-IT (TALKSHOWNYA IT) | DOOR PRIZE'
    },
    {
      imgSrc: '/images/testimonial/funcamp.png',
      heading: 'Fun Camp 2025',
      date: '1 - 2 November 2025',
      location: 'land.euh Jawa Barat',
      seats: 30,
      description: 'Team Building | Outdoor Activities | Nature Experience'
    },
  ]

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 500,
    cssEase: 'linear',
  }

  return (
    <section id='events' className='scroll-mt-12 pb-20'>
      <div className='container'>
        <div className='sm:flex justify-between items-center mb-10'>
          <h2 className='text-midnight_text mb-5 sm:mb-0 capitalize'>
            Our Events
          </h2>
          <Link
            href='/events'
            className='text-primary text-lg font-medium hover:underline duration-500'>
            View All Events&nbsp;&gt;
          </Link>
        </div>

        <Slider {...settings}>
          {events.map((event, i) => (
            <div key={i}>
              <div className='bg-white shadow-lg rounded-2xl overflow-hidden'>
                <div className='flex flex-col md:flex-row'>
                  {/* Left side - Image */}
                  <div className='md:w-1/2'>
                    <div className='relative h-[300px] md:h-[400px]'>
                      <Image
                        src={event.imgSrc}
                        alt={event.heading}
                        fill
                        className='object-cover'
                        priority={i === 0}
                      />
                    </div>
                  </div>

                  {/* Right side - Content */}
                  <div className='md:w-1/2 p-6 md:p-8 flex flex-col justify-between'>
                    <div>
                      <h3 className='text-2xl md:text-3xl font-bold mb-6'>
                        {event.heading}
                      </h3>

                      <div className='space-y-4 mb-6'>
                        <div className='flex items-center'>
                          <Icon
                            icon='tabler:calendar'
                            className='text-primary text-2xl mr-3'
                          />
                          <span className='text-lg'>{event.date}</span>
                        </div>

                        <div className='flex items-center'>
                          <Icon
                            icon='tabler:map-pin'
                            className='text-primary text-2xl mr-3'
                          />
                          <span className='text-lg'>{event.location}</span>
                        </div>

                        <div className='flex items-center'>
                          <Icon
                            icon='solar:users-group-rounded-linear'
                            className='text-primary text-2xl mr-3'
                          />
                          <span className='text-lg'>{event.seats} Seats Available</span>
                        </div>
                      </div>

                      <p className='text-gray-600 text-base md:text-lg mt-6'>
                        {event.description}
                      </p>
                    </div>

                    <div className='mt-8'>
                      <Link
                        href='#'
                        className='inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-300'
                      >
                        Register Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div 
              className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-lg p-2"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-4 -right-4 bg-white w-8 h-8 rounded-full flex items-center justify-center shadow-lg z-10 hover:bg-gray-100"
              >
                <Icon icon="tabler:x" className="text-xl" />
              </button>
              <div className="relative w-full h-[80vh]">
                <Image
                  src={selectedImage}
                  alt="Event preview"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1536px) 100vw"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Events