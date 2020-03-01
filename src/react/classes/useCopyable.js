import { Copyable } from '@baleada/logic'
import useReactive from '../util/useReactive'

export default function useCopyable (state, options) {
  const instance = new Copyable(state, options)
  return useReactive(instance)
}
