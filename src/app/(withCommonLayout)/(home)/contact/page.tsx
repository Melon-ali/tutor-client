import Banner from '@/components/shared/banner'
import PrimaryButton from '@/components/shared/PrimaryButton'
import Image from 'next/image'
import logo from '../../../../assets/logo/logo-2.png'

export default function ContactPage() {
  return (
    <div className="bg-gray-50">
      <Banner title="contact" path="Home - Contact" />

      <main className="container mx-auto px-4 py-10">
        {/* Contact Info Section */}
        <section className="grid lg:grid-cols-2 gap-8 items-center mb-16">
          <div>
            <h3 className="text-4xl font-bold text-[#001B61] mb-4">
              Contact Info
            </h3>
            <p className="text-[#001B61] leading-relaxed mb-6">
              Welcome to our Website. We are glad to have you around.Your email
              address will not be published. Required fields are marked.
            </p>
            <div className="flex items-center gap-4 mb-4">
              <Image
                src={logo}
                alt="Company Logo"
                width={100}
                height={100}
                className="rounded-full"
              />
              <div className="text-[#001B61]">
                <p className="font-bold">Edu Skills</p>
                <p>info@eduskills.com</p>
                <p>031-4456-528</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#001B61] mb-4">
              Send a Message
            </h3>
            <form className="bg-white shadow-md rounded-lg p-6 space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="text"
                placeholder="Phone"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              ></textarea>
              <PrimaryButton className="w-full">SEND MESSAGE</PrimaryButton>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}
