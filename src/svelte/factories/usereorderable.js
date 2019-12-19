import { reorderable } from '@baleada/logic/factories'

export default function usereorderable (state, options) {
  return new reorderable(state, options)
}
