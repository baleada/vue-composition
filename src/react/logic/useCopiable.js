import { Copiable } from '@baleada/logic'
import useReactive from '../util/react/useReactive'

export default function useCopiable (state, options) {
  const instance = new Copiable(state, options)
  return useReactive(instance)
}