import React from "react";
import {render} from "@testing-library/react";
import UserInfo from "./UserInfo";

describe("UserInfo", () => {
    test("renders the UserInfo component", () => {
        render(<UserInfo userName={"John Doe"} isOpen={true} organisationName={"example.com"} toggle={() => true}>
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
        </UserInfo>);
    });
});