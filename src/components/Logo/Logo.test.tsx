import React from "react";
import {render} from "@testing-library/react";

import Logo from "./Logo";
import LogoType from "./LogoType";

describe("Logo", () => {
    test("renders the Logo component", () => {
        render(<Logo label="Hello world!" position={LogoType.Bottom}/>);
    });
});