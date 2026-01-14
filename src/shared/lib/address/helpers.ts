import type { DaDataAddressData } from './types';

export const getLocality = (data?: DaDataAddressData) => {
  if (!data) return;
  return (
    data.city_with_type ||
    data.settlement_with_type ||
    data.area_with_type ||
    ''
  );
};

export const buildAddress = (data?: DaDataAddressData) => {
  if (!data) return;

  const parts = [
    data.street_with_type,
    data.house_type && data.house ? `${data.house_type} ${data.house}` : null,
    data.block_type && data.block ? `${data.block_type} ${data.block}` : null,
  ];

  return parts.filter(Boolean).join(', ');
};
