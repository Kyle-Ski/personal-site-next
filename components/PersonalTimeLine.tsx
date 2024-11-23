'use client'

import { PersonalTimeLineItem } from '../interfaces'
import { PERSONAL_TIMELINE_ANCHOR } from '../utils/constants'
import styles from '../styles/PersonalTimeLine.module.css'

type Props = {
  timeline: PersonalTimeLineItem[]
}

const PersonalTimeLine = ({ timeline }: Props) => {
  return (
    <div className={styles.timeLineWrapper}>
      <h2 id={PERSONAL_TIMELINE_ANCHOR} className={styles.timeLineTitle}>
        Personal Timeline
      </h2>
      <div className={styles.listWrapper}>
        {timeline &&
          timeline.map((item, index) => (
            <div key={`${item?.title}${index}`} className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <h3 className={styles.timelineTitle}>
                  {item?.title || `Default Title ${index + 1}`}
                </h3>
                <p className={styles.timelineDate}>
                  {item?.dateRange || `Default Date Range ${index + 1}`}
                </p>
                <p className={styles.timelineDescription}>
                  {item?.description || `Default Description ${index + 1}`}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default PersonalTimeLine
