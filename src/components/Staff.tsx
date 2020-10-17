import './Staff.scss'

import classnames from 'classnames'
import React from 'react'

import { Role } from '../service/enum'
import { MemberItem } from '../service/mine.model'

type StaffProps = {
  info?: MemberItem;
};

const Staff: React.FC<StaffProps> = ({ info }) => {
  if (!info) {
    return null;
  }
  if (!info.role) {
    return (
      <div className="Staff inline">
        <div className="avatar"></div>
      </div>
    );
  }
  const roleName = getRoleName(info.role);

  return (
    <div className="Staff">
      <div className="avatar"></div>
      <div className="info">
        <div className="top">
          <span className="name">{info.name}</span>
          <span className={classnames('role', info.role)}>{roleName}</span>
        </div>
        <div className="dept">{info.dept}</div>
      </div>
    </div>
  );
};

function getRoleName(role: Role) {
  switch (role) {
    case Role.HOST:
      return '主持人';
    case Role.RECORDED:
      return '记录员';
  }
  return role;
}

export default Staff;
