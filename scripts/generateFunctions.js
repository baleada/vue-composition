const fs = require('fs'),
      functionBuilders = require('./functionBuilders')

function generateFunctions (framework) {
  const libraries = fs.readFileSync('./node_modules/@baleada/logic/index.js', 'utf8')
    .split('{\n')[1]
    .split('\n}')[0]
    .replace(/,/g, '')
    .split('\n')
    .map(libraryName => libraryName.trim())

  libraries.forEach(libraryName => {
    const fnxn = functionBuilders[framework](libraryName)
    writeCompositionFunction(libraryName, fnxn, framework)
  })

  console.log(`Generated ${libraries.length} ${framework} functions`)
}

function writeCompositionFunction (libraryName, fnxn, framework) {
  fs.writeFileSync(
    `./src/${framework}/use${libraryName}.js`,
    fnxn
  )
}

module.exports = {
  generateFunctions
}
