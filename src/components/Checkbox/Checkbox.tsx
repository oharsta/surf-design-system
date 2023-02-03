import React, {ChangeEvent} from "react";
import "./Checkbox.scss";
import "../Tooltip/TooltipParent.scss";
import {ReactComponent as LogoIcon} from "../../icons/functional-icons/checkbox-check.svg";
import Tooltip from "../Tooltip/index";
import {sanitize} from "../../common/utils";

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
    const className = `sds--checkbox-container sds--tooltip-parent ${props.className || ""} ${props.hide ? "hide" : ""}`
    return (
        <div className={className}>
            <input id={props.name} type="checkbox" checked={props.value} disabled={props.readOnly}
                   onChange={innerOnChange}/>
            <label htmlFor={props.name}>
                <span className="sds--checkbox--visual">
                    <LogoIcon/>
                </span>
                {props.info &&
                <span className="checkbox--text" dangerouslySetInnerHTML={{__html: sanitize(props.info)}}/>}
            </label>
            {props.tooltip && <Tooltip anchorId={`${props.name}_tooltip`} tip={props.tooltip}/>}
        </div>
    );
};

export default Checkbox;
