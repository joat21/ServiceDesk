import { Button, Card } from '@/shared/ui';
import { CheckCircleOutlinedIcon, CrossCircleIcon } from '@/shared/ui/icons';

export const ChangeTicketStatus = ({
  ticketId,
}: {
  ticketId: string | number;
}) => {
  const handleClick = (action: string) => {
    console.log(action, ticketId);
  };

  return (
    <Card className="p-4">
      <span className="mb-5 text-xl font-medium">Действия</span>
      <div className="flex flex-col gap-4">
        <Button
          variant="ghost"
          className="text-black"
          onPress={() => handleClick('in progress')}
        >
          Взять в работу
        </Button>
        <Button
          className="group border border-primary data-[hover=true]:bg-primary text-black data-[hover=true]:text-white bg-transparent"
          onPress={() => handleClick('rejected')}
          startContent={
            <CrossCircleIcon className="text-primary group-hover:text-white duration-300" />
          }
        >
          Отклонить заявку
        </Button>
        <Button
          className="group border border-[#65C154] data-[hover=true]:bg-[#65C154] text-black data-[hover=true]:text-white bg-transparent"
          onPress={() => handleClick('fullfiled')}
          startContent={
            <CheckCircleOutlinedIcon className="text-[#65C154] group-hover:text-white duration-300" />
          }
        >
          Выполнено
        </Button>
      </div>
    </Card>
  );
};
