import { AutocompleteItem, Form } from '@heroui/react';
import { useNavigate } from 'react-router-dom';
import { useOffices } from '@/entities/office';
import { Autocomplete, Button, Card, Input } from '@/shared/ui';
import { AddUserIcon } from '@/shared/ui/icons';

const regions = [
  { id: 1, name: 'Свердловская область' },
  { id: 2, name: 'Тюменская область' },
  { id: 3, name: 'Челябинская область' },
];

export const OnboardingPage = () => {
  const navigate = useNavigate();
  const { data: offices, isLoading: isOfficesLoading } = useOffices();

  if (isOfficesLoading) return 'Загрузка...';

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="px-4 py-6 max-w-[500px] w-full">
        <div className="flex items-center gap-4 mb-10">
          <AddUserIcon />
          <h1 className="text-2xl font-medium">Заполните данные о себе</h1>
        </div>
        <Form onSubmit={handleSubmit} className="flex flex-col gap-9">
          <Input label="ФИО" defaultValue="Иванов Иван Иванович" disabled />
          <Input label="Почта" defaultValue="iiivanov@company.com" disabled />
          <Autocomplete
            name="region"
            label="Регион"
            placeholder="Выберите регион"
            items={regions}
            isRequired
          >
            {(region) => (
              <AutocompleteItem key={region.id}>{region.name}</AutocompleteItem>
            )}
          </Autocomplete>
          <Autocomplete
            name="office"
            label="Офис"
            placeholder="Выберите офис"
            items={offices}
            isRequired
          >
            {(office) => (
              <AutocompleteItem key={office.id}>
                {office.fullAddress}
              </AutocompleteItem>
            )}
          </Autocomplete>
          <Button className="self-end" type="submit">
            Продолжить
          </Button>
        </Form>
      </Card>
    </div>
  );
};
