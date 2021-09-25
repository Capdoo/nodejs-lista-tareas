require('colors')

const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');

//const { mostrarMenu, pausa } = require('./helpers/mensajes')


console.clear()

const main = async() => {

    console.log('Hola Mundo');

    let opt = '';

    const tareas = new Tareas();

    do {
        console.clear()
        opt = await inquirerMenu();    
        console.log({opt});

        switch (opt) {
            case '1':
                const desc = await leerInput('Descripción: ');
                //Creo las tareas por medio del objeto tareas
                tareas.crearTarea(desc)
                console.log(desc)
                break;
        
            case '2':
                console.log(tareas.listadoArr)
                break;
        }

        await pausa();

    } while (opt !== '0');

}

main()











