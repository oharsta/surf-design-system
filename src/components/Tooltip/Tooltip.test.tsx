import React from "react";
import {render} from "@testing-library/react";

import Tooltip from "./Tooltip";

describe("Tooltip", () => {
    test("renders the Tooltip component", () => {
        render(<Tooltip tip={"<strong>Strong</strong> tip"} anchorId={"1"}/>);
    });
});