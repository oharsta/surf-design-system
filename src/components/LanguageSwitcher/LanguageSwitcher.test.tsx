import React from "react";
import { render } from "@testing-library/react";

import LanguageSwitcher from "./LanguageSwitcher";
import {stopEvent} from "../../common/utils";

describe("LanguageSwitcher", () => {
  test("renders the LanguageSwitcher component", () => {
    render(<LanguageSwitcher languages={["en", "nl"]} onLanguageSwitch={(e:any) => stopEvent(e)} currentLanguage={"nl"}/>);
  });
});