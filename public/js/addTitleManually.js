const icons = document.querySelectorAll('#selected-value-example [data-te-rating-icon-ref]')
const titleUserInput = document.getElementById("originalTitle");
const divForNoTitleErrorMessage = document.getElementById("errorMessageForTitle");
const divForReleaseDateErrorMessage = document.getElementById("errorMessageForReleaseDate");
const divForRatingErrorMessage = document.getElementById("errorMessageForRating");
const divForIMDbRatingErrorMessage = document.getElementById("errorMessageForIMDbRating");
const divForFileTypeErrorMessage = document.getElementById("errorMessageForFileType");
const spanElementForPlotCharactersCount = document.getElementById("charactersForPlot");

//GETTING VALUES
function titleInput() {		
	let input = titleUserInput.value;
    return input;
}

function releaseDateStartYearInput() {		
	let input = document.getElementById("releaseDate").value;			
	return input;
}

function releaseDateEndYearInput() {		
	let input = document.getElementById("releaseDateEndYear").value;			
	return input;
}

function ratingInput() {		
	let input = document.getElementById("rating").value;	
    return input;
}

function iMDbRatingInput() {		
	let input = document.getElementById("imdbRating").value;			
	return input;
}

function fileInput() {		
	let input = document.getElementById("fileName").value;			
	return input;
}
//  ...  //

function clearOtherMessages(failedInput) {    
    if (failedInput == "title") {
        if (divForReleaseDateErrorMessage.innerHTML == errorMessageForReleaseDate) {
            divForReleaseDateErrorMessage.innerHTML = "";
        }
        
        if (divForIMDbRatingErrorMessage.innerHTML == errorMessageForIMDbRating) {
            divForIMDbRatingErrorMessage.innerHTML = "";
        }

        if (divForFileTypeErrorMessage.innerHTML == errorMessageForFileType) {
            divForFileTypeErrorMessage.innerHTML = "";
        }
    }

    if (failedInput == "releaseDate") {
        if (divForNoTitleErrorMessage.innerHTML == errorMessageForNoTitle) {
            divForNoTitleErrorMessage.innerHTML = "";
            titleUserInput.classList.remove("border-2", "border-red-500");
        }
        
        if (divForIMDbRatingErrorMessage.innerHTML == errorMessageForIMDbRating) {
            divForIMDbRatingErrorMessage.innerHTML = "";
        }

        if (divForFileTypeErrorMessage.innerHTML == errorMessageForFileType) {
            divForFileTypeErrorMessage.innerHTML = "";
        }
    }

    if (failedInput == "imdbRating") {
        if (divForNoTitleErrorMessage.innerHTML == errorMessageForNoTitle) {
            divForNoTitleErrorMessage.innerHTML = "";
            titleUserInput.classList.remove("border-2", "border-red-500");
        }

        if (divForReleaseDateErrorMessage.innerHTML == errorMessageForReleaseDate) {
            divForReleaseDateErrorMessage.innerHTML = "";
        }

        if (divForFileTypeErrorMessage.innerHTML == errorMessageForFileType) {
            divForFileTypeErrorMessage.innerHTML = "";
        }
    }

    if (failedInput == "fileType") {
        if (divForNoTitleErrorMessage.innerHTML == errorMessageForNoTitle) {
            divForNoTitleErrorMessage.innerHTML = "";
            titleUserInput.classList.remove("border-2", "border-red-500");
        }

        if (divForReleaseDateErrorMessage.innerHTML == errorMessageForReleaseDate) {
            divForReleaseDateErrorMessage.innerHTML = "";
        }

        if (divForIMDbRatingErrorMessage.innerHTML == errorMessageForIMDbRating) {
            divForIMDbRatingErrorMessage.innerHTML = "";
        }
    }
}

