import { useReducer } from "react"
import Animatable from '@baleada/logic/lib/classes/Animatable'
import onChange from 'on-change'

let store

export default function useAnimatable (state, options) {
  const [_, forceUpdate] = useReducer(x => x + 1, 0),
        instance = store || new Animatable(state, options),
        reactiveInstance = onChange(instance, (path, value) => {
          store = value
          forceUpdate()
        })

  return reactiveInstance
}
