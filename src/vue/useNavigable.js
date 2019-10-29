import { reactive } from '@vue/composition-api'
import Navigable from '@baleada/logic/lib/classes/Navigable'

export default function useNavigable (state, options) {
  const instance = new Navigable(state, options),
        reactiveInstance = reactive(instance)

  return reactiveInstance
}
