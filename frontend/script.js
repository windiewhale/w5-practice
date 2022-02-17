
function loadEvent() {
    
    let rootElement = document.getElementById("root");

    let card2 = function(title, year, rate){
        
        return ` 
        <div class="card">
            <h3>${title}</h3>
            <div class="time">${year}</div>
            <div class="rate">${rate}</div>
        </div>
        `;
    };

    let renderAllCardElements = function (incomingMoviesArray) {
        
        let renderedCardList = ""; 
        //for ciklus ami végig megy a cardsArrayen
        for (const incomingMovie of incomingMoviesArray) {
            //minden lépcsőjénél hozzá adja a renderedCardList hez az adott elemet a megfeleő div cardban
            renderedCardList  += ` 
                <div class="card">
                    <h3>${incomingMovie.title}</h3>
                    <div class="time">${incomingMovie.year}</div>
                    <div class="rate">${incomingMovie.rate}</div>
                </div>
                `
        }
        console.log(renderedCardList);
        //returnöli az elékszült elemekkel feltöltött renderedCardListet
        return renderedCardList;
    }

    /* movies.sort(function(a, b){return a.year - b.year}); //az egész adatot sorba rendezi, az eredetet */
    
    let newGoodMovies = [];

    for (const movieSend of movies) { 
        /* let newerThan2000 = false; 
        
        if (movieSend.year > 2000){ //csak akkor hívja meg ha ennek teljesül, 2000nél újabb
            newerThan2000 = true;
        }  

        if (newerThan2000){
        rootElement.insertAdjacentHTML("beforeend", card2(movieSend.title, movieSend.year, movieSend.rate)); 
        } */

        // && még egy része teljesüljön az állításnak, Math.floor bekerülhet a movieSend.rate elé, akkr kerekíti, vagy function résznél (12. sor ${Math.floor(rate)} ) ahol behívjuk az adatot, vagy külön változót csinálunk (29), amit aztán a card2 paramétereként hívjuk meg 
       // let floorRate = Math.floor(movieSend.rate);

        if (movieSend.year > 2000 && movieSend.rate >= 8) {
           newGoodMovies.push(movieSend); //így csak az kerül a tömbbe ami ezeknek a feltételeknek megfelel
           // rootElement.insertAdjacentHTML("beforeend", card2(movieSend.title, movieSend.year, floorRate)); 
        }

    }
    newGoodMovies.sort(function(a, b){return a.year - b.year}); //átrendeztük 

    rootElement.insertAdjacentHTML("beforeend", renderAllCardElements(newGoodMovies)); //elküldve újrarendezve 
    
}



window.addEventListener("load", loadEvent);





