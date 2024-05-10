import React, { useContext, useEffect, useState } from "react";
import MovieHero from "../components/MovieHero/MovieHero.Component";
import { FaCcMastercard, FaCcVisa } from "react-icons/fa";
import Slider from "react-slick";
import Cast from "../components/Cast/Cast.Component";
import PosterSlider from "../PosterSlider/PosterSlider.Component";
import { MovieContext } from "../Context/Movie.Context";
import axios from "axios";

const MoviePage = () => {

    const {movie} = useContext(MovieContext);
    // console.log(movie);
    const id = movie.id;

    const castSettings = {
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const [movieCast, setCast] = useState([]);
    useEffect(() => {
        const movieData = async() => {
            const castData = await axios.get(`/movie/${id}/credits`);
            setCast(castData.data.cast);
        };

        movieData();
    }, [id]);

    const [similarMovies, setSimilarMovies] = useState([]);
    useEffect(() => {
        const movieData = async() => {
            const similarData = await axios.get(`/movie/${id}/similar`);
            setSimilarMovies(similarData.data.results);
        };

        movieData();
    }, [id]);

    const [recommendedMovies, setRecommendedMovies] = useState([]);
    useEffect(() => {
        const movieData = async() => {
            const recommendedData = await axios.get(`/movie/${id}/recommendations`);
            setRecommendedMovies(recommendedData.data.results);
        };

        movieData();
    }, [id]);


    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <MovieHero />
            <div className="my-12 container px-4 lg:ml-20 lg:w-2/3">
                <div className="flex flex-col items-start gap-3">
                    <h1 className="text-gray-800 font-bold text-2xl">
                        About the movie
                    </h1>
                    <p>
                        {movie.overview}
                    </p>
                </div>

                <div className="my-8">
                    <hr />
                </div>
                <div className="my-8">
                    <h2 className="text-gray-800 font-bold text-2xl mb-3">
                        Applicable Offers
                    </h2>
                    <div className="flex flex-col lg:flex-row items-start gap-3">
                        <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
                            <div className="w-8 h-8">
                                <FaCcVisa className="w-full h-full" />
                            </div>
                            <div className="flex flex-col items-start">
                                <h3 className="text-gray-700 text-xl font-bold">
                                    Visa Stream Offer
                                </h3>
                                <p className="text-gray-600">
                                    Pay using Amazon Pay UPI on BookMyShow and
                                    win a cashback upto INR 250 on a minimum
                                    purchase of INR 100. *T&C applied.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
                            <div className="w-8 h-8">
                                <FaCcMastercard className="w-full h-full" />
                            </div>
                            <div className="flex flex-col items-start">
                                <h3 className="text-gray-700 text-xl font-bold">
                                    Filmy Pass Offer
                                </h3>
                                <p className="text-gray-600">
                                    Pay using Mastercard on BookMyShow and win a
                                    cashback upto INR 99 and bonus gift on
                                    minimum purchase of INR 400. *T&C applied.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="my-8">
                    <hr />
                </div>

                <div className="my-8">
                    <h2 className="text-gray-800 font-bold text-2xl mb-4">
                        Cast and Crew
                    </h2>
                    <Slider {...castSettings}>
                        {movieCast.map((data) => (
                            <Cast
                                image={`https://image.tmdb.org/t/p/original${data.profile_path}`}
                                castName={data.original_name}
                                role={data.character}
                            />
                        ))}
                    </Slider>
                </div>

                <div className="my-8">
                    <hr />
                </div>

                <div className="my-8">
                    <PosterSlider
                        config={settings}
                        title="Recommended Movies"
                        posters={similarMovies}
                        isDark={false}
                    />
                </div>

                <div className="my-8">
                    <hr />
                </div>

                <div className="my-8">
                    <PosterSlider
                        config={settings}
                        title="BMS XCLUSIVE"
                        posters={recommendedMovies}
                        isDark={false}
                    />
                </div>
            </div>
        </>
    );
};

export default MoviePage;
