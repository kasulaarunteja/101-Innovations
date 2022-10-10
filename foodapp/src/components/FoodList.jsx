import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import Header from "./Header";
import { useNavigate } from "react-router";

export default function FoodList() {
  const [data, setData] = useState([]);

  const [loding, setLoding] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://invation101.herokuapp.com/food").then((res) => {
      setLoding(false);
      setData(res.data);
    });
  }, []);

  // console.log(data)

  const Ascorder = () => {
    data.sort((a, b) => b.proteins_100g - a.proteins_100g);
    setData([...data]);
  };

  const Descorder = () => {
    data.sort((a, b) => a.proteins_100g - b.proteins_100g);
    setData([...data]);
  };

  return loding ? (
    "loding"
  ) : (
    <div>
      <Header />
      <div className="container">
        <div className="left">FoodList</div>
        <div className="right">Favourites</div>
      </div>
      <div className="btnsort">
        <label>Sort Proteins </label>
        <button onClick={Ascorder}>Low to High</button>
        <button onClick={Descorder}>High To Low</button>
      </div>
      <div className="Details">
        {data.map((ele) => {
          return (
            <div
              onClick={() => navigate(`/${ele.code}`)}
              className="pro-details"
              key={ele.code}
            >
              <img src="img/icon.png" alt="NOT FOUND" className="icon" />
              <div className="indiv-pro">
                <h5>
                  {ele.product_name} ({ele.generic_name})
                </h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
