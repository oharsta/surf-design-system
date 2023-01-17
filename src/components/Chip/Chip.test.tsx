import React from "react";
import {render} from "@testing-library/react";
import {ReactComponent as InfoIcon} from "../../icons/functional-icons/info.svg";
import Chip from "./Chip";

describe("Chip", () => {
    test("renders the Chip component", () => {
        render(<Chip label={"Chip text"}><InfoIcon/></Chip>);
    });
});