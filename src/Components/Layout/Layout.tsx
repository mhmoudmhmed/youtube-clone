import React, { useState } from "react";
import "../styles/layout.styled.css";
import "../styles/Header.styled.css";
import { Video } from "../Types/Video.types";
import VideoCard from "../VideoCard";
import MdLogo from "../Assets/YouTube-Icon-White-Logo.wine.svg";
import api from "src/api";
import SearchInput from "../SearchInput";
import PageLoader from "../Loading/LoadingSpinner";

const Layout = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const LgLogo =
    "https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg";

  const [videos, setVideos] = useState<Video>();
  const [term, setTerm] = useState<string>("");

  const handleSubmit = async (termFromSearchBar: string) => {
    setLoading(true);
    await api
      .get("/search", {
        params: {
          q: termFromSearchBar,
        },
      })
      .then((res) => {
        if (res.request.status === 200) {
          setVideos(res.data);
          setLoading(false);
        }
      });
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
      {loading ? (
        <PageLoader />
      ) : (
        <div className="wrapper">
          <div className="total_resluts">
            {!videos?.pageInfo.totalResults ? (
              ""
            ) : (
              <>
                <p className="total">
                  About {videos?.pageInfo.totalResults} results
                </p>
                <div className="filter_container">
                  <span className="material-symbols-outlined">filter_list</span>
                  <p>filter</p>
                </div>
              </>
            )}
          </div>
          {videos?.items?.map((item, index) => (
            <div className="card" key={index}>
              <VideoCard item={item.snippet} />
            </div>
          ))}
        </div>
      )}
    </React.Fragment>
  );
};

export default Layout;
