import { Clock } from 'lucide-react';
import { BrowseCourse } from '@/types';

interface BrowseCourseCardProps {
  course: BrowseCourse;
}

export function BrowseCourseCard({ course }: BrowseCourseCardProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
      <div className="aspect-video w-full">
        <img
          src={course.image}
          alt={course.title}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="mb-4 flex items-center gap-2 text-sm text-gray-500">
          <Clock className="h-4 w-4" />
          <span>{course.duration}</span>
        </div>
        <h3 className="mb-2 text-lg font-semibold">{course.title}</h3>
        <p className="mb-4 text-sm text-gray-500">{course.description}</p>
        <button className="text-sm font-medium text-primary hover:underline">
          View Course
        </button>
      </div>
    </div>
  );
}