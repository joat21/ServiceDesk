import type { FC } from 'react';
import { AutocompleteItem, ModalBody } from '@heroui/react';
import type { AnalystAssignment } from '@/entities/analyst-assignment';
import { Autocomplete, Modal, type ModalProps } from '@/shared/ui';

const employees = [
  { id: 1, fullName: 'Иванов И.И.' },
  { id: 2, fullName: 'Иванов И.И.' },
  { id: 3, fullName: 'Иванов И.И.' },
  { id: 4, fullName: 'Иванов И.И.' },
];

interface EditAnalystAssignmentModalProps extends Omit<ModalProps, 'children'> {
  analystAssignment: AnalystAssignment;
}

export const EditAnalystAssignmentModal: FC<
  EditAnalystAssignmentModalProps
> = ({ analystAssignment, ...props }) => {
  return (
    <Modal title="Назначение аналитика" {...props}>
      <ModalBody>
        <div className="flex flex-col gap-2">
          <span className="text-[#666]">Филиал</span>
          <span>{analystAssignment.filial}</span>
        </div>
        <Autocomplete
          name="name"
          label="Аналитик"
          placeholder="Выберите аналитика"
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
