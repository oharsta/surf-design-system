import React from "react";
import {render} from "@testing-library/react";

import Pagination from "./Button";

describe("Button", () => {
    test("renders the Button component", () => {
        render(<Pagination/>);
    });
});