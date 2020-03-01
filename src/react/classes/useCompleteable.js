import { Completeable } from '@baleada/logic'
import useReactive from '../util/useReactive'

export default function useCompleteable (state, options) {
  const instance = new Completeable(state, options)
  return useReactive(instance)
}
