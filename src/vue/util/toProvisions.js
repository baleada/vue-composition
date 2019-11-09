export default function toProvisions(instance) {
  const publicProperties = {
    prototype: Object.getOwnPropertyNames(Object.getPrototypeOf(instance)).slice(1), // don't include constructor
    instance: Object.getOwnPropertyNames(instance)
  }

  return publicProperties.instance.concat(publicProperties.prototype)
    .reduce(
      (provisions, property) => ({
        ...provisions,
        [property]: (typeof instance[property] === 'function') ? instance[property].bind(instance) : instance[property]
      }),
      {}
    )
}
