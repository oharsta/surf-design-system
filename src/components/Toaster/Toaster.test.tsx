import React from "react";
import {render} from "@testing-library/react";

import Toaster, {ToasterType} from './Toaster';

describe("Toaster", () => {
    test("renders the Toaster component", () => {
        render(<Toaster message={"Hello world!"} toasterType={ToasterType.Info}/>);
    });
});