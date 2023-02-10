import React from "react";
import MovieCard from "../components/MovieCard";
import {useSelector} from "react-redux";
import { Link } from "react-router-dom";

export default function Favorite (){

    const favList = useSelector((state) => state.fav.theFAvorites);

    if (favList.length == 0){
        return(
            <div className="d-flex align-items-center justify-content-center mt-5">
                <div className="text-center">
                    <h2 className="fw-bold mb-5">You haven't any Favorites yet!</h2>
                    <Link to="/movies" className="btn btn-dark">Back to Movies</Link>
                </div>
            </div>
        )

    }else {
        return(
            <div className="container my-5">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {favList.map((movie) => {
                    return <div key={movie.id} className="col-md-4 my-3">
                                    <MovieCard movieData = {movie} backTo = "/favorite"/>
                                </div>
                    })}
                </div>
            </div>
        )
    }
}