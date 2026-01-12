import type { OfficeDto } from './office.dto';
import type { GetOfficesArgs } from '../model/types';
import { mapOffices } from '../model/mapOffices';
import { api } from '@/shared/api/base';

export const getOffices = async (args?: GetOfficesArgs) => {
  const params = new URLSearchParams();

  if (args?.regionId) params.append('regionId', args.regionId.toString());
  if (args?.filialId) params.append('filialId', args.filialId.toString());

  const { data } = await api.get<OfficeDto[]>(
    'https://socially-advantaged-moth.cloudpub.ru/user/offices',
    { params }
  );
  return mapOffices(data);
};
