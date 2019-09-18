module.exports = {
  vue: libraryName => {
  return `\
import { reactive, computed } from '@vue/composition-api'\n\
import { ${libraryName} } from '@baleada/logic'\n\
import { toProvisions } from '@baleada/logic/helpers'\n\
\n\
export default function use${libraryName} (state, options) {\n\
  const instance = reactive(new ${libraryName}(state, options))\n\
  return computed(() => toProvisions(instance))\n\
}\n`
  },
  react: () => '',
}
