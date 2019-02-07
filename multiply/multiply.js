    /** Tipos de requires */
    const fs = require('fs'); //Packages from node
    //const fs = require('express');   // External package
    //const fs = require('./myfile'); // Internal package
    const colors = require('colors');

    let createFile = (base, limit=10)=> {
        return new Promise((resolve, reject) => {
            if (!Number(base)) {
                console.log('===================');
                console.log(`${ base } is not a number.`);
                console.log('===================');
                return;
            }
            let data = '';
            for (let i = 1; i <= limit; i++) {
                console.log(`${ base } * ${ i } = ${ base * i }`);
                data += `${ base } * ${ i } = ${ base * i }\n`;
            }

            fs.writeFile(`tables/table-${ base }.txt`, data, (err) => {
                if (err) reject(err);
                resolve(`table-${ base }.txt`);
                console.log('The file has been saved!');
            });
        });
    }

    let listTable = (base, limit=10) => {
        console.log('==================='.green);
        for (let i = 1; i <= limit; i++) {
            console.log(`${ base } * ${ i } = ${ base * i }`.green);
        }
        console.log('==================='.green);
    }

    module.exports = { createFile, listTable };