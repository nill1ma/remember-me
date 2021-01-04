import { combineReducers } from 'redux'
import { listMemory } from './listGame'
import { listHistory } from './listHistory'

const reducers = combineReducers({
  listMemory,
  listHistory
})

export { reducers }