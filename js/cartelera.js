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
        if (pelicula.puntos.toString().length == 1) cadena += ".0"
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

window.onscroll = function () { scrollFunction(); GoTop(); };

function scrollFunction() {
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        document.querySelector("nav").id = "scrollNav";
    } else {
        document.querySelector("nav").id = "";
    }
}

//Booton para ir arriba
function GoTop() {
    let top = document.getElementById("ir-arriba");
    if (window.scrollY == 0) top.style.visibility = "hidden";
    else top.style.visibility = "visible";
}

document.querySelector("#ir-arriba").addEventListener('click', function () {
    if (window.scrollY != 0)
        window.scrollTo(50, 0);
});

//ordenar
document.getElementById("maymen").addEventListener('change', (e) => {
    if (e.target.checked) {
        document.getElementById("menmay").checked = false;
        let pelis = document.querySelectorAll(".pelicula");
        let obj = Object.entries(pelis);
        obj.sort(MayorMenor)
        document.querySelector(".contenido").innerHTML = "";
        obj.forEach(([key, value]) => {
            document.querySelector(".contenido").appendChild(value);
        });
    }
    else {
        document.querySelector(".contenido").innerHTML = "";
        getCartelera(page);
    }
})
document.getElementById("menmay").addEventListener('change', (e) => {
    if (e.target.checked) {
        document.getElementById("maymen").checked = false;
        let pelis = document.querySelectorAll(".pelicula");
        let obj = Object.entries(pelis);
        obj.sort(MenorMayor)
        document.querySelector(".contenido").innerHTML = "";
        obj.forEach(([key, value]) => {
            document.querySelector(".contenido").appendChild(value);
        });
    }
    else {
        document.querySelector(".contenido").innerHTML = "";
        getCartelera(page);
    }
})

function MayorMenor(peliA, peliB) {
    let a = peliA[1].childNodes[2].textContent;
    let b = peliB[1].childNodes[2].textContent;
    if (a > b) return -1;
    else if (a < b) return 1;
    else return 0;
}

function MenorMayor(peliA, peliB) {
    let a = peliA[1].childNodes[2].textContent;
    let b = peliB[1].childNodes[2].textContent;
    if (a < b) return -1;
    else if (a > b) return 1;
    else return 0;
}

document.getElementById("z-a").addEventListener('change', (e) => {
    if (e.target.checked) {
        document.getElementById("a-z").checked = false;
        let pelis = document.querySelectorAll(".pelicula");
        let obj = Object.entries(pelis);
        obj.sort(ZtoA)
        document.querySelector(".contenido").innerHTML = "";
        obj.forEach(([key, value]) => {
            document.querySelector(".contenido").appendChild(value);
        });
    }
    else {
        document.querySelector(".contenido").innerHTML = "";
        getCartelera(page);
    }
})

document.getElementById("a-z").addEventListener('change', (e) => {
    if (e.target.checked) {
        document.getElementById("z-a").checked = false;
        let pelis = document.querySelectorAll(".pelicula");
        let obj = Object.entries(pelis);
        obj.sort(AtoZ)
        document.querySelector(".contenido").innerHTML = "";
        obj.forEach(([key, value]) => {
            document.querySelector(".contenido").appendChild(value);
        });
    }
    else {
        document.querySelector(".contenido").innerHTML = "";
        getCartelera(page);
    }
})

function AtoZ(peliA, peliB) {
    let a = peliA[1].childNodes[3].textContent;
    let b = peliB[1].childNodes[3].textContent;
    console.log(peliA[1].childNodes[3].textContent)
    if (a < b) return -1;
    else if (a > b) return 1;
    else return 0;
}

function ZtoA(peliA, peliB) {
    let a = peliA[1].childNodes[3].textContent;
    let b = peliB[1].childNodes[3].textContent;
    console.log(peliA[1].childNodes[3].textContent)
    if (a > b) return -1;
    else if (a < b) return 1;
    else return 0;
}
