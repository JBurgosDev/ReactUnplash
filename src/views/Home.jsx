import '../styles/Home.css'
import ImagesGrid from "../components/ImagesGrid.jsx";
import useApi from "../hooks/useApi.js";

function Home() {
    const {data} = useApi('photos');

    return (
        <>
            <div className="container">
                <div className="row">
                    <ImagesGrid data={data}/>
                </div>
            </div>
        </>
    )
}

export default Home;
