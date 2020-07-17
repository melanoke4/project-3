import React from "react";
import Alert from "../components/Alert";
import Navbar from "../components/Navbar";
import ShoppingCart from "../components/ShoppingCart";

function Cart() {

    return(
        <div>
//           login/reg
            <h1>Your Cart</h1>

            <Alert />
            <Navbar />
            <ShoppingCart />

        </div>
       
    );
}

export default Cart;