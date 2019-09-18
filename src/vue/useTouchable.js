import { reactive, computed } from '@vue/composition-api'
import { Touchable } from '@baleada/logic'
import { toProvisions } from '@baleada/logic/helpers'

export default function useTouchable (state, options) {
  const instance = reactive(new Touchable(state, options))
  return computed(() => toProvisions(instance))
}
