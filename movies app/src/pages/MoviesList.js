import React, { useContext,useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import LangContext from "../context/lang";
import axiosInstance from "../network/axiosInstance";
import getMovieList from "../store/action/moviesListM";


export default function MoviesList(){

    const location = useLocation();

    const myMovieList = useSelector((state) => state.movs.list);
    const dispatch = useDispatch();

    const [themoviesList, setMoviesList] = useState([]); 
    const [currentBage,setCurrentBage] = useState(location.state? location.state:1);
    const [totalBages,SetTotalPages]  = useState(1);

    const {dLang,setDLang} = useContext(LangContext)


    useEffect(()=>{
        dispatch(getMovieList({
            page: currentBage,
            language: dLang
        }));
        SetTotalPages(myMovieList.total_pages)
    },[currentBage,dLang,myMovieList]);

    const hadlePrevious = () => {
        if (currentBage != 1){
            setCurrentBage(currentBage - 1)
            console.log(currentBage)
        }
    };

    const handleNext = () => {
        if (currentBage !== totalBages){
            setCurrentBage(currentBage + 1)
            console.log(currentBage)
        }
    }
    
    return(
        <div className="container my-5">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {myMovieList.results && myMovieList.results.map((movie) => {
                   return <div key={movie.id} className="col-md-4 my-3">
                                <MovieCard movieData = {movie} moviePage = {currentBage} backTo = "/movies"/>
                            </div>
                })}
            </div>

            <nav className="d-flex justify-content-center" aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item">
                        <a className="page-link" onClick={hadlePrevious} aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li className="page-item"><a className="page-link">{currentBage}</a></li>
                    <li className="page-item">
                        <a className="page-link" onClick={handleNext} aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}