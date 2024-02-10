import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";


// IMAGES IMPORT

import bgstrip from "../img/BF-Top-strip-Desktop.gif"
import auth from "../img/bsb.jpg"
import shopnEarn from "../img/JForce.png"
import clearance from "../img/clearance.gif"
import Phones from "../img/phones-tablets_300x240.png"
import Groceries from "../img/grocies-freelinks.jpg"
import Computing from "../img/computing.jpg"
import fiveKay from "../img/5k-store.gif"
import Televisions from "../img/TELEVISION.jpg"
import Authenticity from "../img/ezgif.com-gif-maker.gif"
import Refrigerators from "../img/refrigerators_300x240.png"
import Accessories from "../img/earphones_300x240.png"
import Generators from "../img/generator.gif"
import Sneakers from "../img/fashion_300x240.png"
import Watches from "../img/watches_300x240.png"
import Malta from "../img/malt.jpeg"
import ElecPowerbank from "../img/elec1.jpg"
import Powerbank from "../img/powerbank.jpg"
import Nivea1 from "../img/nivea1.jpg"
import Wireless from "../img/elec2.jpg"
import Nivea2 from "../img/nivea2.jpg"
import Binatone1 from "../img/binatone.png"
import Sneakers2 from "../img/sneakers.png"


import { CiApple, CiDesktop, CiDumbbell } from "react-icons/ci";
import { GrHomeRounded } from "react-icons/gr";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { PiTelevisionLight, PiBaby } from "react-icons/pi";
import { RiShirtLine } from "react-icons/ri";
import { IoGameControllerOutline } from "react-icons/io5";
import { TbCategory } from "react-icons/tb";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { CgSmartHomeWashMachine } from "react-icons/cg";

