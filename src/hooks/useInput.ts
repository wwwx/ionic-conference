import { useState } from 'react'

export default function useInput({ initValue = '', errorMessage = '', validator = (value: string) => true, validateTriggers = ['onChange'] }) {
  // eslint-disable-next-line
  const [value, setValue] = useState(initValue)
  const [error, setError] = useState(false)

  function onChange(e: any) {
    const { value } = e.target
    // console.log(value)
    setValue(value)

    if (validateTriggers.includes('onChange')) {
      setError(validator(value))
    }
  }

  function validate () {
    setError(validator(value))
  }

  return {value, error, errorMessage, onChange, validate}
}
