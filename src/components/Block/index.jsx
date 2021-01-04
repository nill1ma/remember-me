import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from 'react-router'
import { check, lesThenTen, saveHistory } from '../../utils/functios'
import History from '../History'
import Timer from '../Timer'
import Items from "./Items"
import { Body, Container, ContainerItem } from "./styles"


export default function Block() {

  var redirect = useHistory()

  const listStore = useSelector((state) => state.listMemory.data)
  const dispatch = useDispatch()
  const [correct, setCorrect] = useState([])
  const [countable, setCountable] = useState({
    minute: 0,
    seconds: 0
  })

  const [totalTime, setTotalTime] = useState('')
  const [disabled, setDisabled] = useState(false)
  const [history] = useState(Array.from(JSON.parse(localStorage.getItem('history'))))

  useEffect(() => {
    if (!history || '' === history[history.length - 1].name) redirect.goBack()
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
      setTotalTime(`${lesThenTen(countable.minute)}:${lesThenTen(countable.seconds)}`)
    }
  }, [countable])

  useEffect(() => {

    if (listStore.every(l => l.show)) {
      if ('' === history[history.length - 1].name) redirect.goBack()
      dispatch({ type: "UPDATE_HISTORY", updated: saveHistory(history, totalTime) })

    }
  }, [totalTime])

  const handleMemory = (id) => {
    listStore.map((store) => {
      if (store.id === id && !store.show && !store.correct) {
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
    dispatch({ type: "UPDATE_MEMORY", updated: listStore })
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
