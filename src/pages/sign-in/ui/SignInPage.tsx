import { Button, Card, Form, Input } from '@heroui/react';

export const SignInPage = () => {
  return (
    <div className="content flex flex-col items-center pt-64 h-full">
      <Card className="flex flex-col items-center p-10 max-w-[500px]">
        <h1 className="mb-5 text-xl">Добро пожаловать</h1>
        <Form className="flex flex-col gap-5">
          <Input
            isRequired
            errorMessage="Введите корректный email"
            label="Email"
            labelPlacement="outside"
            name="email"
            placeholder="your.email@mail.ru"
            type="email"
          />
          <Input
            isRequired
            errorMessage="Введите пароль"
            label="Пароль"
            labelPlacement="outside"
            name="password"
            placeholder="Введите пароль"
            type="password"
          />
          <Button className="w-full" type="submit">
            Войти
          </Button>
        </Form>
      </Card>
    </div>
  );
};
