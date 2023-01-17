import React from "react";

export interface BadgeNumberProps {
    value: any;
    small?: boolean;
    colored?: boolean;
}

const BadgeNumber = (props: BadgeNumberProps) => {
    const className = `sds--badge--number ${props.colored ? "sds--badge--number--colored" : ""} ${props.small ? "sds--badge--number--small" : ""}`
    return (
        <span className={className}>{props.value}</span>
    );
};

export default BadgeNumber;
