import { Editable } from '@baleada/logic'
import useReactive from '../util/react/useReactive'

export default function useEditable (state, options) {
  const instance = new Editable(state, options)
  return useReactive(instance)
}
