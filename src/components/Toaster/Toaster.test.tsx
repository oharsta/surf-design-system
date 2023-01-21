import React from "react";
import {render} from "@testing-library/react";

import Toaster from './Toaster';
import ToasterType from "./ToasterType";

describe("Toaster", () => {
    test("renders the Toaster component", () => {
        render(<Toaster message={"Hello world!"} toasterType={ToasterType.Info}/>);
    });
});