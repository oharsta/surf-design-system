import React, {ChangeEvent} from "react";
import {render} from "@testing-library/react";

import Checkbox from "./Checkbox";
import {stopEvent} from "../../common/utils";

describe("Checkbox", () => {
    test("renders the Checkbox component", () => {
        render(<Checkbox onChange={(e: ChangeEvent) => stopEvent(e)} name={"unique-name"} value={true}/>);
    });
});