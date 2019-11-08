import { reactive } from '@vue/composition-api'
import { Listenable } from '@baleada/logic'

export default function useListenable (state, options) {
  const instance = new Listenable(state, options),
        reactiveInstance = reactive(instance)

  return reactiveInstance
}
