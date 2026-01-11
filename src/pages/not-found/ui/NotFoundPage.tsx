import { Link } from '@heroui/react';
import { Button, Card } from '@/shared/ui';
import { AlertCircleBigIcon } from '@/shared/ui/icons';

export const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 min-h-screen">
      <Card className="items-center gap-6 p-4 max-w-[735px] w-full text-xl font-medium">
        <AlertCircleBigIcon />
        <span>404</span>
        <h1 className="text-2xl font-semibold">Страница не найдена</h1>
        <p className="text-center">
          К сожалению, запрашиваемая страница не существует.
          <br />
          Возможно, она была удалена или вы перешли по неверной ссылке.
        </p>
        <Button as={Link} href="/">
          Вернуться на главную
        </Button>
      </Card>
    </div>
  );
};
