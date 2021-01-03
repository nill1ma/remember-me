import styled from "styled-components";

export const Item = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  margin-top: 5px;
  justify-content: center;
  align-items: center;
  border:5px solid rgba(0,0,0,0.5);
  background: ${props => props.background};
  color: #fff;
  cursor: pointer;
  border-radius:50%;
`;
