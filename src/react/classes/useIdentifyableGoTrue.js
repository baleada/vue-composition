import { IdentifyableGoTrue } from '@baleada/logic'
import useReactive from '../util/useReactive'

export default function useIdentifyableGoTrue (state, options) {
  const instance = new IdentifyableGoTrue(state, options)
  return useReactive(instance)
}
