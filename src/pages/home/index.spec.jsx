import { render, screen } from "@testing-library/react";
import Home from "./index"
describe("Home", () => {
  test("Deveria Renderizar o componente", () => {
    render(<Home/>)
    expect(screen).toBeTruthy()
  });
});
