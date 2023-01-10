import React from "react";
import { render } from "@testing-library/react";

import LanguageSwitcher from "./LanguageSwitcher";

describe("LanguageSwitcher", () => {
  test("renders the LanguageSwitcher component", () => {
    render(<LanguageSwitcher languages={["en", "nl"]} onLanguageSwitch={() => true} currentLanguage={"nl"}/>);
  });
});