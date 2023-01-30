class MovieService{
    async Search(primaryUrl, pageNumber = 1){
        animatedLoaders[0].style.display = 'block'
    
        let selectedType = document.getElementById('type_selector')
        let titleToGet = document.getElementById('film_title_inpt').value
        let gettedData    
        
        gettedData = await fetch(primaryUrl +
            `&s=${titleToGet}&type=${selectedType.options[selectedType.selectedIndex].value}&page=${pageNumber}`)
        return await gettedData.json()
    }
    async GetMovie(primaryUrl, gettedFilmsArr, currentFilmIndex){
        let gettedSubData
        let gettedSubDataJson
        
        gettedSubData = await fetch(primaryUrl + `&i=${gettedFilmsArr.Search[currentFilmIndex].imdbID}&plot=full`)
        gettedSubDataJson = await gettedSubData.json()
    
        document.getElementById('film_info_poster').src = gettedFilmsArr.Search[currentFilmIndex].Poster
    
        TitleDiv.innerText = `Title:
            ${gettedSubDataJson.Title}`
        ReleasedDiv.innerText = `Released:
            ${gettedSubDataJson.Released}`
        GenreDiv.innerText = `Genre:
            ${gettedSubDataJson.Genre}`
        CountryDiv.innerText = `Country:
            ${gettedSubDataJson.Country}`
        DirectorDiv.innerText = `Director:
            ${gettedSubDataJson.Director}`
        WriterDiv.innerText = `Writer:
            ${gettedSubDataJson.Writer}`
        ActorsDiv.innerText = `Actors:
            ${gettedSubDataJson.Actors}`
        AwardsDiv.innerText = `Awards:
            ${gettedSubDataJson.Awards}`
    
        document.body.style.pointerEvents = 'none'
        window.location = '#film_info_window'
    }
}