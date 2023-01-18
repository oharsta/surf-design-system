import React from "react";
import {render} from "@testing-library/react";

import Modal, {LogoType} from "./Logo";

describe("Logo", () => {
    test("renders the Logo component", () => {
        render(<Modal label="Hello world!" position={LogoType.Bottom}/>);
    });
});