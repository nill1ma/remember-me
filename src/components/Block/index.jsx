import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Body, Container, ContainerItem } from "./styles"
import Timer from '../Timer'
import Items from "./Items"
import History from '../History'
import { check } from '../../utils/functios'

export default function Block() {
  const listStore = useSelector((state) => state.data)
  const dispatch = useDispatch()
  const [correct, setCorrect] = useState([])
  const [countable, setCountable] = useState({
    minute: 0,
    seconds: 0
  })

  const [totalTime, setTotalTime] = useState('')
  const [disabled, setDisabled] = useState(false)

  var date = new Date()

  useEffect(() => {
    const interval = setInterval(() => {
      setCountable({
        minute: countable.seconds === 59 ? countable.minute += 1 : countable.minute,
        seconds: countable.seconds < 59 ? countable.seconds += 1 : countable.seconds -= 59
      })
    }, 1000);

    return () => clearInterval(interval)
  }, [])


  useEffect(() => {
    const is = listStore.every(l => l.show)
    if (is && '' === totalTime) {
      setTotalTime(`${countable.minute}:${countable.seconds}`)
    }
  }, [countable])

  useEffect(() => {
    if(listStore.every(l => l.show)){
      let history = localStorage.getItem('history') ? Array.from(JSON.parse(localStorage.getItem('history'))) : []
      history.push(
        {
          date: `${date.getUTCDate() < 10 ? '0' + date.getUTCDate() : date.getUTCDate()}/
          ${date.getUTCMonth() < 10 ? '0'+(date.getUTCMonth() + 1) : date.getUTCMonth() + 1}/${date.getUTCFullYear()}`,
          time: totalTime < 10 ? '0' + totalTime : totalTime
        }
      )
      localStorage.setItem('history', JSON.stringify(history))
      console.log(JSON.parse(localStorage.getItem('history')))
    }
  }, [totalTime])

  const handleMemory = (id) => {
    listStore.map((store) => {
      if (store.id === id) {
        store.show = true
        correct.push(store.letter)
        setCorrect(correct)
        if (correct.length === 2) {
          setDisabled(true)
          check(listStore, correct, store.letter)
          setCorrect([])
          setTimeout(() => {
            setDisabled(false)
          }, 1000)
        }
      }
    })
    dispatch({ type: "UPDATE", updated: listStore })
  }

  return (
    <Body>
      <Container>
        <Timer countable={countable} totalTime={totalTime} />
        <ContainerItem>
          <Items list={listStore} disabled={disabled} handleMemory={handleMemory} />
        </ContainerItem>
      </Container>
      <History />
    </Body >
  )
}
