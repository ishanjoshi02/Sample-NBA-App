import React from "react";

import styles from "../videos_list.css";
import VideoListTemplate from "../videos_list_template";

const VideosRelated = props => (
  <div className={styles.related_wrapper}>
    <VideoListTemplate data={props.data} teams={props.teams} />
  </div>
);

export default VideosRelated;
