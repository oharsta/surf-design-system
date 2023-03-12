import React from "react";
import "./Loader.scss";

const Loader = () => {

    return (
        <div className="sds--loading">
            <span className="sds--loading--dot"/>
            <span className="sds--loading--dot"/>
            <span className="sds--loading--dot"/>
        </div>
    );
};

export default Loader;
