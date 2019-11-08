import { reactive } from '@vue/composition-api'
import { Editable } from '@baleada/logic'

export default function useEditable (state, options) {
  const instance = new Editable(state, options),
        reactiveInstance = reactive(instance)

  return reactiveInstance
}
