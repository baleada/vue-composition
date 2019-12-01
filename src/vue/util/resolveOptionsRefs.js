import resolveRef from './resolveRef'

export default function(options) {
  if (typeof options !== 'function') {
    for (let property in options) {
      options[property] = resolveRef(options[property])
    }
  }
}
