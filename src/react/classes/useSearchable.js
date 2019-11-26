import { Searchable } from '@baleada/logic'
import useReactive from '../util/useReactive'

export default function useSearchable (state, options) {
  const instance = new Searchable(state, options)
  return useReactive(instance)
}
