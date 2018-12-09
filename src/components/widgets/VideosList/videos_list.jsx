import React, { Component } from "react";
import axios from "axios";

import { URL } from "../../../config";
import Button from "../Buttons/buttons";
import VideosListTemplate from "./videos_list_template";

import styles from "./videos_list.css";

class VideosList extends Component {
  state = {
    teams: [],
    videos: [],
    start: this.props.start,
    end: this.props.start + this.props.amount,
    amount: this.props.amount
  };

  componentWillMount() {
    this.request(this.state.start, this.state.end);
  }

  request = (start, end) => {
    if (this.state.teams.length < 1) {
      axios
        .get(`${URL}/teams`)
        .then(response => this.setState({ teams: response.data }));
    }
    axios
      .get(`${URL}/videos?_start=${start}&_end=${end}`)
      .then(response =>
        this.setState({ videos: [...this.state.videos, ...response.data] })
      );
  };

  loadMore = () => {
    let newEnd = this.state.end + this.state.amount;
    this.request(this.state.end, newEnd);
    this.setState({ end: newEnd });
  };

  renderVideos = () => {
    let template = null;
    switch (this.props.type) {
      case "card": {
        console.log(this.state.videos);
        template = (
          <VideosListTemplate
            data={this.state.videos}
            teams={this.state.teams}
          />
        );
        break;
      }
      default: {
        template = null;
        break;
      }
    }
    return template;
  };

  render() {
    return (
      <div className={styles.video_list_wrapper}>
        {this.props.title ? (
          <h3>
            <strong>NBA</strong> Videos
          </h3>
        ) : null}
        {this.renderVideos()}
        {this.props.loadMore ? (
          <Button
            type="loadmore"
            loadMore={() => this.loadMore()}
            cta="Load More Videos"
          />
        ) : (
          <Button type="linkTo" cta="More Videos" linkTo="/videos" />
        )}
      </div>
    );
  }
}

export default VideosList;
