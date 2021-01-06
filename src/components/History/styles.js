import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export const Arrow = styled.div`
    height:100vh;
    display:flex;
    align-self:center;
    padding:0;
    margin:0;
    cursor: pointer;
`

export const Icon = styled(FontAwesomeIcon)`
    display:flex;
    color:rgba(255,140,0, 0.7);
    margin-top:${props=>props.top};
    margin-right:${props => props.margin};
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
    display:${props => props.display};
    justify-content:space-between;
    align-items:center;
    border-bottom:1px solid rgba(255,255,255, 0.3);
    background:${props => props.background};
    transition:5s;
`

export const HistoryCardInfo = styled.div`
    width:50%;
    margin-top:5px;
    display:${props => props.display};
    flex-direction:column;
    align-items:flex-start;
    transition:5s;
`

export const HistorySpan = styled.span`
    color:${props => props.color};
    font-weight:${props => props.weight};
    font-size:10px;
`