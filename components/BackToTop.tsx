import { useEffect, useState } from 'react'

type Props = {
  handleScroll: () => void
}
const BackToTop = ({ handleScroll }: Props) => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [showButton, setShowButton] = useState(false)
  const handleVisibleButton = () => {
    if (window) {
      const position = window?.scrollY
      setScrollPosition(position)
      if (scrollPosition > 50) {
        return setShowButton(true)
      } else {
        return setShowButton(false)
      }
    }
  }

  useEffect(() => {
    if (window) {
      window.addEventListener('scroll', handleVisibleButton)
    }
    return () => window.removeEventListener('scroll', handleVisibleButton)
  })

  return (
    <button
      title="Back to top"
      className={'scroll' + (showButton ? ' show-button' : ' hide-button')}
      onClick={handleScroll}
    >
      ^
    </button>
  )
}
export default BackToTop
