import Image from 'next/image'
import abImage from '../../../../assets/about-img.jpg'
import aImage from '../../../../assets/about5.jpg'
import SecondaryButton from '@/components/shared/SecondaryButton'

const WSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16 ">
        <div className="flex justify-center">
          <Image
            src={abImage}
            alt="About Us"
            width={600}
            height={400}
            className="rounded-lg shadow-lg w-full max-w-md md:max-w-none"
          />
        </div>
        <div>
          <h1 className="text-3xl font-semibold text-[#001B61] mb-4">
            <span className="font-bold">Who</span> We Are
          </h1>
          <p className="text-[#001B61] leading-relaxed mb-4">
            Dispatched entreaties boisterous say why stimulated. Certain forbade
            pcture now prevent carried she sitting. Uneasy barton seeing remark
            happen hi has.
          </p>
          <p className="text-[#001B61] leading-relaxed">
            Am possible offering contempt mr distance stronger an. Attachment
            excellence announcing or reasonable am on if indulgence. Exeter
            talked in agreed spirit no he unable do. Betrayed shutters in
            vicinity it unpacked in.
          </p>
        </div>
      </div>

      {/* Learning Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
        <div>
          <h2 className="text-2xl font-bold text-[#001B61] mb-4">
            Admission Open For 2025-2026
          </h2>
          <p className="text-[#001B61] leading-relaxed mb-4">
            Dispatched entreaties boisterous say why stimulated. Certain forbade
            pcture now prevent carried shegetsee.Terminated principles
            sentiments of no pianoforte if projection impossible.
          </p>
          <p className="text-[#001B61] leading-relaxed mb-6">
            Horses pulled nature favour number yet highly his has old.
            Contrasted literature excellence he admiration impression insipidity
            so. Scale ought who terms after own quick since. Servants margaret
            husbands to screened in throwing.
          </p>
          <SecondaryButton className='mt-4 py-6 px-6'>Learn More</SecondaryButton>
        </div>
        <div className="flex justify-center">
          <Image
            src={aImage}
            alt="Learning"
            width={600}
            height={400}
            className="rounded-lg shadow-lg w-full max-w-md md:max-w-none"
          />
        </div>
      </div>
    </div>
  )
}

export default WSection
