import './AppMemberSelect.scss'

import classNames from 'classnames'
import React from 'react'
import { useHistory } from 'react-router'

type AppMemberSelectProps = {
  label?: string;
  value?: string;
  required?: boolean;
};

const AppMemberSelect: React.FC<AppMemberSelectProps> = ({ label, required, ...otherprops }) => {
  const history = useHistory()
  function showMembers() {
    history.push('/members')
  }
  return (
    <div className="AppMemberSelect">
      {label && <label className={classNames('AppMemberSelect_label', required && 'required')}>{label}</label>}
      {['内部人员', '外部人员'].map((v, i) => {
        return (
          <div className="AppMemberSelect_item" key={i}>
            <span className="AppMemberSelect_placeholder">{v}</span>
            <i className="AppMemberSelect_icon--end" onClick={showMembers}></i>
          </div>
        );
      })}
    </div>
  );
};

export default AppMemberSelect;
