export interface Notification {
  id: string;
  title: string;
  text: string;
  createdAt: Date;
  ticketId: string;
  isReaded: boolean;
}
