import React from "react";

import { Link } from "react-router-dom";
import CardInfo from "../CardInfo/card_info";

import styles from "./videos_list_template.css";
import { URL } from "../../../config";

const VideosListTemplate = props => {
  return props.data.map((item, i) => {
    return (
      <Link to={`/videos/${item.id}`} key={i}>
        <div className={styles.video_list_item_wrapper}>
          <div
            className={styles.left}
            style={{ background: `url(/images/videos/${item.image})` }}
          >
            <div />
          </div>
          <div className={styles.right}>
            <CardInfo teams={props.teams} teamId={item.team} date={item.date} />
            <h2>{item.title}</h2>
          </div>
        </div>
      </Link>
    );
  });
};
export default VideosListTemplate;
