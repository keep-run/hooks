
import { useMemo, useState } from 'react'
export default function useBoolean(defaultValue = false) {
  const [state, setState] = useState(defaultValue)
  const actions = useMemo(() => {
    const setTrue = () => setState(true);
    const setFalse = () => setState(false);
    return { setTrue, setFalse }
  })
  return [state, actions]
}