import { useState } from 'react'
import { useInterval } from '../../hooks/index'

export default function Interval() {
  const [counts, setCount] = useState<number>(0)
  const [interval, setInterval] = useState<number>(1000)
  useInterval(
    () => setCount(counts + 1),
    interval,
    { immediate: false }
  )

  return (
    <div>
      <p>counts {counts}</p>
      <button onClick={()=>setInterval(1000)}>设置1秒间隔</button>
      <button onClick={()=>setInterval(2000)}>设置2秒间隔</button>
      <button onClick={()=>setInterval(null)}>停止</button>
    </div>
  )
}