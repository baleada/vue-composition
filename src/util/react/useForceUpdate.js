import { useReducer } from 'react'

function useForceUpdate () {
  const [_, forceUpdate] = useReducer(x => x + 1, 0)
  return forceUpdate
}
