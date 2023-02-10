import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import LangContext from "../context/lang";
import axiosInstance from "../network/axiosInstance";



export default function MoviesDetails(){
       
    const params = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    const [details,setDetails] = useState({});
    const {dLang,setDLang} = useContext(LangContext)

    useEffect(() => {
        axiosInstance.get(`/movie/${params.id}?language=${dLang}`)
                .then((res) => {setDetails(res.data)})
                .catch((err) => {console.log(err)});
    }, [dLang]);


    return(
        <div className="container my-5">
            <div className="card mx-auto row" style={{width: "75%" , height: "600px"}}>
                <img src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`} className="col-6 h-100 px-0" alt={details.title}/>
                <div className="col-6 px-0">
                    <div className="card-body">
                        <h5 className="card-title">{details.title}</h5>
                        <p className="card-text">{details.overview}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Original language: {details.original_language}</li>
                        <li className="list-group-item">Release date: {details.release_date}</li>
                        <li className="list-group-item">Rate: {details.vote_average} / Votes: {details.vote_count}</li>
                    </ul>
                    <div className="card-body">
                        <button className="btn btn-dark" onClick={() => {navigate(location.state.backTo,{state:location.state.moviePage});}}>Go Back</button>
                    </div>
                </div>
            </div>
        </div>
        )
}