import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Button from "../components/Button";

import { Link } from "react-router-dom";

import { GiPaperPlane } from "react-icons/gi";
import { BiTrashAlt } from "react-icons/bi";
import { FaPlus, FaMinus } from "react-icons/fa6";
import product from "../img/powerbank.jpg"

function Cart() {
    return (
        <div className="cart">
            <div className="sticky">
                <Navigation />
            </div>

            <div className="pages cartItem">

                <div className="flex">
                    <div className="flex cartCards">
                        <div className="cartDetails">
                            <h3 className="h3">Cart (0)</h3>
                            <div>
                                <div className="flex item">
                                    <div className="flex mainItem">
                                        <div>
                                            <img src={product} alt="" />
                                        </div>
                                        <div>
                                            <p>Ace Elec Power Banks 20000 MAh Utra Slim Portable Fast Charger (ACE ELEC)</p>
                                            <p><span className="span">Seller:</span> Zeemak Ltd - AC</p>
                                            <p className="span">In Stock</p>
                                            <p className="jumia">Jumia <span className="express">
                                                <GiPaperPlane /> EXPRESS
                                            </span></p>
                                        </div>
                                    </div>
                                    <div>
                                        <h3>₦ 7,100</h3>
                                    </div>
                                </div>
                                <div className="flex cartActions">
                                    <div className="trash">
                                        <button>
                                            <div> <BiTrashAlt /></div>
                                            <div>
                                                <p>REMOVE</p>
                                            </div>
                                        </button>
                                    </div>
                                    <div className="flex cartBtn">
                                        <button className="reduce"><FaMinus /></button>
                                        {/* <Button title="-" btnBg="#E07E1B" classN="reduce"></Button> */}
                                        <p>0</p>
                                        <button className="add"><FaPlus /></button>
                                        {/* <Button title="+" btnBg="#E07E1B" classN="add"></Button> */}
                                    </div>
                                </div>
                            </div>
                            <div className="flex item">
                                <div className="flex mainItem">
                                    <div>
                                        <img src={product} alt="" />
                                    </div>
                                    <div>
                                        <p>Ace Elec Power Banks 20000 MAh Utra Slim Portable Fast Charger (ACE ELEC)</p>
                                        <p><span className="span">Seller:</span> Zeemak Ltd - AC</p>
                                        <p className="span">In Stock</p>
                                        <p className="jumia">Jumia <span className="express">
                                            <GiPaperPlane /> EXPRESS
                                        </span></p>
                                    </div>
                                </div>
                                <div>
                                    <h3>₦ 7,100</h3>
                                </div>
                            </div>
                        </div>

                        <div className="flex cardsRight">
                            <div className="cartSummary">
                                <h4 className="h4">CART SUMMARY</h4>
                                <div className="flex txt">
                                    <div>
                                        <h4>Subtotal</h4>
                                    </div>
                                    <div>
                                        <h3>₦ 33,900</h3>
                                    </div>
                                </div>
                                <span className="spanTxt">Delivery Fees not included yet.</span>
                                <div>
                                    <Button title="CHECKOUT (₦ 33,900)" btnBg="#E07E1B" classN="checkout"></Button>
                                </div>
                            </div>
                            <div className="cartReturn">
                                <h4>Returns are easy</h4>
                                <p>Free return within 7 days for ALL eligible items <Link>Details</Link></p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Cart;