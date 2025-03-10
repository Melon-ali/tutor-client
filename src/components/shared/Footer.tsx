import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import logo from '@/assets/logo/logo-2.png'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white text-[#001B61]">
      <div className="w-[80%] mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-2">
            <div className="">
              <Image src={logo} alt="MediMart Logo" width={200} height={200} />
            </div>
            <p className="text-sm">
              Silent sir say desire fat him letter. Whatever settling goodness
              too and honoured she building.
            </p>
            <div className="flex space-x-3">
              <Button
                variant="ghost"
                size="icon"
                className="text-[#F16001]"
                asChild
              >
                <Link href="#" target="_blank">
                  <FaFacebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-[#F16001]"
                asChild
              >
                <Link href="#" target="_blank">
                  <FaInstagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-[#F16001]"
                asChild
              >
                <Link href="#" target="_blank">
                  <FaTwitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-[#F16001]"
                asChild
              >
                <Link href="#" target="_blank">
                  <FaLinkedin className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </Button>
            </div>
          </div>

          {/* Latest Courses */}
          <div>
            <h3 className="text-lg font-bold mb-4">Latest Courses</h3>
            <div className="flex flex-col gap-2">
              <Link
                href="/shop"
                className=" hover:text-[#F16001] dark:text-gray-400 dark:hover:text-[#F16001] text-sm"
              >
                {' '}
                Development
              </Link>
              <Link
                href="/prescriptions"
                className=" hover:text-[#F16001] dark:text-gray-400 dark:hover:text-[#F16001] text-sm"
              >
                Design
              </Link>
              <Link
                href="/orders"
                className=" hover:text-[#F16001] dark:text-gray-400 dark:hover:text-[#F16001] text-sm"
              >
                Marketing
              </Link>
              <Link
                href="/about"
                className=" hover:text-[#F16001] dark:text-gray-400 dark:hover:text-[#F16001] text-sm"
              >
                IT & Software
              </Link>
              <Link
                href="/about"
                className=" hover:text-[#F16001] dark:text-gray-400 dark:hover:text-[#F16001] text-sm"
              >
                Photography
              </Link>
            </div>
          </div>

          {/* Our Pages */}
          <div>
            <h3 className="text-lg font-bold mb-4 dark:text-gray-100">
              Our Pages
            </h3>
            <div className="flex flex-col gap-2">
              <Link
                href="/shop"
                className=" hover:text-[#F16001] dark:text-gray-400 dark:hover:text-[#F16001] text-sm"
              >
                About
              </Link>
              <Link
                href="/prescriptions"
                className=" hover:text-[#F16001] dark:text-gray-400 dark:hover:text-[#F16001] text-sm"
              >
                Courses
              </Link>
              <Link
                href="/orders"
                className=" hover:text-[#F16001] dark:text-gray-400 dark:hover:text-[#F16001] text-sm"
              >
                Gallery
              </Link>
              <Link
                href="/about"
                className=" hover:text-[#F16001] dark:text-gray-400 dark:hover:text-[#F16001] text-sm"
              >
                Career
              </Link>
              <Link
                href="/about"
                className=" hover:text-[#F16001] dark:text-gray-400 dark:hover:text-[#F16001] text-sm"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Valuable Links</h3>
            <div className="flex flex-col gap-2">
              <Link
                href="/shop"
                className=" hover:text-[#F16001] dark:text-gray-400 dark:hover:text-[#F16001] text-sm"
              >
                {' '}
                Pricingt
              </Link>
              <Link
                href="/prescriptions"
                className=" hover:text-[#F16001] dark:text-gray-400 dark:hover:text-[#F16001] text-sm"
              >
                Privacy
              </Link>
              <Link
                href="/orders"
                className=" hover:text-[#F16001] dark:text-gray-400 dark:hover:text-[#F16001] text-sm"
              >
                Conditions
              </Link>
              <Link
                href="/about"
                className=" hover:text-[#F16001] dark:text-gray-400 dark:hover:text-[#F16001] text-sm"
              >
                Refund Policy
              </Link>
              <Link
                href="/about"
                className=" hover:text-[#F16001] dark:text-gray-400 dark:hover:text-[#F16001] text-sm"
              >
                {' '}
                Our Product
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              © {new Date().getFullYear()} Copyright All Review{' '}
              <span className="text-[#F16001]">Edu</span>Skills.
            </p>
            <div className="flex gap-4 text-sm">
              <Link href="/privacy" className="hover:text-[#F16001]">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-[#F16001]">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
