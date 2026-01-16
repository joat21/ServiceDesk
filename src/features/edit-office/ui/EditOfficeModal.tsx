import { useEffect, useState, type FC, type Key } from 'react';
import { AutocompleteItem, Form, ModalBody } from '@heroui/react';
import { useEditOffice } from '../model/useEditOffice';
import type { Office } from '@/entities/office';
import { Autocomplete, Button, Modal, type ModalProps } from '@/shared/ui';
import { useDebounce } from '@/shared/lib/useDebounce';
import {
  buildAddress,
  getLocality,
  useAddressSuggestions,
} from '@/shared/lib/address';

interface EditOfficeModalProps extends Omit<ModalProps, 'children'> {
  office: Office | null;
}

export const EditOfficeModal: FC<EditOfficeModalProps> = ({
  office,
  onClose,
  ...props
}) => {
  const [addressData, setAddressData] = useState({ city: '', address: '' });
  const [address, setAddress] = useState(office?.fullAddress);

  useEffect(() => {
    if (!office) return;
    setAddress(office.fullAddress);
  }, [office]);

  const debouncedAddress = useDebounce(address, 300);

  const { data: addressSuggestions, isLoading } = useAddressSuggestions(
    debouncedAddress ?? ''
  );

  const editOffice = useEditOffice();

  const handleInputChange = (value: string) => {
    setAddress(value);
  };

  const handleSelectionChange = (key: Key | null) => {
    const suggestion = addressSuggestions?.find((s) => s.value === key);
    setAddressData({
      // костыли с типизацией
      city: getLocality(suggestion?.data)!,
      address: buildAddress(suggestion?.data)!,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    editOffice.mutate(
      {
        officeId: office?.id ?? '',
        ...addressData,
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
      title="Редактирование офиса"
      action={
        <Button
          form="edit-office"
          type="submit"
          isDisabled={editOffice.isPending}
        >
          Сохранить
        </Button>
      }
      {...props}
    >
      <ModalBody>
        <Form id="edit-office" onSubmit={handleSubmit}>
          <Autocomplete
            name="address"
            label="Адрес"
            placeholder="Введите адрес"
            items={addressSuggestions ?? []}
            inputValue={address}
            onInputChange={handleInputChange}
            onSelectionChange={handleSelectionChange}
            defaultFilter={() => true}
            isLoading={isLoading}
            isRequired
          >
            {(suggestion) => (
              <AutocompleteItem
                key={suggestion.value}
                textValue={suggestion.value}
              >
                <span>{suggestion.value}</span>
              </AutocompleteItem>
            )}
          </Autocomplete>
        </Form>
      </ModalBody>
    </Modal>
  );
};
