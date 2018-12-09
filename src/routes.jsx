import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/Home/Home";
import Layout from "./hoc/Layout/layout";

import NewsArticle from "./components/Articles/News/Post/index";
import VideoArticle from "./components/Articles/Videos/Video/index";
import NewsMainPage from "./components/NewsMainPage/news_main_page";
import VideosMainPage from "./components/VideosMainPage/videos_main_page";

class Routes extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/articles/:id" exact component={NewsArticle} />
          <Route path="/videos/:id" exact component={VideoArticle} />
          <Route path="/news" exact component={NewsMainPage} />
          <Route path="/videos" exact component={VideosMainPage} />
        </Switch>
      </Layout>
    );
  }
}

export default Routes;
