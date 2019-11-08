import { Animatable } from '@baleada/logic'
import useReactive from '../util/react/useReactive'

export default function useAnimatable (state, options) {
  const instance = new Animatable(state, options)
  return useReactive(instance)
}
