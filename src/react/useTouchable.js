import { useReducer } from "react"
import Touchable from '@baleada/logic/lib/classes/Touchable'
import onChange from 'on-change'

let store

export default function useTouchable (state, options) {
  const [_, forceUpdate] = useReducer(x => x + 1, 0),
        instance = store || new Touchable(state, options),
        reactiveInstance = onChange(instance, (path, value) => {
          store = value
          forceUpdate()
        })

  return reactiveInstance
}
