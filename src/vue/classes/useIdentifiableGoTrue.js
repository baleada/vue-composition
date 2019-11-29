import { ref } from '@vue/composition-api'
import { IdentifiableGoTrue } from '@baleada/logic'

export default function useIdentifiableGoTrue (state, options) {
  const instance = new IdentifiableGoTrue(state, options),
        reactiveInstance = ref(instance)
  return reactiveInstance
}
