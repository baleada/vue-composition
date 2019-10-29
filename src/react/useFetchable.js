import { useReducer } from "react"
import Fetchable from '@baleada/logic/lib/classes/Fetchable'
import onChange from 'on-change'

let store

export default function useFetchable (state, options) {
  const [_, forceUpdate] = useReducer(x => x + 1, 0),
        instance = store || new Fetchable(state, options),
        reactiveInstance = onChange(instance, (path, value) => {
          store = value
          forceUpdate()
        })

  return reactiveInstance
}
