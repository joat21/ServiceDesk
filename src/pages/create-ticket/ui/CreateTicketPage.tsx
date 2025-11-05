import { useState, type FC } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Form,
} from '@heroui/react';

import { DefaultForm } from './DefaultForm';
import { RelocationForm } from './RelocationForm';

import { useCategories } from '@/features/categories';
import { usePriorities } from '@/features/priorities';
import { useOffices } from '@/features/offices';

import createTicketFile from '@/assets/img/create-ticket.svg';

export const CreateTicketPage: FC = () => {
  const { data: categories } = useCategories();
  const { data: priorities } = usePriorities();
  const { data: offices } = useOffices();

  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('');

  const handleChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategoryId(e.target.value);
  };

  return (
    <div className="flex justify-center items-start py-8 w-full">
      <Card className="px-5 py-6 rounded-xl max-w-[725px] w-full" as={Form}>
        <CardHeader className="flex gap-5 mb-5 p-0">
          <img src={createTicketFile} alt="" />
          <h1 className="text-xl font-medium">Подать новую заявку</h1>
        </CardHeader>
        <CardBody className="flex flex-col gap-6 mb-8 p-0 overflow-visible">
          {categories?.find((c) => String(c.id) === selectedCategoryId)
            ?.name === 'Переезд' ? (
            <RelocationForm
              categories={categories}
              priorities={priorities}
              offices={offices}
              selectedCategoryId={selectedCategoryId}
              onCategoryChange={handleChangeCategory}
            />
          ) : (
            <DefaultForm
              categories={categories}
              priorities={priorities}
              offices={offices}
              selectedCategoryId={selectedCategoryId}
              onCategoryChange={handleChangeCategory}
            />
          )}
        </CardBody>
        <CardFooter className="flex gap-4 self-end p-0 w-fit">
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
