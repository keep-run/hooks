
import React, { useState, useRef, useMemo, useEffect } from 'react'
import './index.less'

const HEIGHT = 500  //展示高度
const ITEMHEIGHT = 50   //默认的高度
const BUFFERSIZE = 5

export default function ({ data = [], height = HEIGHT, itemHeight = ITEMHEIGHT, bufferSize = BUFFERSIZE }) {
  const showNum = useMemo(() => Math.ceil(height / itemHeight), [])
  const containerRef = useRef(null)
  const [startIndex, setStartIndex] = useState(0)
  const [visibleData, setVisibleData] = useState(data.slice(startIndex, startIndex + showNum + bufferSize))


  useEffect(() => {
    const currentList = data.slice(startIndex, startIndex + showNum)
    setVisibleData(currentList)
  }, [startIndex])

  const handleScroll = () => {
    const scrollTop = containerRef.current.scrollTop
    const newStartIndex = Math.floor(scrollTop / itemHeight)
    setStartIndex(newStartIndex)
  }


  const paddingTop = `${startIndex * itemHeight}px`
  const paddingBottom = `${Math.max(data.length - startIndex - showNum, 0) * itemHeight}px`


  return (
    <div ref={containerRef} className='virtual-list-container' style={{ height: `${height}px` }} onScroll={handleScroll}>
      <div style={{ paddingTop, paddingBottom }} >
        {
          visibleData.map((item, index) => (
            <div
              key={index}
              className='list-item'
              style={{ height: `${itemHeight}px`, lineHeight: `${itemHeight}px` }}
            >
              {item}
            </div>))
        }
      </div>
    </div>
  )
}