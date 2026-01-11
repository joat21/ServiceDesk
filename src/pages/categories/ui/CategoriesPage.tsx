import { useState, type FC } from 'react';
import { useDisclosure } from '@heroui/react';
import { CategoryCard } from './CategoryCard';
import { CreateCategoryModal } from '@/features/create-category';
import { EditCategoryModal } from '@/features/edit-category';
import { useCategories } from '@/entities/category';
import { Button } from '@/shared/ui';

export const CategoriesPage: FC = () => {
  const createModal = useDisclosure();
  const editModal = useDisclosure();
  const { data, isLoading } = useCategories();
  const [selectedCategoryId, setSelectedCategoryId] = useState<
    string | number | null
  >(null);

  if (isLoading) return 'Загрузка...';
  if (!data) return <p>Категории не найдены</p>;

  const { content: categories } = data;

  const selectedCategory = categories.find((p) => p.id === selectedCategoryId);

  const handleCreateCategory = () => {
    createModal.onOpen();
  };

  const handleEditCategory = (categoryId: string | number) => {
    setSelectedCategoryId(categoryId);
    editModal.onOpen();
  };

  return (
    <div className="flex flex-col items-center gap-11 pt-11 w-full">
      <div className="flex justify-between items-center w-full">
        <div>
          <h1 className="mb-2 text-2xl font-semibold">Категории и SLA</h1>
          <p className="text-[#666]">
            Управление категориями работ и их временными рамками
          </p>
        </div>
        <Button onPress={handleCreateCategory}>+ Создать категорию</Button>
      </div>

      <ul className="flex flex-wrap gap-8 w-full">
        {categories.map((category) => (
          <li key={category.id} className="max-w-[290px] w-full">
            <CategoryCard
              category={category}
              onEditCategory={handleEditCategory}
            />
          </li>
        ))}
      </ul>

      <CreateCategoryModal
        isOpen={createModal.isOpen}
        onClose={createModal.onClose}
        onOpenChange={createModal.onOpenChange}
      />

      <EditCategoryModal
        isOpen={editModal.isOpen}
        onClose={editModal.onClose}
        onOpenChange={editModal.onOpenChange}
        category={selectedCategory ?? categories[0]}
      />
    </div>
  );
};
