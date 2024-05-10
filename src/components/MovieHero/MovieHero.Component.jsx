import React, { useContext } from "react";
import MovieInfo from "./MovieInfo.Component";
import { MovieContext } from "../../Context/Movie.Context";

const MovieHero = () => {
    const { movie } = useContext(MovieContext);
    const genres = movie.genres?.map(({name}) => name).join(", ");
    const time = movie.runtime;
    return (
        <>
            <div>
                {/* mobile and tablet view */}
                <div className="lg:hidden w-full">
                    <img
                        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                        alt="movie poster"
                        className="m-4 rounded"
                        style={{ width: "calc(100% - 2rem)" }}
                    />
                </div>
                <div className="flex flex-col gap-3 lg:hidden">
                    <div className="flex flex-col-reverse gap-3 px-4 my-3">
                        <div className="text-black flex flex-col gap-2 md:px-4">
                            <h4 className="font-semibold">4k ratings</h4>
                            <h4>English • Hindi</h4>
                            <h4>{parseInt(time / 60)}h {time % 60}m • {genres} • {movie.release_date}</h4>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 px-4 md:w-screen text-xl">
                        <button className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg">
                            Rent ₹ 149.99
                        </button>
                        <button className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg">
                            Buy ₹ 499.99
                        </button>
                    </div>
                </div>

                {/* Large screen view */}
                <div
                    className="hidden relative w-full lg:block"
                    style={{ height: "30rem" }}
                >
                    <div
                        className="absolute z-10 w-full h-full"
                        style={{
                            backgroundImage:
                                "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)",
                        }}
                    ></div>

                    <div className="absolute z-30 left-24 top-10 flex items-center gap-10">
                        <div className="h-96 w-72">
                            <img
                                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                                alt="Movie Poster"
                                className="w-full h-full rounded-xl"
                            />
                        </div>
                        <div>
                            <MovieInfo movie={movie} genres={genres}/>
                        </div>
                    </div>

                    <img
                        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                        alt="Background poster"
                        className="w-full h-full"
                    />
                </div>
            </div>
        </>
    );
};

export default MovieHero;
