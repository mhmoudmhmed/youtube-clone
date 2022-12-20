import React, { useEffect, useState } from "react";
import "./layout.styled.css";
import "./Header.styled.css";
import SearchInput from "./SearchInput";
import { Video } from "./Types/Video.types";
import VideoCard from "./VideoCard";
import MdLogo from "./Assets/YouTube-Icon-White-Logo.wine.svg";
import api from "src/api";

const Layout = () => {
  const LgLogo =
    "https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg";

  const [videos, setVideos] = useState<Video>();

  const handleSubmit = async (termFromSearchBar: string) => {
    const response = await api.get("/search", {
      params: {
        q: termFromSearchBar,
      },
    });
    setVideos(response.data);
  };
  useEffect(() => {
    handleSubmit("spongbob");
  }, []);

  return (
    <React.Fragment>
      <div className="header_container">
        <img className="logo" src={LgLogo} alt="logo" />
        <img className="md_logo" src={MdLogo} alt="logo" />
        <SearchInput />
      </div>
      <div className="wrapper">
        {videos?.items?.map((item, index) => (
          <div key={index}>
            <VideoCard item={item.snippet} />
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Layout;
