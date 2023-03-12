import React from "react";
import "./Tooltip.scss";
import {Tooltip as ReactTooltip} from "react-tooltip";
import {ReactComponent as InfoIcon} from "../../icons/functional-icons/info.svg";
import {sanitize} from "../../common/utils";

export interface TooltipProps {
    tip: string;
    anchorId?: string;
    clickable?: boolean;
    standalone?: boolean;
}

const Tooltip = (props: React.PropsWithChildren<TooltipProps>) => {
    const uniqueAnchorId = props.anchorId || crypto.randomUUID();
    return (
        <div className={`sds--tooltip-container ${props.standalone ? "" : "sibbling"}`}>
            {props.children ? React.Children.map(props.children, (child: any) =>
                child.id ? child : React.cloneElement(child, {
                    id: uniqueAnchorId
                })
            ) : <InfoIcon id={uniqueAnchorId}/>}
            <ReactTooltip anchorId={uniqueAnchorId}
                          clickable={props.clickable || false}
                          html={sanitize(props.tip)}/>
        </div>
    );
};

export default Tooltip;
