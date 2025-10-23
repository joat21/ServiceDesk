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
import createTicketFile from '@/assets/img/create-ticket.svg';

const categories = [
  { id: 1, label: 'Транспорт' },
  { id: 2, label: 'Офисные услуги' },
  { id: 3, label: 'Переезд' },
  { id: 4, label: 'Техническое обслуживание' },
  { id: 5, label: 'Прочее' },
];

const priorities = [
  { id: 1, label: 'Низкий' },
  { id: 2, label: 'Низкий' },
  { id: 3, label: 'Высокий' },
  { id: 4, label: 'Срочный' },
];

const offices = [
  { id: 1, label: 'Екатеринбург, ул. Генеральская, 8' },
  { id: 2, label: 'Екатеринбург, ул. Сони Морозовой, 190' },
  { id: 3, label: 'Екатеринбург, ул. 8 марта, 10' },
];

export const CreateTicketPage: FC = () => {
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
              options={categories}
            />

            <CreateTicketSelect
              name="priority"
              label="Приоритет"
              placeholder="Выберите приоритет"
              options={priorities}
            />
          </div>

          <CreateTicketAutocomplete
            name="office"
            label="Офис"
            placeholder="Выберите офис"
            options={offices}
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
