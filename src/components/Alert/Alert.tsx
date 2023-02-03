import React from "react";
import "./Alert.scss";
import {ReactComponent as InfoIcon} from "../../icons/functional-icons/info.svg";
import {ReactComponent as SuccessIcon} from "../../icons/functional-icons/success.svg";
import {ReactComponent as AlertIcon} from "../../icons/functional-icons/alert-triangle.svg";
import {ReactComponent as CloseIcon} from "../../icons/functional-icons/close.svg";

import AlertType from "./AlertType";
import {sanitize} from "../../common/utils";

export interface AlertProps {
    message: string;
    alertType?: AlertType;
    close?: React.MouseEventHandler<HTMLButtonElement>;
    action?: React.MouseEventHandler<HTMLButtonElement>;
    actionLabel?: string;
    asChild?: boolean;
    hide?: boolean;
}

const Alert = (props: AlertProps) => {
    const alertType = props.alertType || AlertType.Success;
    const action = props.action ? "sds--alert--has-action" : "";
    const className = `sds--alert ${alertType.toLowerCase()} ${action} ${props.hide ? "hide" : ""}`;
    return (
        <div className={className}>
            <div className={`sds--alert--inner ${props.asChild ? "" : "sds--page-container"}`}>
                <div className="sds--alert--visual">
                    {[AlertType.Error, AlertType.Warning].includes(alertType) && <AlertIcon/>}
                    {[AlertType.Default, AlertType.Info].includes(alertType) && <InfoIcon/>}
                    {[AlertType.Success].includes(alertType) && <SuccessIcon/>}
                </div>
                <div className="sds--alert--textual">
                    <p dangerouslySetInnerHTML={{__html: sanitize(props.message)}}/>
                    {props.action &&
                    <button type="button"
                            onClick={props.action}
                            className="sds--btn sds--btn--ghost--dark sds--btn--small">{props.actionLabel}</button>}
                </div>
                {props.close && <button className="sds--alert--actions" onClick={props.close}>
                    <span className="text sds--visually-hidden">Close alert</span>
                    <CloseIcon/>
                </button>}
            </div>
        </div>);

};

export default Alert;
