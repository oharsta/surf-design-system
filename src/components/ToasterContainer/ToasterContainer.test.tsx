import React from "react";
import {render} from "@testing-library/react";

import ToasterContainer from './ToasterContainer';
import Toaster from '../Toaster/Toaster';
import ToasterType from "../Toaster/ToasterType";

describe("ToasterContainer", () => {
    test("renders the ToasterContainer component", () => {
        render(<ToasterContainer>
            <Toaster message={"Hello world!"} toasterType={ToasterType.Info}/>
        </ToasterContainer>);
    });
});