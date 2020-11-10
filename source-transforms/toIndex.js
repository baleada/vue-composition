import metadata from '@baleada/logic/metadata'

export default function toIndex () {

  const { classes, factories } = metadata,
        classesNames = classes.map(({ name }) => `use${name}`).join(', '),
        factoriesNames = factories.map(({ name }) => `use${capitalize(name)}`).join(', '),
        classesImport = `import { ${classesNames} } from './classes/index.js'`,
        factoriesImport = `import { ${factoriesNames} } from './factories/index.js'`,
        allExport = `export { ${classesNames}, ${factoriesNames} }`

  return `\
${classesImport}\n\
${factoriesImport}\n\
\n\
${allExport}\n\
`
}

function capitalize (word) {
  if (!word) {
    return word
  }
  
  return `${word[0].toUpperCase()}${word.slice(1)}`
}
