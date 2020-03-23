import { isRef } from '@vue/composition-api'

export default function(possibleRef) {
  return isRef(possibleRef)
    ? possibleRef.value
    : possibleRef
}
