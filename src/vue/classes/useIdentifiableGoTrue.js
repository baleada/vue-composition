import { reactive } from '@vue/composition-api'
import { IdentifiableGoTrue } from '@baleada/logic'

export default function useIdentifiableGoTrue (state, options) {
  const instance = new IdentifiableGoTrue(state, options),
        reactiveInstance = reactive(instance)

  return reactiveInstance
}
