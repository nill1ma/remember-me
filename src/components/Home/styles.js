import styled from 'styled-components'

export const HomeContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:100vw;
    height:100vh;
    background: rgba(10, 10, 10, 0.8);
`
export const HomeText = styled.span`
    color:rgba(255,140,0, 0.7);
    font-size:30px;
    font-weight:bold;
    margin-bottom:20px;
`

export const HomeTextInput = styled.input`
    width:60vw;
    padding:10px;
    outline:none;
    margin-bottom:20px;
`

export const HomeButton = styled.button`
    width:20vw;
    padding:10px;
    background:rgba(255,140,0, 0.7);
    font-weight:bold;
    border:none;
    outline:none;
    cursor:pointer;
`