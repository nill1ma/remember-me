import React, { useState } from 'react'
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { HistoryContainer, Arrow, Icon, HistoryCotent, HistoryCard, HistorySpan } from './styles'

export default function History() {
    const [open, setOpen] = useState('1px')

    const [info, setInfo] = useState(localStorage.getItem('history') ? JSON.parse(localStorage.getItem('history')) : [])

    return (
        <>
            <HistoryContainer>
                <Arrow>
                    <Icon
                        onClick={() => '1px' === open
                            ? setOpen('200px') : setOpen('1px')}
                        icon={'1px' === open ? faEye : faEyeSlash} />
                </Arrow>
                <HistoryCotent width={open}>
                    {Array.from(info).map((i, index) => {
                        return (
                            <HistoryCard
                                background={index % 2 === 0 ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.6)'}
                                display={'1px' === open ? 'none' : 'flex'}>
                                <HistorySpan>
                                    <HistorySpan color={'white'} weight={'bold'}>
                                        Date:
                                    </HistorySpan> <HistorySpan color={'white'} weight={'normal'}>
                                        {i.date}
                                    </HistorySpan>
                                </HistorySpan>
                                <HistorySpan>
                                    <HistorySpan color={'white'} weight={'bold'}>
                                        Time:
                                    </HistorySpan> <HistorySpan color={'white'} weight={'normal'}>
                                        {i.time}
                                    </HistorySpan>
                                </HistorySpan>
                            </HistoryCard>
                        )
                    })}
                </HistoryCotent>
            </HistoryContainer>
        </>
    )
}