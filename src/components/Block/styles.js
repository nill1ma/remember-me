import styled from "styled-components";

export const Body = styled.body`
  margin:0;
  padding:1vh 1vw;
  display:flex;
  width:100vw;
  height:98vh;
  background: rgba(10, 10, 10, 0.8);
`

export const Container = styled.div`
  width: 580px;
  display: flex;
  flex-direction:column;
  align-items: center;
  margin:0 auto;
  padding: 0;
`;

export const ContainerItem = styled.div`
  width: 100%;
  height: 400px; 
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;