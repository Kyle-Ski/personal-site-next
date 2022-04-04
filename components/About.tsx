import Image from 'next/image'
import { AboutData } from '../interfaces'

interface Props {
  about: AboutData
}

const About = ({ about }: Props) => {
  console.log('ABOUT:', about)
  return (
    <div>
      <Image src="/Me.jpg" alt="Head-shot of Kyle" width={72} height={72} />
      <div>
        {about?.aboutParagraph}
        {/* <p>
          My passion in life has always been learning new skills and exploring alluring
          places. To me happiness is constantly engaging in activities that keep me in
          motion towards a better future.
        </p>
        <p>
          As a Full-Stack Developer, I have been able to pursue my love of problem
          solving, experimenting, improvement of my work and myself.
        </p>
        <p>
          While I am not working, I enjoy learning the Guitar, playing board games, and
          reading. When I have more free time, I love to spend time outdoors with my wife
          and our dog: backpacking, hiking, and climbing 14er's.
        </p> */}
      </div>
    </div>
  )
}

export default About
