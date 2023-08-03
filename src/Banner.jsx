import { useState, useEffect } from "react";
import axios from "./axios";
import { useNavigate } from "react-router-dom";
import requests from "./requests";
import styled from "styled-components";
const Banner = () => {
  const [movie, setMovie] = useState([]);

   const navigate = useNavigate()

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);
  console.log(movie);
  function truncate (str,n){
    return str?.length > n ? str.substr(0,n-1)+"...":str;
  }
  return (
    <BannerContainer>
      <header className="banner" style = {{
         backgroundSize: "cover",
         backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
         backgroundPosition: "center center"
      }}>
        <div className="banner_contents">
          <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>
          <div className="banner_buttons">
            <button className="banner_button"
            onClick={()=>navigate("/player")}
            >Play</button>
            <button className="banner_button">My List</button>
          </div>
          <h1 className="banner_description">
            {truncate(movie?.overview,215)}
          </h1>
        </div>
        <div className="banner_fadeBottom"/>

        
      </header>
    </BannerContainer>
  );
};




const BannerContainer = styled.div`
 .banner{
    color:white;
    object-fit: cover;
   
   
   
    
    .banner_title{
        font-size: 3rem;
        font-weight: 800;
        padding-bottom: 0.3rem;
    }
    .banner_contents{
        margin-left: 30px;
        padding-top: 140px;
        height: 190px;
    }
    .banner_button{
        cursor: pointer;
        color: #fff;
        outline: none;
        border: none;
        font-weight: 700;
        border-radius: 0.2w;
        padding-left: 2rem;
        padding-right: 2rem;
        margin-right: 1rem;
        padding-top: 0.5rem;
        background-color: rgba(51,51,51,0.5);
        padding-bottom: 0.5rem;
        &:hover{
        color: #000;
        background-color: #e6e6e6;
        transition: all 0.2s;
    }

    }
    .banner_description{
        width: 45rem;
        line-height: 1.3rem;
        padding-top: 1rem;
        font-size: 0.8rem;
        max-width: 360px;
        height: 80px;
    }
    .banner_fadeBottom{
        height: 7.4rem;
        background: linear-gradient(
            180deg,
            transparent,
            rgba(37,34,0.61),
            #111
        );
    }
    .video_container {
    margin-top: 1rem;
  }

 }
`;
export default Banner;
