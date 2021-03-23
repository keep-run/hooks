import React, { useState, useRef, useMemo } from 'react'
import VirtualList from '../../component/virtualList'


export default function () {
  const data = useMemo(() => {
    return (new Array(1000)).fill('list-item')
  }, [])

  return (
    <VirtualList data={data} />
  )
}