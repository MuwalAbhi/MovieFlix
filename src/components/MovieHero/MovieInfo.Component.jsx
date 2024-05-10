import React, {useState} from "react";
import PaymentModal from "../PaymentModal/Payment.Component";

const MovieInfo = ({ movie, genres }) => {
    const [price, setPrice] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const rentMovie = () => {
        setPrice(149.99);
        setIsOpen(true);
    }
    const buyMovie = () => {
        setPrice(499.99);
        setIsOpen(true);
    }

    const time = movie.runtime;
    return (
        <>
            <PaymentModal isOpen={isOpen} setIsOpen={setIsOpen} price={price} />
            <div className="flex flex-col gap-8">
                <h1 className="text-white text-5xl font-bold">
                    {movie.movie_title}
                </h1>
                <div className="flex flex-col gap-5 text-white">
                    <h4 className="font-semibold">4k ratings</h4>
                    <h4>English • Hindi</h4>
                    <h4>{parseInt(time / 60)}h {time % 60}m  •  {genres}  •  {movie.release_date} </h4>
                </div>
                <div className="flex items-center gap-3 w-full">
                    <button onClick={rentMovie} className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg">
                        Rent ₹ 149.99
                    </button>
                    <button onClick={buyMovie} className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg">
                        Buy ₹ 499.99
                    </button>
                </div>
            </div>
        </>
    );
};

export default MovieInfo;
