import { PersonalTimeLineItem } from '../interfaces'
import { PERSONAL_TIMELINE_ANCHOR } from '../utils/constants'
import styles from '../styles/Home.module.css'
import timelineStyles from '../styles/PersonalTimeLine.module.css'

type Props = {
  timeline: PersonalTimeLineItem[]
}

const PersonalTimeLine = ({ timeline }: Props) => {
  return (
    <div className={timelineStyles.timeLineWrapper}>
      <h2 id={PERSONAL_TIMELINE_ANCHOR}>Personal Timeline</h2>
      <div className={timelineStyles.listWrapper}>
      {timeline &&
        timeline.map((item, index) => (
          <div key={`${item?.title}${index}`} className={styles.timelineItem}>
            <div>
              <p>{item?.title ? item.title : `Default Title ${index + 1}`}</p>
              <p>
                {item?.dateRange ? item.dateRange : `Default Date Range ${index + 1}`}
              </p>
            </div>
            <hr />
            <div className={styles.timelineItemDescription}>
              <p>
                {item?.description
                  ? item.description
                  : `Default Description ${index + 1}`}
              </p>
            </div>
            <p className={timelineStyles.timeLineSeparator}>...</p>
          </div>
        ))}
        </div>
    </div>
  )
}

export default PersonalTimeLine
