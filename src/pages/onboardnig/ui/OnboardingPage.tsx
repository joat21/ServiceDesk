import { useState, type Key } from 'react';
import { useNavigate } from 'react-router-dom';
import { AutocompleteItem, Form } from '@heroui/react';
import { useOffices } from '@/entities/office';
import { useRegions } from '@/entities/region';
import { useAuthUser, useRegisterUser } from '@/entities/user';
import { Autocomplete, Button, Card, Input, PageLoader } from '@/shared/ui';
import { AddUserIcon } from '@/shared/ui/icons';

export const OnboardingPage = () => {
  const navigate = useNavigate();
  const user = useAuthUser();
  const { mutate, isPending } = useRegisterUser();

  const [selectedRegionId, setSelectedRegionId] = useState<string | null>(null);
  const [selectedOfficeId, setSelectedOfficeId] = useState<string | null>(null);

  const { data: regions, isLoading: isRegionsLoading } = useRegions();
  const { data: offices, isLoading: isOfficesLoading } = useOffices(
    { regionId: Number(selectedRegionId) },
    { enabled: !!selectedRegionId }
  );

  if (isRegionsLoading) return <PageLoader />;

  const handleRegionSelectionChange = (key: Key | null) => {
    console.log(key);

    if (!key) {
      setSelectedRegionId(null);
      return;
    }

    setSelectedRegionId(String(key));
    setSelectedOfficeId(null);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutate(
      {
        regionId: Number(selectedRegionId),
        officeId: selectedOfficeId ?? '',
      },
      {
        onSuccess: () => navigate('/'),
      }
    );
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="px-4 py-6 max-w-[500px] w-full">
        <div className="flex items-center gap-4 mb-10">
          <AddUserIcon />
          <h1 className="text-2xl font-medium">Заполните данные о себе</h1>
        </div>
        <Form onSubmit={handleSubmit} className="flex flex-col gap-9">
          <Input
            label="ФИО"
            defaultValue={`${user.surname} ${user.name} ${user.patronymic}`}
            disabled
          />
          <Input label="Почта" defaultValue={user.email} disabled />
          <Autocomplete
            name="region"
            label="Регион"
            placeholder="Выберите регион"
            items={regions}
            isRequired
            selectedKey={selectedRegionId}
            onSelectionChange={handleRegionSelectionChange}
          >
            {(region) => (
              <AutocompleteItem key={region.id.toString()}>
                {region.name}
              </AutocompleteItem>
            )}
          </Autocomplete>
          <Autocomplete
            name="office"
            label="Офис"
            placeholder={
              selectedRegionId ? 'Выберите офис' : 'Сначала выберите регион'
            }
            items={offices ?? []}
            isRequired
            isLoading={isOfficesLoading}
            isDisabled={!selectedRegionId}
            selectedKey={selectedOfficeId}
            onSelectionChange={(key) => setSelectedOfficeId(String(key))}
          >
            {(office) => (
              <AutocompleteItem key={office.id}>
                {office.fullAddress}
              </AutocompleteItem>
            )}
          </Autocomplete>
          <Button className="self-end" type="submit" isDisabled={isPending}>
            Продолжить
          </Button>
        </Form>
      </Card>
    </div>
  );
};
