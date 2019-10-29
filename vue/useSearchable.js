import { reactive } from '@vue/composition-api';
import Searchable from '@baleada/logic/lib/classes/Searchable';
export default function useSearchable(state, options) {
  var instance = new Searchable(state, options),
      reactiveInstance = reactive(instance);
  return reactiveInstance;
}