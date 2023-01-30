import React from "react";
import "./Button.scss";
import {ReactComponent as BinIcon} from "../../icons/functional-icons/bin.svg";
import {stopEvent} from "../../common/utils";
import DOMPurify from "dompurify";
import ButtonType from "./ButtonType";
import ButtonSize from "./ButtonSize";

export interface ButtonProps {
    onClick?: Function;
    txt?: string;
    disabled?: boolean;
    type?: ButtonType;
    icon?: any;
    size?: ButtonSize;
    centralize?: boolean;
    anchorId?: string;

}

export const defaultButtonProps: ButtonProps = {
    onClick: (e: any) => stopEvent(e),
    txt: "",
    disabled: false,
    type: ButtonType.Primary,
    icon: null,
    size: ButtonSize.Default
}

const Button = (props: ButtonProps) => {
    const type = `${(props.type || ButtonType.Primary).toLowerCase()}`
    const size = `${(props.size || ButtonSize.Default).toLowerCase()}`
    const className = `sds--btn ${type} ${size}`

    const onClickInternal = (e: any) => {
        stopEvent(e);
        if (!props.disabled && props.onClick) {
            props.onClick();
        }
    }

    return (
        <button type="button"
                id={props.anchorId}
                className={className}
                onClick={onClickInternal}
                disabled={props.disabled}>
            <span className="textual"
                  dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(props.txt || "")}}/>
            {props.type === ButtonType.Delete ? <BinIcon/> : props.icon}
        </button>);
};

export default Button;
