import { toLogicMetadata } from './toLogicMetadata'
import type { ClassMetadatum } from './toLogicMetadata'

const { classes } = toLogicMetadata()

export function toClassCompositionFunctions () {
  const vueImport = `import { ref, onBeforeUnmount } from 'vue'`,
        vueTypesImport = `import type { Ref } from 'vue'`,
        logicImport = `import { ${classes.map(({ name }) => name).join(', ')} } from '@baleada/logic'`,
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
}: ClassMetadatum) {
  const generics = genericsArray.length > 0
          ? `<${genericsArray.join(', ')}>`
          : '',
        genericsWithoutExtends = genericsArray.length > 0
          ? `<${genericsArray.map(generic => generic.replace(/ extends .+$/, '')).join(', ')}>`
          : '',
        optionsGenerics = optionsGenericsArray.length > 0
          ? `<${optionsGenericsArray.join(', ')}>`
          : '',
        init = `\
  const instance = new ${name}${genericsWithoutExtends}(${state}, options)
  const reactiveInstance = ref(instance)
`,
        cleanup = needsCleanup ? '  onBeforeUnmount(() => reactiveInstance.value.stop())\n' : ''

  return `\
export function use${name}${generics} (${state}: ${stateType}, options?: ${name}Options${optionsGenerics}): Ref<${name}${genericsWithoutExtends}> {
${init}\
${cleanup}\
  return reactiveInstance as unknown as Ref<${name}${genericsWithoutExtends}>
}\
`
}
