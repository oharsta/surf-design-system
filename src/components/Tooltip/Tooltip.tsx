import React from "react";
import "./Tooltip.scss";
import {Tooltip as ReactTooltip} from "react-tooltip";
import {ReactComponent as InfoIcon} from "../../icons/functional-icons/info.svg";
import DOMPurify from "dompurify";
import {pseudoGuid} from "../../common/utils";

export interface TooltipProps {
    tip: string;
    anchorId?: string;
    clickable?: boolean;
    standalone? :boolean;
}

const Tooltip = (props: React.PropsWithChildren<TooltipProps>) => {
    const uniqueAnchorId = props.anchorId || pseudoGuid();
    return (
        <div className={`sds--tooltip-container ${props.standalone ? "" : "sibbling"}`}>
            {props.children ? React.Children.map(props.children, (child: any) =>
                React.cloneElement(child, {
                    id: uniqueAnchorId
                })
            ) : <InfoIcon id={uniqueAnchorId}/>}
            <ReactTooltip anchorId={uniqueAnchorId}
                          clickable={props.clickable || false}
                          html={DOMPurify.sanitize(props.tip)}/>
        </div>
    );
};

export default Tooltip;
