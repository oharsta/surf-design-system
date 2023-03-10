import React from "react";
import "./Toaster.scss";
import {ReactComponent as InfoIcon} from "../../icons/functional-icons/info.svg";
import {ReactComponent as SuccessIcon} from "../../icons/functional-icons/success.svg";
import {ReactComponent as AlertIcon} from "../../icons/functional-icons/alert-triangle.svg";
import ToasterType from "./ToasterType";
import {sanitize} from "../../common/utils";

export interface ToasterProps {
    message: string;
    toasterType: ToasterType;
    action?: React.MouseEventHandler<HTMLButtonElement>;
    actionLabel?: string;
}

const Toaster = (props: ToasterProps) => {
    const className = `sds--toaster ${props.toasterType.toLowerCase()} ${props.action ? "sds--toaster--has-action" : ""}`;
    return (
        <div className={className}>
            <div className="sds--toaster--visual">
                {[ToasterType.Error, ToasterType.Warning].includes(props.toasterType) && <AlertIcon/>}
                {[ToasterType.Default, ToasterType.Info].includes(props.toasterType) && <InfoIcon/>}
                {[ToasterType.Success].includes(props.toasterType) && <SuccessIcon/>}
            </div>
            <div className="sds--toaster--textual">
                <p dangerouslySetInnerHTML={{__html: sanitize(props.message)}}/>
                {props.action &&
                <button type="button"
                        onClick={props.action}
                        className="sds--btn sds--btn--ghost--dark sds--btn--small">{props.actionLabel}</button>}
            </div>
        </div>);

};

export default Toaster;
