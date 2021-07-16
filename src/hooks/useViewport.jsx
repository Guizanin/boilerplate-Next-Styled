import { useState, useEffect } from 'react'

export const useViewport = () => {
  const [width, setWidth] = useState(undefined)
  const [height, setHeight] = useState(undefined)

  useEffect(() => {
    const handleWindowResize = () => {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
    }

    handleWindowResize()

    window.addEventListener('resize', handleWindowResize)

    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  return { width, height }
}
