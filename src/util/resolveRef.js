import { isRef } from 'vue'

export default function(possibleRef) {
  return isRef(possibleRef)
    ? possibleRef.value
    : possibleRef
}
