import type { FC } from 'react';
import type { TicketHistoryItem } from '@/entities/ticket';

interface HistoryItemProps {
  item: TicketHistoryItem;
}

export const HistoryItem: FC<HistoryItemProps> = ({ item }) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center">
        <span className="text-xl font-medium">{item.theme}</span>
        <span className="text-lg text-[#666]">
          {new Date(item.createdAt).toLocaleString()}
        </span>
      </div>
      <span className="mb-4 text-lg text-[#666]">{item.actor.name}</span>
      <span className="mb-3 px-4 py-3 border border-[#c3c0c0] rounded-lg text-lg text-[#666] bg-[#f8f8f8]">
        {item.message}
      </span>
      {item.photo && item.photo.length > 0 && (
        <ul className="flex flex-wrap gap-2">
          {item.photo.map((url) => (
            <li
              key={url}
              className="flex items-center justify-center border border-[#c3c0c0] rounded-lg w-40 h-40 bg-[#f8f8f8] overflow-hidden"
            >
              <img className="w-full h-full object-cover" src={url} alt="" />
            </li>
          ))}
        </ul>
      )}
      {item.rating && <span>Оценка: {item.rating}</span>}

      {/* TODO: фото, оценка от заявителя */}
    </div>
  );
};
