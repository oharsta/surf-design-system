import React, {ChangeEventHandler} from "react";
import "./RadioOptions.scss";
import "../Tooltip/TooltipParent.scss";
import Tooltip from "../Tooltip/index";

export interface RadioOptionsProps {
    trueLabel: string;
    falseLabel: string;
    label: string;
    name: string;
    onChange: ChangeEventHandler;
    value: boolean | null;
    tooltip?: string;
    disabled?: boolean;
}

const RadioOptions = (props: RadioOptionsProps) => {

    const isChecked = (label:string) => {
        if (props.value === null) {
            return false;
        }
        return label === props.trueLabel ? props.value : !props.value;
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
                            <input id={id} type="radio" name={props.name} checked={isChecked(label)}
                                   disabled={props.disabled} onChange={props.onChange}/>
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
