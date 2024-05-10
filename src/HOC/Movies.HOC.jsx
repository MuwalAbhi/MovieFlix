import React from "react";
import { Route } from "react-router-dom";
import MoviesLayout from "../layouts/Movies.Layout";

//component name should always start with capital letter like in DefaultHoc and DefaultLayout thats why we renamed
//the component parameter below as Component

const MoviesHOC = ({ component: Component, ...rest }) => {
    return (
        <>
            <Route
                {...rest}
                component={(props) => (
                    <MoviesLayout {...props}>
                        <Component {...props} />
                    </MoviesLayout>
                )}
            />
        </>
    );
};

export default MoviesHOC;
