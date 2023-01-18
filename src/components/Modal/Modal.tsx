import React from "react";
import "./Logo.scss";
import {ReactComponent as CloseIcon} from "../../icons/functional-icons/close.svg";
import Alert from "../Alert";
import Button from "../Button";

export interface ModalProps {
    confirm: Function;
    cancel: Function;
    title: string;
    subTitle?: string;
    question: string;
    confirmDisabled?: boolean;
    confirmationButtonLabel?: string;
    cancelButtonLabel?: string;
}

const Modal = (props: React.PropsWithChildren<ModalProps>) => {
    return (
        <div className="sds--modal sds--backdrop">
            <div className="sds--modal--container">
                <div className="sds--modal--title">
                    <p className="sds--text--h4">{props.title}</p>
                    <CloseIcon/>
                </div>
                <Alert />
                <div className="sds--modal--content">
                    <div className="sds--text--rich">
                        <p>This is an example text that can be replaced when using a simple modal. You can also use a <a
                            href="#">hyperlink</a> if it’s necessary. For more complex modals we advise you to use a
                            Blank modal as base.</p>
                        <p>Second paragraph can be used if there is more text.</p>
                    </div>
                    <div className="sds--modal--actions sds--actions--outer sds--space--top--5">
                        <Button onClick={cancel} cancelButton={true} txt={}/>
                        <button type="button" className="sds--btn sds--btn--secondary">Secondary button</button>
                        <button type="button" className="sds--btn sds--btn--primary">Primary button</button>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Modal;
