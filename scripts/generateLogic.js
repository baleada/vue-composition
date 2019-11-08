const fs = require('fs'),
      logicBuilders = require('./logicBuilders')

module.exports = function(framework) {
  const classes = fs.readFileSync('./node_modules/@baleada/logic/index.js', 'utf8')
    .split('{\n')[1]
    .split('\n}')[0]
    .replace(/,/g, '')
    .split('\n')
    .map(className => className.trim())

  classes.forEach(className => {
    const fnxn = logicBuilders[framework](className)
    writeFunction(className, fnxn, framework)
  })

  console.log(`Generated ${classes.length} ${framework} functions`)
}

function writeFunction (className, fnxn, framework) {
  fs.writeFileSync(
    `./src/${framework}/logic/use${className}.js`,
    fnxn
  )
}
