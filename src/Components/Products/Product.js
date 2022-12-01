


import React from "react";



const Product = (props) => {
    return <section>
        <div>
            <h3>{props.title}</h3>
            <img src={props.image} alt="some images"></img>
            <h1>{props.price}</h1>
            <button>To cart</button>
        </div>
    </section>
}

export default Product;
