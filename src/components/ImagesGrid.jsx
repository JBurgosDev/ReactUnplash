import '../styles/ImageGrid.css'
import { Link } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";

function ImagesGrid({data}) {
    return (
        <>
            {
                data.map((images, idx) => {
                    return (
                        <Link to={`/image/${images.id}/details`} key={idx}>
                            <div className="cards">
                                <img className="card__image" src={images.urls.small} alt={images.alt_description} />
                                <div className="overlay">
                                    <h4>{images.alt_description}</h4>
                                    <p>Author: <b>{images.user.name}</b></p>
                                    <p><AiFillHeart color="red" className="vertical-top"/> {images.likes}</p>
                                </div>
                            </div>
                        </Link>
                    )
                })
            }
        </>
    )
}

export default ImagesGrid;
