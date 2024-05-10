import React, { useEffect, useContext } from "react";
import { MovieContext } from "../Context/Movie.Context";
import { useParams } from "react-router";
import axios from "axios";
import MovieNavbar from "../components/Navbar/MovieNavbar.Component";

const MoviesLayout = (props) => {
    const { id } = useParams();
    const { setMovie } = useContext(MovieContext);
    useEffect(() => {
        const getMovies = async () => {
            const getData = await axios.get(`/movie/${id}`);
            setMovie(getData.data);
        };
        getMovies();
    }, [id]);

    return (
        <main>
            <MovieNavbar />
            {props.children}
            <footer>Footer</footer>
        </main>
    );
};

export default MoviesLayout;
