const fs = require('fs'),
      { subclasses } = require('@baleada/logic/metadata')

module.exports = function(framework) {
  subclasses.forEach(({ name }) => {
    const composition = `\
import { ${name} } from '@baleada/logic/subclasses'\n\
\n\
export default function use${name} (state, options) {\n\
  return new ${name}(state, options)\n\
}\n\
`
    writeFunction(name, composition, framework)
  })

  console.log(`Generated ${subclasses.length} ${framework} useSubclass functions`)
}

function writeFunction (name, composition, framework) {
  fs.writeFileSync(
    `./src/${framework}/subclasses/use${name}.js`,
    composition
  )
}
