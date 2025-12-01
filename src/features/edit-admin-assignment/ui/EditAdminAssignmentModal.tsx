import type { FC } from 'react';
import { AutocompleteItem, ModalBody } from '@heroui/react';
import type { AdminAssignment } from '@/entities/admin-assignment';
import { Autocomplete, Modal, type ModalProps } from '@/shared/ui';

const employees = [
  { id: 1, fullName: 'Иванов И.И.' },
  { id: 2, fullName: 'Иванов И.И.' },
  { id: 3, fullName: 'Иванов И.И.' },
  { id: 4, fullName: 'Иванов И.И.' },
];

interface EditAdminAssignmentModalProps extends Omit<ModalProps, 'children'> {
  adminAssignment: AdminAssignment;
}

export const EditAdminAssignmentModal: FC<EditAdminAssignmentModalProps> = ({
  adminAssignment,
  ...props
}) => {
  return (
    <Modal title="Назначение администратора" {...props}>
      <ModalBody>
        <div className="flex flex-col gap-2">
          <span className="text-[#666]">Регион</span>
          <span>{adminAssignment.region}</span>
        </div>
        <Autocomplete
          name="name"
          label="Администратор"
          placeholder="Выберите администратора"
          items={employees}
          isRequired
        >
          {(employee) => (
            <AutocompleteItem key={employee.id}>
              {employee.fullName}
            </AutocompleteItem>
          )}
        </Autocomplete>
      </ModalBody>
    </Modal>
  );
};
