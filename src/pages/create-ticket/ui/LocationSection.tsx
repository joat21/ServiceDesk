import type { FC } from 'react';
import { CreateTicketAutocomplete } from './CreateTicketAutocomplete';
import { CreateTicketTextarea } from './CreateTicketTextarea';
import type { TicketFormState } from '../model/types';
import type { Office } from '@/entities/office';

interface LocationSectionProps {
  offices: Office[] | undefined;
  formState: TicketFormState;
  handleFieldChange: (
    field: keyof TicketFormState,
    value: string | null
  ) => void;
  isRelocation: boolean;
}

export const LocationSection: FC<LocationSectionProps> = ({
  offices,
  formState,
  handleFieldChange,
  isRelocation,
}) => {
  return (
    <>
      <div className="flex gap-3">
        <CreateTicketAutocomplete
          name="office"
          label="Офис"
          placeholder="Выберите офис"
          options={offices ?? []}
          getLabel={(o) => o.fullAddress}
          selectedKey={formState.officeId}
          onSelectionChange={(value) =>
            handleFieldChange('officeId', String(value))
          }
        />

        {isRelocation && (
          <CreateTicketAutocomplete
            name="office"
            label="Новый офис"
            placeholder="Выберите офис"
            options={offices ?? []}
            getLabel={(o) => o.fullAddress}
            selectedKey={formState.relocationOfficeId}
            onSelectionChange={(value) =>
              handleFieldChange('relocationOfficeId', String(value))
            }
          />
        )}
      </div>

      <CreateTicketTextarea
        name="additionalLocation"
        label="Дополнительная локация"
        labelPlacement="outside"
        placeholder="Этаж, кабинет, уточнения"
        isRequired
        value={formState.location}
        onChange={(e) => handleFieldChange('location', e.target.value)}
      />
    </>
  );
};
