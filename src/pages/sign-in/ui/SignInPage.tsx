import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardHeader, Form } from '@heroui/react';
import { SignInInput } from './SignInInput';
import loginHouse from '@/assets/img/login-house.svg';

export const SignInPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="flex flex-col items-center gap-8 p-6 rounded-4xl max-w-[500px] w-full h-fit">
        <CardHeader className="flex flex-col p-0">
          <img src={loginHouse} className="mb-5" alt="" aria-hidden="true" />
          <h1 className="mb-2.5 text-2xl font-semibold">Добро пожаловать</h1>
          <span className="text-small text-[#666]">
            Войдите в корпоративный портал Альфа-Банка
          </span>
        </CardHeader>

        <CardBody className="p-0 max-w-96">
          <Form className="flex flex-col gap-5 mb-4">
            <SignInInput
              name="email"
              label="Email"
              type="email"
              placeholder="your.email@mail.ru"
              errorMessage="Введите корректный email"
            />
            <SignInInput
              name="password"
              label="Пароль"
              type="password"
              placeholder="Введите пароль"
              errorMessage="Введите пароль"
            />
            <Button className="w-full" type="submit" color="primary">
              Войти
            </Button>
          </Form>
          <Link to="/" className="text-small text-center text-[#666]">
            Забыли пароль
          </Link>
        </CardBody>
      </Card>
    </div>
  );
};
