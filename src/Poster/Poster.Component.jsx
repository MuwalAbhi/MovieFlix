import React from "react";
import { Link } from "react-router-dom";

export default function Poster(props) {
    return (
        <Link to={`/movie/${props.id}`}>
            <div className="flex flex-col items-start gap-2 px-1 md:px-3">
                <div className="h-40 md:h-80">
                    <img
                        src={`https://image.tmdb.org/t/p/original${props.poster_path}`}
                        alt="Poster"
                        className="w-full h-full rounded-md"
                    />
                </div>
                <h3
                    className={`text-lg font-bold ${
                        props.darkTheme ? "text-white" : "text-black"
                    }`}
                >
                    {props.original_title}
                </h3>
                <p
                    className={`text-sm ${
                        props.darkTheme ? "text-white" : "text-gray-600"
                    }`}
                >
                    {props.release_date}
                </p>
            </div>
        </Link>
    );
}
