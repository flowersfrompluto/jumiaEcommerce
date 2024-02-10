import { Link } from "react-router-dom";
import Button from "./Button";

import { RiVisaLine, RiMastercardFill } from "react-icons/ri";
import { GiPayMoney } from "react-icons/gi";
import { FaApple, FaGooglePlay, FaFacebookF, FaYoutube, FaTwitter, FaInstagram, FaDhl } from "react-icons/fa";
import Logo from "../img/logo_jumia.svg"


function Footer() {
    return (
        <footer>

            <div className="footerTop">
                <div className="inside flex">
                    <div className="left">
                        <h1>
                            <Link className="nav-logo" to="/">
                                <img src={Logo} alt="JumiaLogo" />
                            </Link>
                        </h1>
                    </div>
                    <div className="middle">
                        <p><b>NEW TO JUMIA?</b></p>
                        <p>Subscribe to our newsletter to get updates on our latest offers!</p>
                        <div className="flex footerMail">
                            <div>
                                <input type="email" placeholder="Enter E-Mail Address" />
                            </div>
                            <div className="flex btn">
                                <div>
                                    <Button title="MALE" btnBg="transparent" classN="genderBtn"></Button>
                                </div>
                                <div>
                                    <Button title="FEMALE" btnBg="transparent" classN="genderBtn"></Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <p><b>DOWNLOAD JUMIA FREE APP</b></p>
                        <p>Get access to exclusive offers!</p>
                        <div className="flex footerDownload">
                            <div className="flex btn get">
                                <div className="getApp">
                                    <Link className="foot-link flex get" to="#">
                                        <div className="icon">
                                            <FaApple />
                                        </div>
                                        <div className="text">
                                            <p>Download on the</p>
                                            <p className="bold"><b>App Store</b></p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="getApp">
                                    <Link className="foot-link flex get" to="#">
                                        <div className="icon">
                                            <FaGooglePlay />
                                        </div>
                                        <div className="text">
                                            <p>Get it on</p>
                                            <p className="bold"><b>Google Play</b></p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footerBottom">
                <div className="inside flex top">
                    <div>
                        <ul>
                            <li className="topic">NEED HELP?</li>
                            <li>
                                <Link className="footLink" to="#">Chat with us</Link>
                            </li>
                            <li>
                                <Link className="footLink" to="#">Help Center</Link>
                            </li>
                            <li>
                                <Link className="footLink" to="#">Contact Us</Link>
                            </li>
                        </ul>

                        <ul>
                            <li className="topic padded">USEFUL LINKS</li>
                            <li>
                                <Link className="footLink" to="#">Service Center</Link>
                            </li>
                            <li>
                                <Link className="footLink" to="#">How to shop on Jumia?</Link>
                            </li>
                            <li>
                                <Link className="footLink" to="#">Delivery options and timelines</Link>
                            </li>
                            <li>
                                <Link className="footLink" to="#">How to return a product on Jumia?</Link>
                            </li>
                            <li>
                                <Link className="footLink" to="#">Corporate and bulk purchases</Link>
                            </li>
                            <li>
                                <Link className="footLink" to="#">Report a Product</Link>
                            </li>
                            <li>
                                <Link className="footLink" to="#">Ship your package anywhere in Nigeria</Link>
                            </li>
                            <li>
                                <Link className="footLink" to="#">Dispute Resolution Policy</Link>
                            </li>
                            <li>
                                <Link className="footLink" to="#">Returns & Refund Timeline</Link>
                            </li>
                            <li>
                                <Link className="footLink" to="#">Return Policy</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <ul>
                            <li className="topic">ABOUT JUMIA</li>
                            <li>
                                <Link className="footLink" to="#">About us </Link>
                            </li>
                            <li>
                                <Link className="footLink" to="#">Jumia careers    </Link>
                            </li>
                            <li>
                                <Link className="footLink" to="#">Jumia Express    </Link>
                            </li>
                            <li>
                                <Link className="footLink" to="#">Terms and Conditions </Link>
                            </li>
                            <li>
                                <Link className="footLink" to="#">Privacy Notice   </Link>
                            </li>
                            <li>
                                <Link className="footLink" to="#">Jumia Store Credit Terms & Conditions    </Link>
                            </li>
                            <li>
                                <Link className="footLink" to="#">Jumia Payment Information Guidelines </Link>
                            </li>
                            <li>
                                <Link className="footLink" to="#">Cookie Notice    </Link>
                            </li>
                            <li>
                                <Link className="footLink" to="#">Jumia Global </Link>
                            </li>
                            <li>
                                <Link className="footLink" to="#">Official Stores  </Link>
                            </li>
                            <li>
                                <Link className="footLink" to="#">Flash Sales  </Link>
                            </li>
                            <li>
                                <Link className="footLink" to="#">Black Friday 2023    </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <ul>
                            <li className="topic">MAKE MONEY WITH JUMIA</li>
                            <li>
                                <Link className="footLink" to="#">Sell on Jumia</Link>
                            </li>
                            <li>
                                <Link className="footLink" to="#">Vendor hub</Link>
                            </li>
                            <li>
                                <Link className="footLink" to="#">Become a Sales Consultant</Link>
                            </li>
                            <li>
                                <Link className="footLink" to="#">Become a Logistics Service Partner</Link>
                            </li>
                            <li>
                                <Link className="footLink" to="#">Join the Jumia DA Academy</Link>
                            </li>
                            <li>
                                <Link className="footLink" to="#">Join the Jumia KOL Program</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <ul>
                            <li className="topic">JUMIA INTERNATIONAL</li>
                        </ul>
                        <div>
                            <ul>
                                <li>
                                    <Link className="footLink" to="#">Algeria</Link>
                                </li>
                                <li>
                                    <Link className="footLink" to="#">Egypt</Link>
                                </li>
                                <li>
                                    <Link className="footLink" to="#">Ghana</Link>
                                </li>
                                <li>
                                    <Link className="footLink" to="#">Ivory Coast</Link>
                                </li>
                                <li>
                                    <Link className="footLink" to="#">Kenya</Link>
                                </li>
                                <li>
                                    <Link className="footLink" to="#">Morocco</Link>
                                </li>
                                <li>
                                    <Link className="footLink" to="#">Senegal</Link>
                                </li>
                                <li>
                                    <Link className="footLink" to="#">Tunisia</Link>
                                </li>
                                <li>
                                    <Link className="footLink" to="#">Uganda</Link>
                                </li>
                                <li>
                                    <Link className="footLink" to="#">Zando</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="bottom flex">
                    <div className="otherNotes">
                        <li className="topic">JOIN US ON</li>
                        <div className="socials flex">
                            <div>
                                <Link className="socialsLink" to="#"><FaFacebookF /></Link>
                            </div>
                            <div>
                                <Link className="socialsLink" to="#"><FaYoutube /></Link>
                            </div>
                            <div>
                                <Link className="socialsLink" to="#"><FaInstagram /></Link>
                            </div>
                            <div>
                                <Link className="socialsLink" to="#"><FaTwitter /></Link>
                            </div>
                        </div>
                    </div>
                    <div className="payment">
                        <li className="topic">PAYMENT METHODS & DELIVERY PARTNERS</li>
                        <div className="socials flex">
                            <div>
                                <Link className="socialsLink" to="#"><GiPayMoney /></Link>
                            </div>
                            <div>
                                <Link className="socialsLink" to="#"><RiMastercardFill /></Link>
                            </div>
                            <div>
                                <Link className="socialsLink" to="#"><RiVisaLine /></Link>
                            </div>
                            <div>
                                <Link className="socialsLink" to="#">Verve</Link>
                            </div>
                            <div>
                                <Link className="socialsLink" to="#">Interswitch</Link>
                            </div>
                            <div>
                                <Link className="socialsLink" to="#"><FaDhl /></Link>
                            </div>
                            <div>
                                <Link className="socialsLink" to="#">Max</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;