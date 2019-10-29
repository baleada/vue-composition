import { useReducer } from "react"
import Searchable from '@baleada/logic/lib/classes/Searchable'
import onChange from 'on-change'

let store

export default function useSearchable (state, options) {
  const [_, forceUpdate] = useReducer(x => x + 1, 0),
        instance = store || new Searchable(state, options),
        reactiveInstance = onChange(instance, (path, value) => {
          store = value
          forceUpdate()
        })

  return reactiveInstance
}
