import { Link } from "react-router-dom";
import { GoPerson } from "react-icons/go";
import { GiShoppingCart } from "react-icons/gi";
import { MdHelpOutline } from "react-icons/md";
import JumiaLogo from "../img/logo_jumia.svg"

function Navigation() {
    return (

        <div className="outerLayout">
            <nav>
                <div className="nav">
                    <div>
                        <h1>
                            <Link className="nav-logo" to="/">
                                <img src={JumiaLogo} alt="JumiaLogo" />
                            </Link>
                        </h1>
                    </div>
                    <div>
                        <li className="search flex">
                            <div>
                                <input type="text" placeholder="Search products, brands and categories" />
                            </div>
                            <div className="searchBtn">
                                <button>SEARCH</button>
                            </div>
                        </li>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <Link className="nav-link flex" to="/account">
                                    <div><GoPerson /></div>
                                    <div>Account</div>
                                </Link>
                            </li>
                            <li>
                                <Link className="nav-link flex" to="/account">
                                    <div><MdHelpOutline /></div>
                                    <div>Help</div>
                                </Link>
                            </li>
                            <li>
                                <Link className="nav-link flex" to="/cart">
                                    <div><GiShoppingCart /></div>
                                    <div>Cart</div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navigation;