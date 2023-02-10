import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {useSelector} from "react-redux";
 import LangContext from "../context/lang";
export default function NavBar(props){

    const navigate = useNavigate();
    const [searchInput,setSearchInput] = useState("");
    
    const favList = useSelector((state) => state.fav.theFAvorites.length);

    useEffect(()=>{
    },[favList]);

    const {dLang,setDLang} = useContext(LangContext);

    const handleLangChange = (e) => {
        setDLang(e.target.value)
    }


    const handleChange = (e) => {
        setSearchInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/search/${searchInput}`)
    }

    return(
        <>
        <nav className="container-fluid bg-dark d-none d-md-block">
            <div className="container">
                <div className="row py-2">
                    <ul className="col-7 row mb-0 list-unstyled justify-content-evenly">
                        <li className="col-md-2 py-2 fs-4"><NavLink className="align-middle" to="/" end>Home</NavLink></li>
                        <li className="col-md-2 py-2 fs-4"><NavLink className="align-middle" to="/movies" end>Movies</NavLink></li>
                        <li className="col-md-3 py-2 fs-4"><NavLink className="align-middle" to="/favorite" end>Favorite</NavLink>
                             <span className="badge bg-dark text-success">{favList}</span>
                        </li>
                        <li className="col-md-2 py-2 fs-4"><NavLink className="align-middle" to="/register" end>Register</NavLink></li>
                        <li className="col-md-2 py-2 fs-4"><NavLink className="align-middle" to="/login" end>Login</NavLink></li>

                    </ul>
                    <form className="col-5 d-flex align-items-center justify-content-evenly" onSubmit={handleSubmit}>
                        <input className="form-control me-2" type="search" value={searchInput} onChange = {handleChange} placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
             {/* <select className="btn btn-danger position-absolute top-0 mt-3" onChange={handleLangChange}>
                <option>en</option>
                <option>ar</option>
                <option>fr</option>
            </select>  */}
        </nav>

        <div className="collapse d-md-none" id="navbarToggleExternalContent">
            <div className="bg-dark ps-4 pb-1">
                <ul className="row flex-column list-unstyled">
                    <li className="text-white py-2"><NavLink to="/" end>Home</NavLink></li>
                    <li className="py-2"><NavLink to="/movies" end>Movies</NavLink></li>
                     <li className="py-2">
                        <NavLink to="/favorite" end>Favorite</NavLink>
                        <span className="badge bg-dark text-success">{favList}</span>    
                    </li> 
                </ul>
                <form className="d-flex align-items-center" onSubmit={handleSubmit}>
                        <input className="form-control me-2" type="search" value={searchInput} onChange = {handleChange} placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
               
            </div>
        </div>

        <nav className="navbar navbar-dark bg-dark d-md-none">
            <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            </div>
        </nav>
      </>
    )
}