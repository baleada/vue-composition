import { reactive, computed } from '@vue/composition-api'
import { Poppable } from '@baleada/logic'
import { toProvisions } from '@baleada/logic/helpers'

export default function usePoppable (state, options) {
  const instance = reactive(new Poppable(state, options))
  return computed(() => toProvisions(instance))
}
