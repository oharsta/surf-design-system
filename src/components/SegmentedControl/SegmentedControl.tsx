import React, {ChangeEventHandler} from "react";
import "./SegmentedControl.scss";
import Button from "../Button/Button";
import ButtonType from "../Button/ButtonType";

export interface SegmentedControlProps {
    onClick: ChangeEventHandler;
    options: Array<string>;
    option: string;
    disabled?: boolean;
}

const SegmentedControl = (props: SegmentedControlProps) => {

    return (
        <div className={"sds--segmented-control"}>
            {props.options.map((option: string) =>
                <Button txt={option}
                        disabled={props.disabled}
                        onClick={props.onClick}
                        type={(props.option === option && !props.disabled) ? ButtonType.Primary : ButtonType.Secondary}
                />)}
        </div>)
};

export default SegmentedControl;
