import resolveRef from './resolveRef'

export default function(options) {
  const resolvedOptions = options
  if (typeof resolvedOptions !== 'function') {
    for (let property in resolvedOptions) {
      resolvedOptions[property] = resolveRef(resolvedOptions[property])
    }
  }
  return resolvedOptions
}
