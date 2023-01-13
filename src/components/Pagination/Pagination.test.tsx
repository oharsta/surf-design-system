import React from "react";
import {render} from "@testing-library/react";

import Pagination from "./Pagination";
import {stopEvent} from "../../common/utils";

describe("Pagination", () => {
    test("renders the Pagination component", () => {
        render(<Pagination currentPage={1} onChange={(e: any) => stopEvent(e)} total={40} pageCount={10}/>);
    });
});