import { useReducer } from "react"
import Observable from '@baleada/logic/lib/classes/Observable'
import onChange from 'on-change'

let store

export default function useObservable (state, options) {
  const [_, forceUpdate] = useReducer(x => x + 1, 0),
        instance = store || new Observable(state, options),
        reactiveInstance = onChange(instance, (path, value) => {
          store = value
          forceUpdate()
        })

  return reactiveInstance
}
