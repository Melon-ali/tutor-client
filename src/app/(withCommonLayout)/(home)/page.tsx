import FAQ from '@/components/modules/home/FAQ/FAQ'
import HeroSection from '@/components/modules/home/heroSection'
import Offers from '@/components/modules/home/offers'
import CoursesSection from '@/components/modules/home/course'
import TutorSection from '@/components/modules/home/tutor'
import { getAllTutorProfileInfo } from '@/services/Profile'
import { getAllSubject } from '@/services/Subject'
import React from 'react'
import BlogSection from '@/components/modules/blog/BlogSection'
import WSection from '@/components/modules/home/WSection/WSection'

const HomePage = async () => {
  const { data } = await getAllSubject()
  const tutorData = await getAllTutorProfileInfo()

  return (
    <div>
      <HeroSection />
      <WSection />
      <Offers />
      <CoursesSection data={data} />
      <TutorSection data={tutorData?.data} />
      <BlogSection />
      <FAQ />
    </div>
  )
}

export default HomePage
