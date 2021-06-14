import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import Signin from "./index";

// const mockHistoryPush = jest.fn();
// jest.mock("react-router-dom", () => ({
//   ...jest.requireActual("react-router-dom"),
//   useHistory: () => ({ push: mockHistoryPush }),
// }));
describe("Signin", () => {
  it("Deveria Renderizar o componente Signin", () => {
    render(
      <BrowserRouter>
        <Signin />
      </BrowserRouter>
    );
    expect(screen).toBeTruthy();
  });
  it("returns data when sendMessage is called", () => {
    var mock = new MockAdapter(axios);
    const data = { response: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTA0LCJ1c2VybmFtZSI6Imp1YW5uIiwiaWF0IjoxNjIzNjUxMzMzLCJleHAiOjE2MjM2NTQ5MzN9.BCpwxwg7A2LUEslyXkp1vaXHJCDzWWtLAlstzxG9Yxs" };
    mock
      .onGet("https://segware-book-api.segware.io/api/sign-in")
      .reply(200, data);

      Signin.sendMessage(0, "any").then((response) => {
      expect(response).toEqual(data);
      done();
    });
  });
});
