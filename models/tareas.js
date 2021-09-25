const Tarea = require("./tarea");


class Tareas{

    _listado = {

    };

    constructor(){
        this._listado = {};

    }

    get listadoArr(){

        const listado = [];
        //Para obtener las keys de _listado ya llenado
        Object.keys(this._listado).forEach(key => {
            const tarea_land = this._listado[key];
            listado.push(tarea_land);
            //console.log(key);
        });

        return listado;

    }

    crearTarea( desc = '' ){
        const tarea = new Tarea(desc);

        this._listado[tarea.id] = tarea;

    }
}



module.exports = Tareas;