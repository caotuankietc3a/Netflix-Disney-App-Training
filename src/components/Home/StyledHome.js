import styled from 'styled-components';

export const Container = styled.main`
   position: relative;
   top: 72px;
   overflow: hidden;
   display: block;
   padding: 0 calc(3.5vw + 5px);
   min-height: calc(100vh - 250px);

   &:after{
      content: "";
      background: url("/images/home-background.png") no-repeat fixed center;
      background-size: cover;
      position: absolute;
      inset: 0;
      opacity: 1;
      z-index: -1;
   }
`
