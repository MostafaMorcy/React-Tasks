import axiosInstance from "../../network/axiosInstance";

export const GET_MOVIESS_LIST = "GET_MOVIESS_LIST"

const getMovieList = (props) => (dispatch) => {
    return axiosInstance.get(`/movie/popular?page=${props.page}&language=${props.language}`).then((res) => {
        dispatch({
            type: GET_MOVIESS_LIST,
            payload: res.data
        })
    }).catch((err) =>{
        console.log(err);
    })
}


export default getMovieList;