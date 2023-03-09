import React from "react";
import {render} from "@testing-library/react";
import MenuButton from "./MenuButton";

describe("MenuButton", () => {
    test("renders the MenuButton component", () => {
        render(<MenuButton txt={"Click me"} isOpen={true} toggle={() => true}>
            <>
                <ul>
                    <li>
                        <a href="#">Mijn contacthistorie</a>
                    </li>
                    <li>
                        <a href="#">Mijn gegevens</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="#">Uitloggen</a>
                    </li>
                </ul>
            </>
        </MenuButton>);
    });
});