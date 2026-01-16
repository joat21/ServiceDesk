export interface TicketFormState {
  theme: string;
  description: string;
  photosUrl: string[];
  officeId: string;
  priorityId: string | number;
  categoryId: string;
  location: string;

  relocationOfficeId?: string | null;
  relocationDate?: string | null;
}
