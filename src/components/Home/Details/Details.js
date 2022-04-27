import {useEffect} from 'react';
import {useState} from 'react';
import {Container, Background, ImgTitle, ContentMeta, Controls, Player, Trailer, AddList, GroupWatch, SubTitle, Description} from './StyledDetails';
import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
const Details = (props) => {
   const [movie, setMovie] = useState({});
   const params = useParams();
   const moviesState = useSelector((state) => state.movie);
   useEffect(() => {
      for (const [_key, val] of Object.entries(moviesState)) {
         for (const data of val) {
            if (data.id === params.id) {
               setMovie(data);
               break;
            }
         }
      }
   }, []);

   return (
      <Container>
         <Background>
            <img src={movie.backgroundImg} alt={movie.title} />
         </Background>
         <ImgTitle>
            <img src={movie.titleImg} alt={movie.titleImg} />
         </ImgTitle>
         <ContentMeta>
            <Controls>
               <Player>
                  <img src="/images/play-icon-black.png" />
                  <span>Play</span>
               </Player>
               <Trailer>
                  <img src="/images/play-icon-white.png" alt="" />
                  <span>Trailer</span>
               </Trailer>
               <AddList>
                  <span></span>
                  <span></span>
               </AddList>
               <GroupWatch>
                  <div>
                     <img src="/images/group-icon.png" alt="" />
                  </div>
               </GroupWatch>
            </Controls>
            <SubTitle>{movie.subTitle}</SubTitle>
            <Description>{movie.description}</Description>
         </ContentMeta>
      </Container>
   );
}

export default Details;
