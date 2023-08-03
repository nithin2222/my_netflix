import React, { useEffect, useState } from "react";
import axios from "./axios";
import styled from "styled-components";
import Youtube from "react-youtube"
import movieTrailer from "movie-trailer"
const baseURL = "https://image.tmdb.org/t/p/original/";
const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("")
  

  const youtube={
    height: "300rem",
    width: "100%",
    playerVars:{
      
      autoplay:1,
      controls:1,
      modestbranding:1,
      showinfo:0
    }
   }
   const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(movie?.name || movie?.title|| "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };
  
  
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);

      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  console.log(movies);
  return (
    <RowContainer>
      <div className="row">
        <h2>{title}</h2>
        <div className="row_posters">
          {movies.map((movie) => (
            <img
                key={movie.id}
                onClick={()=>handleClick(movie)}
              // className={`row_poster ${isLargeRow && "row_poster_large"}`}
              className={`row_poster`}
              // src={`${baseURL}${isLargeRow? movie.poster_path : movie.backdrop_path}`}
               src={`${baseURL}${ movie.poster_path }`}
              alt={movie.name}
            />
          ))}
        </div>
        {trailerUrl && <Youtube videoId={trailerUrl} opts = {youtube}/>}
      </div>
    </RowContainer>
  );
};




const RowContainer = styled.div`
.row{
   
    color: white;
    margin-left: 20px;
    .row_posters{
    display: flex;
    cursor: pointer;
    overflow-y: hidden;
    overflow-x: scroll;
    padding: 20px;
    &::-webkit-scrollbar{
        display: none;
    };

 
    .row_poster {
    width: 100%;
    object-fit: contain;
    max-height: 220px;
    transition: transform 450ms;
    margin-right: 10px;
    border-radius: 0.5rem;
  
    &:hover{
    transform: scale(1.08);
    }
    }
    /* .row_poster_large{
    max-height: 250px;
    
    } */
    
 }
 
}
`;
export default Row;
