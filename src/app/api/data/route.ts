import { CourseType } from '@/app/types/history'
import { MentorType } from '@/app/types/mentor'
import { HeaderType } from '@/app/types/menu'
import { TestimonialType } from '@/app/types/testimonial'
import { NextResponse } from 'next/server'

const HeaderData: HeaderType[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#history  ' },
  { label: 'Official Teams', href: '/#teams' },
  { label: 'Event', href: '/#events' },
  { label: 'Articles', href: '/#articles' },
]

const TechGaintsData: { imgSrc: string }[] = [
  {
    imgSrc: '/images/companies/airbnb.svg',
  },
  {
    imgSrc: '/images/companies/fedex.svg',
  },
  {
    imgSrc: '/images/companies/google.svg',
  },
  {
    imgSrc: '/images/companies/hubspot.svg',
  },
  {
    imgSrc: '/images/companies/microsoft.svg',
  },
  {
    imgSrc: '/images/companies/walmart.svg',
  },
  {
    imgSrc: '/images/companies/airbnb.svg',
  },
  {
    imgSrc: '/images/companies/fedex.svg',
  },
]

const CourseData: CourseType[] = [
  {
    heading: 'DBust 5.0',
    name: 'Anniversary HITA Banten',
    imgSrc: '/images/testimonial/dbust.png',
    students: 150,
    classes: 12,
    price: 0,
    rating: 4.4,
  },
  {
    heading: 'Fun Camp 2025',
    name: 'Support by : Bit Defender',
    imgSrc: '/images/testimonial/funcamp.png',
    students: 30,
    classes: 12,
    price: 0,
    rating: 4.5,
  },
]

const MentorData: MentorType[] = [
  {
    profession: 'Senior UX Designer',
    name: 'Shoo Thar Mien',
    imgSrc: '/images/mentor/user1.webp',
  },
  {
    profession: 'Product Design Lead',
    name: 'Lina Carter',
    imgSrc: '/images/mentor/user2.webp',
  },
  {
    profession: 'UI/UX Strategy Consultant',
    name: 'Ethan Nakamura',
    imgSrc: '/images/mentor/user3.webp',
  },
]

const TestimonialData: TestimonialType[] = [
  {
    name: 'Michelle Bennett',
    profession: 'CEO, Parkview International Ltd',
    comment:
      'The courses transformed my career! The practical approach and expert mentorship made all the difference.',
    imgSrc: '/images/testimonial/user1.webp',
    rating: 5,
  },
  {
    name: 'Leslie Alexander',
    profession: 'Founder, TechWave Solutions',
    comment:
      'Engaging content and flexible learning schedules helped me upskill without disrupting my work.',
    imgSrc: '/images/testimonial/user2.webp',
    rating: 5,
  },
  {
    name: 'Cody Fisher',
    profession: 'Product Manager, InnovateX',
    comment:
      'Highly recommend! The hands-on projects and supportive community boosted my confidence and skills.',
    imgSrc: '/images/testimonial/user3.webp',
    rating: 5,
  },
]

export const GET = () => {
  return NextResponse.json({
    HeaderData,
    TechGaintsData,
    CourseData,
    MentorData,
    TestimonialData,
  })
}
