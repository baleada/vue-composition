import { ref } from '@vue/composition-api'
import { Completeable } from '@baleada/logic'

export default function useCompleteable (state, options) {
const instance = new Completeable(state, options),
      reactiveInstance = ref(instance)
return reactiveInstance
}
