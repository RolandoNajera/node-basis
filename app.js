let mult = require('./multiply/multiply');

let base = '5';

mult.createFile(base)
    .then(file => console.log(`file created ${ file }`))
    .catch(err => console.log(err));