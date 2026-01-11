import type { FC } from 'react';
import type { Category } from '@/entities/category';
import { Button, Card } from '@/shared/ui';
import { EditIcon, TagIcon } from '@/shared/ui/icons';

interface CategoryCardProps {
  category: Category;
  onEditCategory: (categoryId: string | number) => void;
}

export const CategoryCard: FC<CategoryCardProps> = ({
  category,
  onEditCategory,
}) => {
  return (
    <Card className="gap-5 px-4 py-6 w-full h-full">
      <div className="flex justify-between items-center gap-1 pl-4 pb-2.5 border-b border-[#c3c0c0]">
        <div className="flex flex-col">
          <span>{category.name}</span>
          <span className="text-[#666]">Категория работ</span>
        </div>
        <TagIcon />
      </div>
      <div className="flex flex-col pl-4">
        <span className="text-[#666]">SLA (часы)</span>
        <span>{category.sla} ч</span>
      </div>
      <Button
        onPress={() => onEditCategory(category.id)}
        startContent={<EditIcon />}
      >
        Редактировать
      </Button>
    </Card>
  );
};
