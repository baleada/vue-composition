import metadata from '@baleada/logic/metadata'

const { pipes } = metadata

export default function toPipeCompositionFunctions () {
  const vueImport = `import { ref } from 'vue'`,
        logicImport = `import { ${pipes.join(', ')} } from '@baleada/logic'`,
        pipeCompositionFunctions = pipes
          .map(name => toPipeCompositionFunction(name))
          .join('\n\n')

  return `\
${vueImport}
${logicImport}

${pipeCompositionFunctions}
`
}

export function toPipeCompositionFunction (name) {
  return `\
export function use${capitalize(name)} (options) {
  const pipe = ${name}(options)
  return state => ref(pipe(state.value))
}
`
}

function capitalize (word) {
  if (!word) {
    return word
  }
  
  return `${word[0].toUpperCase()}${word.slice(1)}`
}
