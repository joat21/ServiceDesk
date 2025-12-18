import type { OfficeDto } from '../api/office.dto';
import type { Office } from './types';

export const mapOffice = (dto: OfficeDto): Office => ({
  id: dto.id,
  fullAddress: dto.office,
  regionId: dto.regionId,
});

export const mapOffices = (dtos: OfficeDto[]): Office[] => dtos.map(mapOffice);
