import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux"
import { faEye, faEyeSlash, faMedal, faUndoAlt } from "@fortawesome/free-solid-svg-icons";
import { Arrow, HistoryCard, HistoryCardInfo, HistoryContainer, HistoryCotent, HistorySpan, Icon } from './styles';

export default function History(props) {
    const listStoreHistory = useSelector((state) => state.listHistory.data)
    const [open, setOpen] = useState('1px')

    useEffect(() => {
        order()
    }, [])

    const order = () => {
        listStoreHistory.sort((a, b) => {
            if (a.time.split(':')[0] !== b.time.split(':')[0]) {
                return a.time.split(':')[0] - b.time.split(':')[0]
            } else {
                return a.time.split(':')[1] - b.time.split(':')[1]
            }
        })
    }

    return (
        <>
            <HistoryContainer>
                <Arrow>
                    <Icon onClick={() => props.refresh()} margin={'10px'} top={'20px'} size={'lg'} self={'flex-start'} icon={faUndoAlt} />
                    <Icon
                        size={'lg'}
                        self={'center'}
                        onClick={() => '1px' === open
                            ? setOpen('200px') : setOpen('1px')}
                        icon={'1px' === open ? faEye : faEyeSlash} margin={'5px'} top={'20px'} />
                </Arrow>
                <HistoryCotent width={open}>
                    {listStoreHistory.map((i, index) => {
                        return (
                            <HistoryCard
                                background={index % 2 === 0 ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.6)'}
                                display={'1px' === open ? 'none' : 'flex'}>
                                <HistoryCardInfo display={'1px' === open ? 'none' : 'flex'}>
                                    <HistorySpan>
                                        <HistorySpan color={'white'} weight={'bold'}>
                                            Name:
                                    </HistorySpan> <HistorySpan color={'white'} weight={'normal'}>
                                            {i.name}
                                        </HistorySpan>
                                    </HistorySpan>
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
                                </HistoryCardInfo>
                                {0 === index ?
                                    <Icon icon={faMedal} /> : <></>
                                }
                            </HistoryCard>
                        )
                    })}
                </HistoryCotent>
            </HistoryContainer>
        </>
    )
}