import React, { Component } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Link } from "react-router-dom";
import axios from "axios";

import { URL } from "../../../config";
import Buttons from "../Buttons/buttons";
import CardInfo from "../CardInfo/card_info";

import styles from "./news_list.css";

class NewsList extends Component {
  state = {
    items: [],
    teams: [],
    start: this.props.start,
    end: this.props.start + this.props.amount,
    amount: this.props.amount
  };

  request = (start, end) => {
    if (this.state.teams.length < 1) {
      axios.get(`${URL}/teams`).then(response => {
        this.setState({ teams: response.data });
      });
    }
    axios.get(`${URL}/articles?_start=${start}&_end=${end}`).then(response => {
      this.setState({ items: [...this.state.items, ...response.data] });
    });
  };

  componentWillMount = () => {
    this.request(this.state.start, this.state.end);
  };

  loadMore = () => {
    let newEnd = this.state.end + this.state.amount;
    this.request(this.state.end, newEnd);
    this.setState({ end: newEnd });
  };

  renderNews = templateType => {
    let template = null;
    switch (templateType) {
      case "card": {
        template = this.state.items.map((item, i) => (
          <CSSTransition
            key={i}
            classNames={{
              enter: styles.newslist_wrapper,
              enterActive: styles.newslist_wrapper_enter
            }}
            timeout={500}
          >
            <div>
              <div className={styles.newslist_item}>
                <Link to={`/articles/${item.id}`}>
                  <CardInfo
                    teams={this.state.teams}
                    teamId={item.team}
                    date={item.date}
                  />
                  <h2>{item.title}</h2>
                </Link>
              </div>
            </div>
          </CSSTransition>
        ));
        break;
      }
      case "card_with_images": {
        template = this.state.items.map((item, i) => (
          <CSSTransition
            key={i}
            classNames={{
              enter: styles.newslist_wrapper,
              enterActive: styles.newslist_wrapper_enter
            }}
            timeout={500}
          >
            <div>
              <div className={styles.newslist_item}>
                <Link to={`/articles/${item.id}`}>
                  <div
                    style={{
                      display: "flex",
                      borderBottom: "2px solid #d5d5d5",
                      background: "white"
                    }}
                  >
                    <div
                      className={styles.left}
                      style={{
                        background: `url("/images/articles/${item.image}")`
                      }}
                    >
                      <div />
                    </div>
                    <div className={styles.right}>
                      <CardInfo
                        teams={this.state.teams}
                        teamId={item.team}
                        date={item.date}
                      />
                      <h2>{item.title}</h2>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </CSSTransition>
        ));
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
      <div>
        <TransitionGroup component="div" className="list">
          {this.renderNews(this.props.type)}
        </TransitionGroup>
        <Buttons
          type="loadmore"
          loadMore={() => this.loadMore()}
          cta="Load More News"
        />
      </div>
    );
  }
}

export default NewsList;
