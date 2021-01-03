import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Arrow = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    align-self:center;
    padding:0;
    margin:0;
    cursor: pointer;
`

export const Icon = styled(FontAwesomeIcon)`
    color:rgba(255,140,0, 0.7);
    margin-right:5px;
`
export const HistoryContainer = styled.div`
    display:flex;
    padding:0;
    margin:0;

`
export const HistoryCotent = styled.div`
    width:${props => props.width};
    height:96vh;
    background:rgba(0, 0,0, 0.3);
    overflow-y:scroll;
    flex-direction:column;
    padding:${props => '1px' === props.width ? '1vh 0' : '1vh 1vw'};
    color:#FFFFFF;
    transition:5s;

    ::-webkit-scrollbar {
        width: 5px;
    }
  
    ::-webkit-scrollbar-thumb {
        -webkit-border-radius: 10px;
        border-radius: 10px;
        background: rgba(255,140,0, 0.7);
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
    }
`

export const HistoryCard = styled.div`
    width:95%;
    padding:5px;
    margin-top:5px;
    display:${props=>props.display};
    border-bottom:1px solid rgba(255,255,255, 0.3);
    flex-direction:column;
    align-items:flex-start;
    background:${props => props.background};
    transition:5s;
`

export const HistorySpan = styled.span`
    color:${props => props.color};
    font-weight:${props=>props.weight};
    font-size:10px;
`