import './AppInput.scss'

import classnames from 'classnames'
import React from 'react'

type AppInputProps = {
  label?: string;
  required?: boolean;
  type?: string;
  characterSize?: number;
  characterCount?: number;
  error?: boolean;
  errorMessage?: string;
  value?: string;
  placeholder?: string;
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
  ...otherprops
}) => {
  return (
    <div className={classnames('AppInput', type, error && 'error', characterSize > 0 && 'character_count')}>
      {label && <label className={classnames('AppInput_label', required && 'required')}>{label}</label>}
      <div className="AppInput_wrap">
        <div className="AppInput_inner">
          {type === 'textarea' ? <textarea rows={3} {...otherprops}></textarea> : <input type={type} {...otherprops} />}
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
// help: https://juejin.im/post/6844903798645719053
