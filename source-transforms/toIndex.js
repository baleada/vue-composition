import metadata from '@baleada/logic/metadata'

export default function toIndex () {
  const { classes, pipes } = metadata,
        classesNames = classes.map(({ name }) => `use${name}`).join(', '),
        pipesNames = pipes.map(name => `use${capitalize(name)}`).join(', '),
        classesImport = `import { ${classesNames} } from './classes.js'`,
        pipesImport = `import { ${pipesNames} } from './pipes.js'`,
        allExport = `export { ${classesNames}, ${pipesNames} }`

  return `\
${classesImport}\n\
${pipesImport}\n\
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
