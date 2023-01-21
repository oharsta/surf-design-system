import React from "react";
import "./Logo.scss";
import {ReactComponent as LogoIcon} from "../../icons/logo-surf.svg";
import LogoType from "./LogoType";

export interface LogoProps {
    label: string;
    position: LogoType
}

const Logo = (props: LogoProps) => {
    const className = `sds--branding sds--branding--name-${props.position.toLowerCase()}`;
    return (
        <div className={className}>
                <span className="sds--branding--visual">
                    <LogoIcon/>
                </span>
            <span className="sds--branding--textual">{props.label}</span>
        </div>
    );

};

export default Logo;
