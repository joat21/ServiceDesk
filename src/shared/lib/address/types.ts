export interface AddressSuggestion {
  value: string;
  data: DaDataAddressData;
}

export interface DaDataAddressData {
  city_with_type: string | null;
  settlement_with_type: string | null;
  area_with_type: string | null;
  street_with_type: string | null;
  house_type: string | null;
  house: string | null;
  block_type: string | null;
  block: string | null;
}
