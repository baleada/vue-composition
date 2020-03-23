import { ref, onBeforeUnmount } from '@vue/composition-api'
import { Animateable } from '@baleada/logic'

export default function useAnimateable (state, options) {
const instance = new Animateable(state, options),
      reactiveInstance = ref(instance)
  onBeforeUnmount(() => reactiveInstance.value.stop())
return reactiveInstance
}
