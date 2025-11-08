'use client'

import Image from 'next/image'
import { useState } from 'react'

const Mentor = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section id="teams" className="py-20 bg-[#EEF7FF]">
        
        <div className="relative w-full">
          <div className="max-w-[1200px] mx-auto overflow-x-auto pb-6">
            <div className="min-w-[1000px] p-4"> 
              {/* Clickable Image */}
              <div 
                onClick={() => setIsModalOpen(true)}
                className="cursor-pointer"
              >
                <Image
                  src="/images/organization-chart.png"
                  alt="HITA Banten Organization Structure"
                  width={1000}
                  height={600}
                  className="w-full h-auto rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.16)] transition-shadow duration-300"
                />
              </div>
            </div>
          </div>
          
          <div className="block md:hidden text-center text-sm text-gray-500 mt-4">
            Geser ke kiri untuk melihat struktur lengkap
          </div>
        </div>

        {/* Modal/Popup */}
        {isModalOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <div className="relative max-w-[90vw] max-h-[90vh]">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                </svg>
              </button>
              <Image
                src="/images/organization-chart.png"
                alt="HITA Banten Organization Structure"
                width={1500}
                height={900}
                className="w-auto h-auto max-w-full max-h-[90vh] object-contain"
              />
            </div>
          </div>
        )}

    </section>
  )
}


export default Mentor