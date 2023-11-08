import ImagesGrid from "../components/ImagesGrid.jsx";

import useGetFavImages from "../hooks/useGetFavImages.js";
import { IoArrowBackSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function Profile() {
    const {images, isLoading} = useGetFavImages();
    const navigate = useNavigate();

    return (
        <>
            <div className="container">
                <div className="backBtn" onClick={() => navigate(-1)}>
                    <IoArrowBackSharp className="vertical-top"/> Back
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        {
                            !images ? <p>No image added</p>
                                : isLoading ? <p>Loading data...</p>
                                    : <ImagesGrid data={images}/>
                        }
                    </div>
                </div>

            </div>
        </>
    )
}

export default Profile;
