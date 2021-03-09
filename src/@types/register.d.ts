import { User } from './user';

export interface Register {
  id: number;
  user: User;
  timeRegistered: Date;
  type: string;
}