function validateFormForAddingTitleManually() {    
    let inputTitleValue = titleInput();
    let inputRatingValue = ratingInput();
    let inputIMDbRatingValue = iMDbRatingInput();
    let inputReleaseDateStartYearValue = releaseDateStartYearInput();
    let inputReleaseDateEndYearValue = releaseDateEndYearInput();
    let inputFileName = fileInput();    
    let whichInputFailed;
    
    //Title can't be empty!
    if (!validateTitle(inputTitleValue)) {
        divForNoTitleErrorMessage.innerHTML = errorMessageForNoTitle;
        divForNoTitleErrorMessage.style.color = colorForErrorMessages;
        titleUserInput.classList.add("border-2", "border-red-500");

        whichInputFailed = "title";
        clearOtherMessages(whichInputFailed);
        return false;
    }
    
    if (!validateReleaseDate(inputReleaseDateStartYearValue, inputReleaseDateEndYearValue)) {
        divForReleaseDateErrorMessage.innerHTML = errorMessageForReleaseDate;
        divForReleaseDateErrorMessage.style.color = colorForErrorMessages;

        whichInputFailed = "releaseDate";
        clearOtherMessages(whichInputFailed);
        return false;
    }

    if (!validateRatings(inputRatingValue)) {
        divForRatingErrorMessage.innerHTML = errorMessageForRatings;
        divForRatingErrorMessage.style.color = colorForErrorMessages;

        whichInputFailed = "imdbRating";
        clearOtherMessages(whichInputFailed);
        return false;
    }

    if (!validateRatings(inputIMDbRatingValue)) {
        divForIMDbRatingErrorMessage.innerHTML = errorMessageForRatings;
        divForIMDbRatingErrorMessage.style.color = colorForErrorMessages;

        whichInputFailed = "imdbRating";
        clearOtherMessages(whichInputFailed);
        return false;
    }

    if (!validateFileType(inputFileName)) {
        divForFileTypeErrorMessage.innerHTML = errorMessageForFileType;
        divForFileTypeErrorMessage.style.color = colorForErrorMessages;

        whichInputFailed = "fileType";
        clearOtherMessages(whichInputFailed);
        return false;
    }

    return true;
}

//FOR SELECT TITLETYPE INPUT
function selectTitleType(event) {
    let directorInput = document.getElementById("director");
    let writerInput = document.getElementById("writer");
    let creatorInput = document.getElementById("creator");
    let releaseDateInput = document.getElementById("releaseDateEndYear");
    
    if (event.target.value === "Movie" || event.target.value === "Short" || event.target.value === "Tv Episode" || 
        event.target.value === "Tv Movie" || event.target.value === "Tv Short" || event.target.value === "Tv Special" || 
        event.target.value === "Video" || event.target.value === "Video Game") {        
        
        creatorInput.setAttribute("disabled", true);
        directorInput.removeAttribute("disabled");
        writerInput.removeAttribute("disabled");
        releaseDateInput.setAttribute("disabled", true);
    }

    if (event.target.value === "Tv Series" || event.target.value === "Tv MiniSeries") {
        directorInput.setAttribute("disabled", true);
        writerInput.setAttribute("disabled", true);
        creatorInput.removeAttribute("disabled");
        releaseDateInput.removeAttribute("disabled");
    }

    if (event.target.value === "Podcast Episode" || event.target.value === "Podcast Series") {
        directorInput.setAttribute("disabled", true);
        writerInput.setAttribute("disabled", true);
        creatorInput.setAttribute("disabled", true);
        releaseDateInput.removeAttribute("disabled");
    }

    if (event.target.value === "Music Video") {
        creatorInput.setAttribute("disabled", true);
        writerInput.setAttribute("disabled", true);
        directorInput.removeAttribute("disabled");
        releaseDateInput.setAttribute("disabled", true);
    }    
}
//  ...  //

function countCharacters(id) {
    let element = document.getElementById(id).value;
    spanElementForPlotCharactersCount.innerText = element.length;    
}

function resetForm() {
    let form = document.getElementById("formAddManually");
    form.reset();
    
    spanElementForPlotCharactersCount.innerText = "0";    
    titleUserInput.classList.remove("border-2", "border-red-500");
    divForNoTitleErrorMessage.innerHTML = "";
    divForReleaseDateErrorMessage.innerHTML = "";
    divForRatingErrorMessage.innerHTML = "";
    divForIMDbRatingErrorMessage.innerHTML = "";
    divForFileTypeErrorMessage.innerHTML = "";
    
    let directorInput = document.getElementById("director");
    let writerInput = document.getElementById("writer");
    let creatorInput = document.getElementById("creator");
    let releaseDateEndYearInput = document.getElementById("releaseDateEndYear");
    directorInput.removeAttribute("disabled");
    writerInput.removeAttribute("disabled");
    creatorInput.removeAttribute("disabled");
    releaseDateEndYearInput.removeAttribute("disabled");
}