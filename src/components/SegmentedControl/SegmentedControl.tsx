import React from "react";
import "./SegmentedControl.scss";
import Button from "../Button/Button";
import ButtonType from "../Button/ButtonType";

export interface SegmentedControlProps {
    onClick: Function;
    options: Array<string>;
    option: string;
    optionLabelResolver?: Function;
    disabled?: boolean;
}

const SegmentedControl = (props: SegmentedControlProps) => {

    return (
        <div className={"sds--segmented-control"}>
            {props.options.map((option: string) =>
                <Button txt={props.optionLabelResolver ? props.optionLabelResolver(option) : option}
                        key={option}
                        disabled={props.disabled}
                        onClick={() => props.option !== option && !props.disabled && props.onClick(option)}
                        type={(props.option === option && !props.disabled) ? ButtonType.Primary : ButtonType.Secondary}
                />)}
        </div>)
};

export default SegmentedControl;
