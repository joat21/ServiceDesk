export interface Notification {
  id: number; // временно меняю на number из за ограничений mokky.dev
  title: string;
  text: string;
  createdAt: Date;
  ticketId: string;
  isReaded: boolean;
}
