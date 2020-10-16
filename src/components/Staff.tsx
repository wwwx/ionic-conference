import './Staff.scss'

import classnames from 'classnames'
import React from 'react'

import { Role } from '../service/enum'

type StaffProps = {
  role: Role;
};

const Staff: React.FC<StaffProps> = ({ role }) => {
  const roleName = getRoleName(role);
  return (
    <div className="Staff">
      <div className="avatar"></div>
      <div className="info">
        <div className="top">
          <span className="name">张晓明</span>
          <span className={classnames('role', role)}>{roleName}</span>
        </div>
        <div className="dept">战略与人力资源中心</div>
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
