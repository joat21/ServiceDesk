import type { FC } from 'react';
import { AutocompleteItem } from '@heroui/react';
import type { TicketFormState } from '@/features/create-ticket';
import type { Office } from '@/entities/office';
import { Autocomplete, Textarea } from '@/shared/ui';

interface LocationSectionProps {
  offices: Office[] | undefined;
  formState: TicketFormState;
  handleFieldChange: (
    field: keyof TicketFormState,
    value: string | number | null
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
        <Autocomplete
          name="office"
          label="Офис"
          placeholder="Выберите офис"
          defaultItems={offices ?? []}
          selectedKey={formState.officeId}
          onSelectionChange={(value) => handleFieldChange('officeId', value)}
          isRequired
        >
          {(office) => (
            <AutocompleteItem key={office.id}>
              {office.fullAddress}
            </AutocompleteItem>
          )}
        </Autocomplete>

        {isRelocation && (
          <>
            <Autocomplete
              name="newOffice"
              label="Новый офис"
              placeholder="Выберите офис"
              defaultItems={offices ?? []}
              selectedKey={formState.relocationOfficeId}
              onSelectionChange={(value) =>
                handleFieldChange('relocationOfficeId', String(value))
              }
              isRequired
            >
              {(office) => (
                <AutocompleteItem key={office.id}>
                  {office.fullAddress}
                </AutocompleteItem>
              )}
            </Autocomplete>
          </>
        )}
      </div>

      <Textarea
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
