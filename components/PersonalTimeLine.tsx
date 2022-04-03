import { PersonalTimeLineItem } from '../interfaces'

type Props = {
  timeline: PersonalTimeLineItem[]
}

const PersonalTimeLine = ({ timeline }: Props) => {
  return (
    <div>
      {timeline &&
        timeline.map((item, index) => (
          <div key={`${item?.title}${index}`}>
            <p>{item?.title ? item.title : `Default Title ${index + 1}`}</p>
            <p>
              {item?.description ? item.description : `Default Description ${index + 1}`}
            </p>
          </div>
        ))}
    </div>
  )
}

export default PersonalTimeLine
