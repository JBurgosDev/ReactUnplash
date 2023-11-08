import { useEffect } from "react";
import { alert } from "../utils/Alerts.js";

const useAddToFav = (image) => {
    let getData = JSON.parse(localStorage.getItem('fav-images')) || [];


    useEffect(() => {
        if (image) {
            let exists = null;

            exists = getData.some((item) => item.id === image.id);

            if (exists) return alert('This image are already saved to fav', 'error');

            getData.push(image);

            localStorage.setItem('fav-images', JSON.stringify(getData));

            alert('Image saved to fav', 'success');
        }
    }, [image]);
}

export default useAddToFav;
