import React, { useState } from "react";
import "../styles/layout.styled.css";
import "../styles/Header.styled.css";
import { Video } from "./Types/Video.types";
import VideoCard from "./VideoCard";
import MdLogo from "./Assets/YouTube-Icon-White-Logo.wine.svg";
import api from "src/api";
import SearchInput from "./SearchInput";

const Layout = () => {
  const LgLogo =
    "https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg";

  const [videos, setVideos] = useState<Video>();
  const [term, setTerm] = useState<string>("");

  const handleSubmit = async (termFromSearchBar: string) => {
    const response = await api.get("/search", {
      params: {
        q: termFromSearchBar,
      },
    });
    setVideos(response.data);
  };

  return (
    <React.Fragment>
      <div className="header_container">
        <img className="logo" src={LgLogo} alt="logo" />
        <img className="md_logo" src={MdLogo} alt="logo" />
        <SearchInput
          term={term}
          setTerm={setTerm}
          handleSubmit={handleSubmit}
        />
      </div>
      <div className="wrapper">
        <div className="total_resluts">
          <p className="total">About {videos?.pageInfo.totalResults} results</p>
        </div>
        {videos?.items?.map((item, index) => (
          <div className="card" key={index}>
            <VideoCard item={item.snippet} />
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Layout;
