import './AppSelect.scss'

import classnames from 'classnames'
import React from 'react'

export interface SelectOption {
  label: string;
  value: string;
}

type AppSelectProps = {
  label?: string;
  required?: boolean;
  error?: boolean;
  errorMessage?: string;
  data?: any;
  value?: string;
  placeholder?: string;
  readOnly?: boolean;
  onChange?: (e: any) => void;
};
const AppSelect: React.FC<AppSelectProps> = ({ label, required, error, errorMessage, data, value, ...otherprops }) => {
  return (
    <div className={classnames('AppSelect', error && 'error')}>
      {label && <label className={classnames('AppSelect_label', required && 'required')}>{label}</label>}
      <div className="AppSelect_wrap">
        <div className="AppSelect_inner">
          <select {...otherprops} defaultValue={value}>
            {data &&
              data.map((option: SelectOption, i: number) => (
                <option key={i} value={option.value}>
                  {option.label}
                </option>
              ))}
          </select>
        </div>
        <p className="AppSelect_error_message">{error && errorMessage}</p>
      </div>
    </div>
  );
};

export default AppSelect;
