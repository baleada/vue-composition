import { useReducer } from "react"
import { Copiable } from '@baleada/logic'
import onChange from 'on-change'

export default function useCopiable (state, options) {
  const [_, forceUpdate] = useReducer(x => x + 1, 0),
        instance = new Copiable(state, options),
        reactiveInstance = onChange(instance, forceUpdate)

  return reactiveInstance
}
