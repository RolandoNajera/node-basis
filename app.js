let mult = require('./multiply/multiply');

let argv = process.argv;
let parameter = argv[2];
let base = parameter.split('=')[1];

mult.createFile(base)
    .then(file => console.log(`file created ${ file }`))
    .catch(err => console.log(err));