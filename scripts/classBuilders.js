module.exports = {
  vue: ({ name, usesDOM, needsCleanup }) => {
    const vueImport = `import { ref${ usesDOM ? ', onMounted' : ''}${ needsCleanup ? ', onBeforeUnmount' : ''} } from '@vue/composition-api'\n`,
          utilImport = usesDOM
            ? `import { resolveRef, resolveOptionsRefs } from '../util'\n`
            : '',
          init = usesDOM
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
import useReactive from '../util/useReactive'\n\
\n\
export default function use${name} (state, options) {\n\
  const instance = new ${name}(state, options)\n\
  return useReactive(instance)\n\
}\n`,
  svelte: ({ name }) => '',
}
