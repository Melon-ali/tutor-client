import { IProfile } from "@/types";
import Image from "next/image";
import Link from "next/link";

const TutorSection = ({ data }: { data: IProfile[] }) => {
  return (
    <div className="py-12 px-6 md:px-12 lg:px-24">
      {/* Header Section */}
      <div className="text-center max-w-2xl mx-auto text-[#001B61]">
        <h2 className="text-4xl font-semibold my-4 font-mono">
        <span className="font-bold">Tutors</span> Joined Recently
        </h2>
        <p className="text-sm">
          Our team of experienced and certified instructors is committed to
          helping you achieve fluency and confidence in English.
        </p>
      </div>

      {/* Tutors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-7xl">
        {data?.map((tutor: IProfile) => (
          <Link
            href={`/tutor/${tutor._id}`}
            key={tutor._id}
            className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xs transition hover:shadow-lg"
          >
            {/* Tutor Image */}
            <Image
              src={tutor.image || "/placeholder-image.png"}
              alt={"Tutor Image"}
              width={500}
              height={300}
              className="h-56 w-full object-cover"
            />

            {/* Tutor Info */}
            <div className="p-4 sm:p-6">
              <h3 className="text-lg font-medium text-[#001B61]">
                {tutor.userId.name || "Untitled"}
              </h3>
              <p className="mt-2 line-clamp-3 text-sm/relaxed text-[#001B61]">
                {tutor.userId.email || "No description available."}
              </p>
              <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#F16001] group">
                Find Out More
                <span
                  aria-hidden="true"
                  className="block transition-all group-hover:ms-0.5"
                >
                  &rarr;
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TutorSection;
