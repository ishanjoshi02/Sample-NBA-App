import React from "react";
import FontAwesome from "react-fontawesome";

import styles from "./card_info.css";

const CardInfo = props => {
  const getTeamName = (teamList, teamId) => {
    let data = teamList.find(item => {
      return item.id === teamId;
    });
    return data ? data.name : "";
  };
  return (
    <div className={styles.card_info}>
      <span className={styles.team_name}>
        {getTeamName(props.teams, props.teamId)}
      </span>
      <span className={styles.date}>
        <FontAwesome name="clock-o" />
        {props.date}
      </span>
    </div>
  );
};

export default CardInfo;
