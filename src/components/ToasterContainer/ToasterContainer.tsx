import React from "react";
import "./ToasterContainer.scss";

const ToasterContainer = (props: React.PropsWithChildren) => {
    return (
        <div className="sds--toaster-container">
            {props.children}
        </div>);

};

export default ToasterContainer;
