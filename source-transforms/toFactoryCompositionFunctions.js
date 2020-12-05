import metadata from '@baleada/logic/metadata'

const { factories } = metadata

export default function toFactoryCompositionFunctions () {
  const vueImport = `import { ref } from 'vue'`,
        logicImport = `import { ${factories.map(({ name }) => name).join(', ')} } from '@baleada/logic'`,
        factoryCompositionFunctions = factories
          .map(factory => toFactoryCompositionFunction(factory))
          .join('\n\n')

  return `\
${vueImport}\n\
${logicImport}\n\
\n\
${factoryCompositionFunctions}\n\
`
}

export function toFactoryCompositionFunction ({ name }) {
  return `\
export function use${capitalize(name)} (state, options) {\n\
  return ref(${name}(state, options))\n\
}\n\
`
}

function capitalize (word) {
  if (!word) {
    return word
  }
  
  return `${word[0].toUpperCase()}${word.slice(1)}`
}
