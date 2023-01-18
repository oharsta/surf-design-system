import React from "react";
import {render} from "@testing-library/react";

import ToasterContainer from './ToasterContainer';
import Toaster from '../Toaster';
import {ToasterType} from "../Toaster/Toaster";

describe("ToasterContainer", () => {
    test("renders the ToasterContainer component", () => {
        render(<ToasterContainer>
            <Toaster message={"Hello world!"} toasterType={ToasterType.Info}/>
        </ToasterContainer> );
    });
});