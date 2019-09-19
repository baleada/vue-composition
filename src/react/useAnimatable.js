import { useReducer } from "react"
import { Animatable } from '@baleada/logic'
import onChange from 'on-change'

export default function useAnimatable (state, options) {
  const [_, forceUpdate] = useReducer(x => x + 1, 0),
        instance = new Animatable(state, options),
        reactiveInstance = onChange(instance, forceUpdate)

  return reactiveInstance
}
