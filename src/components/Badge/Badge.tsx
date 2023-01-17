import React from "react";
import "./Badge.scss";

export interface BadgeProps {
    label: string;
}

const Badge = (props: React.PropsWithChildren<BadgeProps>) => {

    return (
        <button className="sds--badge">
          <span className="sds--badge--visual">
                {props.children && props.children}
            </span>
            <span className="sds--badge--textual sds--text--body--small">{props.label}</span>
        </button>
    );
};

export default Badge;
