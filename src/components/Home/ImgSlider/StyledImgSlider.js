import styled from 'styled-components';
import Slider from 'react-slick';

export const Carousel = styled(Slider)`
   margin-top: 20px;

   & > button{
      opacity: 0;
      height: 100%;
      width: 10vw;
      z-index: 1;

      &:hover{
         opacity: 1;
         transition: opacity 0.2s ease-in-out;
      }
   }

   ul li button{
      &:before{
         font-size: 10px;
         color: rgb(150, 158, 171);
      } 
   }

   ul li.slick-active button:before{
      color: #fff;
   }

   // to show the next in the list
   .slick-list{
      overflow: initial;
   }

   .slick-prev{
      left: -35px;
   }

   .slick-next{
      right: -35px;
   }
`

export const Wrap = styled.div`
   border-radius: 4px;
   position: relative;
   cursor: pointer;

a {
   border-radius: 4px;
   padding: 4px;
   display: block;
   box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;

   img{
      width: 100%;
      height: 100%;
   }

   &:hover{
      border: 4px solid rgba(249, 249, 249, 0.8);
      padding: 0;
      transition-duration: 200ms;
   }
}
`
