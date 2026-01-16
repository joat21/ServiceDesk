import { useState, type FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { addToast, Form, Link } from '@heroui/react';

import { MainInfoSection } from './MainInfoSection';
import { AttachmentsSection } from './AttachmentsSection';
import { ClassificationSection } from './ClassificationSection';
import { LocationSection } from './LocationSection';
import type { UploadedFile } from '../model/types';

import {
  type TicketFormState,
  useCreateTicket,
} from '@/features/create-ticket';

import { useCategories } from '@/entities/category';
import { useOffices } from '@/entities/office';
import { usePriorities } from '@/entities/priority';

import { Button, Card } from '@/shared/ui';
import createTicketFile from '@/assets/img/create-ticket.svg';

export const CreateTicketPage: FC = () => {
  const navigate = useNavigate();
  const { data: categories } = useCategories();
  const { data: priorities } = usePriorities();
  const { data: offices } = useOffices();

  const createTicket = useCreateTicket();

  const [files, setFiles] = useState<UploadedFile[]>([]);

  const [formState, setFormState] = useState<TicketFormState>({
    theme: '',
    description: '',
    categoryId: '',
    priorityId: '',
    photosUrl: [],
    officeId: '',
    location: '',
    // relocationOfficeId: null,
    // relocationDate: null,
  });

  const selectedCategory = categories?.content.find(
    (c) => String(c.id) === formState.categoryId
  );
  const isRelocation = selectedCategory?.name === 'Переезд';
  const maxCardWidth = isRelocation ? 850 : 725;

  const handleFieldChange = (
    field: keyof TicketFormState,
    value?: string | number | null
  ) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();

    createTicket.mutate(
      {
        ...formState,
        priorityId: Number(formState.priorityId),
        photosUrl: files.map((file) => file.url ?? ''),
      },
      {
        onSuccess: () => {
          addToast({ title: 'Заявка создана', severity: 'success' });
          navigate('/');
        },
        onError: () =>
          addToast({ title: 'Произошла ошибка', severity: 'danger' }),
      }
    );
  };

  return (
    <div className="flex justify-center items-start py-8 w-full">
      <Card
        className={'px-5 py-6 rounded-xl w-full'}
        style={{
          maxWidth: maxCardWidth,
        }}
        as={Form}
        onSubmit={handleSubmit}
      >
        <div className="flex items-center gap-5 mb-5">
          <img src={createTicketFile} alt="" />
          <h1 className="text-2xl font-semibold">Создать заявку</h1>
        </div>
        <div className="flex flex-col gap-7 mb-8 w-full overflow-visible">
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
            categories={categories?.content}
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
        </div>
        <div className="flex gap-6 self-end">
          <Button variant="ghost" as={Link} href="/">
            Отмена
          </Button>
          <Button type="submit" isDisabled={createTicket.isPending}>
            Отправить заявку
          </Button>
        </div>
      </Card>
    </div>
  );
};
