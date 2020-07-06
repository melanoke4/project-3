import React from "react";
import Hero from "../components/Hero";

import CardGroup from "../components/CardGroup";
import Container from "../components/Container";


function Home() {
    return(
        <div>
            
            <Hero />
            <Container>
                    <CardGroup />
            </Container>
        </div>
    );
}

export default Home;

