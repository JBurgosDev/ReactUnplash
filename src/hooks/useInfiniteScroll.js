import { useState, useEffect, useCallback } from 'react';
import AXIOS from "../config/axios.js";

function useInfiniteScroll(url, search = '', perPage = 16) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1);

    const fetchData = useCallback(async () => {
        if (isLoading) return;

        setIsLoading(true);

        if (search !== '') {
            AXIOS.get(`search/${url}?page=${page}&per_page=${perPage}&query=${search}`)
                .then((res) => {
                    setData((prevItems) => [...prevItems, ...res.data.results]);
                })
                .catch((err) => console.log(err));
        } else {
            AXIOS.get(`${url}?page=${page}&per_page=${perPage}`)
                .then((res) => {
                    setData((prevItems) => [...prevItems, ...res.data]);
                })
                .catch((err) => console.log(err));
        }

        setPage((prevIndex) => prevIndex + 1);

        setIsLoading(false);
    }, [page, isLoading]);

    useEffect(() => {
        const getData = async () => {
            setIsLoading(true);

            try {
                let res = null;

                if (search !== '') {
                    res = await AXIOS.get(
                        `search/${url}?page=${page}&per_page=${perPage}&query=${search}`
                    );

                    setData(res.data.results);
                } else {
                    res = await AXIOS.get(
                        `${url}?page=${page}&per_page=${perPage}`
                    );

                    setData(res.data);
                }

            } catch (error) {
                console.log(error);
            }

            setIsLoading(false);
        };

        getData();
    }, [search]);

    useEffect(() => {
        const handleScroll = () => {
            const { scrollTop, clientHeight, scrollHeight } =
                document.documentElement;
            if (scrollTop + clientHeight >= scrollHeight - 20) {
                fetchData();
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [fetchData]);

    return { data, isLoading }
}

export default useInfiniteScroll;
