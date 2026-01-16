import { useDisclosure } from '@heroui/react';
import { RejectTicketModal } from './RejectTicketModal';
import { FullfillTicketModal } from './FullfillTicketModal';
import { useStartWork } from '../model/query';
import { STATUS_ENUM, type StatusName } from '@/entities/status';
import { Button, Card } from '@/shared/ui';
import { CheckCircleOutlinedIcon, CrossCircleIcon } from '@/shared/ui/icons';

export const ChangeTicketStatus = ({
  ticketId,
  status,
}: {
  ticketId: string;
  status: StatusName;
}) => {
  const rejectTicketModal = useDisclosure();
  const fullfillTicketModal = useDisclosure();

  const startWork = useStartWork();

  const handleStartWork = () => startWork.mutate(ticketId);

  return (
    <Card className="p-4">
      <span className="mb-5 text-xl font-medium">Действия</span>
      <div className="flex flex-col gap-4">
        <Button
          variant="ghost"
          className="text-black"
          onPress={handleStartWork}
          isDisabled={status === STATUS_ENUM.InProgress}
        >
          Взять в работу
        </Button>
        <Button
          className="group border border-primary data-[hover=true]:bg-primary text-black data-[hover=true]:text-white bg-transparent"
          onPress={() => rejectTicketModal.onOpen()}
          startContent={
            <CrossCircleIcon className="text-primary group-hover:text-white duration-300" />
          }
        >
          Отклонить заявку
        </Button>
        <Button
          className="group border border-[#65C154] data-[hover=true]:bg-[#65C154] text-black data-[hover=true]:text-white bg-transparent"
          onPress={() => fullfillTicketModal.onOpen()}
          startContent={
            <CheckCircleOutlinedIcon className="text-[#65C154] group-hover:text-white duration-300" />
          }
          isDisabled={status !== STATUS_ENUM.InProgress}
        >
          Выполнено
        </Button>
      </div>

      <RejectTicketModal
        ticketId={ticketId}
        isOpen={rejectTicketModal.isOpen}
        onClose={rejectTicketModal.onClose}
        onOpenChange={rejectTicketModal.onOpenChange}
      />

      <FullfillTicketModal
        ticketId={ticketId}
        isOpen={fullfillTicketModal.isOpen}
        onClose={fullfillTicketModal.onClose}
        onOpenChange={fullfillTicketModal.onOpenChange}
      />
    </Card>
  );
};
