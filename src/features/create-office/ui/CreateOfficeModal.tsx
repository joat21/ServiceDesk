import type { FC } from 'react';
import { AutocompleteItem, ModalBody } from '@heroui/react';
import { Autocomplete, Modal, type ModalProps } from '@/shared/ui';

const addresses = [
  { id: 1, label: '123' },
  { id: 2, label: '123' },
  { id: 3, label: '123' },
  { id: 4, label: '123' },
];

export const CreateOfficeModal: FC<Omit<ModalProps, 'children'>> = ({
  ...props
}) => {
  return (
    <Modal title="Добавление офиса" {...props}>
      <ModalBody>
        <Autocomplete
          name="address"
          label="Адрес"
          placeholder="Введите адрес"
          defaultItems={addresses}
          isRequired
        >
          {(address) => (
            <AutocompleteItem key={address.id}>
              {address.label}
            </AutocompleteItem>
          )}
        </Autocomplete>
      </ModalBody>
    </Modal>
  );
};
