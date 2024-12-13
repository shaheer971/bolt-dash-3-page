import { Book, GraduationCap } from 'lucide-react';
import { StatsCard } from '@/components/StatsCard';
import { CourseCard } from '@/components/CourseCard';
import { inProgressCourses } from '@/data/courses';

export function HomePage() {
  return (
    <main className="flex-1 overflow-y-auto p-8">
      <h1 className="mb-8 text-3xl font-bold">Welcome back, John</h1>
      
      <div className="mb-12 grid grid-cols-2 gap-6">
        <StatsCard
          icon={<Book className="h-6 w-6" />}
          value={24}
          label="Enrolled Course"
          color="bg-teal-500"
        />
        <StatsCard
          icon={<GraduationCap className="h-6 w-6" />}
          value={56}
          label="Lesson"
          color="bg-purple-500"
        />
      </div>

      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Courses In Progress</h2>
        <div className="flex gap-2">
          <button className="rounded-full p-2 hover:bg-gray-100">
            <svg
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button className="rounded-full p-2 hover:bg-gray-100">
            <svg
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {inProgressCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </main>
  );
}