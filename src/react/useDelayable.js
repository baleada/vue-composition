import { useReducer } from "react"
import Delayable from '@baleada/logic/lib/classes/Delayable'
import onChange from 'on-change'

let store

export default function useDelayable (state, options) {
  const [_, forceUpdate] = useReducer(x => x + 1, 0),
        instance = store || new Delayable(state, options),
        reactiveInstance = onChange(instance, (path, value) => {
          store = value
          forceUpdate()
        })

  return reactiveInstance
}
