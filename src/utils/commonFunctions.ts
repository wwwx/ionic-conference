import Axios from 'axios'

import { Role } from '../service/enum'

export const fetcher = (url: string) => {
  return Axios.get(url);
};


export function getRoleName(role: Role) {
  switch (role) {
    case Role.HOST:
      return '主持人';
    case Role.RECORDED:
      return '记录员';
  }
  return role;
}
