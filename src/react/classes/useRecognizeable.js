import { Recognizeable } from '@baleada/logic'
import useReactive from '../util/useReactive'

export default function useRecognizeable (state, options) {
  const instance = new Recognizeable(state, options)
  return useReactive(instance)
}
