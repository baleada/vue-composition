import { Completable } from '@baleada/logic'
import useReactive from '../util/useReactive'

export default function useCompletable (state, options) {
  const instance = new Completable(state, options)
  return useReactive(instance)
}
