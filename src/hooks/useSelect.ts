import { useEffect, useState } from 'react'

import { SelectOption } from '../components/AppSelect'

export default function useSelect({
  label = '',
  placeholder = '请选择',
  readOnly = false,
  required = false,
  initValue = '',
  errorMessage = '',
  data = [] as SelectOption[],
  validator = (v: string) => true,
  validateTriggers = ['onChange']
}) {
  const [value, setValue] = useState(initValue)
  const [error, setError] = useState(false)

  if (required) {
    validator = (value) => value.trim() !== ''
    // errorMessage = `请选择${label}`
  }

  useEffect(() => {
    setValue(initValue)
  }, [initValue])

  function onChange(e: any) {
    const { value } = e.target
    setValue(value)

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
