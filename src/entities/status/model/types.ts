export const STATUS_ENUM = {
  Pending: 'pending',
  Assigned: 'assigned',
  InProgress: 'in_progress',
  Outsourced: 'outsourced',
  Completed: 'completed',
  Rejected: 'rejected',
} as const;

export type StatusName = (typeof STATUS_ENUM)[keyof typeof STATUS_ENUM];

export interface Status {
  id: string;
  code: StatusName;
}
