import '../styles/ImageGrid.css'

function ImagesGrid({data}) {
    return (
        <>
            {
                data.map((images) => {
                    return (
                        <div className="cards" key={images.id}>
                            <img className="card__image" src={images.urls.small} alt={images.alt_description}/>
                            <div className="overlay">
                                <h4>{images.alt_description}</h4>
                                <p>Author: <b>{images.user.name}</b></p>
                            </div>

                            <div className="likes">
                                <p><span>♥</span> {images.likes}</p>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default ImagesGrid;
