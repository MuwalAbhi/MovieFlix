import React from "react";
import Navbar from "../components/Navbar/Navbar.Component";

const DefaultLayout = (props) => {
    return (
        <main>
            <Navbar />
            {props.children}
            <footer>Footer</footer>
        </main>
    );
};

export default DefaultLayout;
