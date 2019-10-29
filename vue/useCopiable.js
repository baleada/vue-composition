import { reactive } from '@vue/composition-api';
import Copiable from '@baleada/logic/lib/classes/Copiable';
export default function useCopiable(state, options) {
  var instance = new Copiable(state, options),
      reactiveInstance = reactive(instance);
  return reactiveInstance;
}