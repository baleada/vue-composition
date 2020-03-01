import { Animateable } from '@baleada/logic'
import useReactive from '../util/useReactive'

export default function useAnimateable (state, options) {
  const instance = new Animateable(state, options)
  return useReactive(instance)
}
