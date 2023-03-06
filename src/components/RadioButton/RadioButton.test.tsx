import React, {ChangeEvent} from "react";
import {render} from "@testing-library/react";

import RadioButton from "./RadioButton";
import {stopEvent} from "../../common/utils";

describe("RadioButton", () => {
    test("renders the RadioButton component", () => {
        render(
            <RadioButton
                onChange={(e: ChangeEvent) => stopEvent(e)}
                label={"unique-name"}
                name={"radio-group-name"}
                value={"unique-name"}
            />
        );
    });
});
