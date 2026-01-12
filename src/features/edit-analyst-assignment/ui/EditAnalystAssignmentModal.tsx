import { useState, type FC, type Key } from 'react';
import { AutocompleteItem, Form, ModalBody } from '@heroui/react';
import { useEditAnalystAssignment } from '../model/useEditAnalystAssignment';
import type { AnalystAssignment } from '@/entities/analyst-assignment';
import { useSearchUser } from '@/entities/user';
import {
  Autocomplete,
  Button,
  Modal,
  SearchedUserItem,
  type ModalProps,
} from '@/shared/ui';

interface EditAnalystAssignmentModalProps extends Omit<ModalProps, 'children'> {
  analystAssignment: AnalystAssignment;
}

export const EditAnalystAssignmentModal: FC<
  EditAnalystAssignmentModalProps
> = ({ analystAssignment, onClose, ...props }) => {
  const [inputValue, setInputValue] = useState('');
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

  const { data: users = [], isLoading } = useSearchUser({
    filialId: analystAssignment.filialId,
    fullname: inputValue,
  });

  const editAnalystAssignment = useEditAnalystAssignment();

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
      return;
    }

    console.log(selectedUserId);
    editAnalystAssignment.mutate(
      {
        userId: selectedUserId,
        filialId: analystAssignment.filialId,
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
      title="Назначение аналитика"
      action={
        <Button
          form="analyst-assignment"
          type="submit"
          disabled={editAnalystAssignment.isPending}
        >
          Назначить
        </Button>
      }
      onClose={onClose}
      {...props}
    >
      <ModalBody>
        <Form id="analyst-assignment" onSubmit={handleSubmit} className="gap-6">
          <div className="flex flex-col gap-1">
            <span className="text-[#666]">Филиал</span>
            <span>{analystAssignment.filialName}</span>
          </div>
          <Autocomplete
            name="name"
            label="Выберите аналитика"
            placeholder="Выберите аналитика"
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
                <SearchedUserItem {...user} />
              </AutocompleteItem>
            )}
          </Autocomplete>
        </Form>
      </ModalBody>
    </Modal>
  );
};
