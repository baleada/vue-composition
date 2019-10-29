import { reactive } from '@vue/composition-api';
import Touchable from '@baleada/logic/lib/classes/Touchable';
export default function useTouchable(state, options) {
  var instance = new Touchable(state, options),
      reactiveInstance = reactive(instance);
  return reactiveInstance;
}