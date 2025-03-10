import { ISubject } from "@/types";
// import CourseItem from "./CourseItem";
import Link from "next/link";
import PrimaryButton from "@/components/shared/PrimaryButton";
import CourseCard from "./CourseCard";

const CoursesSection = ({ data }: { data: ISubject[] }) => {
  // Corrected data type to array
  return (
    <div className="bg-gray-50 py-12  mt-16 px-6 md:px-12 lg:px-24">
      <div className="text-center mb-12 max-w-2xl mx-auto">
        
        <h2 className="text-4xl font-semibold my-4 text-[#001B61] font-mono">
        <span className="font-bold">Join Our World Class</span> Best Courses
        </h2>
        <p className="text-sm text-[#001B61]">
          Our team of experienced and certified instructors is committed to
          helping you achieve fluency and confidence in English.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto  max-w-7xl">
        {data?.slice(0, 6).map((course) => (
          <CourseCard key={course._id} data={course} />
        ))}
      </div>
      <div className="mt-8 flex justify-center ">
        <Link href={"/course"}>
          <PrimaryButton className="mt-4 py-6 px-6">View All Courses</PrimaryButton>
        </Link>
      </div>
    </div>
  );
};

export default CoursesSection;
