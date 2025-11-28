import type { FC } from 'react';
import { Card } from '@/shared/ui';

interface CategoriesProps {
  categories: string[];
}

export const Categories: FC<CategoriesProps> = ({ categories }) => {
  return (
    <Card className="p-4 rounded-xl">
      <h2 className="mb-3 text-xl font-medium">Категории заявок</h2>
      <ul className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <li
            key={category}
            className="px-3 py-1 rounded-lg min-w-36 font-medium text-center bg-[#FFDADA]"
          >
            {category}
          </li>
        ))}
      </ul>
    </Card>
  );
};
