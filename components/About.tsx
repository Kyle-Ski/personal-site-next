import Image from 'next/image'
import { AboutData } from '../interfaces'
import { ABOUT_TITLE } from '../utils/constants'

interface Props {
  about: AboutData
}

const About = ({ about }: Props) => {
  return (
    <div id={ABOUT_TITLE}>
      <Image src="/Me.jpg" alt="Head-shot of Kyle" width={72} height={72} />
      <div>{about?.aboutParagraph}</div>
    </div>
  )
}

export default About
