
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
        
        let renderedCardList = `<div class="cards">`; // ebbe akartuk beleírni a kódot azért kellett, js szempontból string ami itt van az gész ezért így lehet hogy a div eleje itt aztán a lezáró a for után adjuk hozzá
        //for ciklus ami végig megy a cardsArrayen
        for (const incomingMovie of incomingMoviesArray) {
           renderedCardList += card2(incomingMovie.title, incomingMovie.year, incomingMovie.rate)
           
            //minden lépcsőjénél hozzá adja a renderedCardList hez az adott elemet a megfeleő div cardban
           /*  renderedCardList  += ` 
                <div class="card">
                    <h3>${incomingMovie.title}</h3>
                    <div class="time">${incomingMovie.year}</div>
                    <div class="rate">${incomingMovie.rate}</div>
                </div>
                ` */
        }
        renderedCardList += `</div>`; //cards elemeknek legyen lezáró tagje azért van itt
        console.log(renderedCardList);
        //returnöli az elékszült elemekkel feltöltött renderedCardListet
        return renderedCardList;
    }

    
    let newGoodMovies = []; //ezt az arrayt töltjük fel a kövi sorokkal

    for (const movieSend of movies) { 
       
        if (movieSend.year > 2000 && movieSend.rate >= 8) {
           newGoodMovies.push(movieSend);
        }
    }

    newGoodMovies.sort(function(a, b){return a.year - b.year}); //az újonnan létrehozott tömböt rendezzük sorba

    rootElement.insertAdjacentHTML("beforeend", renderAllCardElements(newGoodMovies)); //meghínjuk a rendereallcardselementset,jön a string, abban fut le for ciklus. 
    
}

window.addEventListener("load", loadEvent);





