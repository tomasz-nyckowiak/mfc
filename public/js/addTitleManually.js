const icons = document.querySelectorAll('#selected-value-example [data-te-rating-icon-ref]')
const titleUserInput = document.getElementById("originalTitle");
const directorInput = document.getElementById("director");
const writerInput = document.getElementById("writer");
const creatorInput = document.getElementById("creator");
const releaseDateStartYear = document.getElementById("releaseDate");
const dashBetweenDates = document.getElementById("dashBetweenDates");
const releaseDateEndYear = document.getElementById("releaseDateEndYear");
const divForNoTitleErrorMessage = document.getElementById("errorMessageForTitle");
const divForReleaseDateErrorMessage = document.getElementById("errorMessageForReleaseDate");
const divForFileInputErrorMessage = document.getElementById("errorMessageForFileInput");
const spanElementForPlotCharactersCount = document.getElementById("charactersForPlot");
const starsDivWidth = document.getElementById("star1Rating").clientWidth; // w = 32

//GETTING VALUES
function titleInput() {		
	let input = titleUserInput.value;
    return input;
}

function releaseDateStartYearInput() {		
	let input = releaseDateStartYear.value;			
	return input;
}

function releaseDateEndYearInput() {		
	let input = releaseDateEndYear.value;			
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

function fileInputSize() {		
	const file = document.getElementById("fileName");
    let fileSize;
    
    if (fileInput() != "") {
        fileSize = file.files[0].size;
    } else fileSize = 0;
    
	return fileSize;
}
//  ...  \\

function scrollToIncorrectInput(failedInput) {
    if (failedInput == "title") {
        titleUserInput.scrollIntoView();
    }
    if (failedInput == "releaseDate") {
        releaseDateStartYear.scrollIntoView();
    }
    if (failedInput == "fileType" || failedInput == "fileSize") {
        document.getElementById("fileName").scrollIntoView();
    }
}

function clearOtherMessages(failedInput) {
    if (failedInput == "title") {
        if (divForReleaseDateErrorMessage.innerHTML == errorMessageForReleaseDate) {
            divForReleaseDateErrorMessage.innerHTML = "";
            releaseDateStartYear.classList.remove("border-[#af1e1e]");
            releaseDateEndYear.classList.remove("border-[#af1e1e]");
            dashBetweenDates.style.color = "";
        }
        if (divForFileInputErrorMessage.innerHTML == errorMessageForFileType) {
            divForFileInputErrorMessage.innerHTML = "";
        }
        if (divForFileInputErrorMessage.innerHTML == errorMessageForFileSize) {
            divForFileInputErrorMessage.innerHTML = "";
        }
    }
    
    if (failedInput == "releaseDate") {
        if (divForNoTitleErrorMessage.innerHTML == errorMessageForNoTitle) {
            divForNoTitleErrorMessage.innerHTML = "";
            titleUserInput.classList.remove("border-[#af1e1e]");
        }
        if (divForFileInputErrorMessage.innerHTML == errorMessageForFileType) {
            divForFileInputErrorMessage.innerHTML = "";
        }        
        if (divForFileInputErrorMessage.innerHTML == errorMessageForFileSize) {
            divForFileInputErrorMessage.innerHTML = "";
        }
    }
    
    if (failedInput == "fileType" || failedInput == "fileSize") {
        if (divForNoTitleErrorMessage.innerHTML == errorMessageForNoTitle) {
            divForNoTitleErrorMessage.innerHTML = "";
            titleUserInput.classList.remove("border-[#af1e1e]");
        }
        if (divForReleaseDateErrorMessage.innerHTML == errorMessageForReleaseDate) {
            divForReleaseDateErrorMessage.innerHTML = "";
            releaseDateStartYear.classList.remove("border-[#af1e1e]");
            releaseDateEndYear.classList.remove("border-[#af1e1e]");
            dashBetweenDates.style.color = "";
        }
    }
}

function validateFormForAddingTitleManually() {    
    let inputTitleValue = titleInput();    
    let inputReleaseDateStartYearValue = releaseDateStartYearInput();
    let inputReleaseDateEndYearValue = releaseDateEndYearInput();
    let inputFileName = fileInput();
    let inputFileSize = fileInputSize();
    let whichInputFailed;
    
    //Title can't be empty!
    if (!validateTitle(inputTitleValue)) {
        divForNoTitleErrorMessage.innerHTML = errorMessageForNoTitle;
        divForNoTitleErrorMessage.style.color = colorForErrorMessages;
        titleUserInput.classList.add("border-[#af1e1e]");

        whichInputFailed = "title";
        clearOtherMessages(whichInputFailed);
        scrollToIncorrectInput(whichInputFailed);
        return false;
    }    
    
    if (!validateReleaseDate(inputReleaseDateStartYearValue, inputReleaseDateEndYearValue)) {
        divForReleaseDateErrorMessage.innerHTML = errorMessageForReleaseDate;
        divForReleaseDateErrorMessage.style.color = colorForErrorMessages;
        releaseDateStartYear.classList.add("border-[#af1e1e]");
        releaseDateEndYear.classList.add("border-[#af1e1e]");
        dashBetweenDates.style.color = colorForErrorMessages;

        whichInputFailed = "releaseDate";
        clearOtherMessages(whichInputFailed);
        scrollToIncorrectInput(whichInputFailed);
        return false;
    }
    
    if (!validateFileType(inputFileName)) {
        divForFileInputErrorMessage.innerHTML = errorMessageForFileType;
        divForFileInputErrorMessage.style.color = colorForErrorMessages;

        whichInputFailed = "fileType";
        clearOtherMessages(whichInputFailed);
        scrollToIncorrectInput(whichInputFailed);
        return false;
    }
    
    if (!validateFileSize(inputFileSize)) {
        divForFileInputErrorMessage.innerHTML = errorMessageForFileSize;
        divForFileInputErrorMessage.style.color = colorForErrorMessages;

        whichInputFailed = "fileSize";
        clearOtherMessages(whichInputFailed);
        scrollToIncorrectInput(whichInputFailed);
        return false;
    }
    return true;
}

//FOR SELECT TITLETYPE INPUT
function selectTitleType(event) {    
    if (event.target.value === "Movie" || event.target.value === "Short" || event.target.value === "TV Episode" || 
        event.target.value === "TV Movie" || event.target.value === "TV Short" || event.target.value === "TV Special" || 
        event.target.value === "Video" || event.target.value === "Video Game") {        
        
        creatorInput.setAttribute("disabled", true);
        creatorInput.classList.add("opacity-25");
        directorInput.removeAttribute("disabled");
        directorInput.classList.remove("opacity-25");
        writerInput.removeAttribute("disabled");
        writerInput.classList.remove("opacity-25");
        releaseDateEndYear.setAttribute("disabled", true);
        releaseDateEndYear.classList.add("opacity-25");
    }    
    
    if (event.target.value === "TV Series" || event.target.value === "TV Mini Series") {
        directorInput.setAttribute("disabled", true);
        directorInput.classList.add("opacity-25");
        writerInput.setAttribute("disabled", true);
        writerInput.classList.add("opacity-25");
        creatorInput.removeAttribute("disabled");
        creatorInput.classList.remove("opacity-25");
        releaseDateEndYear.removeAttribute("disabled");
        releaseDateEndYear.classList.remove("opacity-25");
    }    
    
    if (event.target.value === "Podcast Episode" || event.target.value === "Podcast Series") {
        directorInput.setAttribute("disabled", true);
        directorInput.classList.add("opacity-25");
        writerInput.setAttribute("disabled", true);
        writerInput.classList.add("opacity-25");
        creatorInput.setAttribute("disabled", true);
        creatorInput.classList.add("opacity-25");
        releaseDateEndYear.removeAttribute("disabled");
        releaseDateEndYear.classList.remove("opacity-25");
    }
    
    if (event.target.value === "Music Video") {
        creatorInput.setAttribute("disabled", true);
        creatorInput.classList.add("opacity-25");
        writerInput.setAttribute("disabled", true);
        writerInput.classList.add("opacity-25");
        directorInput.removeAttribute("disabled");
        directorInput.classList.remove("opacity-25");
        releaseDateEndYear.setAttribute("disabled", true);
        releaseDateEndYear.classList.add("opacity-25");
    }    
}
//  ...  \\

function countCharacters(id) {
    let element = document.getElementById(id).value;
    spanElementForPlotCharactersCount.innerText = element.length;    
}

function afterClearingFormGoBackToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function resetForm() {
    let form = document.getElementById("formAddManually");
    form.reset();
    
    spanElementForPlotCharactersCount.innerText = "0";    
    titleUserInput.classList.remove("border-[#af1e1e]");
    titleUserInput.classList.add("border-[#708090]");
    divForNoTitleErrorMessage.innerHTML = "";
    releaseDateStartYear.classList.remove("border-[#af1e1e]");
    releaseDateEndYear.classList.remove("border-[#af1e1e]");
    dashBetweenDates.style.color = "";
    divForReleaseDateErrorMessage.innerHTML = "";
    divForFileInputErrorMessage.innerHTML = "";
    
    directorInput.removeAttribute("disabled");
    directorInput.classList.remove("opacity-25");
    writerInput.removeAttribute("disabled");
    writerInput.classList.remove("opacity-25");
    creatorInput.removeAttribute("disabled");
    creatorInput.classList.remove("opacity-25");
    releaseDateEndYear.removeAttribute("disabled");
    releaseDateEndYear.classList.remove("opacity-25");

    resetStarRating();
    resetImdbStarRating();
    afterClearingFormGoBackToTop();
}