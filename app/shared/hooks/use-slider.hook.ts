import { RefObject, useCallback, useEffect, useState } from 'react'

interface IUseSlider {
  percent: number
  maxWidth: number
  refs: {
    wrap: RefObject<HTMLDivElement>
  }
  forceUpdateFlag?: boolean
}

export const useSlider = ({
  percent,
  maxWidth,
  refs,
  forceUpdateFlag,
}: IUseSlider) => {
  const [isDrag, setDrag] = useState<boolean>(false)
  const [mouseXPos, setMouseXPos] = useState<number>(0)
  const [draggerXPos, setDraggerXPos] = useState<number>(percent)

  const getOffsetXPos = useCallback(() => {
    if (!refs.wrap.current) return

    return mouseXPos - refs.wrap.current.offsetLeft
  }, [mouseXPos, refs.wrap])

  const mouseDownHandler = useCallback(() => {
    if (forceUpdateFlag) return

    if (!refs.wrap.current) return

    if (!isDrag) {
      const offsetX = getOffsetXPos()

      if (!offsetX) return

      setDraggerXPos(offsetX)

      setDrag(true)
    }
  }, [forceUpdateFlag, getOffsetXPos, isDrag, refs.wrap])

  const mouseUpHandler = useCallback(() => {
    if (forceUpdateFlag) return

    if (!refs.wrap.current) return

    if (isDrag) setDrag(false)
  }, [forceUpdateFlag, isDrag, refs.wrap])

  useEffect(() => {
    setDraggerXPos(percent)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [forceUpdateFlag])

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

    if (forceUpdateFlag) {
      document.removeEventListener('mousemove', mouseMoveHandler)
    }

    return () => {
      document.removeEventListener('mousemove', mouseMoveHandler)
    }
  }, [forceUpdateFlag, getOffsetXPos, isDrag, mouseXPos, refs.wrap])

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
    progressPercent: Math.floor((draggerXPos / maxWidth) * 100),
  }
}
