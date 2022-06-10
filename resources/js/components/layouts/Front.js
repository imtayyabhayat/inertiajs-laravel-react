import React from "react";
import Navbar from "../includes/Navbar";
import Footer from "../includes/Footer";

const Front = ({title, children}) => {
    React.useEffect(() => {
        document.title = title;
    });
    return (
        <React.Fragment>
            <Navbar />
                <main className="container">
                    {children}
                </main>
            <Footer />
        </React.Fragment>
    );
}

export default Front;