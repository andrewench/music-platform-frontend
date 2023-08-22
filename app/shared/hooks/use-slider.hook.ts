import { RefObject, useCallback, useEffect, useState } from 'react'

interface IUseSlider {
  percent: number
  refs: {
    wrap: RefObject<HTMLDivElement>
  }
}

export const useSlider = ({ percent, refs }: IUseSlider) => {
  const [isDrag, setDrag] = useState<boolean>(false)
  const [mouseXPos, setMouseXPos] = useState<number>(0)

  const [draggerXPos, setDraggerXPos] = useState<number>(() => {
    return percent
  })

  const getOffsetXPos = useCallback(() => {
    if (!refs.wrap.current) return

    return mouseXPos - refs.wrap.current.offsetLeft
  }, [mouseXPos, refs.wrap])

  const mouseDownHandler = useCallback(() => {
    if (!refs.wrap.current) return

    if (!isDrag) {
      const offsetX = getOffsetXPos()

      if (!offsetX) return

      setDraggerXPos(offsetX)

      setDrag(true)
    }
  }, [getOffsetXPos, isDrag, refs.wrap])

  const mouseUpHandler = useCallback(() => {
    if (!refs.wrap.current) return

    if (isDrag) setDrag(false)
  }, [isDrag, refs.wrap])

  useEffect(() => {
    const wrapRef = refs.wrap.current

    if (!wrapRef) return

    const mouseMoveHandler = (event: MouseEvent) => {
      setMouseXPos(event.pageX)

      if (isDrag) {
        const offsetXPos = getOffsetXPos()

        if (!offsetXPos) return

        if (
          mouseXPos >= wrapRef.offsetLeft &&
          mouseXPos <= wrapRef.offsetLeft + wrapRef.offsetWidth
        ) {
          setDraggerXPos(offsetXPos)
        }
      }
    }

    document.addEventListener('mousemove', mouseMoveHandler)

    return () => {
      document.removeEventListener('mousemove', mouseMoveHandler)
    }
  }, [getOffsetXPos, isDrag, mouseXPos, refs.wrap])

  useEffect(() => {
    if (isDrag) {
      document.body.style.userSelect = 'none'
    } else {
      document.body.style.userSelect = ''
    }
  }, [isDrag])

  useEffect(() => {
    const mouseUpHandler = () => {
      if (!isDrag) return

      setDrag(false)
    }

    document.addEventListener('mouseup', mouseUpHandler)

    return () => {
      document.removeEventListener('mouseup', mouseUpHandler)
    }
  }, [isDrag])

  return {
    mouseDownHandler,
    mouseUpHandler,
    isDrag,
    draggerXPos,
  }
}
