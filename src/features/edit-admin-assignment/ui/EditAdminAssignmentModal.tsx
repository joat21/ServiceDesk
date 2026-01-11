import { useState, type FC, type Key } from 'react';
import { AutocompleteItem, Form, ModalBody } from '@heroui/react';
import type { AdminAssignment } from '@/entities/admin-assignment';
import { useSearchUser } from '@/entities/user';
import { Autocomplete, Button, Modal, type ModalProps } from '@/shared/ui';
import { useEditAdminAssignment } from '../model/useEditAdminAssignment';

interface EditAdminAssignmentModalProps extends Omit<ModalProps, 'children'> {
  adminAssignment: AdminAssignment;
}

export const EditAdminAssignmentModal: FC<EditAdminAssignmentModalProps> = ({
  adminAssignment,
  onClose,
  ...props
}) => {
  const [inputValue, setInputValue] = useState('');
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

  const { data: users = [], isLoading } = useSearchUser({
    regionId: adminAssignment.regionId,
    fullname: inputValue,
  });

  const editAdminAssignment = useEditAdminAssignment();

  const handleInputChange = (value: string) => {
    setInputValue(value);
    setSelectedUserId(null);
  };

  const handleSelectionChange = (key: Key | null) => {
    if (!key) {
      setSelectedUserId(null);
      return;
    }

    const selectedUser = users.find(
      (user) => String(user.userId) === String(key)
    );

    setSelectedUserId(String(key));
    setInputValue(
      selectedUser
        ? `${selectedUser.surname} ${selectedUser.name} ${selectedUser.patronymic}`
        : ''
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!selectedUserId) {
      console.log('выбери юзера');
      return;
    }

    console.log(selectedUserId);
    editAdminAssignment.mutate(
      {
        userId: selectedUserId,
        regionId: adminAssignment.regionId,
      },
      {
        onSuccess: () => {
          alert('Изменения сохранены');
          onClose?.();
        },
        onError: () => alert('Произошла ошибка'),
      }
    );
  };

  return (
    <Modal
      title="Назначение администратора"
      action={
        <Button
          form="admin-assignment"
          type="submit"
          disabled={editAdminAssignment.isPending}
        >
          Назначить
        </Button>
      }
      {...props}
    >
      <ModalBody>
        <Form id="admin-assignment" onSubmit={handleSubmit} className="gap-6">
          <div className="flex flex-col gap-1">
            <span className="text-[#666]">Регион</span>
            <span>{adminAssignment.regionName}</span>
          </div>
          <Autocomplete
            name="name"
            label="Выберите администратора"
            placeholder="Выберите администратора"
            inputValue={inputValue}
            onInputChange={handleInputChange}
            selectedKey={selectedUserId}
            onSelectionChange={handleSelectionChange}
            items={users}
            isLoading={isLoading}
            isRequired
            inputProps={{
              classNames: {
                label: 'text-base font-normal',
              },
            }}
          >
            {(user) => (
              <AutocompleteItem key={user.userId}>
                {user.surname} {user.name} {user.patronymic}
              </AutocompleteItem>
            )}
          </Autocomplete>
        </Form>
      </ModalBody>
    </Modal>
  );
};
