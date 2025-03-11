import { ISubject } from '@/types'
import CourseCard from '../home/course/CourseCard'

const AllSubject = ({ subject }: { subject: ISubject[] }) => {
  return (
    <div className="flex gap-8 my-10">

      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {subject?.map((product: ISubject) => (
            <CourseCard key={product._id} data={product} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default AllSubject
