import { useEffect, useState } from 'react'
import { BsFillArrowUpSquareFill } from 'react-icons/bs'
import { IconContext } from "react-icons";

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
      if (scrollPosition > 100) {
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
    <IconContext.Provider value={{ className: `scroll ${(showButton ? 'show-button' : 'hide-button')}` }}>
      <BsFillArrowUpSquareFill onClick={handleScroll}/>
      </IconContext.Provider >
  )
}
export default BackToTop
