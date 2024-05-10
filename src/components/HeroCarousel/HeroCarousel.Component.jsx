import React, { useState, useEffect } from "react";
import HeroSlider from "react-slick";
import axios from "axios";
import { NextArrow, PrevArrow } from "./Arrows.Component";

const HeroCarousel = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const getNowPlaying = async () => {
            const nowPlaying = await axios.get("/movie/now_playing");
            setImages(nowPlaying.data.results);
        };

        getNowPlaying();
    }, []);

    const settingsLG = {
        arrows: true,
        autoplay: true,
        centerMode: true,
        centerPadding: "15%",
        slidesToShow: 1,
        dots: true,
        infinite: true,
        slideToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    const settings = {
        arrows: true,
        slidesToShow: 1,
        infinite: true,
        dots: true,
        speed: 500,
        slideToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <>
            <div className="md:hidden">
                <HeroSlider {...settings}>
                    {images.map((image) => {
                        return (
                            <div className="w-full h-56 md:h-80 px-1 py-3">
                                <img
                                    src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                                    alt="HeroBanner"
                                    className="w-full h-full rounded-md object-center"
                                />
                            </div>
                        );
                    })}
                </HeroSlider>
            </div>

            <div className="hidden md:block">
                <HeroSlider {...settingsLG}>
                    {images.map((image) => {
                        return (
                            <div className="w-full h-96 px-2 py-3">
                                <img
                                    src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                                    alt="HeroBanner"
                                    className="w-full h-full rounded-md object-center"
                                />
                            </div>
                        );
                    })}
                </HeroSlider>
            </div>
        </>
    );
};

export default HeroCarousel;
