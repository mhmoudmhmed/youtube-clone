import React, { useEffect } from "react";
import "../styles/layout.styled.css";
import "../styles/Header.styled.css";
import VideoCard from "../VideoCard";
import MdLogo from "../Assets/YouTube-Icon-White-Logo.wine.svg";
import SearchInput from "../SearchInput";
import PageLoader from "../Loading/LoadingSpinner";
import { useAppDispatch, useAppSelector } from "src/Features/store";
import { fetchData } from "src/Features/Reducer/Reducer";
import { useNavigate } from "react-router-dom";

const Layout = () => {
  const dispatch = useAppDispatch();
  const history = useNavigate();
  const LgLogo =
    "https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg";

  const { item, loading } = useAppSelector((state) => state.data);

  const handleSubmit = async (termFromSearchBar: string) => {
    if (termFromSearchBar) {
      dispatch(fetchData(termFromSearchBar));
    }
  };

  /// navigate to main path after refresh
  useEffect(() => {
    if (performance.navigation.type == 1) {
      history("/");
    }
  }, [performance.navigation.type]);

  return (
    <React.Fragment>
      <div className="header_container">
        <img className="logo" src={LgLogo} alt="logo" />
        <img className="md_logo" src={MdLogo} alt="logo" />
        <SearchInput handleSubmit={handleSubmit} />
      </div>
      {loading ? (
        <PageLoader />
      ) : (
        <div className="wrapper">
          <div className="total_resluts">
            {!item?.pageInfo.totalResults ? (
              ""
            ) : (
              <>
                <p className="total">
                  About {item?.pageInfo.totalResults} results
                </p>
                <div className="filter_container">
                  <span className="material-symbols-outlined">filter_list</span>
                  <p>filter</p>
                </div>
              </>
            )}
          </div>
          {item?.items?.map((item, index) => (
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
