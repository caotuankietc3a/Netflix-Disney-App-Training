import {Container, Wrap} from './StyledViewers';
import Video from './Video';
const Viewers = (props) => {
   const videoListType = ["disney", "pixar", "marvel", "starwars", "national"];
   const videoList = videoListType.map((video) => <Video key={Math.random().toString()} type={video} />);
   return (
      <Container >
         {videoList}
      </Container>
   );
}
export default Viewers;
