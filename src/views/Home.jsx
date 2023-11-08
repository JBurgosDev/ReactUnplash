import '../styles/Home.css'
import ImagesGrid from "../components/ImagesGrid.jsx";
import useInfiniteScroll from "../hooks/useInfiniteScroll.js";
import { useRef, useState } from "react";
import { BsFilterCircleFill } from "react-icons/bs";

function Home() {
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('latest');

    const searchInput = useRef(null)

    const {data, isLoading} = useInfiniteScroll('photos', search, filter);

    const setSearchValue = () => {
        if (search === searchInput.current.value) return;
        setSearch(searchInput.current.value);
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-2 mb-1">
                        <div>
                            <input type="text" ref={searchInput} name="Search" id="" placeholder="Search images" className="search"/>
                            <input type="button" className="search-input" value="Search" onClick={setSearchValue} />
                        </div>
                        <div className="d-flex justify-end align-center contentFilter">
                            <div className="d-flex align-center">
                                <div>
                                    <BsFilterCircleFill className="vertical-middle mr-1" color="grey" size="30"/>
                                </div>
                                <div>
                                    <select onChange={(e) => setFilter(e.target.value)} className="selectInput">
                                        <option value="latest">Latest</option>
                                        <option value="oldest">Oldest</option>
                                        <option value="popular">Popular</option>
                                    </select>
                                </div>
                            </div>
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
