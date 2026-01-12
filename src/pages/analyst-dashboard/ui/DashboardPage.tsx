import { Card } from '@heroui/react';
import { AlertCircleBigIcon } from '@/shared/ui/icons';

export const DashboardPage = () => {
  return (
    <div className="flex items-center justify-center px-4">
      <Card className="items-center gap-3 p-10 max-w-[735px] w-full">
        <AlertCircleBigIcon />
        <h1 className="text-2xl font-semibold">Страница не найдена</h1>
        <p className="text-center text-xl">
          Данный раздел находится в разработке.
        </p>
      </Card>
    </div>
  );
};
