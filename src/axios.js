import axios from "axios";

const instance=axios.create({
    baseURL: "https://api.themoviedb.org/3"
})

export default instance

// https://api.themoviedb.org/3/trending/all/week?/api_key=fbbfa174c00521950a0d678557f38568&language=en-US