class Professional{
    constructor(nombre, edad, peso, altura, retirado, nacionalidad, numero_oscars, profesion, foto){
        this.age = edad;
        this.name = nombre;
        this.weight = peso;
        this.height = altura;
        this.isRetired = retirado;
        this.nationality = nacionalidad;
        this.oscarsNumber = numero_oscars;
        this.profession = profesion;
        this.photo = foto;
    }
    printAll(){
        console.log(this);
    }
}
class Movie {
    constructor(titulo, anyo_lanzamiento, nacionalidad, genero, foto){
        this.title = titulo;
        this.releaseYear = anyo_lanzamiento;
        this.nacionality = nacionalidad;
        this.genre = genero;
        this.writer ;
        this.director ;
        this.language;
        this.plataforma;
        this.isMCU;
        this.mainCharacterName;
        this.producer;
        this.distributor;
        this.actors ;
        this.photo = foto;
    }
    printAll() {
        console.log(this);
    }
}
class Imdb{
    constructor(movies){
        this.peliculas = [movies];
    }
    escribirEnficheroJSON(nombreFichero){
        let stringNombreFichero = JSON.stringify(this);
        fs.writeFileSync(nombreFichero,stringNombreFichero);
    }
    obtenerInstanciaIMDB(nombreFichero){
        let nuevo_objeto = JSON.parse(fs.readFileSync(nombreFichero));
        return nuevo_objeto;
    }
}


function N_personaje(){
    let name = document.getElementById("nombre").value;
    let age = document.getElementById("edad").value;
    let weight = document.getElementById("peso").value;
    let height = document.getElementById("altura").value;
    let isRetired = document.getElementById("retirado").value;
    let nationality = document.getElementById("nacionalidad").value;
    let oscars = document.getElementById("oscars").value;
    let profession = document.getElementById("profesion").value;
    let photo = document.getElementById("foto");
    let n_personaje = new Professional(name, age, weight, height, isRetired, nationality, oscars, profession, photo);
    console.log(n_personaje);
        document.getElementById("profesionales").innerHTML += `
            <div class="card bg-danger" style="width: 18rem;">
            <img src="${n_personaje.photo}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${n_personaje.name}</h5>
                <p class="card-text">Edad: ${n_personaje.age}</p>
                <p class="card-text">Peso: ${n_personaje.weight}</p>
                <p class="card-text">Altura: ${n_personaje.height}</p>
                <p class="card-text">Retirado: ${n_personaje.isRetired}</p>
                <p class="card-text">Nacionalidad: ${n_personaje.nationality}</p>
                <p class="card-text">Oscars: ${n_personaje.oscarsNumber}</p>
                <p class="card-text">Profesión: ${n_personaje.profession}</p>
                <a href="#" class="btn btn-dark">Añadir a película</a>
            </div>
        </div>`
    if(profession.toLowerCase() == "actor"){
        document.getElementById("actor").innerHTML += `<option>${n_personaje.name}</option>`
    }else if(profession.toLowerCase() == "escritor"){
        document.getElementById("escritor").innerHTML += `<option>${n_personaje.name}</option>`
    }else if(profession.toLowerCase() == "director"){
        document.getElementById("director").innerHTML += `<option>${n_personaje.name}</option>`
    }
} 
function N_pelicula(){
    let tittle = document.getElementById("titulo").value;
    let year = document.getElementById("año").value;
    let nationality = document.getElementById("nacionalidad").value;
    let genre = document.getElementById("genero").value;
    let photo = document.getElementById("foto_peli").value;
    let n_pelicula = new Movie(tittle,year,nationality,genre,photo);
    console.log(n_pelicula);
    n_pelicula.writer = document.getElementById("escritor").value;
    n_pelicula.actors =document.getElementById("actor").value;
    n_pelicula.director = document.getElementById("director").value;
    document.getElementById("peliculas").innerHTML += `
        <div class="card bg-danger" style="width: 18rem;">
        <img src="${n_pelicula.photo}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${n_pelicula.title}</h5>
            <p class="card-text">Año de publicación: ${n_pelicula.releaseYear}</p>
            <p class="card-text">Nacionalidad: ${n_pelicula.nacionality}</p>
            <p class="card-text">Género: ${n_pelicula.genre}</p>
            <p class="card-text">Directores: ${n_pelicula.director}</p>
            <p class="card-text">Escritores: ${n_pelicula.writer}</p>
            <p class="card-text">Actores: ${n_pelicula.actors}</p>
            <a href="#" class="btn btn-dark">Añadir a película</a>
        </div>
    </div>`
}