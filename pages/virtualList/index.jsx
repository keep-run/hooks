import React, { useState, useRef, useMemo } from 'react'
import VirtualList from '../../component/virtualList'


export default function () {
  const data = useMemo(() => {
    return (new Array(100)).fill('list-item').map((item, index) => {
      return `${item}-${index}`
    })
  }, [])

  return (
    <VirtualList data={data} />
  )
}