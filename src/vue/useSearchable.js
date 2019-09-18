import { reactive, computed } from '@vue/composition-api'
import { Searchable } from '@baleada/logic'
import { toProvisions } from '@baleada/logic/helpers'

export default function useSearchable (state, options) {
  const instance = reactive(new Searchable(state, options))
  return computed(() => toProvisions(instance))
}
