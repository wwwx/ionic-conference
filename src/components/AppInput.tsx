import './AppInput.scss'

import classnames from 'classnames'
import React from 'react'

type AppInputProps = {
  value: string;
  label?: string;
  required?: boolean;
  type?: string;
  placeholder?: string;
  characterSize?: number;
  characterCount?: number;
  error?: boolean;
  errorMessage?: string;
  readOnly?: boolean;
  onChange?: (e: any) => void;
  onInput?: (e: any) => void;
  validate?: (value: any) => void;
};
const AppInput: React.FC<AppInputProps> = ({
  label,
  required,
  type,
  characterSize = 0,
  characterCount,
  error,
  errorMessage,
  validate,
  ...otherProps
}) => {
  return (
    <div className={classnames('AppInput', type, error && 'error', characterSize > 0 && 'character_count')}>
      {label && <label className={classnames('AppInput_label', required && 'required')}>{label}</label>}
      <div className="AppInput_wrap">
        <div className="AppInput_inner">
          {type === 'select' && (
            <select>
              <option value="1">slkjf</option>
              <option value="2">slkjf</option>
            </select>
          )}
          {type === 'textarea' && <textarea rows={3} {...otherProps}></textarea>}
          {<input type={type} {...otherProps} />}
        </div>
        {characterSize > 0 && (
          <span className="AppInput_count">
            {characterCount}/{characterSize}
          </span>
        )}
        <p className="AppInput_error_message">{error && errorMessage}</p>
      </div>
    </div>
  );
};

export default AppInput;
