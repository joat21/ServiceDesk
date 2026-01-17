import { useState, type FC, type Key } from 'react';
import {
  addToast,
  AutocompleteItem,
  Form,
  ModalBody,
  type ModalProps,
} from '@heroui/react';
import { useCategories } from '@/entities/category';
import { usePerformers } from '@/entities/performer';
import { Autocomplete, Button, Modal } from '@/shared/ui';
import { useAssignPerformer } from '../model/useAssignPerformer';

interface AssignPerformerModalProps extends Omit<ModalProps, 'children'> {
  ticketId: string;
}

export const AssignPerformerModal: FC<AssignPerformerModalProps> = ({
  ticketId,
  onClose,
  ...props
}) => {
  const { mutate, isPending } = useAssignPerformer();

  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    null
  );
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

  const { data: categoriesData, isLoading: isCategoriesLoading } =
    useCategories();
  const { data: performersData, isLoading: isPerformersLoading } =
    usePerformers(
      { categories: selectedCategoryId ?? '' },
      { enabled: !!selectedCategoryId }
    );

  if (!categoriesData || isCategoriesLoading) return null;

  const { content: categories } = categoriesData;

  const handleCategorySelectionChange = (key: Key | null) => {
    if (!key) {
      setSelectedCategoryId(null);
      return;
    }

    setSelectedCategoryId(String(key));
    setSelectedUserId(null);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!selectedUserId || !selectedCategoryId) {
      return;
    }

    mutate(
      { ticketId, userId: selectedUserId, categoryId: selectedCategoryId },
      {
        onSuccess: () => {
          addToast({ title: 'Изменения сохранены', severity: 'success' });
          onClose?.();
        },
        onError: () =>
          addToast({ title: 'Произошла ошибка', severity: 'danger' }),
      }
    );
  };

  return (
    <Modal
      title="Назначение исполнителя"
      action={
        <Button form="assign-performer" type="submit" isDisabled={isPending}>
          Назначить
        </Button>
      }
      onClose={onClose}
      {...props}
    >
      <ModalBody>
        <Form id="assign-performer" onSubmit={handleSubmit} className="gap-8">
          <Autocomplete
            name="category"
            label="Выберите категорию"
            placeholder="Выберите категорию"
            selectedKey={selectedCategoryId}
            onSelectionChange={handleCategorySelectionChange}
            items={categories.filter((c) => c.name !== 'Прочее')}
            isLoading={isCategoriesLoading}
            isRequired
          >
            {(category) => (
              <AutocompleteItem key={category.id.toString()}>
                {category.name}
              </AutocompleteItem>
            )}
          </Autocomplete>
          <Autocomplete
            name="name"
            label="Выберите исполнителя"
            placeholder={
              selectedCategoryId
                ? 'Выберите исполнителя'
                : 'Сначала выберите категорию'
            }
            selectedKey={selectedUserId}
            onSelectionChange={(key) => setSelectedUserId(String(key))}
            items={performersData?.content ?? []}
            isRequired
            isLoading={isPerformersLoading}
            isDisabled={!selectedCategoryId}
          >
            {(performer) => (
              <AutocompleteItem key={String(performer.id)}>
                {`${performer.surname} ${performer.name} ${performer.patronymic}`}
              </AutocompleteItem>
            )}
          </Autocomplete>
        </Form>
      </ModalBody>
    </Modal>
  );
};
