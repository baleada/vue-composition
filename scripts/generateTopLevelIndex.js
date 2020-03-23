const fs = require('fs')

// TODO: extract generate multi-directory index functionality to @baleada/prepare

module.exports = function() {
  const classes = getFiles('classes'),
        factories = getFiles('factories'),
        all = [
          ...classes,
          ...factories
        ],
        imported = all.reduce((imported, fnxn) => `${imported}import ${fnxn.name} from '${fnxn.path}'\n`, ''),
        exported = all.reduce((exported, fnxn) => `${exported}  ${fnxn.name},\n`, 'export {\n') + '}'

  fs.writeFileSync(
    `./src/index.js`,
    `\
${imported}\n${exported}\n\
`
  )

  console.log(`Indexed ${all.length} functions.`)
}

function getFiles(category) {
  return fs
    .readdirSync(`./src/${category}`)
    .filter(file => file !== 'index.js' && /\.js$/.test(file))
    .map(file => ({
      path: `./${category}/${file}`,
      name: file.split('.')[0],
    }))
}
