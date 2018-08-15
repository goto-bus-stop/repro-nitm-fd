console.log('with nitm:')

var cp = require('nitm')(
  [],
  [process.execPath, './child.js'],
  { stdio: ['inherit', 'inherit', 'inherit', 'pipe'] }
)

cp.stdio[3].pipe(process.stdout)
