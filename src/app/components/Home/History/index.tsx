'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const HistoryCard = () => {
  const [isReadMore, setIsReadMore] = useState(false)

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore)
  }

  return (
    <section id="history" className="scroll-mt-12 pb-20">
      <div className="container">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Image Section - Tambahkan fixed height */}
            <div className="md:w-1/2 h-[400px]"> {/* Menambahkan fixed height */}
              <div className="relative w-full h-full"> {/* Wrapper dengan relative position */}
                <Image 
                  src="/images/hita-banten.jpg"
                  alt="HITA Deklarasi"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="absolute inset-0"
                />
              </div>
            </div>

{/* Content Section */}
            <div className="md:w-1/2 p-8">

              <h2 className="text-2xl font-bold mb-4">🏨 History of HITA BANTEN</h2>
              
              <p className="mb-4">
                Hotel Information Technology Association (HITA) Banten resmi terbentuk pada tahun 2019, di bawah kepemimpinan Bapak Sandi Winawa (2019-2023) sebagai ketua pertama. 
                </p>

                <p className="mb-4"> Lalu dilanjutkan oleh Bapak Selamet Riyadi ditahun (2023-saat ini). Komunitas ini merupakan pengembangan dari HITA Tangerang, yang telah berdiri sejak tahun 2016 dan menjadi cikal bakal terbentuknya jaringan HITA di wilayah Banten.
              </p>

              <p className="mb-4">
                Tujuan utama berdirinya HITA Banten adalah untuk mempererat silaturahmi antar anggota komunitas HITA di seluruh daerah Banten, serta menjadi wadah komunikasi, kebersamaan, dan solidaritas bagi para anggotanya.

              </p>

              {isReadMore && (
                <>
                  <p className="mb-4">
                    Sejak awal berdirinya, HITA Banten aktif mengadakan berbagai kegiatan dan kebersamaan menjadi fondasi kuat yang terus dijaga hingga saat ini.
                  </p>

                  <p className="mb-4">
                    Dengan dukungan seluruh pengurus dan anggota, HITA Banten terus berkembang sebagai komunitas yang solid, kompak, dan berkontribusi positif di setiap kegiatan.
                  </p>
                </>
              )}

              <button 
                onClick={toggleReadMore}
                className="inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition duration-300"
              >
                {isReadMore ? 'Show less' : 'Read More'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HistoryCard