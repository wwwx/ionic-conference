import { useCallback, useState } from 'react'

export default function useInput({
  type = 'text',
  label = '',
  placeholder = '请输入',
  readOnly = false,
  required = false,
  characterSize = 0,
  initValue = '',
  errorMessage = '',
  validator = (v: string) => true,
  validateTriggers = ['onChange']
}) {
  const [value, setValue] = useState(initValue)
  const [error, setError] = useState(false)
  const [characterCount, setCharacterCount] = useState(0);

  if (required) {
    validator = (value) => value.trim() !== ''
    // errorMessage = `${label}不能为空`
  }

  const onInput = useCallback(
    (e) => {
      
      const { value } = e.target
      setValue(value)
      setError(!validator(value))
      setCharacterCount(value.length);

      if (characterSize > 0 && value.length > characterSize) {
        setValue(e.target.value.slice(0, characterSize))
        setCharacterCount(characterSize);
      }
    },
    [characterSize, validator]
  );

  function onChange(e: any) {
    const { value } = e.target
    setValue(value)

    if (validateTriggers.includes('onChange')) {
      setError(!validator(value))
    }
  }


  function createEventHandlers() {
    const eventHandlers: any = {};

    validateTriggers.forEach(item => {
      eventHandlers[item] = (e: any) => {
        const { value } = e.target;
        setError(!validator(value));
      };
    });

    return eventHandlers;
  }

  const eventHandlers = createEventHandlers();

  // function validate() {
  //   setError(!validator(value))
  // }

  
 

  return {
    label,
    required,
    type,
    characterSize,
    characterCount,
    value,
    error,
    errorMessage,
    readOnly,
    placeholder,
    // validate,
    onChange,
    onInput,
    ...eventHandlers
  }
}
