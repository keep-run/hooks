import React from 'react'
import { useBoolean } from '../../hooks/index'
export default function Demo() {
  const [state, { setTrue, setFalse }] = useBoolean(true)
  return <div>
    <p>{`state is ${state}`}</p>
    <button onClick={setTrue}> set true</button>
    <button onClick={setFalse}> set false</button>
  </div>
}