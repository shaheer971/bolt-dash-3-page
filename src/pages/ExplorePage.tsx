import { BrowseCourseCard } from '@/components/BrowseCourseCard';
import { CategoryCard } from '@/components/CategoryCard';
import { browseCourses, categories } from '@/data/courses';

export function ExplorePage() {
  return (
    <div className="flex-1 overflow-y-auto p-8">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Popular Categories</h2>
        <button className="text-sm font-medium text-primary hover:underline">
          View All
        </button>
      </div>

      <div className="mb-12 grid grid-cols-4 gap-6">
        {categories.map((category) => (
          <CategoryCard key={category.title} category={category} />
        ))}
      </div>

      <h2 className="mb-8 text-xl font-semibold">Browse</h2>

      <div className="grid grid-cols-3 gap-6">
        {browseCourses.map((course) => (
          <BrowseCourseCard key={course.title} course={course} />
        ))}
      </div>
    </div>
  );
}