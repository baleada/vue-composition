const fs = require('fs')

function generateIndex (framework) {
  const fnxns = fs
          .readdirSync(`./src/${framework}`)
          .filter(file => file !== 'index.js')
          .map(fnxn => ({
            path: `./${fnxn}`,
            name: fnxn.split('.')[0],
          })),
        imported = fnxns.reduce((imported, fnxn) => `${imported}import ${fnxn.name} from '${fnxn.path}'\n`, ''),
        exported = fnxns.reduce((exported, fnxn) => `${exported}  ${fnxn.name},\n`, 'export {\n') + '}'

  fs.writeFileSync(
    `./src/${framework}/index.js`,
    `\
${imported}\n${exported}\n\
`
  )

  console.log(`Indexed ${fnxns.length} ${framework} functions.`)
}

module.exports = {
  generateIndex
}
