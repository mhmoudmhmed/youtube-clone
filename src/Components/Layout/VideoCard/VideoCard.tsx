import React, { FC } from "react";
import { Snippet } from "../Types/Video.types";
import "./VideoCard.styled.css";

type Props = {
  item: Snippet;
};

const VideoCard: FC<Props> = ({ item }) => {
  return (
    <div className="card_wrapper">
      <img
        src={item?.thumbnails?.high?.url}
        width={item.thumbnails?.high?.width}
        height={item.thumbnails?.high?.height}
        alt="video img"
      />
      <div className="video_info">
        <div>
          <p
            className="title"
            dangerouslySetInnerHTML={{ __html: item.channelTitle }}
          />
          <div className="info">
            <span>{item.channelTitle}</span>
          </div>
        </div>
        <p
          className="description"
          dangerouslySetInnerHTML={{ __html: item.description }}
        />
      </div>
    </div>
  );
};

export default VideoCard;
