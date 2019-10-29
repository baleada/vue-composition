module.exports = {
  vue: className => {
  return `\
import { reactive } from '@vue/composition-api'\n\
import ${className} from '@baleada/logic/lib/classes/${className}'\n\
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
import ${className} from '@baleada/logic/lib/classes/${className}'\n\
import onChange from 'on-change'\n\
\n\
let store\n\
\n\
export default function use${className} (state, options) {\n\
  const [_, forceUpdate] = useReducer(x => x + 1, 0),\n\
        instance = store || new ${className}(state, options),\n\
        reactiveInstance = onChange(instance, (path, value) => {\n\
          store = value\n\
          forceUpdate()\n\
        })\n\
\n\
  return reactiveInstance\n\
}\n`,
  svelte: className => '',
}
