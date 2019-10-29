import { useReducer } from "react"
import Syncable from '@baleada/logic/lib/classes/Syncable'
import onChange from 'on-change'

let store

export default function useSyncable (state, options) {
  const [_, forceUpdate] = useReducer(x => x + 1, 0),
        instance = store || new Syncable(state, options),
        reactiveInstance = onChange(instance, (path, value) => {
          store = value
          forceUpdate()
        })

  return reactiveInstance
}
