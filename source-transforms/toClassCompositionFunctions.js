import metadata from '@baleada/logic/metadata'

const { classes } = metadata

export default function toClassCompositionFunctions () {
  const vueImport = `import { ref, onBeforeUnmount } from 'vue'`,
        logicImport = `import { ${classes.map(({ name }) => name).join(', ')} } from '@baleada/logic'`,
        classCompositionFunctions = classes
          .map(cl_ss => toClassCompositionFunction(cl_ss))
          .join('\n\n')

  return `\
${vueImport}
${logicImport}

${classCompositionFunctions}
`
}

export function toClassCompositionFunction ({ name, needsCleanup }) {
  const init = `\
const instance = new ${name}(state, options),
      reactiveInstance = ref(instance)
`,
      cleanup = needsCleanup ? '  onBeforeUnmount(() => reactiveInstance.value.stop())\n' : ''

  return `\
export function use${name} (state, options) {
  ${init}\
${cleanup}\
  return reactiveInstance
}
`
}
