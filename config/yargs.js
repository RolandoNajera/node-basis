const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limit: {
        demand: false,
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs').command('create', 'Create a new file', opts)
    .command('list', 'Show in console the multiply', opts)
    .help()
    .argv;

module.exports = { argv }
