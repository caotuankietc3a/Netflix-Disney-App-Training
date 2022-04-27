import styled from 'styled-components';

export const Nav = styled.nav`
   position: fixed;
   top: 0;
   padding: 0 26px;
   width: 100%;
   height: 75px;
   display: flex;
   background-color: transparent;
   align-items: center;
   justify-content: space-between;
   letter-spacing: 1.5px;
   z-index: 3;
   
`

export const Logo = styled.a`
   width: 80px;
   margin-top: 4px;
   display: block;

   & img{
      width: 100%;
      display: block;
   }
`

export const Login = styled.a`
   padding: 8px 16px;
   text-transform: uppercase;
   border: 1px solid #f9f9f9;
   border-radius: 4px;
   letter-spacing: 1.5px;
   transition: all .2s ease;
   cursor: pointer;

   &:hover{
      background-color: #f9f9f9;
      color: #000;
      border-color: transparent;
   }
`

export const NavMenu = styled.div`
   display: flex;
   margin-left: 25px;
   align-items: center;
   height: 100%;
   width: 100%;

   & a{
      padding: 0 12px;
      display: flex;
      align-items: center;
   }

   & img{
      height: 20px;
      width: 20px;
      min-width: 20px;
   }

   & span{
      font-size: 13px;
      padding: 1px 0;
      margin-left: 8px;
      line-height: 1.5;
      cursor: pointer;
      position: relative;
      letter-spacing: 1.42px;
      line-height: 2.98;
   }

   & span{
      &:before{
         content: "";
         background: #f9f9f9;
         border-radius: 0 0 8px 8px;
         height: 2px;
         position: absolute;
         bottom: -6px;
         width: 100%;
         transform-origin: left center;
         transform: scaleX(0);
         transition: transform .2s ease-in-out;
      }
   }

   & a:hover{
      span:before{
         transform: scaleX(1);
      }
   }

   @media (max-width: 930px){
      display: none;
   }
`

export const UserImg = styled.img`
   height: 48px;
   width: 48px;
   border-radius: 50%;
`

export const DropDown = styled.div`
   position: absolute;
   right: 0;
   top: 58px;
   background-color: rgb(19, 19, 19);
   border-radius: 4px;
   padding: 10px;
   font-size: 14px;
   border-radius: 0px 0px 18px 0px rgb(0 0 0 / 50%);
   letter-spacing: 2px;
   width: 100px;
   text-align: center;
   opacity: 0;
`

export const SignOut = styled.div`
   position: relative;
   display: flex;
   align-items: center;
   justify-content: center;
   cursor: pointer;
   height: 58px;
   width: 58px;
   &:hover {
      ${DropDown}{
         opacity: 1;
         transition-duration: 1s;
      }
   }
`
