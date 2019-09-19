import { reactive } from '@vue/composition-api'
import { Observable } from '@baleada/logic'

export default function useObservable (state, options) {
  const instance = new Observable(state, options),
        reactiveInstance = reactive(instance)

  return reactiveInstance
}
