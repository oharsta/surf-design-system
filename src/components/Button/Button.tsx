import React from "react";
import "./Button.scss";
import {ReactComponent as BinIcon} from "../../icons/functional-icons/bin.svg";
import {sanitize, stopEvent} from "../../common/utils";
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

const Button = (props: React.PropsWithChildren<ButtonProps>) => {
    const type = `${(props.type || ButtonType.Primary).toLowerCase()} ` +
        `${props.type && props.type === ButtonType.DeleteSecondary ? ButtonType.Secondary.toLowerCase() : ""}`
    const size = `${(props.size || ButtonSize.Default).toLowerCase()}`
    const chevron = props.children ? "sds--btn-chevron" : "";
    const className = `sds--btn ${type} ${size} ${chevron}`

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
            {props.children}
            {props.txt && <span className="textual"
                                dangerouslySetInnerHTML={{__html: sanitize(props.txt || "")}}/>}
            {props.type === ButtonType.Delete ? <BinIcon/> : props.icon}
        </button>);
};

export default Button;
