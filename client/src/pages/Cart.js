import React from "react";
import Alert from "../components/Alert";
import Navbar from "../components/Navbar";
import ShoppingCart from "../components/ShoppingCart";

function Cart() {

    return(
        <div>
            <Alert />
            <Navbar />
            <ShoppingCart />
        </div>
       
    );
}

export default Cart;