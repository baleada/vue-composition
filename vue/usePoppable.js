import { reactive } from '@vue/composition-api';
import Poppable from '@baleada/logic/lib/classes/Poppable';
export default function usePoppable(state, options) {
  var instance = new Poppable(state, options),
      reactiveInstance = reactive(instance);
  return reactiveInstance;
}