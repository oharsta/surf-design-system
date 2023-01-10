import React from "react";
import "./Button.scss";
// @ts-ignore
import {ReactComponent as BinIcon} from "../../icons/functional_icons/Bin.svg";
import {isEmpty, stopEvent} from "../../common/utils";
// @ts-ignore
import DOMPurify from "dompurify";

export interface ButtonProps {
    onClick?: Function;
    txt?: string;
    disabled?: boolean;
    cancelButton?: boolean;
    warningButton?: boolean;
    className?: string;
    icon?: any;
    small?: boolean;
    html?: string;
    centralize?: boolean
}

export const defaultButtonProps: ButtonProps = {
    onClick: () => true,
    txt: "",
    disabled: false,
    cancelButton: false,
    warningButton: false,
    className: "",
    icon: null,
    small: false,
    html: "",
    centralize: false,
}

const Button = (props: ButtonProps) => {
    const buttonType = props.cancelButton ? "sds--btn--secondary" : props.warningButton ? "delete" : "sds--btn--primary";
    const smallButton = props.small ? "sds--btn--small" : "";
    const cn = `${buttonType} ${props.className} ${smallButton}`;
    const onClickInternal = (e: any) => {
        stopEvent(e);
        if (!props.disabled && props.onClick) {
            props.onClick();
        }
    }
    const icon = props.warningButton ? <BinIcon/> : props.icon;
    const txt = props.txt || "";
    const result = isEmpty(props.html) ? <button type="button" className={cn} onClick={onClickInternal}>
        {!props.warningButton && <span className="textual">{txt}</span>}
        {icon}
    </button> : <button type="button" className={cn} onClick={onClickInternal}>
        <span className="textual" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(props.html)}}/>
    </button>
    if (props.centralize) {
        return (
            <section className="button-container">
                {result}
            </section>
        );
    }
    return result;
};

export default Button;
