import { ref } from '@vue/composition-api'
import { Editable } from '@baleada/logic'

export default function useEditable (state, options) {
  const instance = new Editable(state, options),
        reactiveInstance = ref(instance)
  return reactiveInstance
}
