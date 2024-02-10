import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Loading from "../img/loader (1).gif"
import { useEffect, useState } from "react";



function Shop() {
  const [food, setFood] = useState([]);
  const [foodtext, setFoodtext] = useState("");

  useEffect(() => {
    const fetchData = () => {
      setFoodtext(<img src={Loading} alt="Please wait, Loading Food Menu" />);
      fetch("http://localhost:5000/menu")
        .then((resp) => resp.json())
        .then((data) => {
          setFood(data);
          setFoodtext("");
        })
        .catch(() => {
          setFoodtext("Network Error");
        });
    };
    fetchData();
  }, []);

  
  return (
    <div className="menu_page">
      {food.length !== 0 ? (
        <div>
          <div className="menu_banner">
            <h2>Our Menu</h2>
          </div>
          <div className="menu_grid">
            {food.map((food) => (
              <div className="menu_content" key={food.id}>
                <img src={food.image} alt="" />
                <h3>{food.name}</h3>
                <div className="priceRating">
                  <div>
                    <span>{food.headline}</span>
                  </div>
                  {/* <div>
                    <span>Proteins: {food.proteins}</span>
                  </div> */}
                </div>
                <p>{food.description}</p>
                <p>{food.country}</p>
                <div className="btns">
                  <Link to={`/menu/${food.id}`}>
                    <button className="menu_content_btn">View Details</button>
                  </Link>
                  <Button title="Delete" btnBg="red" classN="delete" />
                </div>
              </div>
            ))}
          </div>
        </div>

      ) : (<div>{foodtext}</div>)
      }
    </div>
  );
}


export default Shop;
