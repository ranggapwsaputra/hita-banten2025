'use client'

import Link from 'next/link'
import { Icon } from '@iconify/react/dist/iconify.js'
import Image from 'next/image'
import Logo from '../Header/Logo'

const Footer = () => {
  return (
    <footer className='bg-deep-slate pt-10'>
      <div className='container'>
        

        <div className='mt-10 lg:flex items-center justify-between border-t border-black/10 py-5'>
          <p className='text-black/50 text-base text-center lg:text-start font-normal'>
            @2025 HITA Banten. All Rights Reserved {' '}
          </p>
          <div className='text-black/50 flex items-center justify-center lg:justify-start mt-5 lg:mt-0'>
            Powered support by :&nbsp;
            <Link 
              href='https://nusanode.com' 
              target='_blank'
              className='hover:opacity-80 transition-opacity'
            >
              <Image
                src="/images/companies/nusanode-ico.png"
                alt="Nusanode"
                width={50}
                height={20}
                className="h-10 w-10"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer