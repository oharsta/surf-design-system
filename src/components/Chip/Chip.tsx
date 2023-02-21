import React from "react";
import "./Chip.scss";

export interface ChipProps {
    label: string;
    isActive?: boolean;
}

const Chip = (props: React.PropsWithChildren<ChipProps>) => {

    return (
        <button className={`sds--chips ${props.isActive ? "is-active" : ""}`}>
            {props.children && <span className="sds--chips--visual">
                {props.children}
            </span>}
            <span className="sds--chips--textual sds--text--body--small">{props.label}</span>
        </button>
    );
};

export default Chip;
