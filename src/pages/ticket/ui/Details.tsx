import type { FC } from 'react';
import { useDisclosure } from '@heroui/react';
import { DetailsItem } from './DetailsItem';
import { PRIORITY_LABELS } from '@/entities/priority';
import { STATUS_ENUM, STATUS_LABELS } from '@/entities/status';
import type { Ticket } from '@/entities/ticket';
import { LeaveFeedbackModal } from '@/features/leave-feedback';
import { Button, Card } from '@/shared/ui';
import { MapPinIcon } from '@/shared/ui/icons';
import { formatDateTime } from '@/shared/lib/dateTime';
import { Role, useAuthUser } from '@/entities/user';

interface DetailsProps {
  ticket: Ticket;
}

export const Details: FC<DetailsProps> = ({ ticket }) => {
  const user = useAuthUser();
  const leaveFeedbackModal = useDisclosure();

  return (
    <Card className="px-7 py-5 rounded-xl w-full">
      <h1 className="mb-4 text-2xl font-semibold">Детали заявки</h1>
      <div className="flex flex-col gap-4 p-0">
        <DetailsItem label="Тема заявки">{ticket.theme}</DetailsItem>
        <DetailsItem label="Подробное описание">
          {ticket.description}
        </DetailsItem>
        <DetailsItem label="Офис">{ticket.office}</DetailsItem>
        <DetailsItem label="Дополнительная локация">
          <div className="flex gap-2.5">
            <MapPinIcon width={23} height={23} />
            {ticket.location}
          </div>
        </DetailsItem>

        {ticket.photos.length > 0 && (
          <DetailsItem label="Фото">
            <ul className="flex flex-wrap gap-2">
              {ticket.photos.map((url) => (
                <li
                  key={url}
                  className="flex items-center justify-center border border-[#c3c0c0] rounded-lg w-40 h-40 bg-[#f8f8f8] overflow-hidden"
                >
                  <img
                    className="w-full h-full object-cover"
                    src={url}
                    alt=""
                  />
                </li>
              ))}
            </ul>
          </DetailsItem>
        )}

        <div className="flex justify-between gap-5 pr-5">
          <div className="flex flex-col gap-3">
            <DetailsItem label="Статус">
              {STATUS_LABELS[ticket.status]}
            </DetailsItem>
            <DetailsItem label="Исполнитель">
              {ticket.performerName}
            </DetailsItem>
            <DetailsItem label="Создано">
              {formatDateTime(ticket.createdAt)}
            </DetailsItem>
          </div>
          <div className="flex flex-col gap-3">
            <DetailsItem label="Приоритет">
              {PRIORITY_LABELS[ticket.priority]}
            </DetailsItem>
            <DetailsItem label="Категория">{ticket.categoryName}</DetailsItem>
            <DetailsItem label="Дедлайн">
              {formatDateTime(ticket.dueAt)}
            </DetailsItem>
          </div>
        </div>

        {!ticket.isReviewed &&
          user.roleName === Role.Employee &&
          ticket.status === STATUS_ENUM.Completed && (
            <Button
              className="self-start"
              onPress={() => leaveFeedbackModal.onOpen()}
            >
              Оставить отзыв
            </Button>
          )}
      </div>

      <LeaveFeedbackModal
        ticketId={ticket.id}
        isOpen={leaveFeedbackModal.isOpen}
        onClose={leaveFeedbackModal.onClose}
        onOpenChange={leaveFeedbackModal.onOpenChange}
      />
    </Card>
  );
};
