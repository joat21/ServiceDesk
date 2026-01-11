import { Link } from '@heroui/react';
import { Button, Card } from '@/shared/ui';
import { WarnShieldIcon } from '@/shared/ui/icons';

export const NoAccessPage = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 min-h-screen">
      <Card className="items-center gap-6 p-4 max-w-[735px] w-full text-xl font-medium">
        <WarnShieldIcon />
        <span>403</span>
        <h1 className="text-2xl font-semibold">Доступ запрещен</h1>
        <p className="text-center">
          У вас нет прав для просмотра этой страницы.
          <br />
          Обратитесь к администратору системы, если считаете, что это ошибка.
        </p>
        <Button as={Link} href="/">
          Вернуться на главную
        </Button>
      </Card>
    </div>
  );
};
