import React from "react";
import "./Switch.scss";
import "../Tooltip/TooltipParent.scss";
import {Tooltip} from "../index";

export interface SwitchProps {
    name: string;
    value: boolean;
    onChange: Function;
    disabled?: boolean;
    tooltip?: string;
}

const Switch = (props: SwitchProps) => {

    const className = `sds--switch ${props.value ? "sds--switch--active" : ""} ${props.disabled ? "sds--switch--disabled" : ""}`
    return (
        <div className={"sds--tooltip-parent"}>
            <span className={className} role="switch" aria-checked={props.value}/>
            {props.tooltip && <Tooltip anchorId={`${props.name}_tooltip`} tip={props.tooltip}/>}
        </div>
    );
};

export default Switch;
