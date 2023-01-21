import React from "react";
import {render} from "@testing-library/react";

import Modal from "./Modal";
import AlertType from "../Alert/AlertType";

describe("Modal", () => {
    test("renders the Modal component", () => {
        render(<Modal confirm={() => true}
                      cancel={() => true}
                      title={"Title"}
                      question={"Question"}
                      alertType={AlertType.Info}
                      subTitle={"subTitle"}
                      confirmDisabled={true}
                      confirmationButtonLabel={"Confirm"}
                      cancelButtonLabel={"Cancel"}/>);
    });
});