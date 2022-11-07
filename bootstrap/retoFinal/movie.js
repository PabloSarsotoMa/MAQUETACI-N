var profesional = require("./profesional")
export class Movie {
    constructor(titulo, anyo_lanzamiento, nacionalidad, genero, foto){
        this.title = titulo;
        this.releaseYear = anyo_lanzamiento;
        this.nacionality = nacionalidad;
        this.genre = genero;
        this.writer = [];
        this.director = [];
        this.language;
        this.plataforma;
        this.isMCU;
        this.mainCharacterName;
        this.producer;
        this.distributor;
        this.actors = [];
        this.photo = foto;
    }
    printAll() {
        console.log(this);
    }
}