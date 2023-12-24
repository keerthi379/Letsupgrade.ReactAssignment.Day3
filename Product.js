import { useState } from "react";

function Product(props)
{
    let [isAvailable,setIsAvailable] = useState("Yes")


    return (

        <div className="product">
            <img className="img" src={props.url}/>
            <h3> {props.name} </h3>
            <p> {props.price} </p>
            <p> {isAvailable} </p>
            
            <button onClick={()=>{
                setIsAvailable("No");
            }}>
                Click
            </button>
        </div>

    )
}

export default Product;
