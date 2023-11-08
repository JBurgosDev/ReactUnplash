import { useState, useEffect, useCallback } from 'react';
import AXIOS from "../config/axios.js";

function useInfiniteScroll(url, search = '', filter = 'latest', perPage = 16) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1);

    const fetchData = useCallback(async () => {
        if (isLoading) return;

        setIsLoading(true);

        if (search.trim() !== '') {
            AXIOS.get(`search/${url}?page=${page}&per_page=${perPage}&query=${search}&order_by=${filter}`)
                .then((res) => {
                    setData((prevItems) => [...prevItems, ...res.data.results]);
                })
                .catch((err) => console.log(err));
        } else {
            AXIOS.get(`${url}?page=${page}&per_page=${perPage}&order_by=${filter}`)
                .then((res) => {
                    setData((prevItems) => [...prevItems, ...res.data]);
                })
                .catch((err) => console.log(err));
        }

        setPage((prev) => prev + 1);

        setIsLoading(false);
    }, [page, isLoading]);

    useEffect(() => {
        const getData = async () => {
            setIsLoading(true);

            try {
                let res = null;

                if (search.trim()  !== '') {
                    res = await AXIOS.get(
                        `search/${url}?page=${filter ? 1 : page}&per_page=${perPage}&query=${search}&order_by=${filter}`
                    );

                    setData(res.data.results);
                } else {
                    res = await AXIOS.get(
                        `${url}?page=${filter ? 1 : page}&per_page=${perPage}&order_by=${filter}`
                    );

                    setData(res.data);
                }

            } catch (error) {
                console.log(error);
            }

            if (page === 1) {
                setPage(2);
            }

            setIsLoading(false);
        };

        getData();
    }, [search, filter]);

    useEffect(() => {
        const handleScroll = () => {
            const {scrollTop, clientHeight, scrollHeight} =
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

    return {data, isLoading}
}

export default useInfiniteScroll;
