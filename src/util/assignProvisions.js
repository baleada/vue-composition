export default function(reactiveInstance, provisions) {
  for (let property in provisions) {
    reactiveInstance[propery] = provisions[property]
  }
}
