import { ref, onBeforeUnmount } from '@vue/composition-api'
import { Delayable } from '@baleada/logic'

export default function useDelayable (state, options) {
  const instance = new Delayable(state, options),
        reactiveInstance = ref(instance)
  onBeforeUnmount(() => reactiveInstance.value.stop())
  return reactiveInstance
}
