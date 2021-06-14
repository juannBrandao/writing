import {  render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SignUp from "./index";



describe("SignUp", () => {
  test("Deveria Renderizar o componente SignUp", () => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    );
    expect(screen).toBeTruthy();
  });
});
