import { reactive } from '@vue/composition-api'
import { Searchable } from '@baleada/logic'

export default function useSearchable (state, options) {
  const instance = new Searchable(state, options),
        reactiveInstance = reactive(instance)
  return reactiveInstance
}
