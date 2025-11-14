import { useState, type FC } from 'react';
import { Card, CardBody, CardFooter, CardHeader, Form } from '@heroui/react';

import { MainInfoSection } from './MainInfoSection';
import { AttachmentsSection } from './AttachmentsSection';
import { ClassificationSection } from './ClassificationSection';
import { LocationSection } from './LocationSection';
import type { TicketFormState, UploadedFile } from '../model/types';

import { useCategories } from '@/features/categories';
import { usePriorities } from '@/features/priorities';
import { useOffices } from '@/features/offices';
import { Button } from '@/shared/ui';
import createTicketFile from '@/assets/img/create-ticket.svg';

export const CreateTicketPage: FC = () => {
  const { data: categories } = useCategories();
  const { data: priorities } = usePriorities();
  const { data: offices } = useOffices();

  const [files, setFiles] = useState<UploadedFile[]>([]);

  const [formState, setFormState] = useState<TicketFormState>({
    theme: '',
    description: '',
    categoryId: '',
    priorityId: '',
    photo: [],
    officeId: '',
    location: '',
    relocationOfficeId: null,
    relocationDate: null,
  });

  const selectedCategory = categories?.find(
    (c) => String(c.id) === formState.categoryId
  );
  const isRelocation = selectedCategory?.name === 'Переезд';

  const handleFieldChange = (
    field: keyof TicketFormState,
    value?: string | null
  ) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log({
      ...formState,
      photo: files.map((file) => file.url),
    });
  };

  return (
    <div className="flex justify-center items-start py-8 w-full">
      <Card
        className="px-5 py-6 rounded-xl max-w-[725px] w-full"
        as={Form}
        onSubmit={handleSubmit}
      >
        <CardHeader className="flex gap-5 mb-5 p-0">
          <img src={createTicketFile} alt="" />
          <h1 className="text-xl font-medium">Подать новую заявку</h1>
        </CardHeader>
        <CardBody className="flex flex-col gap-6 mb-8 p-0 overflow-visible">
          <MainInfoSection
            formState={formState}
            handleFieldChange={handleFieldChange}
          />

          <AttachmentsSection
            files={files}
            setFiles={setFiles}
            isRelocation={isRelocation}
          />

          <ClassificationSection
            categories={categories}
            priorities={priorities}
            formState={formState}
            handleFieldChange={handleFieldChange}
            isRelocation={isRelocation}
          />

          <LocationSection
            offices={offices}
            formState={formState}
            handleFieldChange={handleFieldChange}
            isRelocation={isRelocation}
          />
        </CardBody>
        <CardFooter className="flex gap-4 self-end p-0 rounded-none w-fit">
          <Button variant="ghost" radius="full">
            Отмена
          </Button>
          <Button type="submit" color="primary" radius="full">
            Отправить заявку
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
