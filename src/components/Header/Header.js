import React, {Fragment, useEffect, useState} from "react";
import CircularProgress from '@mui/material/CircularProgress';
import {useNavigate, Link} from 'react-router-dom';
import {auth, provider} from '../../firebase/firebase';
import {signInWithPopup, onAuthStateChanged, signOut} from 'firebase/auth';
import {Nav, Logo, Login, NavMenu, UserImg, SignOut, DropDown} from './StyledHeader';
import {useDispatch, useSelector} from "react-redux";
import {userActions} from "../../store/features/userSlice";


const Header = (props) => {
   const dispatch = useDispatch();
   const userState = useSelector((state) => state.user);
   const navigate = useNavigate();
   const [isLoading, setIsLoading] = useState(false);
   const setUser = (user) => {
      dispatch(userActions.setUserLoginDetails({
         name: user.displayName,
         email: user.email,
         photo: user.photoURL
      }));
   }

   const authHandler = async () => {
      try {
         setIsLoading(true);
         const result = await signInWithPopup(auth, provider);
         setUser(result.user);
      } catch (err) {
         setIsLoading(false);
         console.error(err);
      }
   }

   const signOutHandler = async () => {
      try {
         await signOut(auth);
         setIsLoading(false);
         dispatch(userActions.setSignOutState());
         navigate("/");
      } catch (err) {
         console.error(err);
      }
   }
   useEffect(() => {
      onAuthStateChanged(auth, async (user) => {
         if (user) {
            setIsLoading(true);
            setTimeout(() => {
               setUser(user);
               navigate("/");
            }, 1500);
         }
      });
   }, [userState]);

   return (
      <Nav>
         <Logo>
            <img src="/images/logo.png" alt="Logo"></img>
         </Logo>
         {
            !userState.name ? (
               !isLoading ? <Login onClick={authHandler}>Login</Login> : <CircularProgress />
            ) : (
               <Fragment>
                  <NavMenu>
                     <Link to="/home">
                        <img src="/images/home-icon.svg" alt="HOME" />
                        <span>HOME</span>
                     </Link>
                     <a>
                        <img src="/images/search-icon.svg" alt="SEARCH" />
                        <span>SEARCH</span>
                     </a>
                     <a>
                        <img src="/images/watchlist-icon.svg" alt="WATCHLIST" />
                        <span>WATCHLIST</span>
                     </a>
                     <a>
                        <img src="/images/original-icon.svg" alt="ORIGINALS" />
                        <span>ORIGINALS</span>
                     </a>
                     <a>
                        <img src="/images/movie-icon.svg" alt="MOVIES" />
                        <span>MOVIES</span>
                     </a>
                     <a>
                        <img src="/images/series-icon.svg" alt="SERIES" />
                        <span>SERIES</span>
                     </a>
                  </NavMenu >
                  <SignOut>
                     <UserImg src={userState.photo} />
                     <DropDown>
                        <span onClick={signOutHandler}>Sign Out</span>
                     </DropDown>
                  </SignOut>
               </Fragment >
            )
         }
      </Nav >
   );
}


export default Header;
