import { Markupable } from '@baleada/logic/subclasses'

export default function useMarkupable (state, options) {
  return new Markupable(state, options)
}
