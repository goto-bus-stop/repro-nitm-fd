console.log('without nitm:')

var cp = require('child_process').spawn(
  process.execPath, ['./child.js'],
  { stdio: ['inherit', 'inherit', 'inherit', 'pipe'] }
)

cp.stdio[3].pipe(process.stdout)
