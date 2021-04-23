const { metadata } = require('@baleada/logic/metadata')
// import type { Metadatum } from '@baleada/logic/metadata'


const { classes } = metadata

function toClassCompositionFunctions () {
  const vueImport = `import { ref, onBeforeUnmount } from 'vue'`,
        vueTypesImport = `import type { Ref } from 'vue'`,
        logicImport = `import { ${classes.map(({ name }) => name).join(', ')}, ListenableSupportedType, RecognizeableSupportedEvent } from '@baleada/logic'`,
        logicTypesImport = `import type { ${classes.map(toTypeImport).join(', ')} } from '@baleada/logic'`,
        classCompositionFunctions = classes
          .map(cl_ss => toClassCompositionFunction(cl_ss))
          .join('\n\n')

  return `\
${vueImport}
${vueTypesImport}
${logicImport}
${logicTypesImport}

${classCompositionFunctions}
`
}

function toClassCompositionFunction ({
  name,
  needsCleanup,
  generic: rawGeneric,
  optionsGeneric: rawOptionsGeneric,
  state,
  stateType
}) {
  const generic = rawGeneric ? `<${rawGeneric}>` : '',
        withoutExtends = rawGeneric ? `<${rawGeneric.replace(/ extends .+$/, '')}>` : '',
        optionsGeneric = rawOptionsGeneric ? `<${rawOptionsGeneric}>` : ''
        init = `\
  const instance = new ${name}${withoutExtends}(${state}, options)
  const reactiveInstance = ref(instance)
`,
        cleanup = needsCleanup ? '  onBeforeUnmount(() => reactiveInstance.value.stop())\n' : ''

  return `\
export function use${name}${generic} (${state}: ${stateType}, options?: ${name}Options${optionsGeneric}): Ref<${name}${withoutExtends}> {
${init}\
${cleanup}\
  return reactiveInstance as Ref<${name}${withoutExtends}>
}
`
}

function toTypeImport ({ name, generic, stateType: rawStateType }) {
  const stateType = rawStateType
    .replace(/^string$/, '')
    .replace(/\[\]/, '')
    .replace(/<.*?>/, '')
  
  const withoutExtends = generic.replace(/ extends .+$/, '')

  return (stateType && stateType !== withoutExtends) ? `${stateType}, ${name}Options` : `${name}Options`
}

module.exports = {
  toClassCompositionFunctions,
  toClassCompositionFunction
}
