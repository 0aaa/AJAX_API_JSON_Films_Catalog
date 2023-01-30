document.body.style.fontFamily = 'sans-serif'
document.body.style.background = 'bisque'
document.body.style.textAlign = 'center'


let headerToAdd = document.createElement('h4')
let gettedFilmsDiv = document.getElementById('getted_films_div')
searchFilmsFormCreation()
findedFilmsDivsCreation()
selectedFilmInfoWindowCreation()

setMarginsPaddingsBordersStyleClass()
setWidth_100StyleClass()
setAnimatedLoaderStyle()

function searchFilmsFormCreation() {
    
    headerToAdd.innerText = 'Search:'
    document.body.insertBefore(headerToAdd, document.getElementById('search_film_form'))
    document.getElementById('search_film_form').className = 'margins_paddings_borders'
    document.getElementById('search_films_btn').className = 'width_100'
    document.getElementById('type_selector_div').style.margin = '5px 0px'
    document.getElementById('film_title_inpt').value = 'Batman'
    
    gettedFilmsDiv.style.display = 'none'
    moreFilmsDownload.style.display = 'none'
    headerToAdd = document.createElement('h4')
    headerToAdd.innerText = 'Films:'
    gettedFilmsDiv.appendChild(headerToAdd)
    
    let typeSelector = document.getElementById('type_selector')
    let optionToAdd
    for (let i = 0; i < 3; i++) {
        optionToAdd = document.createElement('option')
        switch (i) {
        case 0:
            optionToAdd.value = 'movie'
            optionToAdd.innerText = 'movie'
            break;
        case 1:
            optionToAdd.value = 'series'    
            optionToAdd.innerText = 'series'    
            break;
        case 2:
            optionToAdd.value = 'episode'
            optionToAdd.innerText = 'episode'
            break;
        }
        typeSelector.append(optionToAdd)
    }
}


function findedFilmsDivsCreation(){
    
    let filmToAddDiv
    let filmPosterImg
    let filmType
    let filmTitle
    let filmYear
    let filmDetailsBtn

    for (let i = 0; i < 10; i++) {    
        filmToAddDiv = document.createElement('div')
        
        filmPosterImg = document.createElement('img')
        filmType = document.createElement('div')
        filmTitle = document.createElement('div')
        filmYear = document.createElement('div')
        filmDetailsBtn = document.createElement('button')
        
        filmToAddDiv.className = 'printed_films margins_paddings_borders'
        filmPosterImg.className = 'poster_img'
        filmType.className = 'film_type'
        filmTitle.className = 'film_title'
        filmYear.className = 'film_year'
        filmDetailsBtn.className = 'film_details width_100'
        
        filmToAddDiv.style.display = 'none'
        filmToAddDiv.style.width = '17%'
        
        filmDetailsBtn.innerText = 'Details'
        
        filmTitle.style.fontWeight = 'bold'
        
        filmPosterImg.style.width = '100%'
        
        filmToAddDiv.appendChild(filmPosterImg)
        filmToAddDiv.appendChild(filmType)
        filmToAddDiv.appendChild(filmTitle)
        filmToAddDiv.appendChild(filmYear)
        filmToAddDiv.appendChild(filmDetailsBtn)
        
        gettedFilmsDiv.appendChild(filmToAddDiv)
    }
}

function selectedFilmInfoWindowCreation(){

    headerToAdd = document.createElement('h4')
    filmInfoDetailsDiv.style.zIndex = 2
    filmInfoDetailsDiv.style.margin = 'auto'
    filmInfoDetailsDiv.style.padding = '20px';
    filmInfoDetailsDiv.style.background = 'white';
    filmInfoDetailsDiv.style.width = '700px';
    
    PosterImg.id = 'film_info_poster'
    TitleDiv.id = 'film_info_title'
    ReleasedDiv.id = 'film_info_released'
    GenreDiv.id = 'film_info_genre'
    CountryDiv.id = 'film_info_country'
    DirectorDiv.id = 'film_info_director'
    WriterDiv.id = 'film_info_writer'
    ActorsDiv.id = 'film_info_actors'
    AwardsDiv.id = 'film_info_awards'
    CloseFilmInfoBtn.id = 'close_film_info'
    
    headerToAdd.innerText = 'Film info:'
    
    CloseFilmInfoBtn.className = 'width_100'
    CloseFilmInfoBtn.innerText = 'Close'
    
    PosterImg.style.float = 'left'
    PosterImg.style.margin = '5px'
    
    filmInfoDetailsDiv.appendChild(headerToAdd)
    filmInfoDetailsDiv.appendChild(PosterImg)
    filmInfoDetailsDiv.appendChild(TitleDiv)
    filmInfoDetailsDiv.appendChild(ReleasedDiv)
    filmInfoDetailsDiv.appendChild(GenreDiv)
    filmInfoDetailsDiv.appendChild(CountryDiv)
    filmInfoDetailsDiv.appendChild(DirectorDiv)
    filmInfoDetailsDiv.appendChild(WriterDiv)
    filmInfoDetailsDiv.appendChild(ActorsDiv)
    filmInfoDetailsDiv.appendChild(AwardsDiv)
    filmInfoDetailsDiv.appendChild(CloseFilmInfoBtn)
}


function setMarginsPaddingsBordersStyleClass() {
    
    let elementsMarginsPaddinsBorders = document.getElementsByClassName('margins_paddings_borders')
    for (let i = 0; i < elementsMarginsPaddinsBorders.length; i++) {
        elementsMarginsPaddinsBorders[i].style.margin = '5px'
        elementsMarginsPaddinsBorders[i].style.border = '1px grey solid'
        elementsMarginsPaddinsBorders[i].style.padding = '5px'
    }
}

function setWidth_100StyleClass() {
    
    let buttonElements = document.getElementsByClassName('width_100')
    for (let i = 0; i < buttonElements.length; i++) {
        buttonElements[i].style.width = '100%'    
    }
}

function setAnimatedLoaderStyle() {
    
    for (let i = 0; i < animatedLoaders.length; i++) {
        animatedLoaders[i].style.display = 'none'
        animatedLoaders[i].style.margin = '10px auto'
        animatedLoaders[i].style.width = '100px'    
    }
}