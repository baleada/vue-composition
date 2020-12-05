import metadata from '@baleada/logic/metadata'

const { classes } = metadata

export default function toClassCompositionFunctions () {
  const vueImport = `import { ref, onMounted, onBeforeUnmount } from 'vue'`,
        logicImport = `import { ${classes.map(({ name }) => name).join(', ')} } from '@baleada/logic'`,
        utilImport = `import { resolveRef, resolveOptionsRefs } from '../util'`,
        classCompositionFunctions = classes
          .map(cl_ss => toClassCompositionFunction(cl_ss))
          .join('\n\n')

  return `\
${vueImport}\n\
${logicImport}\n\
${utilImport}\n\
\n\
${classCompositionFunctions}\n\
`
}

export function toClassCompositionFunction ({ name, usesDOM, needsCleanup }) {
  const init = usesDOM
          ? `\
const reactiveInstance = ref({})\n\
  onMounted(() => {\n\
  state = resolveRef(state)\n\
  options = resolveOptionsRefs(options)\n\
  const instance = new ${name}(state, options)\n\
  // provisions = toProvisions(instance)\n\
  \n\
  reactiveInstance.value = instance
  // assignProvisions(reactiveInstance, provisions)\n\
})\n\
`
          : `\
const instance = new ${name}(state, options),\n\
  reactiveInstance = ref(instance)\n\
`,
      cleanup = needsCleanup ? '  onBeforeUnmount(() => reactiveInstance.value.stop())\n' : ''

  return `\
export function use${name} (state, options) {\n\
  ${init}\
${cleanup}\
  return reactiveInstance\n\
}
`
}
