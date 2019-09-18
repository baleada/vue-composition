import { reactive, computed } from '@vue/composition-api'
import { Observable } from '@baleada/logic'
import { toProvisions } from '@baleada/logic/helpers'

export default function useObservable (state, options) {
  const instance = reactive(new Observable(state, options))
  return computed(() => toProvisions(instance))
}
