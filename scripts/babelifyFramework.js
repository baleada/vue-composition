const { execSync } = require('child_process'),
      empty = require('./emptyDir')

module.exports = function(framework) {
  empty(`./${framework}`)
  const command = `npx babel src/${framework} --out-dir ${framework}`
  execSync(command, (err, stdout, stderr) => {
    if (err) {
      // node couldn't execute the command
      return
    }

    // the *entire* stdout and stderr (buffered)
    console.log(`stdout: ${stdout}`)
    console.log(`stderr: ${stderr}`)
  })
}
