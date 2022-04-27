import { movieActions } from "./movieSlice";
// import jsonData from '../../disneyPlusMoviesData.json'
import { v4 as uuidv4 } from "uuid";
const url = "https://disney-44c85-default-rtdb.firebaseio.com/movies.json";

export const fetchDataJson = () => {
  return async (dispatch) => {
    // const options = {
    //    method: 'PUT',
    //    headers: {
    //       'Content-Type': 'application/json',
    //    },
    //    body: JSON.stringify(jsonData.movies),
    // }
    // await fetch(url, options);
    const bufferData = await fetch(url);
    console.log(bufferData);
    const resData = await bufferData.json();

    let recommend = [];
    let newDisney = [];
    let original = [];
    let trending = [];
    resData.forEach((movie) => {
      switch (movie.type) {
        case "recommend": {
          recommend = [...recommend, { id: uuidv4(), ...movie }];
          break;
        }
        case "new": {
          newDisney = [...newDisney, { id: uuidv4(), ...movie }];
          break;
        }
        case "original": {
          original = [...original, { id: uuidv4(), ...movie }];
          break;
        }
        case "trending": {
          trending = [...trending, { id: uuidv4(), ...movie }];
          break;
        }
      }
    });
    dispatch(
      movieActions.setMovie({ recommend, newDisney, original, trending })
    );
  };
};

// export const getDataJson = async () => {
//    const data = await fetch(url);
//    return await data.json();
// }
