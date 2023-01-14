require('colors');

const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();

// const [ , , arg3 ] = process.argv
// const [ , base = 5 ] = arg3.split('=')
// console.log(arg3);

// let base = 7;

crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log(nombreArchivo.red, 'creado'))
    .catch( err => console.log(err));

    
// console.log( process.argv );
// console.log( argv );
// console.log('base yargs', argv.base );


