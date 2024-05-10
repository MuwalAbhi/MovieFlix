import axios from "axios";
import React, { useState, useEffect } from "react";
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.Component";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.Component";
import PosterSlider from "../PosterSlider/PosterSlider.Component";
function HomePage() {
    const [recommendedMoviesPosters, setRecommendedImages] = useState([]);

    useEffect(() => {
        const getMoviesPoster = async () => {
            const moviesPoster = await axios.get("/movie/popular");
            setRecommendedImages(moviesPoster.data.results);
        };

        getMoviesPoster();
    }, []);

    const [premierMoviesPosters, setPremierImages] = useState([]);

    useEffect(() => {
        const getMoviesPoster = async () => {
            const moviesPoster = await axios.get("/movie/top_rated");
            setPremierImages(moviesPoster.data.results);
        };

        getMoviesPoster();
    }, []);

    const [upcomingMoviesPosters, setUpcomingImages] = useState([]);

    useEffect(() => {
        const getMoviesPoster = async () => {
            const moviesPoster = await axios.get("/movie/upcoming");
            setUpcomingImages(moviesPoster.data.results);
        };

        getMoviesPoster();
    }, []);

    return (
        <>
            <HeroCarousel />

            <div className="container mx-auto my-8">
                <EntertainmentCardSlider />
            </div>

            <div className="container mx-auto my-8">
                <PosterSlider
                    posters={recommendedMoviesPosters}
                    title="Recommended Movies"
                    subtitle="List of recommended movies"
                    darkTheme={false}
                />
            </div>

            <div className="bg-premier-800 py-12">
                <div className="container mx-auto flex flex-col gap-3">
                    <div className="hidden md:flex">
                        <img
                            src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                            alt="premier banner"
                            className="w-full h-full"
                        />
                    </div>
                    <PosterSlider
                        posters={upcomingMoviesPosters}
                        title="Premiers"
                        subtitle="Watch New Movies at home, every Friday"
                        darkTheme={true}
                    />
                </div>
            </div>

            <div className="container mx-auto my-8">
                <PosterSlider
                    posters={premierMoviesPosters}
                    title="Top Rated Movies"
                    subtitle=""
                    darkTheme={false}
                />
            </div>

        </>
    );
}

export default HomePage;
