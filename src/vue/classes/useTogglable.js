import { ref } from '@vue/composition-api'
import { Togglable } from '@baleada/logic'

export default function useTogglable (state, options) {
  const instance = new Togglable(state, options),
        reactiveInstance = ref(instance)
  return reactiveInstance
}
