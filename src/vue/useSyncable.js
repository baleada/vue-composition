import { reactive } from '@vue/composition-api'
import Syncable from '@baleada/logic/lib/classes/Syncable'

export default function useSyncable (state, options) {
  const instance = new Syncable(state, options),
        reactiveInstance = reactive(instance)

  return reactiveInstance
}
