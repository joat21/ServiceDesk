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
  Input,
  Radio,
  RadioGroup,
  Select,
  SelectItem,
  Textarea,
} from '@heroui/react';

export const CreateTicketPage: FC = () => {
  return (
    <div className="flex justify-center items-start py-8 w-full">
      <Card className="px-5 py-6 rounded-3xl max-w-[910px] w-full" as={Form}>
        <CardHeader className="mb-5 p-0">
          <h1>Подать новую заявку</h1>
        </CardHeader>
        <CardBody className="flex flex-col gap-5 mb-8 p-0 h-auto">
          <Input
            name="topic"
            label="Тема заявки"
            labelPlacement="outside"
            placeholder="Кратко опишите суть проблемы"
            isRequired
          />

          <Textarea
            name="description"
            label="Подробное описание"
            labelPlacement="outside"
            placeholder="Детально опишите проблему или запрос"
            isRequired
          />

          <Input
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
          >
            <Radio value="1">Транспорт</Radio>
            <Radio value="2">Офисные услуги</Radio>
            <Radio value="3">Техническое обслуживание</Radio>
            <Radio value="4">Переезд</Radio>
            <Radio value="5">Прочее</Radio>
          </RadioGroup>

          <Autocomplete
            name="office"
            label="Офис"
            labelPlacement="outside"
            placeholder="Выберите офис"
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

          <div className="flex gap-5">
            <Select
              name="priority"
              label="Приоритет"
              labelPlacement="outside"
              placeholder="Выберите приоритет"
              isRequired
            >
              <SelectItem key={1}>Низкий</SelectItem>
              <SelectItem key={2}>Средний</SelectItem>
              <SelectItem key={3}>Высокий</SelectItem>
              <SelectItem key={4}>Срочный</SelectItem>
            </Select>

            <Input
              name="additionalLocation"
              label="Дополнительная локация"
              labelPlacement="outside"
              placeholder="Этаж, кабинет, уточнения"
              isRequired
            />
          </div>
        </CardBody>
        <CardFooter className="flex gap-4 self-end p-0 w-fit">
          <Button variant="ghost">Отмена</Button>
          <Button type="submit" color="primary">
            Отправить заявку
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
