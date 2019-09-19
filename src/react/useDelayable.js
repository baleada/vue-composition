import { useReducer } from "react"
import { Delayable } from '@baleada/logic'
import onChange from 'on-change'

export default function useDelayable (state, options) {
  const [_, forceUpdate] = useReducer(x => x + 1, 0),
        instance = new Delayable(state, options),
        reactiveInstance = onChange(instance, forceUpdate)

  return reactiveInstance
}
