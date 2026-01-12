export interface Office {
  id: string;
  fullAddress: string;
  regionId: number;
}

export type GetOfficesArgs = {
  regionId?: number | null;
  filialId?: number | null;
};
