import { useParams } from "react-router-dom";
import useGetImage from "../hooks/useGetImage.js";
import ImageDetail from "../components/ImageDetail.jsx";

function Detail () {
    const { imageId } = useParams();
    const { data, loading } = useGetImage('photos', imageId)

    return (
        <div className="container d-flex justify-center">
            {loading ? <p>Loading data...</p> : <ImageDetail data={data}/>}
        </div>
    )
}

export default Detail;
