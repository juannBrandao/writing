import styled from "styled-components";

export const NavBar = styled.div`
  width: 100vw;
  background: #6b63fc;
  display: flex;
  justify-content: center;
  height: 56px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  box-shadow: -8px 8px 7px -7px #000000;
  align-items: center;
  color: white;
  header {
    display: flex;
    justify-content: space-between;
    width: 98%;
    button {
      border: none;
      background: none;
      color: #fff;
    }
  }
`;
