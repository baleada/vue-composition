module.exports = {
  vue: libraryName => {
  return `\
import { reactive } from '@vue/composition-api'\n\
import { ${libraryName} } from '@baleada/logic'\n\
\n\
export default function use${libraryName} (state, options) {\n\
  const instance = new ${libraryName}(state, options),\n\
        reactiveInstance = reactive(instance)\n\
\n\
  return reactiveInstance\n\
}\n`
  },
  react: libraryName => `\
import { useReducer } from "react"\n\
import { ${libraryName} } from '@baleada/logic'\n\
import onChange from 'on-change'\n\
\n\
export default function use${libraryName} (state, options) {\n\
  const [_, forceUpdate] = useReducer(x => x + 1, 0),\n\
        instance = new ${libraryName}(state, options),\n\
        reactiveInstance = onChange(instance, forceUpdate)\n\
\n\
  return reactiveInstance\n\
}\n`,
  svelte: libraryName => '',
}
