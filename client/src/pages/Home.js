import React from "react";
import Hero from "../components/Hero";
import Alert from "../components/Alert";
import CardGroup from "../components/CardGroup";
import Navbar from "../components/Navbar";


function Home() {
    return(
        <div>
            <Alert />
            <Navbar />
            <Hero />
            <CardGroup />
        </div>
    );
}

export default Home;

