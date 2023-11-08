import { useEffect, useState } from "react";

const useGetFavImages = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [images, setImages] = useState([])

    const GetProfileImages = () => {
        const getImages = JSON.parse(localStorage.getItem('fav-images'));

        setImages(getImages);

        setIsLoading(false);
    }

    useEffect(() => {
        GetProfileImages()
    }, []);

    return { images, isLoading };
}

export default useGetFavImages;
