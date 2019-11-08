import { Navigable } from '@baleada/logic'
import useReactive from '../util/react/useReactive'

export default function useNavigable (state, options) {
  const instance = new Navigable(state, options)
  return useReactive(instance)
}