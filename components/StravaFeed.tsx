import { STRAVA_TITLE } from "../utils/constants";
import styles from "../styles/Strava.module.css";

const StravaFeed = () => {
  return (
    <div className={styles.iframeWrapper}>
      <h2 id={STRAVA_TITLE}>Check out my recent runs on Strava:</h2>
      <iframe
        className={styles.iframe}
        height="454"
        width="300"
        frameBorder="0"
        scrolling="no"
        title="Recent runs on Strava by Kyle Czajkowski"
        src="https://www.strava.com/athletes/46337708/latest-rides/cfb328f35bb663d45111215b56632d2f6350526e"
      ></iframe>
    </div>
  );
};

export default StravaFeed;
