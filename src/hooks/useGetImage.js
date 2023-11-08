import { useEffect, useState } from "react";
import AXIOS from "../config/axios.js";

const useGetImage = (url, imageId) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        AXIOS.get(`${url}/${imageId}`)
            .then((res) => {
                setData(res.data);
                setLoading(false);
            }).catch((e) => {
            setLoading(false);
            console.log(e)
        });
    }, []);

    return {data, loading};
}

export default useGetImage;
