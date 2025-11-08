import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardBody, CardHeader, Form } from '@heroui/react';
import { SignInInput } from './SignInInput';
import { useLogin, type LoginRequest } from '@/features/auth';
import loginHouse from '@/assets/img/login-house.svg';
import { Button } from '@/shared/ui';

export const SignInPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<LoginRequest>({
    email: '',
    password: '',
  });
  const { mutate: login } = useLogin();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(formData, {
      onSuccess: () => {
        navigate('/');
      },
    });
  };

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
          <Form className="flex flex-col gap-5 mb-4" onSubmit={onSubmit}>
            <SignInInput
              name="email"
              label="Email"
              type="email"
              placeholder="your.email@mail.ru"
              errorMessage="Введите корректный email"
              value={formData.email}
              onValueChange={(value) =>
                setFormData((prev) => ({ ...prev, email: value }))
              }
            />
            <SignInInput
              name="password"
              label="Пароль"
              type="password"
              placeholder="Введите пароль"
              errorMessage="Введите пароль"
              value={formData.password}
              onValueChange={(value) =>
                setFormData((prev) => ({ ...prev, password: value }))
              }
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
