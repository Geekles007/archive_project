import React from "react";
import {render, screen} from "@testing-library/react";
import BreadCrumbs from "./index";

test("render a text", () => {
    render(<BreadCrumbs />);
    const divElement = screen.getByRole("breadcrumb");
    expect(divElement).toHaveTextContent("BreadCrumbs");
})