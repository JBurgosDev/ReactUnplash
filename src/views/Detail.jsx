import { Link, useParams } from "react-router-dom";
import useGetImage from "../hooks/useGetImage.js";
import ImageDetail from "../components/ImageDetail.jsx";
import { IoArrowBackSharp } from "react-icons/io5";

function Detail () {
    const { imageId } = useParams();
    const { data, loading } = useGetImage('photos', imageId)

    return (
        <>
            <div className="container">
                <Link to="/" className="link-d-none">
                    <div className="backBtn">
                        <IoArrowBackSharp className="vertical-top" /> Back
                    </div>
                </Link>
            </div>
            <div className="container d-flex justify-center">
                {loading ? <p>Loading data...</p> : <ImageDetail data={data}/>}
            </div>
        </>
    )
}

export default Detail;
