let page = 1;
class Pelicula {
    constructor(imgUrl, titulo, fecha, puntos) {
        this.imgUrl = imgUrl;
        this.titulo = titulo;
        this.fecha = fecha;
        this.puntos = puntos;
    }
}

getCartelera(page);
async function getCartelera(page) {
    let data = []
    const response = await fetch(`${API_BASE_URL}movie/now_playing?api_key=${API_KEY}&language=es-ES&page=${page}`)
    const responseData = await response.json()
    data = responseData?.results
    console.log(data)
    pintaPelicula(data)
}

function pintaPelicula(peliculas) {
    let i = 0;
    while (i < 20) {
        var pelicula = new Pelicula(IMAGE_BASE_URL + peliculas[i].poster_path, peliculas[i].title, peliculas[i].release_date, peliculas[i].vote_average);
        let cadena = "<div class=\"pelicula\"> <img class=\"portada\" src=\"" + pelicula.imgUrl + "\">"
        cadena += "<span>" + pelicula.puntos
        if(pelicula.puntos.toString().length == 1) cadena += ".0"
        cadena += "</span>"
        cadena += "<div class=\"titulo\">" + pelicula.titulo + "</div>"
        document.querySelector(".contenido").innerHTML += cadena;
        i++;
    }
}

document.querySelector(".more").addEventListener("click", function () {
    page++;
    getCartelera(page);
})

window.onscroll = function () { scrollFunction();GoTop(); };

function scrollFunction() {
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        document.querySelector("nav").className = "scrollNav navbar navbar-expand-lg navbar-light bg-light";
        document.getElementById("nav").style.border="var(--detalles) solid 4px";
    } else {
        document.querySelector("nav").className = "navbar navbar-expand-lg navbar-light bg-light";
        document.getElementById("nav").style.border="0";
    }
}

function GoTop()
{
    let top = document.getElementById("ir-arriba");
    if(window.scrollY==0) top.style.visibility="hidden";
    else top.style.visibility="visible";
}

document.querySelector("#ir-arriba").addEventListener('click',function () {
    if(window.scrollY!=0)
    { window.scrollTo(50,0);
    console.log("ea")}
});
