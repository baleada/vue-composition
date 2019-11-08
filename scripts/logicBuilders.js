module.exports = {
  vue: className => {
  return `\
import { reactive } from '@vue/composition-api'\n\
import { ${className} } from '@baleada/logic'\n\
\n\
export default function use${className} (state, options) {\n\
  const instance = new ${className}(state, options),\n\
        reactiveInstance = reactive(instance)\n\
\n\
  return reactiveInstance\n\
}\n`
  },
  react: className => `\
import { ${className} } from '@baleada/logic'\n\
import useReactive from '../util/react/useReactive'\n\
\n\
export default function use${className} (state, options) {\n\
  const instance = new ${className}(state, options)\n\
  return useReactive(instance)\n\
}\n`,
  svelte: className => '',
}
