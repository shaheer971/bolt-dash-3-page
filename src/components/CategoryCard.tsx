import { Category } from '@/types';

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6">
      <div className="mb-4">
        <img src={category.icon} alt={category.title} className="h-10 w-10" />
      </div>
      <h3 className="mb-2 text-lg font-semibold">{category.title}</h3>
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <span>{category.courses} Courses</span>
        <span>•</span>
        <span>{category.duration}</span>
      </div>
    </div>
  );
}