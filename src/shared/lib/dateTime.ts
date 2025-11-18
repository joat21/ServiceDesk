export const formatDate = (
  rawDate: string,
  month: 'numeric' | 'long' = 'numeric'
) => {
  const date = new Date(rawDate);
  const options = {
    day: 'numeric',
    month,
    year: 'numeric',
  } as const;

  return date.toLocaleDateString('ru-RU', options).replace(' г.', '');
};

export const formatTime = (rawDate: string) => {
  const date = new Date(rawDate);
  const options = {
    hour: '2-digit',
    minute: '2-digit',
  } as const;

  return date.toLocaleTimeString('ru-RU', options);
};

export const formatDateTime = (
  rawDate: string,
  month: 'numeric' | 'long' = 'long'
) => `${formatDate(rawDate, month)}, ${formatTime(rawDate)}`;
