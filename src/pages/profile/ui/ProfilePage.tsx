import { Card, CardBody, CardHeader, Divider, Image } from '@heroui/react';
import { Header } from '../../../Header';

export const ProfilePage = () => {
  return (
    <>
      <Header />
      <div className="content pt-24">
        <div className="container flex justify-between items-center gap-24">
          <Card className="p-7 max-w-[400px] w-full">
            <CardHeader className="flex flex-col p-0">
              <Image
                alt="heroui logo"
                height={200}
                radius="full"
                src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                width={200}
                className="mb-14"
              />
              <span className="mb-14">Борис Иванов</span>
            </CardHeader>
            <Divider />
            <CardBody className="gap-5 p-0">
              <div className="flex justify-between">
                <span>ID сотрудника</span>
                <span>EMP-0004</span>
              </div>
              <div className="flex justify-between">
                <span>График работы</span>
                <span>Пн-Пт 9:00-18:00</span>
              </div>
            </CardBody>
          </Card>
          <Card className="p-7 w-full max-h-fit">
            <CardHeader className="p-0">
              <span className="text-2xl">Личная информация</span>
            </CardHeader>
            <CardBody className="grid grid-cols-2 gap-3 p-0">
              <div className="flex flex-col gap-1.5">
                <span className="font-bold">Email</span>
                <span>ivanov@company.com</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="font-bold">Местоположение</span>
                <span>Екатеринбург, Генеральская 8</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="font-bold">Телефон</span>
                <span>+ 7 (495) 123-45-67</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="font-bold">Должность</span>
                <span>Сотрудник?</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="font-bold">Отдел</span>
                <span>Маркетинг</span>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
};
