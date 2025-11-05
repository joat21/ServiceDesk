import type { FC } from 'react';
import { Card, CardBody, CardHeader } from '@heroui/react';
import { DetailsItem } from './DetailsItem';
import type { Ticket } from '@/entities/ticket';

interface DetailsProps {
  ticket?: Ticket;
}

export const Details: FC<DetailsProps> = ({ ticket }) => {
  return (
    <Card className="px-7 py-5 rounded-xl max-w-2xl w-full">
      <CardHeader className="mb-4 p-0">
        <h1 className="text-2xl font-semibold">Детали заявки</h1>
      </CardHeader>
      <CardBody className="flex flex-col gap-4 p-0">
        <DetailsItem label="Тема заявки">{ticket?.theme}</DetailsItem>
        <DetailsItem label="Подробное описание">
          {ticket?.description}
        </DetailsItem>
        <DetailsItem label="Фото">
          {ticket?.photo.length
            ? ticket?.photo.map((item, i) => <img key={i} src={item} alt="" />)
            : 'Нет фото'}
        </DetailsItem>

        <DetailsItem label="Офис">{ticket?.office}</DetailsItem>

        <div className="flex justify-between">
          <DetailsItem label="Статус">{ticket?.status}</DetailsItem>
          <DetailsItem label="Приоритет">{ticket?.priority}</DetailsItem>
        </div>

        <div className="flex justify-between">
          <DetailsItem label="Исполнитель">{ticket?.performer}</DetailsItem>
          <DetailsItem label="Категория">{ticket?.category}</DetailsItem>
        </div>

        <div className="flex justify-between">
          <DetailsItem label="Создано">
            {new Date(ticket?.createdAt ?? '').toLocaleDateString()}{' '}
            {new Date(ticket?.createdAt ?? '').toLocaleTimeString()}
          </DetailsItem>
          <DetailsItem label="Дедлайн">{ticket?.deadline}</DetailsItem>
        </div>
      </CardBody>
    </Card>
  );
};
