import { Navigateable } from '@baleada/logic'
import useReactive from '../util/useReactive'

export default function useNavigateable (state, options) {
  const instance = new Navigateable(state, options)
  return useReactive(instance)
}
