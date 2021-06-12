
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
    background: #FFF;
    border-radius: 25px;
    padding: 2% 4%;
    box-shadow: -8px 8px 7px -2px #000000;
    margin-bottom: 4%;
`;