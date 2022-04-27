import {Fragment} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'
import {
   AnimationCard, AnimationCardContainer, AnimationCardText, AnimationCardImg, AnimationDownload, AnimationDownloadCard, AnimationDownloadText, AnimationAndroidCard
} from './StyledAnimationCardLogin';
const AnimationCardLogin = (props) => {
   const {h1, h2, imgSrc, type} = props.header;
   const typeOfAnimation = (type) => {
      switch (type) {
         case "watchOnTv": {
            return <AnimationCardImg>
               <img src={imgSrc} alt="" />
               <video autoPlay={true} loop={true}>
                  <source src={props.header.videoSrc} type="video/mp4"></source>
               </video>
            </AnimationCardImg>
         }
         case "downloadAndWatch": {
            return <AnimationDownloadCard>
               <img src={imgSrc} alt="" />
               <AnimationDownload>
                  <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" alt="" />
                  <AnimationDownloadText>
                     <div>Stranger Things</div>
                     <div>Downloading...</div>
                  </AnimationDownloadText>
                  <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif" alt="" />
               </AnimationDownload>
            </AnimationDownloadCard>
         }
         case "kidsValueProp":
         case "freePlanAndroid": {
            return <AnimationCardImg>
               <img src={imgSrc} alt="" />
            </AnimationCardImg>
         }
      }
   }

   const animationTv = typeOfAnimation(type);
   return (
      <AnimationCard>
         <AnimationCardContainer type={type}>
            <AnimationCardText>
               <h1>{h1}</h1>
               <h2>{h2}</h2>
               {
                  type === "freePlanAndroid" && (
                     <AnimationAndroidCard>
                        <a href="https://play.google.com/store/apps/details?id=com.netflix.mediaclient">
                           <span>Get the app</span>
                           <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
                        </a>
                     </AnimationAndroidCard>
                  )
               }
            </AnimationCardText>
            {animationTv}
         </AnimationCardContainer>
      </AnimationCard>
   );
}
export default AnimationCardLogin;
