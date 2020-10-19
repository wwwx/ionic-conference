import './AppInput.scss'

import React, { useCallback, useState } from 'react'

type AppInputProps = {
  value: string;
  onChange?: (e: any) => void;
  type?: string;
  placeholder?: string;
  characterSize?: number;
  error?: boolean;
  errorMessage?: string;
};
const AppInput: React.FC<AppInputProps> = ({
  value,
  onChange = () => {},
  type = 'text',
  placeholder = '请输入',
  characterSize = 20,
  error,
  errorMessage,
}) => {
  const [characterCount, setCharacterCount] = useState(0);
  const handleInput = useCallback(
    (e) => {
      // console.log(e.target.value);
      const len = e.target.value.length;
      onChange(e);

      if (len > characterSize) {
        e.target.value = e.target.value.slice(0, characterSize);
      }
      setCharacterCount(e.target.value.length);
    },
    [characterSize, onChange]
  );

  return (
    <div className="AppInput">
      <div className="AppInput_wrap">
        <input type={type} placeholder={placeholder} onInput={handleInput} />
      </div>
      <span className="AppInput_count">
        {characterCount}/{characterSize}
      </span>
      <p className="AppInput_error_message">{error && errorMessage}</p>
    </div>
  );
};

export default AppInput;
