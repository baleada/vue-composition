import { useReducer } from "react"
import { Observable } from '@baleada/logic'
import onChange from 'on-change'

export default function useObservable (state, options) {
  const [_, forceUpdate] = useReducer(x => x + 1, 0),
        instance = new Observable(state, options),
        reactiveInstance = onChange(instance, forceUpdate)

  return reactiveInstance
}
