export type StatusName =
  | 'pending'
  | 'assigned'
  | 'in_progress'
  | 'outsourced'
  | 'completed'
  | 'rejected';

export interface Status {
  id: string;
  code: StatusName;
}
