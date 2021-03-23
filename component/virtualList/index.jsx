
import React, { useState, useRef } from 'react'

export default function ({ data }) {
  return (
    <div>{data.map((item, index) => <div>{item + '---' + index}</div>)}</div>
  )
}