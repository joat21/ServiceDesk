import type { FC } from 'react';
import { useParams } from 'react-router-dom';

export const TicketPage: FC = () => {
  const { id } = useParams();

  return <div>Ticket ID: {id}</div>;
};
