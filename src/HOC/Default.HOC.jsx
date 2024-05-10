import React from "react";
import { Route } from "react-router-dom";
import DefaultLayout from "../layouts/Default.Layout";

//component name should always start with capital letter like in DefaultHoc and DefaultLayout thats why we renamed
//the component parameter below as Component

const DefaultHOC = ({ component: Component, ...rest }) => {
    return (
        <>
            <Route
                {...rest}
                component={(props) => (
                    <DefaultLayout {...props}>
                        <Component {...props} />
                    </DefaultLayout>
                )}
            />
        </>
    );
};

export default DefaultHOC;
