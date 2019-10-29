import { useReducer } from "react"
import Completable from '@baleada/logic/lib/classes/Completable'
import onChange from 'on-change'

let store

export default function useCompletable (state, options) {
  const [_, forceUpdate] = useReducer(x => x + 1, 0),
        instance = store || new Completable(state, options),
        reactiveInstance = onChange(instance, (path, value) => {
          store = value
          forceUpdate()
        })

  return reactiveInstance
}
