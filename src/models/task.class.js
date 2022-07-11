import { LEVELS } from "./levels.enum";

export class TaskClass{
    titulo = '';
    descripcion = '';
    completed = false;
    level = LEVELS.NORMAL;
    constructor(titulo,descripcion,completed,level) {
        this.titulo=titulo;
        this.descripcion = descripcion;
        this.completed = completed;
        this.level = level;
    }
}