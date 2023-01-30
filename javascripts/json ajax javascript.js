let printedFilms = document.getElementsByClassName('printed_films')
let posterImages = document.getElementsByClassName('poster_img')
let filmTypes = document.getElementsByClassName('film_type')
let filmTitles = document.getElementsByClassName('film_title')
let filmYears = document.getElementsByClassName('film_year')
let filmDetails = document.getElementsByClassName('film_details')

let filmInfoDetailsDiv = document.getElementById('film_info_body')

let PosterImg = document.createElement('img')
let TitleDiv = document.createElement('div')
let ReleasedDiv = document.createElement('div')
let GenreDiv = document.createElement('div')
let CountryDiv = document.createElement('div')
let DirectorDiv = document.createElement('div')
let WriterDiv = document.createElement('div')
let ActorsDiv = document.createElement('div')
let AwardsDiv = document.createElement('div')
let CloseFilmInfoBtn = document.createElement('button')

let animatedLoaders = document.getElementsByClassName('animated_loaders_div')
let moreFilmsDownload = document.getElementById('load_more_films')



document.getElementById('search_films_btn')
            .addEventListener('click', (event) => {
    event.preventDefault()

    for (let i = 0; i < printedFilms.length; i++) {
        printedFilms[i].style.display = 'none'
    }
    gettedFilmsDiv.style.display = 'block'
    filmsDownloadDispatcher()
    animatedLoaders[0].style.display = 'none'
})


async function filmsDownloadDispatcher(pageNumber = 1) {
    const primaryUrl = 'http://www.omdbapi.com/?apikey=8345d1e6'
    let movieServiceCl = new MovieService()
    let gettedFilmsArr = await movieServiceCl.Search(primaryUrl, pageNumber)
    moreFilmsDownloadBtnDisplay(gettedFilmsArr.totalResults)
    gettedFilmsPrint(primaryUrl, movieServiceCl, gettedFilmsArr, --pageNumber)    
}

function gettedFilmsPrint(primaryUrl, movieServiceCl, gettedFilmsArr, pageNumber) {
    
    for (let i = 0; i < gettedFilmsArr.Search.length; i++) {
        posterImages[i + pageNumber * 10].src = gettedFilmsArr.Search[i].Poster
        filmTypes[i + pageNumber * 10].innerText = gettedFilmsArr.Search[i].Type
        filmTitles[i + pageNumber * 10].innerText = gettedFilmsArr.Search[i].Title
        filmYears[i + pageNumber * 10].innerText = gettedFilmsArr.Search[i].Year
        filmDetails[i + pageNumber * 10].addEventListener('click', () => {
            
            animatedLoaders[1].style.display = 'block'
            movieServiceCl.GetMovie(primaryUrl, gettedFilmsArr, i)
            
            animatedLoaders[1].style.display = 'none'
        })
        printedFilms[i + pageNumber * 10].style.display = 'inline-block'
    }
}
function moreFilmsDownloadBtnDisplay(totalResultsAmount) {
    
    if (printedFilms[totalResultsAmount - 1]?.style.display == 'none') {
        moreFilmsDownload.style.display = 'none'
    }
    else {
        moreFilmsDownload.style.display = 'inline-block'
    }
}

CloseFilmInfoBtn.addEventListener('click', () => {
    document.body.style.pointerEvents = 'auto'
    window.history.back()
})

let pageToLoadCnt = 1
moreFilmsDownload.addEventListener('click', () => {
    findedFilmsDivsCreation()
    filmsDownloadDispatcher(++pageToLoadCnt)
    setMarginsPaddingsBordersStyleClass()
    setWidth_100StyleClass()
    moreFilmsDownloadBtnDisplay()
    animatedLoaders[0].style.display = 'none'
})