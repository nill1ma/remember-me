import React from 'react'
import { Countable, CountableSpan } from './styles'

export default function Timer(props) {
    return (
        <Countable>
            <CountableSpan display={props.totalTime !== '' ? 'block' : 'none'}>{props.totalTime}</CountableSpan>
            <CountableSpan display={props.totalTime !== '' ? 'none' : 'block'}>
                {props.countable.minute}:{props.countable.seconds < 10 ? '0' + props.countable.seconds : props.countable.seconds}
            </CountableSpan>
        </Countable>
    )
}