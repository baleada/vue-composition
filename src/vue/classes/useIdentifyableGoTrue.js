import { ref } from '@vue/composition-api'
import { IdentifyableGoTrue } from '@baleada/logic'

export default function useIdentifyableGoTrue (state, options) {
  const instance = new IdentifyableGoTrue(state, options),
        reactiveInstance = ref(instance)
  return reactiveInstance
}
