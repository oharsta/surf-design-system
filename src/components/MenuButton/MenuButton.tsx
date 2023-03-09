import React from "react";
import "./MenuButton.scss";
import {ReactComponent as ArrowDownIcon} from "../../icons/functional-icons/arrow-down-2.svg";
import Button from "../Button/Button";
import ButtonType from "../Button/ButtonType";
import ButtonSize from "../Button/ButtonSize";

export interface MenuButtonProps {
    txt: string;
    isOpen: boolean;
    toggle: any;
    buttonType?: ButtonType
    buttonSize?: ButtonSize
}

const MenuButton = (props: React.PropsWithChildren<MenuButtonProps>) => {

    return (
        <nav className={`sds--menu-button ${props.isOpen ? "is-open" : ""}`}>
            <Button onClick={props.toggle}
                    txt={props.txt}
                    type={props.buttonType || ButtonType.Primary}
                    size={props.buttonSize || ButtonSize.Default}
                    children={<ArrowDownIcon/>}/>
            <div className="sds--user-info--dropdown">
                {props.children && props.children}
            </div>
        </nav>
    );
};

export default MenuButton;
