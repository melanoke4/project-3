import React from "react";
import "./style.css";

function ShoppingCart() {
    return(
        <div>
        <h4 className="text-center">Your Shopping Cart</h4>
        <div className="container">
            <div className="row">
                
                <div className="text-white bg-info col-md-4">image</div>
                <div className="text-white bg-success col-md-2">title</div>
                <div className="text-white bg-success col-md-2">Quantity</div>
                <div className="text-white bg-success col-md-2">Price</div>
                <div className="text-white bg-info col-md-2">remove btn</div>
                
            </div>
        </div>
        </div>
    );
};

export default ShoppingCart;