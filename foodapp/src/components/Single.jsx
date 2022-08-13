


import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Header from "./Header";


export default function  Single(){

    const {code} = useParams();

    const[product, setProduct] = useState({});

    useEffect(() => {
        getData();
        
    }, []);

     const getData = () =>{
        axios.get(`https://invation101.herokuapp.com/food?code=${code}`).then((res) => {
            let findcode = res.data.filter((el) => el.code == code)
            //console.log(findcode)
            setProduct(findcode[0]);
           // setProduct(res.data[0])
        })
      
    }

    // const handleChange =(data)=>{
    //     axios.post("http://localhost:8080/fav", data).then(("data"))
        
    // }

    return (
        <div>
            <Header />
            <div className="container">
            <div className="left">FoodList</div>
            <div className="right">Favourites</div>
           </div>
            <div className="details">
    <div className="pro-div">
        <img src="img/icon.png" alt="not found" className="Icon-img-src" />
        <h4 className="Pro-tag">{product.product_name}</h4>
      
    </div>

    <div className="table-main-container">
        <table>
            <tbody>
                {Object.keys(product).map((key, index) => {
                    return (
                        <tr key={index}>
                            <td>{key}</td>
                            <td>{product[key]}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
       </div>
     </div>

        </div>
    )
}