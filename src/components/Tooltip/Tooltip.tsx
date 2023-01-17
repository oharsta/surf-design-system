import React from "react";
import "./Tooltip.scss";
import {Tooltip as ReactTooltip} from "react-tooltip";
import {ReactComponent as InfoIcon} from "../../icons/functional-icons/info.svg";
import DOMPurify from "dompurify";

export interface TooltipProps {
    anchorId: string;
    tip: string;
    clickable?: boolean
}

const Tooltip = (props: TooltipProps) => {

    return (
        <div className="sds--tooltip-container">
            <InfoIcon id={props.anchorId}/>
            <ReactTooltip anchorId={props.anchorId}
                          clickable={props.clickable || false}
                          html={DOMPurify.sanitize(props.tip)}/>
        </div>
    );
};

export default Tooltip;
