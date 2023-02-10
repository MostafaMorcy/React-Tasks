import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params : {
        api_key: "aae525639a6bbc2af14520daeab112e2"
    }
}
);

export default axiosInstance;