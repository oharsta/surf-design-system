import React from "react";
import {render} from "@testing-library/react";

import Alert, {AlertType} from './Alert';

describe("Alert", () => {
    test("renders the Alert component", () => {
        render(<Alert message={"Hello world!"} alertType={AlertType.Info} close={() => true}/>);
    });
});