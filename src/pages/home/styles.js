import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    padding: 2% 0%
  }
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
  border-radius: 10px;
  padding: 2% 2%;
  box-shadow: -8px 8px 7px -7px #000000;
  margin-bottom: 4%;
  transition: 0.5s;
  :hover {
    box-shadow: -8px 8px 7px -3px #000000;
  }
  button {
    border: none;
    background: none;
    width: 24px;
  }
  p {
    padding: 10px 10px;
  }
  strong {
    font-size: 10px;
    opacity: 0.6;
  }
`;
export const BoxNewFeed = styled.div`
  display: flex;
  input {
    width: 68vw;
    margin-right: 5px;
    height: 46px;
    margin-bottom: 15px;
    padding: 0 20px;
    color: #777;
    font-size: 15px;
    border: 1px solid #ddd;
    margin-top: 1%;
    border-radius: 10px;
  }
  button {
    border: none;
    background: none;
    color: #6b63fc;
  }
`;
