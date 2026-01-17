import { useState, type FC, type Key } from 'react';
import {
  addToast,
  AutocompleteItem,
  Form,
  ModalBody,
  SelectItem,
} from '@heroui/react';
import { useCategories } from '@/entities/category';
import { useOffices } from '@/entities/office';
import {
  Autocomplete,
  PageLoader,
  Button,
  Modal,
  SearchedUserItem,
  Select,
  type ModalProps,
} from '@/shared/ui';
import { useSearchUser } from '@/entities/user';
import { useCreatePerformer } from '../model/useCreatePerformer';

export const CreatePerformerModal: FC<Omit<ModalProps, 'children'>> = ({
  onClose,
  ...props
}) => {
  const [inputValue, setInputValue] = useState('');
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

  const { data: categoriesData, isLoading: isCategoriesLoading } =
    useCategories();
  const { data: offices, isLoading: isOfficesLoading } = useOffices();
  const { data: users = [], isLoading } = useSearchUser({}, true);

  const { mutate, isPending } = useCreatePerformer();

  if (isCategoriesLoading || isOfficesLoading) return <PageLoader />;
  if (!categoriesData) return null;

  const { content: categories = [] } = categoriesData;

  const handleInputChange = (value: string) => {
    setInputValue(value);
    setSelectedUserId(null);
  };

  const handleSelectionChange = (key: Key | null) => {
    if (!key) {
      setSelectedUserId(null);
      return;
    }

    const selectedUser = users.find((user) => user.userId === String(key));

    setSelectedUserId(String(key));
    setInputValue(
      selectedUser
        ? `${selectedUser.surname} ${selectedUser.name} ${selectedUser.patronymic}`
        : ''
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    console.log(formData.get('name'));
    console.log(formData.getAll('categories'));
    console.log(formData.getAll('offices'));

    mutate(
      {
        userId: selectedUserId ?? '',
        categoryIds: formData.getAll('categoryIds').map((i) => String(i)) ?? [],
        officesIds: formData.getAll('officeIds').map((i) => String(i)) ?? [],
      },
      {
        onSuccess: () => {
          addToast({ title: 'Исполнитель добавлен', severity: 'success' });
          onClose?.();
        },
        onError: () =>
          addToast({ title: 'Произошла ошибка', severity: 'danger' }),
      }
    );
  };

  return (
    <Modal
      title="Создание исполнителя"
      action={
        <Button form="create-performer" type="submit" isDisabled={isPending}>
          Создать
        </Button>
      }
      onClose={onClose}
      {...props}
    >
      <ModalBody>
        <Form id="create-performer" onSubmit={handleSubmit} className="gap-8">
          <Autocomplete
            name="name"
            label="Сотрудник"
            placeholder="Выберите сотрудника"
            items={users}
            inputValue={inputValue}
            onInputChange={handleInputChange}
            selectedKey={selectedUserId}
            onSelectionChange={handleSelectionChange}
            isRequired
            isLoading={isLoading}
          >
            {(user) => (
              <AutocompleteItem
                key={user.userId}
                textValue={`${user.surname} ${user.name} ${user.patronymic}`}
              >
                <SearchedUserItem {...user} />
              </AutocompleteItem>
            )}
          </Autocomplete>
          <Select
            name="categoryIds"
            label="Категории"
            placeholder="Выберите категории"
            items={categories.filter((c) => c.name !== 'Прочее')}
            isRequired
            selectionMode="multiple"
          >
            {(category) => (
              <SelectItem key={category.id}>{category.name}</SelectItem>
            )}
          </Select>
          <Select
            name="officeIds"
            label="Офисы"
            placeholder="Выберите офисы"
            items={offices}
            selectionMode="multiple"
            isRequired
          >
            {(office) => (
              <SelectItem key={office.id}>{office.fullAddress}</SelectItem>
            )}
          </Select>
        </Form>
      </ModalBody>
    </Modal>
  );
};
