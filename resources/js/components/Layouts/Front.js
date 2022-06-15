import React from "react";
import Navbar from "../Includes/Navbar";
import Footer from "../Includes/Footer";

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