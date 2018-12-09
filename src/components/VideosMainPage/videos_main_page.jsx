import React from "react";
import VideosList from "../widgets/VideosList/videos_list";

const VideosMainPage = () => (
  <VideosList start={0} amount={7} title={false} type={"card"} />
);

export default VideosMainPage;
