import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import Signin from "./index";

const mockHistoryPush = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({ push: mockHistoryPush }),
}));
jest.mock('axios');
// mockAxios.create = () => {
//   return {
//     interceptors: {
//       request: {eject: jest.fn(), use: jest.fn()},
//       response: {eject: jest.fn(), use: jest.fn()},
//     },
//   };
// }
// mockAxios.get.mockResolvedValue = jest.fn()
describe("Signin", () => {
  test("Deveria Renderizar o componente", () => {
    render(
      <BrowserRouter>
        <Signin />
      </BrowserRouter>
    );
    expect(screen).toBeTruthy();
  });
  test("Deveria", () => {
    axios.get.mockResolvedValue({
      data: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTA0LCJ1c2VybmFtZSI6Imp1YW5uIiwiaWF0IjoxNjIzNjUxMzMzLCJleHAiOjE2MjM2NTQ5MzN9.BCpwxwg7A2LUEslyXkp1vaXHJCDzWWtLAlstzxG9Yxs",
    });
    render(
      <BrowserRouter>
        <Signin />
      </BrowserRouter>
    );
    const userName = screen.getByTestId("userName");
    const userPassword = screen.getByTestId("userPassword");
    fireEvent.input(userName, {
      target: {
        value: "juann",
      },
    });
    fireEvent.input(userPassword, {
      target: {
        value: "juann",
      },
    });
    fireEvent.click(screen.getByTestId("loginButton"));

    expect(mockHistoryPush).toBeCalledWith("/home");
  });
});
