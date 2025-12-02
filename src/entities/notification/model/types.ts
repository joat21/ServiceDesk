export interface Notification {
  id: string | number;
  title: string;
  text: string;
  createdAt: string;
  ticketId: string;
  isRead: boolean;
}
