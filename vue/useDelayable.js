import { reactive } from '@vue/composition-api';
import Delayable from '@baleada/logic/lib/classes/Delayable';
export default function useDelayable(state, options) {
  var instance = new Delayable(state, options),
      reactiveInstance = reactive(instance);
  return reactiveInstance;
}