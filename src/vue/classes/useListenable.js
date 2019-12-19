import { ref, onBeforeUnmount } from '@vue/composition-api'
import { Listenable } from '@baleada/logic'

export default function useListenable (state, options) {
  const instance = new Listenable(state, options),
        reactiveInstance = ref(instance)
  onBeforeUnmount(() => reactiveInstance.value.stop())
  return reactiveInstance
}
