export interface TicketFormState {
  theme: string;
  description: string;
  priorityId: string;
  categoryId: string;
  photo: string[];
  officeId: string;
  location: string;
  relocationOfficeId: string | null;
  relocationDate: string | null;
}
