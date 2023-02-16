import React, {ChangeEvent} from "react";
import {render} from "@testing-library/react";

import RadioOptions from "./RadioOptions";
import {stopEvent} from "../../common/utils";

describe("RadioOptions", () => {
    test("renders the RadioOptions component", () => {
        render(<RadioOptions trueLabel={"Yes"} falseLabel={"No"} label={"SURF Organisation"}
                             onChange={(e: ChangeEvent) => stopEvent(e)} name={"unique-name"} value={true}/>);
    });
});