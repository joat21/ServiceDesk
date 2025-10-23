import type { FC } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Form,
} from '@heroui/react';

import { CreateTicketInput } from './CreateTicketInput';
import { CreateTicketTextarea } from './CreateTicketTextarea';
import { CreateTicketSelect } from './CreateTicketSelect';
import { CreateTicketAutocomplete } from './CreateTicketAutocomplete';

import { useCategories } from '@/features/categories';
import { usePriorities } from '@/features/priorities';
import { useOffices } from '@/features/offices';

import createTicketFile from '@/assets/img/create-ticket.svg';

export const CreateTicketPage: FC = () => {
  const { data: categories } = useCategories();
  const { data: priorities } = usePriorities();
  const { data: offices } = useOffices();

  return (
    <div className="flex justify-center items-start py-8 w-full">
      <Card className="px-5 py-6 rounded-xl max-w-[725px] w-full" as={Form}>
        <CardHeader className="flex gap-5 mb-5 p-0">
          <img src={createTicketFile} alt="" />
          <h1 className="text-xl font-medium">Подать новую заявку</h1>
        </CardHeader>
        <CardBody className="flex flex-col gap-5 mb-8 p-0 overflow-visible">
          <CreateTicketInput
            name="topic"
            label="Тема заявки"
            labelPlacement="outside"
            placeholder="Кратко опишите суть проблемы"
            isRequired
          />

          <CreateTicketTextarea
            name="description"
            label="Подробное описание"
            labelPlacement="outside"
            placeholder="Детально опишите проблему или запрос"
            isRequired
          />

          <CreateTicketInput
            name="photo"
            label="Добавить фото"
            labelPlacement="outside"
            type="file"
            isRequired={false}
          />

          <div className="flex gap-5">
            <CreateTicketSelect
              name="category"
              label="Категория"
              placeholder="Выберите категорию"
              options={categories ?? []}
            />

            <CreateTicketSelect
              name="priority"
              label="Приоритет"
              placeholder="Выберите приоритет"
              options={priorities ?? []}
            />
          </div>

          <CreateTicketAutocomplete
            name="office"
            label="Офис"
            placeholder="Выберите офис"
            options={offices ?? []}
            getLabel={(o) => o.fullAddress}
          />

          <CreateTicketTextarea
            name="additionalLocation"
            label="Дополнительная локация"
            labelPlacement="outside"
            placeholder="Этаж, кабинет, уточнения"
            isRequired
          />
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
