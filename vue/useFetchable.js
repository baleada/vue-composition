import { reactive } from '@vue/composition-api';
import Fetchable from '@baleada/logic/lib/classes/Fetchable';
export default function useFetchable(state, options) {
  var instance = new Fetchable(state, options),
      reactiveInstance = reactive(instance);
  return reactiveInstance;
}