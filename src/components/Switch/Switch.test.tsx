import React from "react";
import {render} from "@testing-library/react";

import Switch from "./Switch";
import {stopEvent} from "../../common/utils";

describe("Switch", () => {
    test("renders the Switch component", () => {
        render(<Switch onChange={(e: MouseEvent) => stopEvent(e)} name={"unique-name"} value={true}/>);
    });
});