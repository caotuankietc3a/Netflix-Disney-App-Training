import {Container, Content, Wrap} from './StyledFilms';
import {Link} from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';

const Films = (props) => {
   const films = props.film?.map((film, i) => {
      if (props.isLoading) {
         return <Wrap key={i}>
            <Link to={`/details/${film.id}`}>
               <img src={film.cardImg} alt={film.title} />
            </Link>
         </Wrap>;
      } else {
         return <CircularProgress key={i} />
      }
   });
   return (
      <Container>
         <h4>{props.text}</h4>
         <Content>
            {films}
         </Content>
      </Container>
   );
}

export default Films;
