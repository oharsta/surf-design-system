import React from "react";
import {render} from "@testing-library/react";

import RadioButton from "./RadioButton";
import {stopEvent} from "../../common/utils";

describe("RadioButton", () => {
    test("renders the RadioButton component", () => {
        render(<RadioButton onChange={(e: MouseEvent) => stopEvent(e)}
                            label={"unique-name"}
                            name={"unique-name"}
                            value={true}/>);
    });
});