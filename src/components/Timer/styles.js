import styled from 'styled-components'

export const Countable = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  font-size:25px;
  font-weight:bold;
  width:80px;
  height:80px;
  border-radius:50%;
  color:#FFFFFF;
  border-bottom:5px solid rgba(255,140,0, 0.7);
`
export const CountableSpan = styled.span`
  display:${props => props.display}
`