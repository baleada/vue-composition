const fs = require('fs'),
      { factories } = require('@baleada/logic/metadata')

module.exports = function() {
  factories.forEach(({ name }) => {
    const composition = `\
import { ${name} } from '@baleada/logic'\n\
\n\
export default function use${capitalize(name)} (state, options) {\n\
  return ${name}(state, options)\n\
}\n\
`
    writeFunction(name, composition)
  })

  console.log(`Generated ${factories.length} useFactory functions`)
}

function capitalize (word) {
  return word.length > 0 ? `${word[0].toUpperCase()}${word.slice(1)}` : word
}

function writeFunction (name, composition) {
  fs.writeFileSync(
    `./src/factories/use${capitalize(name)}.js`,
    composition
  )
}
