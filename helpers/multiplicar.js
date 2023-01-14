const fs = require('node:fs');
const colors = require('colors');

const crearArchivo = async (base, listar = false, hasta = 10) => {
    try {

        let salida = '';

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`
        }

        if (listar) {
            console.log("=============".blue);
            console.log(`Tabla del ${base}`.green);
            console.log("=============".blue);
            console.log(salida);
        }

        // fs.writeFile( `tabla-${ base }.txt`, salida, (err) => {
        //     if(err) throw err;
        //     console.log(`tabla-${ base }.txt creado`);
        // })

        fs.writeFileSync(`./salida/tabla-${base}-hasta-${ hasta }.txt`, salida);

        return `tabla-${base}-hasta${ hasta }.txt`

    } catch (error) {
        throw error
    }



}

module.exports = {
    crearArchivo
}
