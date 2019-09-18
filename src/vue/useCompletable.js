import { reactive, computed } from '@vue/composition-api'
import { Completable } from '@baleada/logic'
import { toProvisions } from '@baleada/logic/helpers'

export default function useCompletable (state, options) {
  const instance = reactive(new Completable(state, options))
  return computed(() => toProvisions(instance))
}
