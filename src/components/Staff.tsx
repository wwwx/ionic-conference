import './Staff.scss'

import classnames from 'classnames'
import React from 'react'

import { MemberItem } from '../service/mine.model'
import { getRoleName } from '../utils/commonFunctions'

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


export default Staff;
