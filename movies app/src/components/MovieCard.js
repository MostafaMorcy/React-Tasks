import React, { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { favoritesManage } from "../store/action/favoriteList";

export default function MovieCard({movieData,moviePage,backTo}){

    const navigate = useNavigate();

    const [iconFilled,setIconFilled] = useState();
    const favList = useSelector((state) => state.fav.theFAvorites);
    const dispatch = useDispatch();

    useEffect(() => {
        setIconFilled(favList.some((movie) => (movie.id == movieData.id)))
    },[iconFilled])

    const handleIconClick = () => {
        if(favList.some((movie) => (movie.id == movieData.id)) == false){
            setIconFilled(true);

            let newList = favList;
            newList.push(movieData)
            dispatch(favoritesManage(newList));

        } else if (favList.some((movie) => (movie.id == movieData.id)) == true){
            setIconFilled(false);
            
            let filteredList = favList.filter((movie) => {
                return movie.id != movieData.id;
            })
            dispatch(favoritesManage(filteredList));
        }
        
    };

    return(
        <div className="card h-100" style={{width: "20rem"}}>
            <img src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`} className="card-img-top" height="420px" alt={movieData.title}/>
            <div className="card-body row">
                <div className="col-12">
                    <h5 className="card-title">{movieData.title}</h5>
                    <p className="card-text">{movieData.release_date}</p>
                    <div className="row">
                        <p className="col-5">Rate: {movieData.vote_average}</p>
                        <p className="col-5">Votes: {movieData.vote_count}</p>
                    </div>
                </div>
                <div className="col-12 align-self-end row justify-content-between">
                    <button onClick= {() => {navigate(`/movies/${movieData.id}`,{state:{moviePage,backTo}})}} className="btn btn-dark col-6">More Details</button>
                    <i className={iconFilled? "bi bi-heart-fill text-danger col-5 mt-2 fs-4 text-end":"bi bi-heart col-5 mt-2 fs-4 text-end"} onClick={handleIconClick}></i>
                </div>
            </div>
        </div>
    )
}