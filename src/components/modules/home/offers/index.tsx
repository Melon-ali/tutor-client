import Image from 'next/image'
import freeOffer from '../../../../assets/free-class.png'
import SecondaryButton from '@/components/shared/SecondaryButton'

const FreeOffer = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16 ">
        <div className="flex justify-center">
          <Image
            src={freeOffer}
            alt="About Us"
            width={600}
            height={400}
            className=" w-full max-w-md md:max-w-none"
          />
        </div>
        <div>
          <h1 className="text-4xl font-semibold text-[#001B61] mb-4">
            <span className="font-bold">Request A Class</span>
            <br /> For FREE Trail
          </h1>
          <p className="text-[#001B61] leading-relaxed">
            Weddings and any opinions suitable smallest nay. My he houses or
            months settle remove ladies appear. Engrossed suffering supposing he
            recommend. Commanded no of depending extremity recommend attention
            tolerably.
          </p>
          <SecondaryButton className="mt-4 py-6 px-6">
            Search Tutor
          </SecondaryButton>
        </div>
      </div>
    </div>
  )
}

export default FreeOffer
