import { api } from '@/shared/api/base';

export const editOffice = ({
  officeId,
  city,
  address,
}: {
  officeId: string;
  city: string;
  address: string;
}) =>
  api
    .patch(
      'https://socially-advantaged-moth.cloudpub.ru/user/createNewOffice',
      {
        officeId,
        city,
        address,
      }
    )
    .then((r) => r.data);
