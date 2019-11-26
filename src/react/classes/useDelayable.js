import { Delayable } from '@baleada/logic'
import useReactive from '../util/useReactive'

export default function useDelayable (state, options) {
  const instance = new Delayable(state, options)
  return useReactive(instance)
}
