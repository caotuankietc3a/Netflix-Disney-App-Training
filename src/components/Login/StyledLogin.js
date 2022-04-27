import styled from 'styled-components';

export const Container = styled.section`
   display: flex;
   text-align: center;
   flex-direction: column;
   overflow: hidden;
`

export const Content = styled.div`
   width: 100%;
   position: relative;
   height: 100%;
   min-height: 80vh;
   display: flex;
   flex-direction: column;
   justify-content: center;
   padding: 80px 40px;
   box-sizing: border-box;
   align-items: center;
   border-bottom: 8px solid #222;
`

export const BgImage = styled.div`
   background: url("/images/background-login.jpg") no-repeat top;
   object-fit: cover;
   background-size: cover;
   height: 100%;
   width: 100%;
   position: absolute; top: 0;
   right: 0;
   left: 0;
   z-index: -1;
   div{
      background: rgba(0,0,0,.2);
      width: 100%;
      height: 100%;
      div{
         background-image: linear-gradient(to top,rgba(0,0,0,.8) 0,rgba(0,0,0,0) 60%,rgba(0,0,0,.8) 100%);
         width: 100%;
         height: 100%;
      }
   }
`

export const CTA = styled.div`
   margin-bottom: 2vw;
   display: flex;
   align-items: center;
   justify-content: center;
   max-width: 650px;
   width: 100%;
   flex-direction: column;
`

export const CTATextOne = styled.h1`
   display: block;
   width: 100%;
   font-weight: bold;
   text-align: center;
   font-size: 3.125rem;
   max-width: 640px;
   margin: 0 auto;

   @media only screen and (max-width: 414px){
      font-size: 2rem;
   }
`

export const CTATextTwo = styled.h2`
   margin: 1rem auto;
   font-size: 1.625rem;
   max-width: 640px;

   @media only screen and (max-width: 414px){
      font-size: 1rem;
   }
`


export const CTALogoTwo = styled.img`
   margin-bottom: 20px;
   max-width: 600px;
   display: inline-block;
   vertical-align: bottom;
   width: 100%;
`
export const EmailFormCard = styled.div`
   display: flex;
   margin-top: .7rem;
   width: 100%;
   align-items: center;
   justify-content: center;
   @media only screen and (max-width: 950px){
      flex-direction: column;
   }
`

export const EmailFormTitle = styled.h3`
   font-size: 23px;
   font-weight: 400;
   max-width: 450px;
   margin: 0 auto;
   padding: 0 5%;

   @media only screen and (max-width: 414px){
      font-size: 1.2rem;
   }
`

export const EmailForm = styled.form` 
   font-size: 1.625rem;
   font-weight: 400;
   width: 80%;
   min-width: 180px;
   height: 3.5rem;
   input{
      padding: 10px 10px 0;
      width: 100%;
      height: 100%;
      font-size: 20px;
      border: none;
      text-align: center;
      border-radius: 4px;
   }
   & > label{
      position: relative;
      label{
         position: absolute;
         left: 10px;
         top: 0px;
         color: #8c8c8c;
         font-size: 20px;
         transition: all .15s ease-in-out;
      }
   }
   & input:focus,
   & input:valid{
      outline: none;
      & + label{
         left: 10px;
         top: -12px;
         font-size: 16px;
         font-weight: bold;
      }
   }

   @media only screen and (max-width: 950px){
      margin-bottom: 1rem;
   }

   @media only screen and (max-width: 414px){
      margin-bottom: -.7rem;
      input{
         height: 70%;
      }

      & > label label{
         font-size: 16px;
         top: 5px;
      }
   }
`

export const BtnEmailForm = styled.button` 
   display: flex;
   cursor: pointer;
   border-radius: 2px;
   box-sizing: border-box;
   border: 0;
   background-color: #e50914;
   width: 30%;
   min-width: 180px;
   padding: 0 30px;
   border-radius: 4px;
   height: 3.5rem;
   span{
      color: #fff;
      letter-spacing: .1px;
      font-weight: 400;
      font-size: 18px;
      height: 100%;
      width: 100%;
      padding-top: 18.5px;
   }
   svg{
      margin-left: 2px;
      width: 20%;
      align-self: center;
      color: white;
   }

   @media only screen and (max-width: 414px){
      min-width: 140px;
      padding: 0 15px;
      height: 2rem;
      span{
         padding-top: 8px;
         font-size: 14px;
      }
   }
`

