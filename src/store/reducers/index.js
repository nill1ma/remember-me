import { combineReducers } from 'redux'
import { listMemory } from './listGame'
import { listHistory } from './listHistory'
import { clock } from './clock'
import { refresh } from './refresh'

const reducers = combineReducers({
  listMemory,
  listHistory,
  clock,
  refresh
})

export { reducers }
