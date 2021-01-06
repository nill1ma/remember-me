import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from 'react-router'
import { check, lessThanTen, saveHistory, refresher } from '../../utils/functios'
import History from '../History'
import Timer from '../Timer'
import Items from "./Items"
import { Body, Container, ContainerItem } from "./styles"


export default function Block() {

  var redirect = useHistory()

  const [totalTime, setTotalTime] = useState('')
  const [disabled, setDisabled] = useState(false)
  const history = useSelector(state => state.listHistory.data)
  const refreshed = useSelector(state => state.refresh.data)

  const listStore = useSelector((state) => state.listMemory.data)
  const countable = useSelector((state) => state.clock.data)
  const dispatch = useDispatch()
  const [correct, setCorrect] = useState([])


  useEffect(() => {
    dispatch({ type: 'UPDATE_REFRESH', updated: false })
    if (!(history || '' === history[history.length - 1].name) && refreshed) { redirect.goBack() }
    else {
      let h = Array.from(JSON.parse(localStorage.getItem('history')))
      dispatch({ type: "UPDATE_HISTORY", updated: saveHistory(h, totalTime) })
    }
  }, [])


  useEffect(() => {
    const is = listStore.every(l => l.show)
    if (is && '' === totalTime) {
      setTotalTime(`${lessThanTen(countable.minute)}:${lessThanTen(countable.seconds)}`)
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

  const refresh = () => {
    dispatch({ type: 'UPDATE_REFRESH', updated: true })
    if (totalTime !== '') {
      let l = history
      l.push(
        {
          name: history[history.length - 1].name,
          date: '',
          time: ''
        }
      )
      localStorage.setItem('history', JSON.stringify(l))
      dispatch({ type: 'UPDATE_MEMORY', updated: l })
    }
  }

  return (
    <Body>
      <Container>
        <Timer refreshed={refreshed} countable={countable} totalTime={totalTime} />
        <ContainerItem>
          <Items list={listStore} disabled={disabled} handleMemory={handleMemory} />
        </ContainerItem>
      </Container>
      <History refresh={refresh} />
    </Body >
  )
}
