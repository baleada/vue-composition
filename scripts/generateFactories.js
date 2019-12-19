const fs = require('fs'),
      { factories } = require('@baleada/logic/metadata')

module.exports = function(framework) {
  factories.forEach(({ name }) => {
    const composition = `\
import { ${name} } from '@baleada/logic/factories'\n\
\n\
export default function use${capitalize(name)} (state, options) {\n\
  return ${name}(state, options)\n\
}\n\
`
    writeFunction(name, composition, framework)
  })

  console.log(`Generated ${factories.length} ${framework} useFactory functions`)
}

function capitalize (word) {
  return word.length > 0 ? `${word[0].toUpperCase()}${word.slice(1)}` : word
}

function writeFunction (name, composition, framework) {
  fs.writeFileSync(
    `./src/${framework}/factories/use${capitalize(name)}.js`,
    composition
  )
}
