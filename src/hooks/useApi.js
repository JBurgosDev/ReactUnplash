import { useEffect, useState } from "react";
import AXIOS from "../config/axios.js";

const useApi = (url, page = 1, perPage = 16) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        AXIOS.get(`${url}?page=${page}&per_page=${perPage}`)
            .then((res) => {
                setData(res.data);
                setLoading(false);
            }).catch((e) => {
            console.log(e)
        });
    }, [page]);

    return {data, loading};
}

export default useApi;
