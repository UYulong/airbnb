import React, { memo, useEffect, useRef, useState } from 'react'
import { ScrollViewWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'

const ScrollView = memo((props) => {

  const [posIdx, setPosIdx] = useState(0)
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(false)

  const contentRef = useRef()
  const totalDistance = useRef()

  useEffect(() => {
    const scrollWidth = contentRef.current.scrollWidth
    const clientWidth = contentRef.current.clientWidth
    totalDistance.current = scrollWidth - clientWidth
    if (totalDistance.current > 0) {
      setShowRight(true)
    }
  }, [props.children])

  // 点击移动
  const moveEvent = (isRight) => {
    const index = isRight ? posIdx + 1 : posIdx - 1
    const nextEle = contentRef.current.children[index]
    const moveDistance = nextEle.offsetLeft
    contentRef.current.style.transform = `translate(-${moveDistance}px)`
    setPosIdx(index)
    setShowRight(totalDistance.current > moveDistance)
    setShowLeft(moveDistance > 0)
  }

  return (
    <ScrollViewWrapper>
      {showLeft && (
        <div className="control left" onClick={e => moveEvent(false)}>
          <IconArrowLeft />
        </div>
      )}
      {showRight && (
        <div className="control right" onClick={e => moveEvent(true)}>
          <IconArrowRight />
        </div>
      )}

      <div className="scroll">
        <div className='content' ref={contentRef}>
          {props.children}
        </div>
      </div>
    </ScrollViewWrapper>
  )
})

ScrollView.propTypes = {}

export default ScrollView