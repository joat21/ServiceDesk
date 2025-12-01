import { useState, type FC } from 'react';
import { useDisclosure } from '@heroui/react';
import { CategoryCard } from './CategoryCard';
import { useCategories } from '@/entities/category';
import { Button } from '@/shared/ui';
import { CreateCategoryModal } from '@/features/create-category';
import { EditCategoryModal } from '@/features/edit-category';

export const CategoriesPage: FC = () => {
  const createModal = useDisclosure();
  const editModal = useDisclosure();
  const { data: categories, isLoading } = useCategories();
  const [selectedCategoryId, setSelectedCategoryId] = useState<
    string | number | null
  >(null);

  if (isLoading) return 'Загрузка...';
  if (!categories) return <p>Категории не найдены</p>;

  const selectedCategory = categories.find((p) => p.id === selectedCategoryId);

  const handleCreateCategory = () => {
    createModal.onOpen();
  };

  const handleCreateCategorySubmit = () => {
    alert('Категория создана');
    createModal.onClose();
  };

  const handleEditCategory = (categoryId: string | number) => {
    setSelectedCategoryId(categoryId);
    editModal.onOpen();
  };

  const handleEditCategorySubmit = () => {
    alert('Данные сохранены');
    editModal.onClose();
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
          <li key={category.id} className="max-w-72 w-full">
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
        action={<Button onPress={handleCreateCategorySubmit}>Создать</Button>}
      />

      <EditCategoryModal
        isOpen={editModal.isOpen}
        onClose={editModal.onClose}
        onOpenChange={editModal.onOpenChange}
        category={selectedCategory ?? categories[0]}
        action={<Button onPress={handleEditCategorySubmit}>Сохранить</Button>}
      />
    </div>
  );
};
