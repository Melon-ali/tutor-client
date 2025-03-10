import Image from 'next/image'
import bg from '../../../../assets/banner/bg-6.png'
import SecondaryButton from '@/components/shared/SecondaryButton'

const HeroSection = () => {
  return (
    <div className="relative">
      {/* Banner Section */}
      <div className="relative lg:h-[700px] h-screen flex items-center justify-center text-[#001B61]">
        {/* Image with Black Gradient Overlay */}
        <div className="absolute inset-0 z-[-1]">
          <Image
            src={bg}
            alt="Banner Image"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Content */}
        <div className="text-center px-6 md:px-8 lg:px-12 mt-30">
          <div className="p-6 rounded-lg lg:w-6xl">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
              Transforming Lives Through Education.
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-sm md:text-base">
              Your English Progress is What Matters the Most to Us. If you’re
              Not Satisfied After 12 Weeks, You Get Your Money Back.
            </p>
            <SecondaryButton className="mt-4 py-6 px-6">
              Start Now
            </SecondaryButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
