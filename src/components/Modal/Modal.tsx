import React from "react";
import "./Modal.scss";
import {ReactComponent as CloseIcon} from "../../icons/functional-icons/close.svg";
import Alert from "../Alert/Alert";
import Button from "../Button/Button";
import AlertType from "../Alert/AlertType";
import ButtonType from "../Button/ButtonType";

export interface ModalProps {
    confirm: Function;
    cancel: React.MouseEventHandler<HTMLButtonElement>;
    title: string;
    question: string;
    alertType: AlertType;
    subTitle?: string;
    confirmDisabled?: boolean;
    confirmationButtonLabel?: string;
    cancelButtonLabel?: string;
}

const Modal = (props: React.PropsWithChildren<ModalProps>) => {
    const alertType = props.alertType || AlertType.Info;
    return (
        <div className="sds--modal sds--backdrop">
            <div className="sds--modal--container">
                <div className="sds--modal--title">
                    <p className="sds--text--h4">{props.title}</p>
                    {props.cancel && <span onClick={props.cancel}><CloseIcon/></span>}
                </div>
                <Alert alertType={alertType} message={props.subTitle || ""} asChild={true}/>
                <div className="sds--modal--content">
                    <div className="sds--text--rich">
                        <p>{props.question}</p>
                        {props.children}
                    </div>
                    <div className="sds--modal--actions sds--actions--outer sds--space--top--5">
                        {props.cancel && <Button onClick={props.cancel}
                                                 type={ButtonType.Secondary}
                                                 txt={props.cancelButtonLabel}/>}
                        <Button onClick={props.confirm}
                                type={ButtonType.Primary}
                                disabled={props.confirmDisabled}
                                txt={props.confirmationButtonLabel}/>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Modal;
