import type { FC } from 'react';
import type { TicketHistoryItem } from '@/entities/ticket';
import { StarIcon } from '@/shared/ui/icons';
import { formatDateTime } from '@/shared/lib/dateTime';

interface HistoryItemProps {
  item: TicketHistoryItem;
}

export const HistoryItem: FC<HistoryItemProps> = ({ item }) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center">
        <span className="text-xl font-medium">{item.theme}</span>
        <span className="text-lg text-[#666]">
          {formatDateTime(item.createdAt, 'numeric')}
        </span>
      </div>
      <span className="mb-4 text-lg text-[#666]">{item.username}</span>
      <span className="mb-3 px-3 py-2 border border-[#c3c0c0] rounded-lg text-lg text-[#666] bg-[#f8f8f8]">
        {item.message}
      </span>
      {item.photos && item.photos.length > 0 && (
        <ul className="flex flex-wrap gap-2">
          {item.photos.map((url) => (
            <li
              key={url}
              className="flex items-center justify-center border border-[#c3c0c0] rounded-lg w-40 h-40 bg-[#f8f8f8] overflow-hidden"
            >
              <img className="w-full h-full object-cover" src={url} alt="" />
            </li>
          ))}
        </ul>
      )}
      {item.rating && (
        <span className="flex gap-1 text-lg font-medium">
          Оценка:<span> {item.rating}</span>
          <StarIcon />
        </span>
      )}
    </div>
  );
};
