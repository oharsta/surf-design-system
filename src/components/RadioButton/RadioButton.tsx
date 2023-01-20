import React from "react";
import Tooltip from "../Tooltip/index";
import "../Tooltip/TooltipParent.scss";


export interface RadioButtonProps {
    label: string;
    name: string;
    value: boolean;
    onChange: Function;
    tooltip?: string;
    disabled?: boolean;
}

const RadioButton = (props: RadioButtonProps) => {

    const internalOnChange = () => {
        props.onChange(!props.value);
    }

    const className = `sds--radio-container sds--tooltip-parent`;
    return (
        <div className={className}>
            <input id={props.name} type="radio" checked={props.value} disabled={props.disabled}
                   onChange={internalOnChange}/>
            <label htmlFor="unique-radio-id">
                <span className="sds--radio--visual"/>
                <span className="sds--radio--text">{props.label}</span>
            </label>
            {props.tooltip && <Tooltip anchorId={`${props.name}_tooltip`} tip={props.tooltip}/>}
        </div>
    );
};

export default RadioButton;
