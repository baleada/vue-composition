import { useReducer } from "react"
import { Searchable } from '@baleada/logic'
import onChange from 'on-change'

export default function useSearchable (state, options) {
  const [_, forceUpdate] = useReducer(x => x + 1, 0),
        instance = new Searchable(state, options),
        reactiveInstance = onChange(instance, forceUpdate)

  return reactiveInstance
}
