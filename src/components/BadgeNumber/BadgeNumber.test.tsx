import React from "react";
import {render} from "@testing-library/react";
import BadgeNumber from "./BadgeNumber";

describe("BadgeNumber", () => {
    test("renders the BadgeNumber component", () => {
        render(<BadgeNumber value={99}/>);
    });
});