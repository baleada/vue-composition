import { reactive, computed } from '@vue/composition-api'
import { Copiable } from '@baleada/logic'
import { toProvisions } from '@baleada/logic/helpers'

export default function useCopiable (state, options) {
  const instance = reactive(new Copiable(state, options))
  return computed(() => toProvisions(instance))
}
