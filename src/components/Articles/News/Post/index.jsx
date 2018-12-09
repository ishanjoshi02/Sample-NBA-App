import React, { Component } from "react";
import axios from "axios";
import { URL } from "../../../../config";

import Header from "./header";

import styles from "../../articles.css";

class NewsArticles extends Component {
  state = {
    article: [],
    team: []
  };

  componentWillMount() {
    axios
      .get(`${URL}/articles?id=${this.props.match.params.id}`)
      .then(response => {
        let article = response.data[0];
        axios
          .get(`${URL}/teams?id=${article.team}`)
          .then(response => this.setState({ article, team: response.data }));
      });
  }

  render() {
    const { article, team } = this.state;
    return (
      <div className={styles.article_wrapper}>
        <Header
          teamData={team[0]}
          date={article.date}
          author={article.author}
        />
        <div className={styles.article_body}>
          <h1>{article.title}</h1>
          <div
            className={styles.article_image}
            style={{ background: `url('/images/articles/${article.image}')` }}
          />{" "}
          <div className={styles.article_text}>{article.body}</div>
        </div>
      </div>
    );
  }
}

export default NewsArticles;
