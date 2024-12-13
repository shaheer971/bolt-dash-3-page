import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Course } from '@/types';

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="rounded-xl border border-gray-200 bg-white p-6"
    >
      <div className="mb-4">
        <img src={course.icon} alt="" className="h-10 w-10" />
      </div>
      <h3 className="mb-4 text-lg font-semibold">{course.title}</h3>
      <div className="mb-4">
        <div className="mb-2 flex justify-between text-sm">
          <span>{course.duration}</span>
          <span>{Math.round(course.progress)}%</span>
        </div>
        <div className="h-2 rounded-full bg-gray-100">
          <div
            className="h-full rounded-full bg-primary"
            style={{ width: `${course.progress}%` }}
          />
        </div>
      </div>
      <button className="flex items-center text-sm font-medium text-primary hover:underline">
        Continue
        <ArrowRight className="ml-1 h-4 w-4" />
      </button>
    </motion.div>
  );
}