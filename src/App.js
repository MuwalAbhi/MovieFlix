import React from "react";
import axios from "axios";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Higher Order Components
import DefaultHOC from "./HOC/Default.HOC";
import MoviesHOC from "./HOC/Movies.HOC";

//Pages
import HomePage from "./Pages/Home.Page";
import MoviePage from "./Pages/Movie.Page";
import Plays from "./Pages/Plays.Page";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params['api_key'] = process.env.REACT_APP_API_KEY;

function App() {
    return (
        <>
            <DefaultHOC path="/" exact component={HomePage} />
            <MoviesHOC path="/movie/:id" exact component={MoviePage} />
            <DefaultHOC path="/plays" exact component={Plays} />
        </>
    );
}

export default App;
