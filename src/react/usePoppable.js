import { useReducer } from "react"
import Poppable from '@baleada/logic/lib/classes/Poppable'
import onChange from 'on-change'

let store

export default function usePoppable (state, options) {
  const [_, forceUpdate] = useReducer(x => x + 1, 0),
        instance = store || new Poppable(state, options),
        reactiveInstance = onChange(instance, (path, value) => {
          store = value
          forceUpdate()
        })

  return reactiveInstance
}
