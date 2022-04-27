import {Wrap} from './StyledViewers';
const Video = (props) => {
   const mouseEnterHandle = (e) => {
      e.target.currentTime = 0;
   }
   return (
      <Wrap>
         <img src={`/images/${props.type}.png`} alt={props.type} />
         <video autoPlay={true} loop={true} onMouseEnter={mouseEnterHandle}>
            <source src={`/videos/${props.type}.mp4`} type="video/mp4"></source>
         </video>
      </Wrap>
   );
}
export default Video;
