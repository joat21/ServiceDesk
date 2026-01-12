export interface Performer {
  id: string | number;
  name: string;
  surname: string;
  patronymic: string;
  systemId: string;
  email: string;
  rating: number;
  category: string[];
  office: string[];
}
