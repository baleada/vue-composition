import { reactive, computed } from '@vue/composition-api'
import { Delayable } from '@baleada/logic'
import { toProvisions } from '@baleada/logic/helpers'

export default function useDelayable (state, options) {
  const instance = reactive(new Delayable(state, options))
  return computed(() => toProvisions(instance))
}
