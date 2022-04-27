import styled from 'styled-components';
export const AnimationCard = styled.div`
   width: 100vw;
   padding: 50px 5%;
   border-bottom: 8px solid #222;
   color: #fff;
   display: block;
   background-color: black;

@media only screen and (min-width: 550px) and (max-width: 949px), only screen and (min-width: 950px) and (max-width: 1449px), only screen and (min-width: 1450px){
   padding: 70px 45px;
}
`
export const AnimationCardContainer = styled.div` max-width: 1100px; margin: 0 auto; display: flex;
   justify-content: space-between;
   align-items: center;
   flex-direction: ${props => {
      if ((props.type === "downloadAndWatch") || (props.type === "freePlanAndroid")) return "row-reverse";
      return "row";
   }};

@media only screen and (max-width: 949px){
   flex-direction: column;
}
`

export const AnimationCardText = styled.div` 
   padding-right: 3rem;
   z-index: 2;

   h1 {
      margin-bottom: 0.5rem;
      // white-space: nowrap;
      font-size: 3.125rem;
      font-weight: bold;
      line-height: 1.1;
   }

   h2{
      margin: 0.75rem 0 0.25rem;
      font-size: 1.625;
      font-weight: 400;

   }

   @media only screen and (min-width: 560px) and (max-width: 949px){
      padding-right: 0;
      h1{
         font-size: 2.5rem;
      }
      h2{
         font-size: 1.25rem;
      }
   }

   @media only screen and (max-width: 560px){
      padding-right: 0;
      h1{
         font-size: 1.5rem;
      }
      h2{
         font-size: .7rem;
      }
   }

   @media only screen and (max-width: 280px){
      h1{
         font-size: 1rem;
      }
      h2{
         font-size: .5rem;
      }
   }
`

export const AnimationCardImg = styled.div` 
   display: flex;
   position: relative;
   width: 50%;
   height: 100%;
   min-width: 600px;
   img{
      position: relative;
      z-index: 2;
      max-width: 100%;
   }

   video{
      margin-top: 2.5px;
      position: absolute;
      max-width: 74%;
      max-height: 54%;
      width: 100%;
      height: 100%;
      top: 20%;
      left: 13%;
   }

   @media only screen and (max-width: 560px){
      min-width: 288px;
   }
`

export const AnimationDownloadCard = styled.div` 
   position: relative;
   width: 100%;
   height: 100%;
   & >img{
      max-width: 100%;
      min-width: 50%;
      height: auto;
   }

   
`
export const AnimationDownloadText = styled.div` 
   margin: 0.3em 0;
   display: flex;
   flex-direction: column;
   justify-content: center;
   width: 100%;
   div{
      &:first-child{
         font-weight: 600;
         font-size: .9em;
      }
         &:last-child{
            color: #0071eb;
            font-weight: 400;
            font-size: .75em;
         }
   }
   img{
      width: 3em;
   }
`
export const AnimationDownload = styled.div` 
   position: absolute;
   background-color: black;
   height: 80px;
   width: 60%;
   min-width: 320px;
   left: 0;
   right: 0;
   bottom: 8%;
   margin: 0 auto;
   padding: 0.25em 0.65em;
   border: 2px solid rgba(255, 255, 255, 255);
   border-radius: 0.75em;
   display: flex;
   justify-content: center;
   img{
      &:first-child{
         max-width: 100%;
      }
      &:last-child{
         width: 4em;
         height: 100%;
         border-radius: 4px;
      }
   }

   @media only screen and (max-width: 550px){
      font-size: 17px;
      height: 70px;
   }
`

export const AnimationAndroidCard = styled.div` 
   width: 100%;
   margin: 5px 0;
   display: flex;
   justify-content: center;
   align-items: center;
   height: 50px;
   a {
      & span{
         cursor: pointer;
         text-align: center;
         padding: 0.5rem 0;
         font-weight: 400;
         letter-spacing: .1px;
         font-size: 1.625em;
      }
      & svg{
         align-self: center;
         font-size: 1.625em;
         margin-left: 1rem;
      }
         &:hover{
            opacity: 0.8;
         }
   }
`
