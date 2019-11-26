import { IdentifiableGoTrue } from '@baleada/logic'
import useReactive from '../util/useReactive'

export default function useIdentifiableGoTrue (state, options) {
  const instance = new IdentifiableGoTrue(state, options)
  return useReactive(instance)
}
