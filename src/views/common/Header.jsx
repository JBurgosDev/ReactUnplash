import '../../styles/Header.css'
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <div>
                <Link to="/" className="link-d-none" style={{color: "initial"}}>
                    React unsplash
                </Link>
            </div>
            <div>
                <Link to="/profile" className="link-d-none profileBtn">
                    Profile
                </Link>
            </div>
        </header>
    )
}

export default Header;
