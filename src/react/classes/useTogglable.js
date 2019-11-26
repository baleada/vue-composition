import { Togglable } from '@baleada/logic'
import useReactive from '../util/useReactive'

export default function useTogglable (state, options) {
  const instance = new Togglable(state, options)
  return useReactive(instance)
}
