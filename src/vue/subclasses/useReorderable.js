import { Reorderable } from '@baleada/logic/subclasses'

export default function useReorderable (state, options) {
  return new Reorderable(state, options)
}
