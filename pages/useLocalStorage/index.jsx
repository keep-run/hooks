import React, { useState } from 'react'
import { useLocalStorage } from '../../hooks/index'
export default function Demo() {
  const [key, setKey] = useState('test')
  const [state, updateState] = useLocalStorage(key, 'demo')

  return <div>
    <p>{` local storage of ${key}  is ${state}; defaultvalue is demo`}</p>
    <button onClick={() => updateState(1)}> set 1</button>
    <button onClick={() => updateState(2)}> set 2</button>
    <button onClick={() => updateState()}> remove </button>
    <button onClick={() => setKey(key === 'test' ? "test1" : "test")} > change key</button>
  </div>
}