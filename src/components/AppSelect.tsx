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
  value?: any;
  placeholder?: string;
  readOnly?: boolean;
  onChange?: (e: any) => void;
};
const AppSelect: React.FC<AppSelectProps> = ({
  label,
  required,
  error,
  errorMessage,
  data,
  value,
  readOnly,
  placeholder,
  ...otherprops
}) => {
  // console.log('value: ', value);
  return (
    <div className={classnames('AppSelect', error && 'error', value === '' && 'empty_value')}>
      {label && <label className={classnames('AppSelect_label', required && 'required')}>{label}</label>}
      <div className="AppSelect_wrap">
        <div className="AppSelect_inner">
          <select {...otherprops} value={value} disabled={readOnly}>
            <option value="">{placeholder}</option>
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
