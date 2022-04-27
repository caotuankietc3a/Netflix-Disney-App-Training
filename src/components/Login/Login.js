import React from "react";
import {Container, Content, BgImage, CTA, CTACard, CTATextOne, CTATextTwo, EmailFormTitle, EmailForm, BtnEmailForm, EmailFormCard} from './StyledLogin';
import AnimationCardLogin from './AnimationCardLogin/AnimationCardLogin';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'

const Login = () => {
   const headers = [
      {
         h1: "Enjoy on your TV.",
         h2: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
         type: "watchOnTv",
         videoSrc: "/videos/animation-tv.mp4",
         imgSrc: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
      },
      {
         h1: "Download your shows to watch offline.",
         h2: "Save your favorites easily and always have something to watch.",
         type: "downloadAndWatch",
         imgSrc: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
      },
      {
         h1: "Create profiles for kids.",
         h2: "Send kids on adventures with their favorite characters in a space made just for them—free with your membership.",
         type: "kidsValueProp",
         imgSrc: "https://occ-0-395-325.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABdFTpLmANuJpYneLq8L5m7CunMCi8e8Nl4y7xaPVWzG3IeoDoq17egTQAthApKg_4sdRWdwuR8KadWu1frjL3JQImpwq.png?r=fcd"
      },
      {
         h1: "Have an Android Phone? Get our new free plan!",
         h2: "Watch a selection of new movies and TV shows without adding any payment details!",
         type: "freePlanAndroid",
         imgSrc: "https://assets.nflxext.com/ffe/siteui/acquisition/ab36101/nmhp/vn.jpg"
      }
   ]
   return (
      <Container>
         <Content>
            <BgImage>
               <div>
                  <div></div>
               </div>
            </BgImage>
            <CTA>
               <CTATextOne>Unlimited movies, TV shows, and more.</CTATextOne>
               <CTATextTwo>Watch anywhere. Cancel anytime.</CTATextTwo>
               <EmailFormTitle>Ready to watch? Enter your email to create or restart your membership.</EmailFormTitle>
               <EmailFormCard>
                  <EmailForm >
                     <label htmlFor="email">
                        <input type="text" name="email" required />
                        <label htmlFor="email">Email address</label>
                     </label>
                  </EmailForm>
                  <BtnEmailForm>
                     <span>Get Started</span>
                     <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
                  </BtnEmailForm>
               </EmailFormCard>
            </CTA>
         </Content>
         {headers.map((header, i) => <AnimationCardLogin header={header} key={i}></AnimationCardLogin>)}
      </Container >
   );
}
export default Login;
