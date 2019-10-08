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
import { useReducer } from "react"\n\
import { ${className} } from '@baleada/logic'\n\
import onChange from 'on-change'\n\
\n\
export default function use${className} (state, options) {\n\
  const [_, forceUpdate] = useReducer(x => x + 1, 0),\n\
        instance = new ${className}(state, options),\n\
        reactiveInstance = onChange(instance, forceUpdate)\n\
\n\
  return reactiveInstance\n\
}\n`,
  svelte: className => '',
}
