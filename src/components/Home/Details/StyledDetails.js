import styled from 'styled-components';

export const Container = styled.div`
   min-height: calc(100vh - 250px);
   padding: 0px calc(3.5vw + 5px);
`

export const Background = styled.div`
   background: white;
   position: fixed;
   opacity: 0.8;
   left: 0;
   z-index: -1;
   
   img{
      width: 100vw;
      height: 100vh;

      @media (max-width: 768px){
         object-fit: cover;
      }
   }
`

export const ImgTitle = styled.div`
   display: flex;
   justify-content: flex-start;
   height: 30vw;
   padding-bottom: 24px;
   min-height: 170px;
   width: 100%;
   align-items: flex-end;
   img{
      width: 35vw;
      max-width: 600px;
      min-width: 200px;
   }
`

export const ContentMeta = styled.div`
   max-width: 874px;
`

export const Controls = styled.div`
   z-index: 1px;
   display: flex;
   align-items: center;
   flex-flow: row nowrap;
   margin: 24px 0;
   min-height: 56px;
`

export const Player = styled.div`
   padding: 0 24px;
   margin-right: 22px;
   display: flex;
   align-items: center;
   cursor: pointer;
   background-color: #f9f9f9;
   border-radius: 4px;
   justify-content: center;
   height: 56px;
   span{
      letter-spacing: 1.8px;
      line-height: 1.6;
      color: #000000;
      font-size: 15px;
      text-transform: uppercase;
   }
   img{
      width: 32px;
   }

   &:hover{
      background-color: rgb(198, 198, 198);
   }

   @media (max-width: 768px){
      margin-right: 10px;
      padding: 0 12px;
      height: 45px;
      span{
         font-size: 12px;
      }
      img{
         width: 25px;
      }
   }
`

export const Trailer = styled(Player)`
   background-color: rgba(0, 0, 0, 0.3);
   border: 1px solid rgb(249, 249, 249);
   span{
      color: #c6c6c6;
   }
   &:hover{
      span{
         color: black;
      }
   }
`

export const AddList = styled.div`
   width: 44px;
   height: 44px;
   margin-right: 16px;
   border: 2px solid white;
   border-radius: 50%;
   background-color: rgba(0, 0, 0, 0.6);
   cursor: pointer;
   display: flex;
   justify-content: center;
   align-items: center;

   span{
      height: 2px;
      width: 16px;
      background-color: white;

      &:first-child{
         transform: translateX(50%) rotate(90deg);
      }

      &:last-child{
         transform: translateX(-8px);
      }
   }

   &:hover{
      background-color: rgb(198, 198, 198);
   }
`
export const GroupWatch = styled.div` 
   width: 44px;
   height: 44px;
   cursor: pointer;
   display: flex;
   justify-content: center;
   align-items: center;
   border: 2px solid white;
   border-radius: 50%;
   div{
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: rgba(0, 0, 0);
      img{
         width: 100%;
      }
   }
`
export const SubTitle = styled.div`
   font-size: 15px;
   letter-spacing: 1.8px;
   min-height: 20px;
   color: rgb(249, 249, 249);
   @media (max-width: 768px) {
      font-size: 12px;
   }
`

export const Description = styled.div`
   line-height; 1.4;
   letter-spacing: 1.8px;
   font-size: 20px;
   padding: 16px 0;
   color: rgb(249, 249, 249);

   @media (max-width: 768px) {
      font-size: 14px;
   }
`
