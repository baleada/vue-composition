import { useReducer } from "react"
import Copiable from '@baleada/logic/lib/classes/Copiable'
import onChange from 'on-change'

let store

export default function useCopiable (state, options) {
  const [_, forceUpdate] = useReducer(x => x + 1, 0),
        instance = store || new Copiable(state, options),
        reactiveInstance = onChange(instance, (path, value) => {
          store = value
          forceUpdate()
        })

  return reactiveInstance
}
