import { useMemo, useState } from 'react'
import useUpdateEffect from './useUpdateEffect'
export default function (key, defaultValue) {

  const [state, setState] = useState(() => getStorageValue())

  useUpdateEffect(() => {
    setState(getStorageValue())
  }, [key])

  function getStorageValue() {
    const raw = localStorage.getItem(key)
    if (raw) {
      try {
        return JSON.parse(raw)
      } catch (e) {
        console.error(e)
      }
    }
    return defaultValue
  }

  function updateState(value) {
    if (typeof value === 'undefined') {
      localStorage.removeItem(key)
    } else {
      localStorage.setItem(key, JSON.stringify(value))
    }
    setState(value)
  }

  return [state, updateState]
}