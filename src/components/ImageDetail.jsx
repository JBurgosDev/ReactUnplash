import '../styles/ImageDetail.css'
import { formatDate } from "../utils/FormatDate.js";
import { AiFillHeart, AiFillSave } from "react-icons/ai";
import { BsCloudDownloadFill, BsFillCalendarEventFill, BsFillCameraFill } from "react-icons/bs";
import { BiCurrentLocation } from "react-icons/bi";
import { useState } from "react";
import useAddToFav from "../hooks/useAddToFav.js";

function ImageDetail({data}) {
    const [imageData, setImageData] = useState(null);

    useAddToFav(imageData)

    return (
        <>
            <div className="content">
                <div className="card">
                    <img className="card_image" src={data.urls.full} alt={data.alt_description}/>
                    <div className="row flex-direction-row flex-wrap m-1">
                        {
                            data.tags.map((tag, idx) => (
                                <div className="tags" key={idx}>
                                    {tag.title}
                                </div>
                            ))
                        }
                    </div>
                    <hr className="divider"/>
                    <div className="row flex-direction-row flex-wrap justify-between mt-2 m-1">
                        <div className="row flex-direction-row flex-wrap mb-1">
                            <div className="mr-1">
                                <AiFillHeart color="red" className="vertical-top"/> {data.likes}
                            </div>
                            <div className="mr-1">
                                <BsCloudDownloadFill color="grey" className="vertical-top"/> {data.downloads}
                            </div>
                            <div className="mr-1">
                                <BiCurrentLocation color="grey" className="vertical-top"/> {data.location.name}
                            </div>
                        </div>
                        <div className="row flex-direction-row flex-wrap mb-1">
                            <div className="addToFavBtn" onClick={() => setImageData(data)}>
                                <AiFillSave color="grey" className="vertical-top"/> Add to fav
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3 m-1">
                        <div className="title">{data.alt_description}</div>
                        <div className="mt-2">{data.description}</div>
                        <div className="mt-3"><BsFillCalendarEventFill className="vertical-top" color="grey"/> Published
                            on {formatDate(data.created_at)}</div>
                        {data.exif.name && <div className="mt-2"><BsFillCameraFill className="vertical-top"
                                                                                   color="grey"/> {data.exif.name}
                        </div>}
                    </div>

                    <div className="row flex-direction-row flex-wrap align-center m-1">
                        <div className="row flex-direction-row align-center mt-3">
                            <div>
                                <img className="profileImage" src={data.user.profile_image.medium}
                                     alt={data.alt_description}/>
                            </div>
                            <div>
                                <div className="profile_text">{data.user.name}</div>
                                <div className="profile_text"><a
                                    href={data.user.portfolio_url}>{data.user.portfolio_url}</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ImageDetail;
