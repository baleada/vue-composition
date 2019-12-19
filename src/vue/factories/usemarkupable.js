import { markupable } from '@baleada/logic/factories'

export default function usemarkupable (state, options) {
  return new markupable(state, options)
}
