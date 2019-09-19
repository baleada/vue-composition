import { useReducer } from "react"
import { Syncable } from '@baleada/logic'
import onChange from 'on-change'

export default function useSyncable (state, options) {
  const [_, forceUpdate] = useReducer(x => x + 1, 0),
        instance = new Syncable(state, options),
        reactiveInstance = onChange(instance, forceUpdate)

  return reactiveInstance
}
