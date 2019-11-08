import { Listenable } from '@baleada/logic'
import useReactive from '../util/react/useReactive'

export default function useListenable (state, options) {
  const instance = new Listenable(state, options)
  return useReactive(instance)
}
