import React, {useEffect, useState} from "react";
import {Container} from "./StyledHome";
import ImgSlider from './ImgSlider/ImgSlider';
import Viewers from './Viewers/Viewers';
import Films from './Films/Films';
import {useSelector, useDispatch} from 'react-redux';
import {fetchDataJson} from "../../store/features/movie-fetch";

const Home = (props) => {
   const dispatch = useDispatch();
   const [isLoading, setIsLoading] = useState(false);
   const movieState = useSelector((state) => state.movie);
   useEffect(() => {
      dispatch(fetchDataJson());
      setTimeout(() => {
         setIsLoading(true);
      }, 2000);
   }, []);
   return (
      <Container>
         <ImgSlider ></ImgSlider>
         <Viewers></Viewers>
         <Films film={movieState.recommend} text="Recommended For You" isLoading={isLoading}></Films>
         <Films film={movieState.newDisney} text="New to Disney+" isLoading={isLoading}></Films>
         <Films film={movieState.original} text="Originals" isLoading={isLoading}></Films>
         <Films film={movieState.trending} text="Trending" isLoading={isLoading}></Films>
      </Container>
   );
}

export default Home;
