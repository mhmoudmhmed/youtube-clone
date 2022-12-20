import { ApiResponse } from "src/app_types";

export type Thumbnails = {
  high: {
    height: number;
    url: string;
    width: number;
  };
};
export type Snippet = {
  channelTitle: string;
  description: string;
  title: string;
  publishTime: Date;
  publishedAt: Date;
  thumbnails: Thumbnails;
};

export type Items = {
  snippet: Snippet;
};
type PageInfo = {
  resultsPerPage: number;
  totalResults: number;
};

export interface Video {
  items: Array<Items>;
  pageInfo: PageInfo;
}

export type VideoPayload = ApiResponse<Array<Video>>;
