export type PriorityName = 'low' | 'medium' | 'high' | 'express';

export interface Priority {
  id: string | number;
  name: PriorityName;
  slaFactor: number;
}
