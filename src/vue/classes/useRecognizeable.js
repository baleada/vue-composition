import { ref } from '@vue/composition-api'
import { Recognizeable } from '@baleada/logic'

export default function useRecognizeable (state, options) {
  const instance = new Recognizeable(state, options),
        reactiveInstance = ref(instance)
  return reactiveInstance
}
