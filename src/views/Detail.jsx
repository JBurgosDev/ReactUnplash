import { useNavigate, useParams } from "react-router-dom";
import useGetImage from "../hooks/useGetImage.js";
import ImageDetail from "../components/ImageDetail.jsx";
import { IoArrowBackSharp } from "react-icons/io5";

function Detail() {
    const {imageId} = useParams();
    const {data, loading} = useGetImage('photos', imageId)

    const navigate = useNavigate();

    return (
        <>
            <div className="container">
                <div className="backBtn" onClick={() => navigate(-1)}>
                    <IoArrowBackSharp className="vertical-top"/> Back
                </div>

            </div>
            <div className="container d-flex justify-center">
                {loading ? <p>Loading data...</p> : <ImageDetail data={data}/>}
            </div>
        </>
    )
}

export default Detail;
