import { reactive, computed } from '@vue/composition-api'
import { Animatable } from '@baleada/logic'
import { toProvisions } from '@baleada/logic/helpers'

export default function useAnimatable (state, options) {
  const instance = reactive(new Animatable(state, options))
  return computed(() => toProvisions(instance))
}
