import type { FC } from 'react';
import type { TicketFormState } from '@/features/create-ticket';
import { Input, Textarea } from '@/shared/ui';

interface MainInfoSectionProps {
  formState: TicketFormState;
  handleFieldChange: (
    field: keyof TicketFormState,
    value: string | null
  ) => void;
}

export const MainInfoSection: FC<MainInfoSectionProps> = ({
  formState,
  handleFieldChange,
}) => {
  return (
    <>
      <Input
        name="theme"
        label="Тема заявки"
        labelPlacement="outside"
        placeholder="Кратко опишите суть проблемы"
        isRequired
        value={formState.theme}
        onChange={(e) => handleFieldChange('theme', e.target.value)}
      />
      <Textarea
        name="description"
        label="Подробное описание"
        labelPlacement="outside"
        placeholder="Детально опишите проблему или запрос"
        isRequired
        value={formState.description}
        onChange={(e) => handleFieldChange('description', e.target.value)}
      />
    </>
  );
};
