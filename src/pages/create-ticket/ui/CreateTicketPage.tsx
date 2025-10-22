import type { FC } from 'react';
import {
  Autocomplete,
  AutocompleteItem,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Form,
  RadioGroup,
  Select,
  SelectItem,
} from '@heroui/react';
import { CreateTicketInput } from './CreateTicketInput';
import { CreateTicketTextarea } from './CreateTicketTextarea';
import { CategoryRadio } from './CategoryRadio';
import {
  CategoryOtherIcon,
  MovingIcon,
  OfficeServicesIcon,
  TransportIcon,
} from '@/shared/ui/icons';
import createTicketFile from '@/assets/img/create-ticket.svg';

export const CreateTicketPage: FC = () => {
  return (
    <div className="flex justify-center items-start py-8 w-full">
      <Card className="px-5 py-6 rounded-xl max-w-[910px] w-full" as={Form}>
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
          />

          <RadioGroup
            name="category"
            label="Категория"
            isRequired
            orientation="horizontal"
            classNames={{
              wrapper: 'grid grid-cols-3 gap-x-4 gap-y-3.5',
              label: 'text-xl font-medium',
            }}
          >
            <CategoryRadio value="1" label="Транспорт" icon={TransportIcon} />
            <CategoryRadio
              value="2"
              label="Офисные услуги"
              icon={OfficeServicesIcon}
            />
            <CategoryRadio value="4" label="Переезд" icon={MovingIcon} />
            <CategoryRadio
              value="3"
              label="Техническое обслуживание"
              icon={CategoryOtherIcon}
            />
            <CategoryRadio value="5" label="Прочее" icon={CategoryOtherIcon} />
          </RadioGroup>

          <div className="flex gap-5">
            <Autocomplete
              name="office"
              label="Офис"
              labelPlacement="outside"
              placeholder="Выберите офис"
              variant="bordered"
              radius="full"
              isRequired
              inputProps={{
                classNames: {
                  label: 'text-xl font-medium',
                  inputWrapper: 'border-1 border-[#bfbfbf] bg-[#EDEDED]',
                },
              }}
            >
              <AutocompleteItem key={1}>
                Екатеринбург, Генеральская 8
              </AutocompleteItem>
              <AutocompleteItem key={2}>
                Екатеринбург, Сони Морозовой 190
              </AutocompleteItem>
              <AutocompleteItem key={3}>
                Екатеринбург, 8 марта 10
              </AutocompleteItem>
            </Autocomplete>

            <Select
              name="priority"
              label="Приоритет"
              labelPlacement="outside"
              placeholder="Выберите приоритет"
              isRequired
              variant="bordered"
              radius="full"
              classNames={{
                label: 'text-xl font-medium',
                trigger: 'border-1 border-[#bfbfbf] bg-[#EDEDED]',
              }}
            >
              <SelectItem key={1}>Низкий</SelectItem>
              <SelectItem key={2}>Средний</SelectItem>
              <SelectItem key={3}>Высокий</SelectItem>
              <SelectItem key={4}>Срочный</SelectItem>
            </Select>
          </div>

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
