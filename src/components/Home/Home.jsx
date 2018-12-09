import React from "react";

import NewsSlider from "../widgets/NewsSlider/slider";
import NewsList from "../widgets/NewsList/news_list";
import VideosList from "../widgets/VideosList/videos_list";

const Home = () => {
  return (
    <div>
      <NewsSlider
        type="featured"
        start={0}
        amount={3}
        settings={{ dots: false }}
      />
      <NewsList type="card" loadMore={true} start={0} amount={3} />
      <VideosList
        type="card"
        title={true}
        loadMore={false}
        start={0}
        amount={3}
      />
    </div>
  );
};
export default Home;
