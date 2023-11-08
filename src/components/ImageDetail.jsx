import '../styles/ImageDetail.css'
import { formatDate } from "../utils/FormatDate.js";
import { AiFillHeart } from "react-icons/ai";
import {
    BsCloudDownloadFill,
    BsFillCalendarEventFill,
    BsFillCameraFill
} from "react-icons/bs";
import { BiCurrentLocation } from "react-icons/bi";

function ImageDetail({data}) {

console.log(data.exif)
    return (
        <>
            <div className="content">
                <div className="card">
                    <img className="card_image" src={data.urls.full} alt={data.alt_description} />
                    <div className="row flex-direction-row flex-wrap">
                        {
                            data.tags.map((tag, idx) => (
                                <div className="tags" key={idx}>
                                    {tag.title}
                                </div>
                            ))
                        }
                    </div>
                    <hr className="divider"/>
                    <div className="row flex-direction-row flex-wrap mt-2">
                        <div className="mr-1">
                            <AiFillHeart color="red"  className="vertical-top"/> {data.likes}
                        </div>
                        <div className="mr-1">
                            <BsCloudDownloadFill color="grey" className="vertical-top"/> {data.downloads}
                        </div>
                        <div className="mr-1">
                            <BiCurrentLocation color="grey" className="vertical-top"/> {data.location.name}
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="title">{data.alt_description}</div>
                        <div className="mt-2">{data.description}</div>
                        <div className="mt-3"><BsFillCalendarEventFill className="vertical-top" color="grey"/> Published on {formatDate(data.created_at)}</div>
                        {data.exif.name && <div className="mt-2"><BsFillCameraFill className="vertical-top" color="grey"/> {data.exif.name}</div>}
                    </div>

                    <div className="row flex-direction-row flex-wrap align-center mt-3">
                        <div>
                            <img className="profileImage" src={data.user.profile_image.medium} alt={data.alt_description} />
                        </div>
                        <div>
                            <div className="profile_text">{data.user.name}</div>
                            <div className="profile_text"><a href={data.user.portfolio_url}>{data.user.portfolio_url}</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ImageDetail;