function Home() {
  return (
    <div className="home">
      <div className="top">
        <img src={bgstrip} alt="" />
      </div>
      <div className="sticky">
        <Navigation />
      </div>
      <div className="homeMain">
        <div className="pages flex spaceBtw row1">
          <div className="left">
            <ul>
              <li className="link">
                <Link className="home-link" to="#"><CiApple /> Supermarket</Link>
              </li>
              <li className="link">
                <Link className="home-link" to="#"><MdOutlineHealthAndSafety /> Health & Beauty</Link>
              </li>
              <li className="link">
                <Link className="home-link" to="#"><GrHomeRounded /> Home & Office</Link>
              </li>
              <li className="link">
                <Link className="home-link" to="#"><CgSmartHomeWashMachine /> Appliances</Link>
              </li>
              <li className="link">
                <Link className="home-link" to="#"><HiOutlineDevicePhoneMobile /> Phones & Tablets</Link>
              </li>
              <li className="link">
                <Link className="home-link" to="#"><CiDesktop /> Computing</Link>
              </li>
              <li className="link">
                <Link className="home-link" to="#"><PiTelevisionLight /> Electronics</Link>
              </li>
              <li className="link">
                <Link className="home-link" to="#"><RiShirtLine /> Fashion</Link>
              </li>
              <li className="link">
                <Link className="home-link" to="#"><PiBaby /> Baby Products</Link>
              </li>
              <li className="link">
                <Link className="home-link" to="#"><IoGameControllerOutline /> Gaming</Link>
              </li>
              <li className="link">
                <Link className="home-link" to="#"><CiDumbbell /> Sporting Goods</Link>
              </li>
              <li className="link">
                <Link className="home-link" to="#"><TbCategory /> Other categories</Link>
              </li>
            </ul>
          </div>
          <div className="middle">
            <h1>slider here</h1>
          </div>
          <div className="right">
            <div>
              <img src={auth} alt="" />
            </div>
            <div>
              <img src={shopnEarn} alt="" />
            </div>
          </div>
        </div>
        {/* ROW 2 HERE */}
        <div className="pages grid row2 row">
          <div>
            <div>
              <img src={clearance} alt="" />
            </div>
            <p>Clearance Sale</p>
          </div>
          <div>
            <div className="box">
              <img src={Phones} alt="" />
            </div>
            <p>Phones & Tablets</p>
          </div>
          <div>
            <div className="box">
              <img src={Groceries} alt="" />
            </div>
            <p>Groceries</p>
          </div>
          <div>
            <div className="box">
              <img src={Computing} alt="" />
            </div>
            <p>Computing Deals</p>
          </div>
          <div>
            <div className="box">
              <img src={fiveKay} alt="" />
            </div>
            <p>₦5,000 Store</p>
          </div>
          <div>
            <div className="box">
              <img src={Televisions} alt="" />
            </div>
            <p>Televisions</p>
          </div>
          <div>
            <div className="box">
              <img src={Authenticity} alt="" />
            </div>
            <p>Authenticity Guarantee</p>
          </div>
          <div>
            <div className="box">
              <img src={Refrigerators} alt="" />
            </div>
            <p>Refrigerators</p>
          </div>
          <div>
            <div className="box">
              <img src={Accessories} alt="" />
            </div>
            <p>Mobile Accessories</p>
          </div>
          <div>
            <div className="box">
              <img src={Generators} alt="" />
            </div>
            <p>Generators</p>
          </div>
          <div>
            <div className="box">
              <img src={Sneakers} alt="" />
            </div>
            <p>Men's Sneakers</p>
          </div>
          <div>
            <div className="box">
              <img src={Watches} alt="" />
            </div>
            <p>Watches</p>
          </div>
        </div>

        {/* ROW 3 HERE */}
        <div className="pages rowDeals row">
          <h3>Top Selling Items</h3>
          <div className="grid items">
            <div>
              <div className="box">
                <img src={Malta} alt="" />
              </div>
              <p>Malta Guiness Can 330...</p>
              <h4>₦6,650</h4>
            </div>
            <div>
              <div className="box">
                <img src={ElecPowerbank} alt="" />
              </div>
              <p>Ace Elec Powerbank 200...</p>
              <h4>₦7,100</h4>
              <span>₦9,000</span>
            </div>
            <div>
              <div className="box">
                <img src={Powerbank} alt="" />
              </div>
              <p>Power Banks 2000 MAh ...</p>
              <h4>₦7,100</h4>
              <span>₦9,000</span>
            </div>
            <div>
              <div className="box">
                <img src={Nivea1} alt="" />
              </div>
              <p>NIVEA Dry Comfort Roll-...</p>
              <h4>₦4,200</h4>
            </div>
            <div>
              <div className="box">
                <img src={Wireless} alt="" />
              </div>
              <p>Ace Elec F9 Wireless Fing...</p>
              <h4>₦3,450</h4>
              <span>₦6,059</span>
            </div>
            <div>
              <div className="box">
                <img src={Nivea2} alt="" />
              </div>
              <p>NIVEA Nourishing Cocoa...</p>
              <h4>₦5,800</h4>
            </div>
          </div>
        </div>

        {/* ROW 4 HERE */}
        <div className="pages rowDeals">
          <div className="redLabel flex">
            <p>Flash Sales</p>
            <p>Time Left: <b>00h : 00m : 00s</b></p>
            <p>SEE ALL > </p>
          </div>

          <div className="grid items row">
            <div>
              <div className="box">
                <img src={Malta} alt="" />
              </div>
              <p>Malta Guiness Can 330...</p>
              <h4>₦6,650</h4>
            </div>
            <div>
              <div className="box">
                <img src={ElecPowerbank} alt="" />
              </div>
              <p>Ace Elec Powerbank 200...</p>
              <h4>₦7,100</h4>
              <span>₦9,000</span>
            </div>
            <div>
              <div className="box">
                <img src={Powerbank} alt="" />
              </div>
              <p>Power Banks 2000 MAh ...</p>
              <h4>₦7,100</h4>
              <span>₦9,000</span>
            </div>
            <div>
              <div className="box">
                <img src={Nivea1} alt="" />
              </div>
              <p>NIVEA Dry Comfort Roll-...</p>
              <h4>₦4,200</h4>
            </div>
            <div>
              <div className="box">
                <img src={Wireless} alt="" />
              </div>
              <p>Ace Elec F9 Wireless Fing...</p>
              <h4>₦3,450</h4>
              <span>₦6,059</span>
            </div>
            <div>
              <div className="box">
                <img src={Nivea2} alt="" />
              </div>
              <p>NIVEA Nourishing Cocoa...</p>
              <h4>₦5,800</h4>
            </div>
          </div>
        </div>

        {/* ROW 5 HERE */}
        <div className="pages rowDeals">
          <div className="yellowLabel flex">
            <p>Choplife Christmas Deals</p>
            <p>SEE ALL > </p>
          </div>

          <div className="grid items row">
            <div>
              <div className="box">
                <img src={Malta} alt="" />
              </div>
              <p>Malta Guiness Can 330...</p>
              <h4>₦6,650</h4>
            </div>
            <div>
              <div className="box">
                <img src={ElecPowerbank} alt="" />
              </div>
              <p>Ace Elec Powerbank 200...</p>
              <h4>₦7,100</h4>
              <span>₦9,000</span>
            </div>
            <div>
              <div className="box">
                <img src={Powerbank} alt="" />
              </div>
              <p>Power Banks 2000 MAh ...</p>
              <h4>₦7,100</h4>
              <span>₦9,000</span>
            </div>
            <div>
              <div className="box">
                <img src={Nivea1} alt="" />
              </div>
              <p>NIVEA Dry Comfort Roll-...</p>
              <h4>₦4,200</h4>
            </div>
            <div>
              <div className="box">
                <img src={Wireless} alt="" />
              </div>
              <p>Ace Elec F9 Wireless Fing...</p>
              <h4>₦3,450</h4>
              <span>₦6,059</span>
            </div>
            <div>
              <div className="box">
                <img src={Nivea2} alt="" />
              </div>
              <p>NIVEA Nourishing Cocoa...</p>
              <h4>₦5,800</h4>
            </div>
          </div>
        </div>

        {/* ROW 6 HERE */}
        <div className="pages row6">
          <div className="flex items">
            <div className="box">
              <img src={Binatone1} alt="" />
            </div>
            <div className="box">
              <img src={Sneakers2} alt="" />
            </div>
          </div>
        </div>

        {/* ROW 7 HERE */}
        <div className="pages rowDeals">
          <div className="navyLabel flex">
            <p>Binatone Official Store Deals</p>
            <p>SEE ALL > </p>
          </div>

          <div className="grid items row">
            <div>
              <div className="box">
                <img src={Malta} alt="" />
              </div>
              <p>Malta Guiness Can 330...</p>
              <h4>₦6,650</h4>
            </div>
            <div>
              <div className="box">
                <img src={ElecPowerbank} alt="" />
              </div>
              <p>Ace Elec Powerbank 200...</p>
              <h4>₦7,100</h4>
              <span>₦9,000</span>
            </div>
            <div>
              <div className="box">
                <img src={Powerbank} alt="" />
              </div>
              <p>Power Banks 2000 MAh ...</p>
              <h4>₦7,100</h4>
              <span>₦9,000</span>
            </div>
            <div>
              <div className="box">
                <img src={Nivea1} alt="" />
              </div>
              <p>NIVEA Dry Comfort Roll-...</p>
              <h4>₦4,200</h4>
            </div>
            <div>
              <div className="box">
                <img src={Wireless} alt="" />
              </div>
              <p>Ace Elec F9 Wireless Fing...</p>
              <h4>₦3,450</h4>
              <span>₦6,059</span>
            </div>
            <div>
              <div className="box">
                <img src={Nivea2} alt="" />
              </div>
              <p>NIVEA Nourishing Cocoa...</p>
              <h4>₦5,800</h4>
            </div>
          </div>
        </div>

        {/* ROW 8 HERE */}
        <div className="pages rowDeals">
          <div className="greenLabel center">
            <p>Shop From Our Collection</p>
          </div>

          <div className="grid items row">
            <div>
              <div className="box">
                <img src={Malta} alt="" />
              </div>
              <p>Malta Guiness Can 330...</p>
              <h4>₦6,650</h4>
            </div>
            <div>
              <div className="box">
                <img src={ElecPowerbank} alt="" />
              </div>
              <p>Ace Elec Powerbank 200...</p>
              <h4>₦7,100</h4>
              <span>₦9,000</span>
            </div>
            <div>
              <div className="box">
                <img src={Powerbank} alt="" />
              </div>
              <p>Power Banks 2000 MAh ...</p>
              <h4>₦7,100</h4>
              <span>₦9,000</span>
            </div>
            <div>
              <div className="box">
                <img src={Nivea1} alt="" />
              </div>
              <p>NIVEA Dry Comfort Roll-...</p>
              <h4>₦4,200</h4>
            </div>
            <div>
              <div className="box">
                <img src={Wireless} alt="" />
              </div>
              <p>Ace Elec F9 Wireless Fing...</p>
              <h4>₦3,450</h4>
              <span>₦6,059</span>
            </div>
            <div>
              <div className="box">
                <img src={Nivea2} alt="" />
              </div>
              <p>NIVEA Nourishing Cocoa...</p>
              <h4>₦5,800</h4>
            </div>
          </div>
        </div>

        {/* ROW 9 HERE */}
        <div className="pages rowDeals">
          <div className="greenLabel flex">
            <p>Best Price</p>
            <p>SEE ALL ></p>
          </div>

          <div className="grid items row">
            <div>
              <div className="box">
                <img src={Malta} alt="" />
              </div>
              <p>Malta Guiness Can 330...</p>
              <h4>₦6,650</h4>
            </div>
            <div>
              <div className="box">
                <img src={ElecPowerbank} alt="" />
              </div>
              <p>Ace Elec Powerbank 200...</p>
              <h4>₦7,100</h4>
              <span>₦9,000</span>
            </div>
            <div>
              <div className="box">
                <img src={Powerbank} alt="" />
              </div>
              <p>Power Banks 2000 MAh ...</p>
              <h4>₦7,100</h4>
              <span>₦9,000</span>
            </div>
            <div>
              <div className="box">
                <img src={Nivea1} alt="" />
              </div>
              <p>NIVEA Dry Comfort Roll-...</p>
              <h4>₦4,200</h4>
            </div>
            <div>
              <div className="box">
                <img src={Wireless} alt="" />
              </div>
              <p>Ace Elec F9 Wireless Fing...</p>
              <h4>₦3,450</h4>
              <span>₦6,059</span>
            </div>
            <div>
              <div className="box">
                <img src={Nivea2} alt="" />
              </div>
              <p>NIVEA Nourishing Cocoa...</p>
              <h4>₦5,800</h4>
            </div>
          </div>
        </div>

        {/* ROW 10 HERE */}
        <div className="pages rowDeals">
          <div className="yellowLabel center">
            <p>More Collections</p>
          </div>

          <div className="grid items row">
            <div>
              <div className="box">
                <img src={Malta} alt="" />
              </div>
              <p>Malta Guiness Can 330...</p>
              <h4>₦6,650</h4>
            </div>
            <div>
              <div className="box">
                <img src={ElecPowerbank} alt="" />
              </div>
              <p>Ace Elec Powerbank 200...</p>
              <h4>₦7,100</h4>
              <span>₦9,000</span>
            </div>
            <div>
              <div className="box">
                <img src={Powerbank} alt="" />
              </div>
              <p>Power Banks 2000 MAh ...</p>
              <h4>₦7,100</h4>
              <span>₦9,000</span>
            </div>
            <div>
              <div className="box">
                <img src={Nivea1} alt="" />
              </div>
              <p>NIVEA Dry Comfort Roll-...</p>
              <h4>₦4,200</h4>
            </div>
            <div>
              <div className="box">
                <img src={Wireless} alt="" />
              </div>
              <p>Ace Elec F9 Wireless Fing...</p>
              <h4>₦3,450</h4>
              <span>₦6,059</span>
            </div>
            <div>
              <div className="box">
                <img src={Nivea2} alt="" />
              </div>
              <p>NIVEA Nourishing Cocoa...</p>
              <h4>₦5,800</h4>
            </div>
          </div>
        </div>

        {/* ROW 11 HERE */}
        <div className="pages rowDeals">
          <div className="yellowLabel center">
            <p>Phone Deals</p>
          </div>

          <div className="grid items row">
            <div>
              <div className="box">
                <img src={Malta} alt="" />
              </div>
              <p>Malta Guiness Can 330...</p>
              <h4>₦6,650</h4>
            </div>
            <div>
              <div className="box">
                <img src={ElecPowerbank} alt="" />
              </div>
              <p>Ace Elec Powerbank 200...</p>
              <h4>₦7,100</h4>
              <span>₦9,000</span>
            </div>
            <div>
              <div className="box">
                <img src={Powerbank} alt="" />
              </div>
              <p>Power Banks 2000 MAh ...</p>
              <h4>₦7,100</h4>
              <span>₦9,000</span>
            </div>
            <div>
              <div className="box">
                <img src={Nivea1} alt="" />
              </div>
              <p>NIVEA Dry Comfort Roll-...</p>
              <h4>₦4,200</h4>
            </div>
            <div>
              <div className="box">
                <img src={Wireless} alt="" />
              </div>
              <p>Ace Elec F9 Wireless Fing...</p>
              <h4>₦3,450</h4>
              <span>₦6,059</span>
            </div>
            <div>
              <div className="box">
                <img src={Nivea2} alt="" />
              </div>
              <p>NIVEA Nourishing Cocoa...</p>
              <h4>₦5,800</h4>
            </div>
          </div>
        </div>

        {/* ROW 12 HERE */}
        <div className="pages rowDeals">
          <div className="yellowLabel flex">
            <p>Top Phone Deals</p>
            <p>SEE ALL ></p>
          </div>

          <div className="grid items row">
            <div>
              <div className="box">
                <img src={Malta} alt="" />
              </div>
              <p>Malta Guiness Can 330...</p>
              <h4>₦6,650</h4>
            </div>
            <div>
              <div className="box">
                <img src={ElecPowerbank} alt="" />
              </div>
              <p>Ace Elec Powerbank 200...</p>
              <h4>₦7,100</h4>
              <span>₦9,000</span>
            </div>
            <div>
              <div className="box">
                <img src={Powerbank} alt="" />
              </div>
              <p>Power Banks 2000 MAh ...</p>
              <h4>₦7,100</h4>
              <span>₦9,000</span>
            </div>
            <div>
              <div className="box">
                <img src={Nivea1} alt="" />
              </div>
              <p>NIVEA Dry Comfort Roll-...</p>
              <h4>₦4,200</h4>
            </div>
            <div>
              <div className="box">
                <img src={Wireless} alt="" />
              </div>
              <p>Ace Elec F9 Wireless Fing...</p>
              <h4>₦3,450</h4>
              <span>₦6,059</span>
            </div>
            <div>
              <div className="box">
                <img src={Nivea2} alt="" />
              </div>
              <p>NIVEA Nourishing Cocoa...</p>
              <h4>₦5,800</h4>
            </div>
          </div>
        </div>

        {/* ROW 14.1 HERE */}
        <div className="pages rowDeals">
          <div className="navyLabel flex">
            <p>Official Stores</p>
          </div>

          <div className="grid items row">
            <div>
              <div className="box">
                <img src={Malta} alt="" />
              </div>
            </div>
            <div>
              <div className="box">
                <img src={ElecPowerbank} alt="" />
              </div>
            </div>
            <div>
              <div className="box">
                <img src={Powerbank} alt="" />
              </div>
            </div>
            <div>
              <div className="box">
                <img src={Nivea1} alt="" />
              </div>
            </div>
            <div>
              <div className="box">
                <img src={Wireless} alt="" />
              </div>
            </div>
            <div>
              <div className="box">
                <img src={Nivea2} alt="" />
              </div>
            </div>
            <div>
              <div className="box">
                <img src={Malta} alt="" />
              </div>
            </div>
            <div>
              <div className="box">
                <img src={ElecPowerbank} alt="" />
              </div>
            </div>
            <div>
              <div className="box">
                <img src={Powerbank} alt="" />
              </div>
            </div>
            <div>
              <div className="box">
                <img src={Nivea1} alt="" />
              </div>
            </div>
            <div>
              <div className="box">
                <img src={Wireless} alt="" />
              </div>
            </div>
            <div>
              <div className="box">
                <img src={Nivea2} alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* ROW 14.2 HERE */}
        <div className="pages rowDeals">

          <div className="grid items row">
            <div>
              <div className="box">
                <img src={Malta} alt="" />
              </div>
            </div>
            <div>
              <div className="box">
                <img src={ElecPowerbank} alt="" />
              </div>
            </div>
            <div>
              <div className="box">
                <img src={Powerbank} alt="" />
              </div>
            </div>
            <div>
              <div className="box">
                <img src={Nivea1} alt="" />
              </div>
            </div>
            <div>
              <div className="box">
                <img src={Wireless} alt="" />
              </div>
            </div>
            <div>
              <div className="box">
                <img src={Nivea2} alt="" />
              </div>
            </div>
            <div>
              <div className="box">
                <img src={Malta} alt="" />
              </div>
            </div>
            <div>
              <div className="box">
                <img src={ElecPowerbank} alt="" />
              </div>
            </div>
            <div>
              <div className="box">
                <img src={Powerbank} alt="" />
              </div>
            </div>
            <div>
              <div className="box">
                <img src={Nivea1} alt="" />
              </div>
            </div>
            <div>
              <div className="box">
                <img src={Wireless} alt="" />
              </div>
            </div>
            <div>
              <div className="box">
                <img src={Nivea2} alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* ROW 15 HERE */}
        <div className="pages rowDeals">
          <div className="navyLabel flex">
            <p>Xiaomi Official Store Deals</p>
            <p>SEE ALL ></p>
          </div>

          <div className="grid items row">
            <div>
              <div className="box">
                <img src={Malta} alt="" />
              </div>
              <p>Malta Guiness Can 330...</p>
              <h4>₦6,650</h4>
            </div>
            <div>
              <div className="box">
                <img src={ElecPowerbank} alt="" />
              </div>
              <p>Ace Elec Powerbank 200...</p>
              <h4>₦7,100</h4>
              <span>₦9,000</span>
            </div>
            <div>
              <div className="box">
                <img src={Powerbank} alt="" />
              </div>
              <p>Power Banks 2000 MAh ...</p>
              <h4>₦7,100</h4>
              <span>₦9,000</span>
            </div>
            <div>
              <div className="box">
                <img src={Nivea1} alt="" />
              </div>
              <p>NIVEA Dry Comfort Roll-...</p>
              <h4>₦4,200</h4>
            </div>
            <div>
              <div className="box">
                <img src={Wireless} alt="" />
              </div>
              <p>Ace Elec F9 Wireless Fing...</p>
              <h4>₦3,450</h4>
              <span>₦6,059</span>
            </div>
            <div>
              <div className="box">
                <img src={Nivea2} alt="" />
              </div>
              <p>NIVEA Nourishing Cocoa...</p>
              <h4>₦5,800</h4>
            </div>
          </div>
        </div>

        {/* ROW 16 HERE */}
        <div className="pages rowDeals">
          <div className="navyLabel flex">
            <p>adidas Official Store Deals</p>
            <p>SEE ALL ></p>
          </div>

          <div className="grid items row">
            <div>
              <div className="box">
                <img src={Malta} alt="" />
              </div>
              <p>Malta Guiness Can 330...</p>
              <h4>₦6,650</h4>
            </div>
            <div>
              <div className="box">
                <img src={ElecPowerbank} alt="" />
              </div>
              <p>Ace Elec Powerbank 200...</p>
              <h4>₦7,100</h4>
              <span>₦9,000</span>
            </div>
            <div>
              <div className="box">
                <img src={Powerbank} alt="" />
              </div>
              <p>Power Banks 2000 MAh ...</p>
              <h4>₦7,100</h4>
              <span>₦9,000</span>
            </div>
            <div>
              <div className="box">
                <img src={Nivea1} alt="" />
              </div>
              <p>NIVEA Dry Comfort Roll-...</p>
              <h4>₦4,200</h4>
            </div>
            <div>
              <div className="box">
                <img src={Wireless} alt="" />
              </div>
              <p>Ace Elec F9 Wireless Fing...</p>
              <h4>₦3,450</h4>
              <span>₦6,059</span>
            </div>
            <div>
              <div className="box">
                <img src={Nivea2} alt="" />
              </div>
              <p>NIVEA Nourishing Cocoa...</p>
              <h4>₦5,800</h4>
            </div>
          </div>
        </div>

        {/* ROW 17 HERE */}
        <div className="pages rowDeals">
          <div className="yellowLabel center">
            <p>Keep The Lights On</p>
          </div>

          <div className="grid items row">
            <div>
              <div className="box">
                <img src={Malta} alt="" />
              </div>
              <p>Malta Guiness Can 330...</p>
              <h4>₦6,650</h4>
            </div>
            <div>
              <div className="box">
                <img src={ElecPowerbank} alt="" />
              </div>
              <p>Ace Elec Powerbank 200...</p>
              <h4>₦7,100</h4>
              <span>₦9,000</span>
            </div>
            <div>
              <div className="box">
                <img src={Powerbank} alt="" />
              </div>
              <p>Power Banks 2000 MAh ...</p>
              <h4>₦7,100</h4>
              <span>₦9,000</span>
            </div>
            <div>
              <div className="box">
                <img src={Nivea1} alt="" />
              </div>
              <p>NIVEA Dry Comfort Roll-...</p>
              <h4>₦4,200</h4>
            </div>
            <div>
              <div className="box">
                <img src={Wireless} alt="" />
              </div>
              <p>Ace Elec F9 Wireless Fing...</p>
              <h4>₦3,450</h4>
              <span>₦6,059</span>
            </div>
            <div>
              <div className="box">
                <img src={Nivea2} alt="" />
              </div>
              <p>NIVEA Nourishing Cocoa...</p>
              <h4>₦5,800</h4>
            </div>
          </div>
        </div>

        {/* ROW 17 HERE */}
        <div className="pages rowDeals">
          <div className="yellowLabel flex">
            <p>Keep The Lights On Deals</p>
            <p>SEE ALL ></p>
          </div>

          <div className="grid items row">
            <div>
              <div className="box">
                <img src={Malta} alt="" />
              </div>
              <p>Malta Guiness Can 330...</p>
              <h4>₦6,650</h4>
            </div>
            <div>
              <div className="box">
                <img src={ElecPowerbank} alt="" />
              </div>
              <p>Ace Elec Powerbank 200...</p>
              <h4>₦7,100</h4>
              <span>₦9,000</span>
            </div>
            <div>
              <div className="box">
                <img src={Powerbank} alt="" />
              </div>
              <p>Power Banks 2000 MAh ...</p>
              <h4>₦7,100</h4>
              <span>₦9,000</span>
            </div>
            <div>
              <div className="box">
                <img src={Nivea1} alt="" />
              </div>
              <p>NIVEA Dry Comfort Roll-...</p>
              <h4>₦4,200</h4>
            </div>
            <div>
              <div className="box">
                <img src={Wireless} alt="" />
              </div>
              <p>Ace Elec F9 Wireless Fing...</p>
              <h4>₦3,450</h4>
              <span>₦6,059</span>
            </div>
            <div>
              <div className="box">
                <img src={Nivea2} alt="" />
              </div>
              <p>NIVEA Nourishing Cocoa...</p>
              <h4>₦5,800</h4>
            </div>
          </div>
        </div>

        {/* ROW 18 HERE */}
        <div className="pages rowDeals">
          <div className="greenLabel center">
            <p>Stock Up For Christmas</p>
          </div>

          <div className="grid items row">
            <div>
              <div className="box">
                <img src={Malta} alt="" />
              </div>
              <p>Malta Guiness Can 330...</p>
              <h4>₦6,650</h4>
            </div>
            <div>
              <div className="box">
                <img src={ElecPowerbank} alt="" />
              </div>
              <p>Ace Elec Powerbank 200...</p>
              <h4>₦7,100</h4>
              <span>₦9,000</span>
            </div>
            <div>
              <div className="box">
                <img src={Powerbank} alt="" />
              </div>
              <p>Power Banks 2000 MAh ...</p>
              <h4>₦7,100</h4>
              <span>₦9,000</span>
            </div>
            <div>
              <div className="box">
                <img src={Nivea1} alt="" />
              </div>
              <p>NIVEA Dry Comfort Roll-...</p>
              <h4>₦4,200</h4>
            </div>
            <div>
              <div className="box">
                <img src={Wireless} alt="" />
              </div>
              <p>Ace Elec F9 Wireless Fing...</p>
              <h4>₦3,450</h4>
              <span>₦6,059</span>
            </div>
            <div>
              <div className="box">
                <img src={Nivea2} alt="" />
              </div>
              <p>NIVEA Nourishing Cocoa...</p>
              <h4>₦5,800</h4>
            </div>
          </div>
        </div>

        {/* ROW 19 HERE */}
        <div className="pages rowDeals">
          <div className="greenLabel flex">
            <p>Stock Up For Christmas Deals</p>
            <p>SEE ALL ></p>
          </div>

          <div className="grid items row">
            <div>
              <div className="box">
                <img src={Malta} alt="" />
              </div>
              <p>Malta Guiness Can 330...</p>
              <h4>₦6,650</h4>
            </div>
            <div>
              <div className="box">
                <img src={ElecPowerbank} alt="" />
              </div>
              <p>Ace Elec Powerbank 200...</p>
              <h4>₦7,100</h4>
              <span>₦9,000</span>
            </div>
            <div>
              <div className="box">
                <img src={Powerbank} alt="" />
              </div>
              <p>Power Banks 2000 MAh ...</p>
              <h4>₦7,100</h4>
              <span>₦9,000</span>
            </div>
            <div>
              <div className="box">
                <img src={Nivea1} alt="" />
              </div>
              <p>NIVEA Dry Comfort Roll-...</p>
              <h4>₦4,200</h4>
            </div>
            <div>
              <div className="box">
                <img src={Wireless} alt="" />
              </div>
              <p>Ace Elec F9 Wireless Fing...</p>
              <h4>₦3,450</h4>
              <span>₦6,059</span>
            </div>
            <div>
              <div className="box">
                <img src={Nivea2} alt="" />
              </div>
              <p>NIVEA Nourishing Cocoa...</p>
              <h4>₦5,800</h4>
            </div>
          </div>
        </div>

        {/* ROW 20 HERE */}
        <div className="pages rowDeals">
          <div className="yellowLabel center">
            <p>Health and Beauty</p>
          </div>

          <div className="grid items row">
            <div>
              <div className="box">
                <img src={Malta} alt="" />
              </div>
              <p>Malta Guiness Can 330...</p>
              <h4>₦6,650</h4>
            </div>
            <div>
              <div className="box">
                <img src={ElecPowerbank} alt="" />
              </div>
              <p>Ace Elec Powerbank 200...</p>
              <h4>₦7,100</h4>
              <span>₦9,000</span>
            </div>
            <div>
              <div className="box">
                <img src={Powerbank} alt="" />
              </div>
              <p>Power Banks 2000 MAh ...</p>
              <h4>₦7,100</h4>
              <span>₦9,000</span>
            </div>
            <div>
              <div className="box">
                <img src={Nivea1} alt="" />
              </div>
              <p>NIVEA Dry Comfort Roll-...</p>
              <h4>₦4,200</h4>
            </div>
            <div>
              <div className="box">
                <img src={Wireless} alt="" />
              </div>
              <p>Ace Elec F9 Wireless Fing...</p>
              <h4>₦3,450</h4>
              <span>₦6,059</span>
            </div>
            <div>
              <div className="box">
                <img src={Nivea2} alt="" />
              </div>
              <p>NIVEA Nourishing Cocoa...</p>
              <h4>₦5,800</h4>
            </div>
          </div>
        </div>

        {/* ROW 21 HERE */}
        <div className="pages rowDeals">
          <div className="yellowLabel flex">
            <p>Top Beauty Deals</p>
            <p>SEE ALL ></p>
          </div>

          <div className="grid items row">
            <div>
              <div className="box">
                <img src={Malta} alt="" />
              </div>
              <p>Malta Guiness Can 330...</p>
              <h4>₦6,650</h4>
            </div>
            <div>
              <div className="box">
                <img src={ElecPowerbank} alt="" />
              </div>
              <p>Ace Elec Powerbank 200...</p>
              <h4>₦7,100</h4>
              <span>₦9,000</span>
            </div>
            <div>
              <div className="box">
                <img src={Powerbank} alt="" />
              </div>
              <p>Power Banks 2000 MAh ...</p>
              <h4>₦7,100</h4>
              <span>₦9,000</span>
            </div>
            <div>
              <div className="box">
                <img src={Nivea1} alt="" />
              </div>
              <p>NIVEA Dry Comfort Roll-...</p>
              <h4>₦4,200</h4>
            </div>
            <div>
              <div className="box">
                <img src={Wireless} alt="" />
              </div>
              <p>Ace Elec F9 Wireless Fing...</p>
              <h4>₦3,450</h4>
              <span>₦6,059</span>
            </div>
            <div>
              <div className="box">
                <img src={Nivea2} alt="" />
              </div>
              <p>NIVEA Nourishing Cocoa...</p>
              <h4>₦5,800</h4>
            </div>
          </div>
        </div>

        {/* ROW 22 HERE */}
        <div className="pages rowDeals">
          <div className="yellowLabel flex">
            <p>Global Bestseller Deals</p>
            <p>SEE ALL ></p>
          </div>

          <div className="grid items row">
            <div>
              <div className="box">
                <img src={Malta} alt="" />
              </div>
              <p>Malta Guiness Can 330...</p>
              <h4>₦6,650</h4>
            </div>
            <div>
              <div className="box">
                <img src={ElecPowerbank} alt="" />
              </div>
              <p>Ace Elec Powerbank 200...</p>
              <h4>₦7,100</h4>
              <span>₦9,000</span>
            </div>
            <div>
              <div className="box">
                <img src={Powerbank} alt="" />
              </div>
              <p>Power Banks 2000 MAh ...</p>
              <h4>₦7,100</h4>
              <span>₦9,000</span>
            </div>
            <div>
              <div className="box">
                <img src={Nivea1} alt="" />
              </div>
              <p>NIVEA Dry Comfort Roll-...</p>
              <h4>₦4,200</h4>
            </div>
            <div>
              <div className="box">
                <img src={Wireless} alt="" />
              </div>
              <p>Ace Elec F9 Wireless Fing...</p>
              <h4>₦3,450</h4>
              <span>₦6,059</span>
            </div>
            <div>
              <div className="box">
                <img src={Nivea2} alt="" />
              </div>
              <p>NIVEA Nourishing Cocoa...</p>
              <h4>₦5,800</h4>
            </div>
          </div>
        </div>

        {/* ROW 23 HERE */}
        <div className="pages rowDeals">
          <div className="yellowLabel flex">
            <p>Top Electronic Deals</p>
            <p>SEE ALL ></p>
          </div>

          <div className="grid items row">
            <div>
              <div className="box">
                <img src={Malta} alt="" />
              </div>
              <p>Malta Guiness Can 330...</p>
              <h4>₦6,650</h4>
            </div>
            <div>
              <div className="box">
                <img src={ElecPowerbank} alt="" />
              </div>
              <p>Ace Elec Powerbank 200...</p>
              <h4>₦7,100</h4>
              <span>₦9,000</span>
            </div>
            <div>
              <div className="box">
                <img src={Powerbank} alt="" />
              </div>
              <p>Power Banks 2000 MAh ...</p>
              <h4>₦7,100</h4>
              <span>₦9,000</span>
            </div>
            <div>
              <div className="box">
                <img src={Nivea1} alt="" />
              </div>
              <p>NIVEA Dry Comfort Roll-...</p>
              <h4>₦4,200</h4>
            </div>
            <div>
              <div className="box">
                <img src={Wireless} alt="" />
              </div>
              <p>Ace Elec F9 Wireless Fing...</p>
              <h4>₦3,450</h4>
              <span>₦6,059</span>
            </div>
            <div>
              <div className="box">
                <img src={Nivea2} alt="" />
              </div>
              <p>NIVEA Nourishing Cocoa...</p>
              <h4>₦5,800</h4>
            </div>
          </div>
        </div>

        {/* ROW 24 HERE */}
        <div className="pages rowDeals">
          <div className="row txt">
            <h3>Jumia Nigeria –Nigeria's No. 1 Shopping Destination</h3>


            <h3>Shop for Everything You Need on Jumia Nigeria</h3>
            <p>Jumia Nigeria is the largest online shopping website in Nigeria. We offer a platform where customers in any part of Nigeria can find and shop for all they need in one online store and that platform is the Jumia shopping website. On the Jumia mobile app or website, you can shop from the comfort of your home or during work breaks and get everything delivered fast without you having to stress or move an inch. Be it <span>fashion</span>, <span>electronics</span> <span>mobile phones</span>, <span>computers</span>, or your everyday <span>groceries</span> you can get everything you need on Jumia online store.</p>
            <p>Have you used the Jumia online store today? Shop now on Jumia to enjoy a seamless online shopping experience. With fast delivery, free returns, and flexible payment options, you are certain to enjoy the convenience of shopping online.</p>


            <h5>Shop for Original and Quality Items at The Best Prices</h5>
            <p>Jumia Nigeria prides itself in giving the best prices and the best quality of products you can find anywhere in the country. Our strong partnership with top brands like <span>Oraimo</span>, <span>Samsung</span>, <span>Infinix</span>, <span>Xiaomi</span>, <span>Diageo</span>, <span>Tecno</span>, <span>Adidas</span>, <span>Nike</span>, <span>Defacto</span>, <span>Trendyol</span>, etc. guarantees our customers the cheapest prices on original brand products. Beyond that, customers also have exclusive access to the latest product released by these top brands. If you enjoy exclusivity, the <span>Jumia Official Store</span> is the right place for you. On the Jumia official stores, you can experience product launches and be among the first set of people in Nigeria to own new products. You can also enjoy huge offers on brand days that come with heavy discounts on various products ranging from mobile phones to drinks, clothing items, sneakers, and many more!</p>

            <p>Explore our official stores today to see a wide range of popular brands that sell directly on our platform and get assured of the best prices and quality of products you buy on Jumia.</p>


            <h5>Shop the Latest Fashion and Trendy Outfits Online</h5>
            <p>Discover an extensive range of fashion items for women, men, and kids on Jumia. Our women's fashion collection includes a diverse selection of clothing such as blouses, pants, and jeans. We also offer a variety of gowns in different lengths and materials to suit your individual style. Additionally, browse through our unique fashion accessories like shoes, bags, jewelry, and sunglasses, all at unbeatable prices.</p>

            <p>For men's fashion, Jumia has an impressive collection of stylish clothing pieces that can make a statement. Find quality men's trousers, shoes, shirts, watches and suits at the most affordable prices. Sports enthusiasts can also get their hands on quality gym wear, trendy sneakers, and other sportswear items.</p>

            <p>At Jumia, we haven't forgotten about the little ones. Browse through our selection of baby clothes for boys and girls and their accessories. Shop now on Jumia Nigeria and enjoy an incredible online shopping experience.</p>


            <h5>Indulge in a Selection of Beauty Products</h5>
            <p>Our online store also offers you the best beauty products from top brands in the world, e.g. <span>Nivea</span> and many others. Many things related to <span>health and beauty</span> e.g. skin care products, makeup and cosmetics, wigs, oral care, hair care, and <span>fragrances</span> can be found at our online store.</p>

            <p>Be certain that whatever we sell on the Jumia website is of good quality. When you shop for your beauty products on Jumia you have successfully avoided getting fake products that can cause unhealthy reactions to your skin or body and without breaking the bank, you can maintain a healthy beauty routine to leave jaws dropping.</p>


            <h5>Get Your Home Needs on Jumia Nigeria</h5>
            <p>Jumia is an online supermarket where you can shop for your daily groceries in Nigeria at prices cheaper than others. Check off your <span>grocery</span> list and stock up your pantry with a variety of items ranging from rice to cooking oils, wines, Snacks, beverages, household cleaning items, and many others. We also have a section for fresh foods and canned foods. Also, Discover our <span>baby shop</span> for all baby essentials from baby food and diapers to toys and educational games. </p>

            <p>Beyond your daily grocery needs, you can shop on Jumia online for unique home furniture and interior decor pieces to beautify your homes and offices. We have carefully designed outdoor furniture and lighting for your patio and rooftops. We also have generators, inverters, and inverter batteries to power up. There is nothing your home needs that is not on Jumia. You can easily shop from our huge collection of large and small <span>appliances</span> such as <span>fridges</span>, <span>washing machines</span>, <span>air conditioners</span>, iron, blenders, air fryers, and many others. Shop for all your home needs and enjoy top deals, prices, and offers you can get nowhere else.</p>


            <h5>Buy the Latest Smartphones and Electronics From Jumia Nigeria</h5>
            <p>Shopping on Jumia guarantees that you get the latest mobile phones, tablets, or phablets before anyone else. Buy trusted <span>Apple</span> iOS <span>iPhones</span> and iPads and quality Android brands like <span>Samsung</span>, Tecno, Xiaomi, Infinix, and many others! Unlock the best functionality of your <span>smartphones</span> when you buy our amazing phone accessories like AirPods, earphones, powerbank, Bluetooth speakers, durable phone cases, and many more! We have an endless supply of Jumia phone accessories from top brands like Oraimo, Edifier, Samsung, Tecno, JBL, etc.</p>

            <p>We also have an amazing collection of top computing brands like Hp, Dell, Lenovo, Microsoft, Apple Macbook, and more! You can either buy these computing devices as desktops or <span>laptops</span> depending on your choice. Shop for computing accessories like <span>printers</span>, scanners, computer components, and monitors to enhance your computer or laptop experience.</p>

            <p>Our catalog of electronics offers you the highest quality of products from trusted sellers and brands. You can get the latest smart <span>televisions</span> and home <span>audio devices</span> for your living room. To spice things up, you can get the <span>PlayStation</span> consoles or <span>Xbox</span> consoles especially if you love gaming during your leisure time.</p>

            <h5>Enjoy Top Deals and Discounts when Shopping on Jumia Nigeria Online Store</h5>
            <p>There are limitless offers and <span>deals</span> on the Jumia Nigeria online store. Enjoy up to 80% discount on selected items of the day during the <span>flash sales</span>. We also have <span>Half Price Deals</span> where our shoppers buy selected products like mobile phones, laptops, phone accessories, and clothing pieces for half the original price. Get the best prices you can find on the <span>best deals</span> page.</p>

            <p>Enjoy other weekly offers that run all year long, which means that every time you shop on the Jumia website, you are sure to enjoy mouth-watering discounts and deals that will help you save more and get the most affordable prices no one else can give you. To know more about these offers and deals, you can subscribe to our push notifications and newsletters, read our <span>blog</span>, and follow us on all our social media accounts.</p>

            <h5>Experience Fast Delivery and Online Shopping Convenience</h5>
            <p>Get your cart delivered to you within 24 hrs when you buy items with the <span>Jumia Express</span> tag, for selected products, you are also assured of free delivery and have your products delivered to you at no extra cost! Also, we have products that you can ship from abroad under the <span>Jumia Global</span> catalog. This means that you can order various items from outside the country and get them delivered to your doorstep without hassles.</p>

            <div className="faqS">
              <h3>Frequently Asked Questions (FAQs)</h3>

              <h5>What Payment Options are Available on Jumia?</h5>
              <p>You can either pay online or pay on delivery when you shop from us. With out payment solution called JumiaPay, you can conveniently pay online or on delivery with your cards (MasterCard, Visa and Verve), bank transfers and USSD. </p>

              <h5>Can I Return the Items I Bought From Jumia?</h5>
              <p>Yes, you can return items you bought for free and get refunded as soon as possible! We have a refund policy that grants you 7 days to return ALL eligible items bought from the official store and other sellers on Jumia Nigeria.</p>

              <h5>When is the Next Jumia Black Friday?</h5>
              <p><span>Jumia Black Friday</span> happens in November. Jumia is the pioneer of Black Friday in Nigeria, so expect us to do it best! It comes with the biggest discount and offers on various categories of products like fashion, phones, computers, home appliances, electronics and many more! We also have various exciting and engaging activities like the treasure hunt and games our customers love to play.</p>

              <h5>Can I get Free Delivery on All my Orders?</h5>
              <p>Customers in Lagos, Abuja, Ibadan,Warri,Benin, Abeokuta, Akure and Portharcourt enjoy <b>free delivery</b> on items with the free delivery tag. Free delivery does not apply to large items like refrigerators, huge TVs, washing machines and others.</p>

              <h5>What Is the Jumia Customer Care Line?</h5>
              <p>We have a dedicated team that is always available to make sure your shopping experience on Jumia is effortless. Simply dial 018881106 to reach out to us for complaints and other inquiries. If you would like to place an order, please call us at 0700-600-0000. You can also chat with us on the Jumia app if you find that more convenient. Whatever you do, we are always available to help.</p>

              <h5>How Can I Become a Seller on Jumia?</h5>
              <p>You can partner with Jumia as a seller on the website. All you need to do is <span>register</span> and follow the necessary steps. With our large customer base, we can help you reach a wider audience and sell many of your products to our customers</p>

              <h5>What Other Events are Celebrated in Jumia?</h5>
              <p>Aside the Jumia Black Friday, the <span>Jumia Tech Week</span>other big event we celebrate in Jumia Nigeria. The goal of the Jumia Tech Week is to help customers have access to the latest technology at the cheapest prices they can get. It happens in the month of March of every year and lasts at least two weeks.</p>

              <p>Aside these major events, we also have Ramadan sales, Easter sales, Christmas sales and other seasonal celebrations we make sure our customers enjoy on Jumia.</p>

              <p>Shop now and enjoy unlimited offers, discounts and the best online shopping experience!</p>

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

export default Home;