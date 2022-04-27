import styled from 'styled-components';
export const Container = styled.div`
    margin-top: 30px;
    display: grid;
    padding: 30px 0px 26px 0px;
    grid-gap: 25px;
    grid-template-columns: repeat(5, minmax(0, 1fr));

   @media (max-width: 768px){
      grid-template-columns: repeat(1, minmax(0, 1fr));
   }
`

export const Wrap = styled.div`
   display: block;
   border: 3px solid rgba(249, 249, 249, 0.1);
   border-radius: 10px;
   cursor: pointer;
   padding-top: 56.25%;
   box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
   position: relative;
   transition: all 250ms ease-in-out;

   & img{
      inset: 0px;
      object-fit: cover;
      position: absolute;
      height: 100%;
      width: 100%;
      display: block;
      overflow: hidden;
      border-color: rgba(249, 249, 249, 0.8);
      z-index: 1;
   }

   &:hover{
      box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
      transform: scale(1.05);
      border-color: rgba(249, 249, 249, 0.8);
      video{
         opacity: 1;
         z-index: 0;
      }
   }

   & video{
      position: absolute;
      width: 100%;
      height: 100%;
      inset: 0;
      z-index: 2;
      opacity: 0;
      object-fit: cover;
      transition: opacity 0.2s ease-in-out;
      border-radius: 5px;
   }
`
