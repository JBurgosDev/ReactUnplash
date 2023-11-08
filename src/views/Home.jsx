import '../styles/Home.css'
import ImagesGrid from "../components/ImagesGrid.jsx";
import useInfiniteScroll from "../hooks/useInfiniteScroll.js";
import { useRef, useState } from "react";

function Home() {
    const [search, setSearch] = useState('');
    const searchInput = useRef(null)

    const {data, isLoading} = useInfiniteScroll('photos', search);

    const setSearchValue = () => {
        if (search === searchInput.current.value) return;
        setSearch(searchInput.current.value);
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <div>
                            <input type="text" ref={searchInput} name="Buscar" id="" placeholder="Buscar imagenes" className="search"/>
                            <input type="button" className="search-input" value="Buscar" onClick={setSearchValue} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        {isLoading ? <p>Loading data...</p> : <ImagesGrid data={data}/>}
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home;
