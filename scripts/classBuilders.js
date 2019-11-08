module.exports = {
  vue: ({ name, usesDOM, needsCleanup }) => {
    const vueImport = `import { reactive${ usesDOM ? ', onMounted' : ''}${ needsCleanup ? ', beforeUnMounted' : ''} } from '@vue/composition-api'`,
          params = `state, options${usesDOM ? ', store' : ''}`,
          init = usesDOM
            ? `const instance = new ${name}(state, options)`
            : `onMounted(() => (store = new ${name}(state, options)))`

    return `\
${vueImport}\n\
import { ${name} } from '@baleada/logic'\n\
\n\
export default function use${name} (${params}) {\n\
  ${init}\n\
  ${cleanup}\
  ${returnVal}\
  return reactive(instance)\n\
}\n`
  },
  react: name => `\
import { ${name} } from '@baleada/logic'\n\
import useReactive from '../util/react/useReactive'\n\
\n\
export default function use${name} (state, options) {\n\
  const instance = new ${name}(state, options)\n\
  return useReactive(instance)\n\
}\n`,
  svelte: name => '',
}
