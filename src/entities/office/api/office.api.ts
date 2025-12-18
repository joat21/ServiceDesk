import type { OfficeDto } from './office.dto';
import { mapOffices } from '../model/mapOffices';
import { api } from '@/shared/api/base';

export const getOffices = async () => {
  const { data } = await api.get<OfficeDto[]>(
    'https://socially-advantaged-moth.cloudpub.ru/user/offices'
  );
  return mapOffices(data);
};
