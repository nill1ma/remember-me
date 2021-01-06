import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Countable, CountableSpan } from './styles';

export default function Timer(props) {

    const dispatch = useDispatch()

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch({
                type: 'UPDATE_CLOCK', updated: {
                    minute: props.countable.seconds === 59 ? props.countable.minute += 1 : props.countable.minute,
                    seconds: props.countable.seconds < 59 ? props.countable.seconds += 1 : props.countable.seconds -= 59
                }
            })
        }, 1000);
        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        if (props.refreshed) refresh()
    }, [props.refreshed])

    const refresh = () => {
        return window.location.reload()
    }

    return (
        <Countable>
            <CountableSpan display={props.totalTime !== '' ? 'block' : 'none'}>{props.totalTime}</CountableSpan>
            <CountableSpan display={props.totalTime !== '' ? 'none' : 'block'}>
                {props.countable.minute}:{props.countable.seconds < 10 ? '0' + props.countable.seconds : props.countable.seconds}
            </CountableSpan>
        </Countable>
    )
}