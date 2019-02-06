const argv = require('./config/yargs').argv;
let {createFile, listTable} = require('./multiply/multiply');

let command = argv._[0];

switch(command) {
    case 'list':
        listTable(argv.base, argv.limit);
    break;
    case 'create':
        console.log(`here: ${argv.base}`)
        createFile(argv.base, argv.limit)
        .then(file => console.log(`file created ${ file }`))
        .catch(err => console.log(err));
    break;
    default:
        console.log('command no valid');
    break;
}

