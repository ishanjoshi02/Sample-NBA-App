import React, { Component } from "react";
import NewsSlider from "../widgets/NewsSlider/slider";
import NewsList from "../widgets/NewsList/news_list";

class NewsMainPage extends Component {
  state = {};
  render() {
    return (
      <div>
        <NewsSlider
          type="featured"
          start={0}
          amount={3}
          settings={{ dots: false }}
        />
        <NewsList
          type="card_with_images"
          loadMore={true}
          start={0}
          amount={6}
        />
      </div>
    );
  }
}

export default NewsMainPage;
