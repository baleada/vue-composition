import { reactive, onMounted, onBeforeUnmount } from '@vue/composition-api'
import { Listenable } from '@baleada/logic'

export default function useListenable (state, options) {
  let reactiveInstance = {}
  onMounted(() => {
    const instance = new Listenable(state, options)
    reactiveInstance = reactive(instance)
  })
  onBeforeUnmount(() => reactiveInstance.stop())

  return reactiveInstance
}
