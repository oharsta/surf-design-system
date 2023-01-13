import React, {ChangeEvent} from "react";
import "./Checkbox.scss";
import {ReactComponent as LogoIcon} from "../../icons/functional-icons/checkbox-check.svg";

export interface CheckboxProps {
    name: string;
    value: boolean;
    onChange: Function;
    readOnly?: boolean;
    hide?: boolean;
    info?: string;
    tooltip?: string;
    className?: string;
}

const Checkbox = (props: CheckboxProps) => {

    const innerOnChange = (e: ChangeEvent) => {
        // @ts-ignore
        e.cancelBubble = true;
        e.stopPropagation();
        const {onChange} = props;
        onChange && onChange(e);
        return false;
    }
    const className = `${props.className || ""} ${props.hide ? "hide" : ""}`
    return (
        <div className={className}>
            <input id={props.name} type="checkbox" checked={props.value} disabled={props.readOnly}
                   onChange={innerOnChange}/>
            <label htmlFor={props.name}>
                <span className="sds--checkbox--visual">
                    <LogoIcon/>
                </span>
                <span className="checkbox--text">{props.info}</span>
            </label>
        </div>
    );
};

export default Checkbox;
