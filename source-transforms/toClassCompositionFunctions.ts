import { metadata } from '@baleada/logic/metadata'
import type { Metadatum } from '@baleada/logic/metadata'

const { classes } = metadata

export function toClassCompositionFunctions () {
  const vueImport = `import { ref, onBeforeUnmount } from 'vue'`,
        vueTypesImport = `import type { Ref } from 'vue'`,
        logicImport = `import { ${classes.map(({ name }) => name).join(', ')}, ListenableSupportedType, RecognizeableSupportedEvent } from '@baleada/logic'`,
        logicTypesImport = `import type { ${classes.map(({ typeExports }) => typeExports).flat().join(', ')} } from '@baleada/logic'`,
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
  generics: genericsArray,
  optionsGenerics: optionsGenericsArray,
  state,
  stateType,
}: Metadatum) {
  const generics = genericsArray.length > 0 ? `<${genericsArray.join(', ')}>` : '',
        firstGenericWithoutExtends = genericsArray.length > 0 ? `<${genericsArray[0].replace(/ extends .+$/, '')}>` : '',
        optionsGenerics = optionsGenericsArray.length > 0 ? `<${optionsGenericsArray.join(', ')}>` : '',
        init = `\
  const instance = new ${name}${firstGenericWithoutExtends}(${state}, options)
  const reactiveInstance = ref(instance)
`,
        cleanup = needsCleanup ? '  onBeforeUnmount(() => reactiveInstance.value.stop())\n' : ''

  return `\
export function use${name}${generics} (${state}: ${stateType}, options?: ${name}Options${optionsGenerics}): Ref<${name}${firstGenericWithoutExtends}> {
${init}\
${cleanup}\
  return reactiveInstance as Ref<${name}${firstGenericWithoutExtends}>
}
`
}
