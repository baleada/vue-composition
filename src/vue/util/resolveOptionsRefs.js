import resolveRef from './resolveRef'

export default function(options) {
  for (let property in options) {
    options[property] = resolveRef(options[property])
  }
}
