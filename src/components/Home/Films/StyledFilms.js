import styled from 'styled-components';

export const Container = styled.div`
   padding-bottom: 26px;
`

export const Content = styled.div`
   display: grid;
   grid-template-columns: repeat(4, minmax(0, 1fr));
   grid-gap: 25px;
   justify-items: center;

   @media (max-width: 768px){
      grid-template-columns: repeat(2, minmax(0, 1fr));
   }
`

export const Wrap = styled.div`
   border: 3px solid rgba(249, 249, 249, 0.1);
   border-radius: 10px;
   cursor: pointer;
   padding-top: 56.25%;
   width: 100%;
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
      border-radius: 5px;
   }

   &:hover{
      border-color: rgba(249, 249, 249, 0.8);
      z-index: 10;
      transform: scale(1.05);
   }
`
