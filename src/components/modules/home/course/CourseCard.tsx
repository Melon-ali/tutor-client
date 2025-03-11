import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
// import { Badge } from "@/components/ui/badge";
import Image from 'next/image'
import Link from 'next/link'
import { ISubject } from '@/types'
import SecondaryButton from '@/components/shared/SecondaryButton'

const CourseCard = ({ data: course }: { data: ISubject }) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 flex flex-col h-full text-[#001B61] bg-surface">
      <CardHeader className="p-0">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={course?.image}
            alt={course.name}
            width={1280}
            height={720}
            className="object-cover group-hover:scale-110 transition-transform duration-300"
            priority
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="mb-4 line-clamp-1">{course.name}</CardTitle>

        <div className="space-y-4">
          <time
            dateTime={course?.createdAt || new Date().toISOString()}
            className="block text-xs text-[#001B61]"
          >
            {new Date(course.createdAt).toLocaleDateString()}
          </time>
          <p className="line-clamp-3 text-sm/relaxed text-[#001B61]">
            {/* {course.description || "No description available for this course."} */}
            {'No description available for this course.'}
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
        <Link href={`/course/${course?._id}`} className="w-full">
          <SecondaryButton className="w-full">View Details</SecondaryButton>
        </Link>
      </CardFooter>
    </Card>
  )
}

export default CourseCard
