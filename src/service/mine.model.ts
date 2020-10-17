import { Role } from './enum'

export interface MineRouteParams {
  type: string;
}

export interface MineCardParams {
  type: number;
  title: string;
  address: string;
  datetime: string;
  host: string;
  isHost: boolean;
  content: string;
  members: MemberRecord[];
}

export interface MemberRecord {
  role: Role;
  name: string;
  dept: string;
  email: string;
  avatar: string;
}
