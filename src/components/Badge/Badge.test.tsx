import React from "react";
import {render} from "@testing-library/react";
import {ReactComponent as InfoIcon} from "../../icons/functional-icons/info.svg";
import Badge from "./Badge";

describe("Badge", () => {
    test("renders the Badge component", () => {
        render(<Badge label={"Badge text"}><InfoIcon/></Badge>);
    });
});