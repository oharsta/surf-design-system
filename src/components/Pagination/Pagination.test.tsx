import React from "react";
import {render} from "@testing-library/react";

import Pagination from "./Pagination";

describe("Pagination", () => {
    test("renders the Pagination component", () => {
        render(<Pagination currentPage={1} onChange={() => true} total={40}/>);
    });
});