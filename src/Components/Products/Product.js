


import React from "react";



const Product = (props) => {
    return <section>
        <div>
            <h3>{props.title}</h3>
            <img src={props.image} alt=""></img>
            <h1>{props.price}</h1>
        </div>
    </section>
}

export default Product;