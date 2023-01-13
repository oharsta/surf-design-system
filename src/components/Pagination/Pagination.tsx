import React from "react";
import "./Pagination.scss";
import {pagination} from "./algorithm";

import {ReactComponent as ArrowLeftIcon} from "../../icons/functional-icons/arrow-left-2.svg";
import {ReactComponent as ArrowRightIcon} from "../../icons/functional-icons/arrow-right-2.svg";

export interface PaginationProps {
    currentPage: number;
    onChange: Function;
    total: number;
    pageCount: number;
}

const Pagination = (props: PaginationProps) => {
    const nbrPages = Math.ceil(props.total / props.pageCount);
    const rangeWithDots = pagination(props.currentPage, nbrPages);

    if (props.total <= props.pageCount) {
        return null;
    }

    const ranges = (nbr: any, index: number) => {
        const key = `${nbr}_${index}}}`;
        if (typeof nbr === "string" || nbr instanceof String) {
            return <li key={key}><span className="link-placeholder">...</span></li>
        } else if (nbr === props.currentPage) {
            return <li key={key}><a href="#" className="is-active" aria-current="page">{nbr}</a></li>
        } else {
            return <li key={key}><a href="#" onClick={() => props.onChange(nbr)}
                                    aria-current="page">{nbr}</a></li>
        }
    }

    return (
        <div className="sds--pagination">
            <nav className="sds--pagination--nav sds--text--body--large" aria-label="pagination">
                <ul>
                    {(nbrPages > 1 && props.currentPage !== 1) &&
                    <li onClick={() => props.onChange(props.currentPage - 1)}>
                        <a href="#">
                            <ArrowLeftIcon/>
                        </a>
                    </li>}
                    {
                        rangeWithDots.map((nbr, index) => ranges(nbr, index))
                    }
                    {(nbrPages > 1 && props.currentPage !== nbrPages) &&
                    <li onClick={() => props.onChange(props.currentPage + 1)}>
                        <a href="#">
                            <ArrowRightIcon/>
                        </a>
                    </li>}

                </ul>
            </nav>
        </div>
    )

};

export default Pagination;
