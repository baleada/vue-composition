module.exports = {
  vue: ({ name, usesDOM, needsCleanup }) => {
    const vueImport = `import { reactive${ usesDOM ? ', onMounted' : ''}${ needsCleanup ? ', beforeUnMounted' : ''} } from '@vue/composition-api'`,
          utilImport = usesDOM
            ? `import { toProvisions, resolveRef, resolveOptionsRefs, assignProvisions } from '../util'\n`
            : '',
          init = usesDOM
            ? `
  const instance = new ${name}(state, options),\n\
        reactiveInstance = reactive(instance)\n\
`
            : `\
  const reactiveInstance = reactive({})\n\
  onMounted(() => {\n\
    state = resolveRef(state)\n\
    options = resolveOptionsRefs(options)\n\
    const instance = new Listenable(state, options),\n\
          provisions = toProvisions(instance)\n\
\n\
    assignProvisions(reactiveInstance, provisions)\n\
  })\n\
`,
          cleanup = needsCleanup ? '  onBeforeUnmount(() => reactiveInstance.stop())\n' : ''

    return `\
${vueImport}\
${utilImport}\
import { ${name} } from '@baleada/logic'\n\
\n\
export default function use${name} (state, options) {\n\
${init}\
${cleanup}\
  return reactiveInstance\n\
}\n\
`
  },
  react: ({ name }) => `\
import { ${name} } from '@baleada/logic'\n\
import useReactive from '../util/react/useReactive'\n\
\n\
export default function use${name} (state, options) {\n\
  const instance = new ${name}(state, options)\n\
  return useReactive(instance)\n\
}\n`,
  svelte: ({ name }) => '',
}
