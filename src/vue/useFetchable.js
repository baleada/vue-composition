import { reactive, computed } from '@vue/composition-api'
import { Fetchable } from '@baleada/logic'
import { toProvisions } from '@baleada/logic/helpers'

export default function useFetchable (state, options) {
  const instance = reactive(new Fetchable(state, options))
  return computed(() => toProvisions(instance))
}
