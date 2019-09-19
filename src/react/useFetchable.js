import { useReducer } from "react"
import { Fetchable } from '@baleada/logic'
import onChange from 'on-change'

export default function useFetchable (state, options) {
  const [_, forceUpdate] = useReducer(x => x + 1, 0),
        instance = new Fetchable(state, options),
        reactiveInstance = onChange(instance, forceUpdate)

  return reactiveInstance
}
