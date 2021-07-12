import { useEffect, useState } from 'react'

const isValidFunction = func => {
  return func && typeof func === 'function'
}

// source: https://gist.github.com/joshuacerbito/ea318a6a7ca4336e9fadb9ae5bbb87f4#gistcomment-3481015
export function useScroll({ onScroll, onScrollUp, onScrollDown }) {
  const [scroll, setScroll] = useState(
    typeof window === 'undefined' || !window.document
      ? { x: 0, y: 0, direction: '' }
      : {
          x: document.body.getBoundingClientRect().left,
          y: -document.body.getBoundingClientRect().top,
          direction: '',
        }
  )

  useEffect(() => {
    const handleScroll = () => {
      setScroll(prevScroll => {
        const rect =
          typeof window === 'undefined' || !window.document
            ? { left: 0, top: 0 }
            : document.body.getBoundingClientRect()
        const x = rect.left
        const y = -rect.top
        const direction = prevScroll.y > y ? 'up' : 'down'
        const newScroll = { x, y, direction }

        if (isValidFunction(onScroll)) {
          onScroll(newScroll)
        }
        if (direction === 'up' && isValidFunction(onScrollUp)) {
          onScrollUp(newScroll)
        }
        if (direction === 'down' && isValidFunction(onScrollDown)) {
          onScrollDown(newScroll)
        }

        return newScroll
      })
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [onScroll, onScrollDown, onScrollUp])

  return scroll
}

export default useScroll