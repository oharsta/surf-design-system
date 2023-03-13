import React from "react";
import "./Chip.scss";
import ChipType from "./ChipType";

export interface ChipProps {
    label: string;
    type?: ChipType;
}

const Chip = (props: React.PropsWithChildren<ChipProps>) => {

    const chipType = props.type ? props.type : ChipType.Main_100;

    return (
        <button className={`sds--chips ${chipType}`}>
            {props.children && <span className="sds--chips--visual">
                {props.children}
            </span>}
            <span className="sds--chips--textual sds--text--body--small">{props.label}</span>
        </button>
    );
};

export default Chip;
