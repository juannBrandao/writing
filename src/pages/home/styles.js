import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
export const Feed = styled.ul`
  width: 80vw;
  height: 70vh;
  overflow-y: scroll;
  padding: 0 7vw;
  list-style: none;
`;
export const CardText = styled.div`
  background: #fff;
  border-radius: 25px;
  padding: 2% 4%;
  box-shadow: -8px 8px 7px -7px #000000;
  margin-bottom: 4%;
  transition: 0.5s;
  :hover {
    box-shadow: -8px 8px 7px -3px #000000;
  }
`;
export const BoxNewFeed = styled.div`
  display: flex;
  input {
    width: 58vw;
    margin-top: 1vh;
    height: 4vh;
    margin-right: 5px;
  }
  button{
    margin-top: 1vh;
    height: 4vh;
  }
`;
