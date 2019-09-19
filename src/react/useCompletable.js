import { useReducer } from "react"
import { Completable } from '@baleada/logic'
import onChange from 'on-change'

export default function useCompletable (state, options) {
  const [_, forceUpdate] = useReducer(x => x + 1, 0),
        instance = new Completable(state, options),
        reactiveInstance = onChange(instance, forceUpdate)

  return reactiveInstance
}
