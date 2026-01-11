export type PriorityName = 'low' | 'medium' | 'high' | 'express';

export interface Priority {
  priorityId: number;
  name: PriorityName;
  sla: number;
}
