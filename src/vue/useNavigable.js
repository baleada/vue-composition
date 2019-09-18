import { reactive, computed } from '@vue/composition-api'
import { Navigable } from '@baleada/logic'
import { toProvisions } from '@baleada/logic/helpers'

export default function useNavigable (state, options) {
  const instance = reactive(new Navigable(state, options))
  return computed(() => toProvisions(instance))
}
