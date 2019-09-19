import { useReducer } from "react"
import { Touchable } from '@baleada/logic'
import onChange from 'on-change'

export default function useTouchable (state, options) {
  const [_, forceUpdate] = useReducer(x => x + 1, 0),
        instance = new Touchable(state, options),
        reactiveInstance = onChange(instance, forceUpdate)

  return reactiveInstance
}
