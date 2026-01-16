import { useState, type FC, type Key } from 'react';
import { AutocompleteItem, Form, ModalBody } from '@heroui/react';
import { useCreateOffice } from '../model/useCreateOffice';
import { Autocomplete, Button, Modal, type ModalProps } from '@/shared/ui';
import { useDebounce } from '@/shared/lib/useDebounce';
import {
  buildAddress,
  getLocality,
  useAddressSuggestions,
} from '@/shared/lib/address';

export const CreateOfficeModal: FC<Omit<ModalProps, 'children' | 'action'>> = ({
  onClose,
  ...props
}) => {
  const [addressData, setAddressData] = useState({ city: '', address: '' });
  const [address, setAddress] = useState('');
  const debouncedAddress = useDebounce(address, 300);

  const { data: addressSuggestions, isLoading } =
    useAddressSuggestions(debouncedAddress);

  const createOffice = useCreateOffice();

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

    createOffice.mutate(addressData, {
      onSuccess: () => {
        alert('Офис добавлен');
        onClose?.();
      },
      onError: () => alert('Произошла ошибка'),
    });
  };

  return (
    <Modal
      title="Добавление офиса"
      action={
        <Button
          form="create-office"
          type="submit"
          isDisabled={createOffice.isPending}
        >
          Добавить
        </Button>
      }
      {...props}
    >
      <ModalBody>
        <Form id="create-office" onSubmit={handleSubmit}>
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
