import React from "react";
import "./RadioOptions.scss";
import "../Tooltip/TooltipParent.scss";
import {Tooltip} from "../index";

export interface RadioOptionsProps {
    trueLabel: string;
    falseLabel: string;
    label: string;
    name: string;
    value: boolean;
    onChange: Function;
    tooltip?: string;
    disabled?: boolean;
}

const RadioOptions = (props: RadioOptionsProps) => {

    const internalOnChange = () => {
        props.onChange(!props.value);
    }

    const className = `sds--radio-options`;
    return (
        <div className={className}>
            <label htmlFor={`${props.name}`} className={"sds--tooltip-parent"}>
                <span>{props.label}</span>
                {props.tooltip && <Tooltip anchorId={`${props.name}_tooltip`} tip={props.tooltip}/>}
            </label>
            <div className={"sds--text-field-container"}>
                {[props.trueLabel, props.falseLabel].map(label => {
                    const id = `${props.name}_${label}`;
                    return (
                        <div key={id}>
                            <input id={id} type="radio" checked={label === props.trueLabel ? props.value : !props.value}
                                   disabled={props.disabled} onChange={internalOnChange}/>
                            <label htmlFor={id}>
                                <span className="sds--radio--visual"/>
                                <span className="sds--radio--text">{label}</span>
                            </label>
                        </div>
                    );
                })}
            </div>


        </div>
    );
};

export default RadioOptions;
