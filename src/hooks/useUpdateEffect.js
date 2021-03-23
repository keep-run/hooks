import { useEffect, useRef } from 'react'
export default function (effect, deps) {
  const isMounted = useRef(false)

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true
    } else {
      effect()
    }
  }, deps)
}