'use client'

import { useState } from "react"
import Image from "next/image"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"
import "yet-another-react-lightbox/plugins/thumbnails.css"

const Gallery = () => {
  const [index, setIndex] = useState(-1);
  const [showAll, setShowAll] = useState(false);

  const photos = [
    // Initial 6 photos
    {
      src: "/images/gallery/funcamp/photos-resized/1.jpg",
      width: 400,
      height: 300,
      title: "Event 1"
    },
    {
      src: "/images/gallery/funcamp/photos-resized/4.jpg",
      width: 400,
      height: 300,
      title: "Event 2"
    },
    {
      src: "/images/gallery/funcamp/photos-resized/6.jpg",
      width: 400,
      height: 300,
      title: "Event 3"
    },
    {
      src: "/images/gallery/funcamp/photos-resized/5.jpg",
      width: 400,
      height: 300,
      title: "Event 4"
    },
    {
      src: "/images/gallery/funcamp/photos-resized/2.jpg",
      width: 400,
      height: 300,
      title: "Event 5"
    },
    {
      src: "/images/gallery/funcamp/photos-resized/3.jpg",
      width: 400,
      height: 300,
      title: "Event 6"
    },
    // Additional photos
    {
      src: "/images/gallery/funcamp/photos-resized/7.jpg",
      width: 400,
      height: 300,
      title: "Event 7"
    },
    {
      src: "/images/gallery/funcamp/photos-resized/16.jpg",
      width: 400,
      height: 300,
      title: "Event 8"
    },
    {
      src: "/images/gallery/funcamp/photos-resized/9.jpg",
      width: 400,
      height: 300,
      title: "Event 9"
    },
    {
      src: "/images/gallery/funcamp/photos-resized/10.jpg",
      width: 400,
      height: 300,
      title: "Event 10"
    },
    {
      src: "/images/gallery/funcamp/photos-resized/14.jpg",
      width: 400,
      height: 300,
      title: "Event 11"
    },
    {
      src: "/images/gallery/funcamp/photos-resized/8.jpg",
      width: 400,
      height: 300,
      title: "Event 12"
    }
  ];

  const displayedPhotos = showAll ? photos : photos.slice(0, 6);

  return (
    <section id='events' className='scroll-mt-12 pb-20'>
      <div className='container'>
        <div className='sm:flex justify-between items-center mb-10'>
          <h2 className='text-midnight_text mb-5 sm:mb-0 capitalize'>
            Our Gallery
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {displayedPhotos.map((photo, index) => (
            <div 
              key={index}
              className="relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => setIndex(index)}
            >
              <Image
                src={photo.src}
                alt={photo.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                priority={index < 6}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
            </div>
          ))}
        </div>

        {!showAll && photos.length > 6 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors duration-300"
            >
              See More Photos
            </button>
          </div>
        )}

        <Lightbox
          slides={photos}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
        />
      </div>
    </section>
  );
};

export default Gallery;