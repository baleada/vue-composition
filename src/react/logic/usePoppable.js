import { Poppable } from '@baleada/logic'
import useReactive from '../util/react/useReactive'

export default function usePoppable (state, options) {
  const instance = new Poppable(state, options)
  return useReactive(instance)
}
