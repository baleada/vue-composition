import { reactive } from '@vue/composition-api'
import Animatable from '@baleada/logic/lib/classes/Animatable'

export default function useAnimatable (state, options) {
  const instance = new Animatable(state, options),
        reactiveInstance = reactive(instance)

  return reactiveInstance
}
