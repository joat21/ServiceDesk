import { api } from '@/shared/api/base';

export const createOffice = ({
  city,
  address,
}: {
  city: string;
  address: string;
}) =>
  api
    .post('https://socially-advantaged-moth.cloudpub.ru/user/createNewOffice', {
      city,
      address,
    })
    .then((r) => r.data);
