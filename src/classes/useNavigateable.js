import { ref } from '@vue/composition-api'
import { Navigateable } from '@baleada/logic'

export default function useNavigateable (state, options) {
const instance = new Navigateable(state, options),
      reactiveInstance = ref(instance)
return reactiveInstance
}
