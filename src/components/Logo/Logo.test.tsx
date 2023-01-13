import React from "react";
import {render} from "@testing-library/react";

import Logo, {LogoType} from "./Logo";

describe("Logo", () => {
    test("renders the Logo component", () => {
        render(<Logo label="Hello world!" position={LogoType.Bottom}/>);
    });
});