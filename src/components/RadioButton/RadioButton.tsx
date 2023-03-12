import React, {ChangeEventHandler} from "react";
import Tooltip from "../Tooltip/index";
import "../Tooltip/TooltipParent.scss";

export interface RadioButtonProps {
    label: string;
    name: string;
    value: string;
    onChange?: ChangeEventHandler;
    tooltip?: string;
    disabled?: boolean;
    checked?: boolean;
}

const RadioButton = (props: RadioButtonProps) => {
    const id = crypto.randomUUID();
    const className = `sds--radio-container ${
        props.tooltip ? "sds--tooltip-parent" : ""
    }`;
    return (
        <div className={className}>
            <input
                id={id}
                name={props.name}
                type="radio"
                checked={props.checked}
                value={props.value}
                disabled={props.disabled}
                onChange={props.onChange}
            />
            <label htmlFor={id}>
                <span className="sds--radio--visual"/>
                <span className="sds--radio--text">{props.label}</span>
            </label>
            {props.tooltip && (
                <Tooltip anchorId={`${id}_tooltip`} tip={props.tooltip}/>
            )}
        </div>
    );
};

export default RadioButton;
