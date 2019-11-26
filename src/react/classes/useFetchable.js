import { Fetchable } from '@baleada/logic'
import useReactive from '../util/useReactive'

export default function useFetchable (state, options) {
  const instance = new Fetchable(state, options)
  return useReactive(instance)
}
