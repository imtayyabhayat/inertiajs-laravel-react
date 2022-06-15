import React from "react";
import { InertiaProgress } from '@inertiajs/progress';
import Front from "../Layouts/Front";

InertiaProgress.init()

const Home = () => {
    return (
        <Front title="Home Page">
            <h1>Hello Home is here</h1>
            <p>This is the home page</p>
        </Front>
    );
}

export default Home;