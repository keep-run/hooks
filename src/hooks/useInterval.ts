import { useEffect, useRef } from 'react'

export default function useInterval(
  fn: () => void,
  delay: number | undefined | null,
  options?: {
    immediate?: boolean
  }) {
  const immediate = options?.immediate
  const fnRef = useRef<() => void>()
  fnRef.current = fn

  useEffect(() => {
    if (delay === undefined || delay === null) {
      return
    }
    if (immediate) {
      fnRef.current?.()
    }
    const timer = setInterval(() => {
      fnRef.current?.()
    }, delay)
    return () => {
      clearInterval(timer)
    }
  },[delay])
}