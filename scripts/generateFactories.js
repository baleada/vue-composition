const fs = require('fs'),
      { factories } = require('@baleada/logic/metadata')

module.exports = function(framework) {
  factories.forEach(({ name }) => {
    const composition = `\
import { ${name} } from '@baleada/logic/factories'\n\
\n\
export default function use${name} (state, options) {\n\
  return new ${name}(state, options)\n\
}\n\
`
    writeFunction(name, composition, framework)
  })

  console.log(`Generated ${factories.length} ${framework} useFactory functions`)
}

function writeFunction (name, composition, framework) {
  fs.writeFileSync(
    `./src/${framework}/factories/use${name}.js`,
    composition
  )
}
