import { reactive } from '@vue/composition-api'
import Observable from '@baleada/logic/lib/classes/Observable'

export default function useObservable (state, options) {
  const instance = new Observable(state, options),
        reactiveInstance = reactive(instance)

  return reactiveInstance
}
