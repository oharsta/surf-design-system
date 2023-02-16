import React from "react";
import {render} from "@testing-library/react";

import SegmentedControl from "./SegmentedControl";

describe("SegmentedControl", () => {
    test("renders the SegmentedControl component", () => {
        render(<SegmentedControl onClick={() => true}
                                 option={"second"}
                                 options={["first", "second", "third"]}
        />);
    });
});