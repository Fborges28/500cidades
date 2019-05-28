import React from "react";
import TitleUnderline from "../../components/TitleUnderline";
import VideoPlayer from "../../components/VideoPlayer";
import * as moment from 'moment';
import 'moment/locale/pt-br';

function VideoWithDescription(props){
	const { videoInfo } = props;
  moment.locale('pt-br');
  const date = moment(videoInfo.date, "DD/MM/YYYY");
            
  return(
    <div className="VideoInfo">
      <div className="VideoInfoArea">
	      <VideoPlayer url={videoInfo.video_url} />
      </div>
      <h3>{videoInfo.title}</h3>
      <p className="VideoInfoDate"><i class="fas fa-calendar"></i>{date.get("date")} {date.format("[de] MMMM")}</p>
    </div>
  )
}

export default VideoWithDescription;
