import { useState } from 'react'

import { SelectOption } from '../components/AppSelect'

export default function useSelect({
  label = '',
  placeholder = '请输入',
  readOnly = false,
  required = false,
  initValue = '',
  errorMessage = '',
  data = [] as SelectOption[],
  validator = (v: string) => true,
  validateTriggers = ['onChange']
}) {
  const [value, setValue] = useState(initValue || data[0].value)
  const [error, setError] = useState(false)

  if (required) {
    validator = (value) => value.trim() !== ''
    errorMessage = `${label}不能为空`
  }

  function onChange(e: any) {
    const { value } = e.target
    setValue(value)
    // console.log(value)

    if (validateTriggers.includes('onChange')) {
      setError(!validator(value))
    }
  }

  return {
    label,
    required,
    value,
    error,
    errorMessage,
    data,
    readOnly,
    placeholder,
    onChange,
  }
}
