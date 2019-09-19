import { useReducer } from "react"
import { Poppable } from '@baleada/logic'
import onChange from 'on-change'

export default function usePoppable (state, options) {
  const [_, forceUpdate] = useReducer(x => x + 1, 0),
        instance = new Poppable(state, options),
        reactiveInstance = onChange(instance, forceUpdate)

  return reactiveInstance
}
