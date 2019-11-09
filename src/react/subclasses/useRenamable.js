import { Renamable } from '@baleada/logic/subclasses'

export default function useRenamable (state, options) {
  return new Renamable(state, options)
}
