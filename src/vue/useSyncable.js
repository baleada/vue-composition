import { reactive, computed } from '@vue/composition-api'
import { Syncable } from '@baleada/logic'
import { toProvisions } from '@baleada/logic/helpers'

export default function useSyncable (state, options) {
  const instance = reactive(new Syncable(state, options))
  return computed(() => toProvisions(instance))
}
