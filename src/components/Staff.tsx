import classnames from 'classnames';
import React from 'react';
import styld from 'styled-components';
import { MemberItem } from '../service/mine.model';
import { getRoleName } from '../utils/commonFunctions';
import './Staff.scss';

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

const StaffList = styld.div`
display: flex;
    flex-wrap: wrap;

    &.nowrap {
      // flex-wrap: nowrap;

      .Staff {
        display: flex;
        align-items: flex-end;
      }
    }

    .Staff:not(.inline) {
      width: 100%;
    }
`;

export { StaffList, Staff };
