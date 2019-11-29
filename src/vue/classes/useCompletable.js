import { ref } from '@vue/composition-api'
import { Completable } from '@baleada/logic'

export default function useCompletable (state, options) {
  const instance = new Completable(state, options),
        reactiveInstance = ref(instance)
  return reactiveInstance
}
