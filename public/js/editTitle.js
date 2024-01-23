const modalClose = document.querySelectorAll('[data-te-modal-dismiss]');

let formId = "";

function settingUpNeededElements() {
    formId = "editForm" + IdToRemember;    
}

//GETTING VALUES
function getRatingInput() {		
	let idRatingInput = "rating" + IdToRemember;
    let input = document.getElementById(idRatingInput).value;
    return input;
}

function getTitleInput() {		
	let idTitleInput = "originalTitle" + IdToRemember;
    let input = document.getElementById(idTitleInput).value;
    return input;
}

function getReleaseDateStartYearInput() {		
	let idReleaseDateStartYearInput = "releaseDate" + IdToRemember;
    let input = document.getElementById(idReleaseDateStartYearInput).value;
    return input;
}

function getReleaseDateEndYearInput() {		
	let idReleaseDateEndYearInput = "releaseDateEndYear" + IdToRemember;
    let input;
    
    if (document.getElementById(idReleaseDateEndYearInput) != null) {
        input = document.getElementById(idReleaseDateEndYearInput).value;
    } else input = null;
	
    return input;
}

function getIMDbRatingInput() {		
	let idIMDbRatingInput = "imdbRating" + IdToRemember;
    let input = document.getElementById(idIMDbRatingInput).value;
    return input;
}

function getFileInput() {		
	let idFileInput = "fileName" + IdToRemember;
    let input = document.getElementById(idFileInput).value;
    return input;
}
//  ...  //

function clearOtherMessagesEdit(failedInput) {    
    let idRatingDiv = "errorMessageForRating" + IdToRemember;
    let ratingElement = document.getElementById(idRatingDiv);

    let idTitleDiv = "errorMessageForTitle" + IdToRemember;
    let titleElement = document.getElementById(idTitleDiv);
    let idTitleInput = "originalTitle" + IdToRemember;
    let titleUserInput = document.getElementById(idTitleInput);
    
    let idReleaseDateDiv = "errorMessageForReleaseDate" + IdToRemember;
    let releaseDateElement = document.getElementById(idReleaseDateDiv);
    
    let idIMDbRatingDiv = "errorMessageForIMDbRating" + IdToRemember;
    let iMDbRatingElement = document.getElementById(idIMDbRatingDiv);

    let idFileDiv = "errorMessageForEditFileType" + IdToRemember;
    let imageElement = document.getElementById(idFileDiv);
    
    if (failedInput == "rating") {
        if (titleElement.innerHTML == errorMessageForNoTitle) {
            titleElement.innerHTML = "";
            titleUserInput.classList.remove("border-2", "border-[#af1e1e]");
        }
        
        if (releaseDateElement.innerHTML == errorMessageForReleaseDate) {
            releaseDateElement.innerHTML = "";
        }
        
        if (iMDbRatingElement.innerHTML == errorMessageForRatings) {
            iMDbRatingElement.innerHTML = "";
        }

        if (imageElement.innerHTML == errorMessageForFileType) {
            imageElement.innerHTML = "";
        }
    }
    
    if (failedInput == "title") {
        if (ratingElement.innerHTML == errorMessageForRatings) {
            ratingElement.innerHTML = "";
        }
        
        if (releaseDateElement.innerHTML == errorMessageForReleaseDate) {
            releaseDateElement.innerHTML = "";
        }
        
        if (iMDbRatingElement.innerHTML == errorMessageForRatings) {
            iMDbRatingElement.innerHTML = "";
        }

        if (imageElement.innerHTML == errorMessageForFileType) {
            imageElement.innerHTML = "";
        }
    }

    if (failedInput == "releaseDate") {
        if (ratingElement.innerHTML == errorMessageForRatings) {
            ratingElement.innerHTML = "";
        }
        
        if (titleElement.innerHTML == errorMessageForNoTitle) {
            titleElement.innerHTML = "";
            titleUserInput.classList.remove("border-2", "border-red-500");
        }
        
        if (iMDbRatingElement.innerHTML == errorMessageForRatings) {
            iMDbRatingElement.innerHTML = "";
        }

        if (imageElement.innerHTML == errorMessageForFileType) {
            imageElement.innerHTML = "";
        }
    }

    if (failedInput == "imdbRating") {
        if (ratingElement.innerHTML == errorMessageForRatings) {
            ratingElement.innerHTML = "";
        }
        
        if (titleElement.innerHTML == errorMessageForNoTitle) {
            titleElement.innerHTML = "";
            titleUserInput.classList.remove("border-2", "border-red-500");
        }

        if (releaseDateElement.innerHTML == errorMessageForReleaseDate) {
            releaseDateElement.innerHTML = "";
        }

        if (imageElement.innerHTML == errorMessageForFileType) {
            imageElement.innerHTML = "";
        }
    }

    if (failedInput == "fileType") {
        if (ratingElement.innerHTML == errorMessageForRatings) {
            ratingElement.innerHTML = "";
        }
        
        if (titleElement.innerHTML == errorMessageForNoTitle) {
            titleElement.innerHTML = "";
            titleUserInput.classList.remove("border-2", "border-red-500");
        }

        if (releaseDateElement.innerHTML == errorMessageForReleaseDate) {
            releaseDateElement.innerHTML = "";
        }

        if (iMDbRatingElement.innerHTML == errorMessageForRatings) {
            iMDbRatingElement.innerHTML = "";
        }
    }
}

function isHiddenInputsShown() {
    let divId = "optionalInfoCheckbox" + IdToRemember;
    let checkBox = document.getElementById(divId);

    if (checkBox.checked == true) {
        return true;
    } else return false;
}

//FOR SELECT TITLETYPE
function selectTitleTypeEdit(event) {
    let idDirector = "director" + IdToRemember;
    let directorInput = document.getElementById(idDirector);
    let idWriter = "writer" + IdToRemember;     
    let writerInput = document.getElementById(idWriter);
    let idCreator = "creator" + IdToRemember;
    let creatorInput = document.getElementById(idCreator);
    let idReleaseDateEndYear = "releaseDateEndYear" + IdToRemember;
    let releaseDateInput = document.getElementById(idReleaseDateEndYear);
    
    if (event.target.value === "Movie" || event.target.value === "Short" || event.target.value === "Tv Episode" || 
        event.target.value === "Tv Movie" || event.target.value === "Tv Short" || event.target.value === "Tv Special" || 
        event.target.value === "Video" || event.target.value === "Video Game") {
        
        creatorInput.setAttribute("disabled", true);
        creatorInput.classList.add("opacity-25");
        directorInput.removeAttribute("disabled");
        directorInput.classList.remove("opacity-25");
        writerInput.removeAttribute("disabled");
        writerInput.classList.remove("opacity-25");       
        
        if (releaseDateInput != null) {
            releaseDateInput.setAttribute("disabled", true);
            releaseDateInput.classList.add("opacity-25");
        }        
    }

    if (event.target.value === "Tv Series" || event.target.value === "Tv Mini Series") {
        directorInput.setAttribute("disabled", true);
        directorInput.classList.add("opacity-25");       
        writerInput.setAttribute("disabled", true);
        writerInput.classList.add("opacity-25");
        creatorInput.removeAttribute("disabled");
        creatorInput.classList.remove("opacity-25");
        
        if (releaseDateInput != null) {
            releaseDateInput.removeAttribute("disabled");
            releaseDateInput.classList.remove("opacity-25");
        }        
    }

    if (event.target.value === "Podcast Episode" || event.target.value === "Podcast Series") {
        directorInput.setAttribute("disabled", true);
        directorInput.classList.add("opacity-25");
        writerInput.setAttribute("disabled", true);
        writerInput.classList.add("opacity-25");       
        creatorInput.setAttribute("disabled", true);
        creatorInput.classList.add("opacity-25");
        
        if (releaseDateInput != null) {
            releaseDateInput.removeAttribute("disabled");
            releaseDateInput.classList.remove("opacity-25");
        }
    }

    if (event.target.value === "Music Video") {
        creatorInput.setAttribute("disabled", true);
        creatorInput.classList.add("opacity-25");       
        writerInput.setAttribute("disabled", true);
        writerInput.classList.add("opacity-25");
        directorInput.removeAttribute("disabled");
        directorInput.classList.remove("opacity-25");
        
        if (releaseDateInput != null) {
            releaseDateInput.setAttribute("disabled", true);
            releaseDateInput.classList.add("opacity-25");
        }        
    }    
}
//  ...  //

function validateForm() {    
    let inputTitleValue = getTitleInput();
    let inputRatingValue = getRatingInput();
    let inputIMDbRatingValue = getIMDbRatingInput();
    let inputReleaseDateStartYearValue = getReleaseDateStartYearInput();
    let inputReleaseDateEndYearValue = getReleaseDateEndYearInput();
    let inputFileName = getFileInput();
    
    if (isHiddenInputsShown()) {
        let whichInputFailed;

        if (!validateRatings(inputRatingValue)) {
            let divId = "errorMessageForRating" + IdToRemember;
            let manipulatedDiv = document.getElementById(divId);
            manipulatedDiv.innerHTML = errorMessageForRatings;
            manipulatedDiv.style.color = colorForErrorMessages;
            manipulatedDiv.focus();
                
            whichInputFailed = "rating";            
            clearOtherMessagesEdit(whichInputFailed);            
            return false;
        }
        
        //Title can't be empty!
        if (!validateTitle(inputTitleValue)) {
            let divId = "errorMessageForTitle" + IdToRemember;
            let manipulatedDiv = document.getElementById(divId);
            manipulatedDiv.innerHTML = errorMessageForNoTitle;
            manipulatedDiv.style.color = colorForErrorMessages;
            let idTitleInput = "originalTitle" + IdToRemember;
            let titleUserInput = document.getElementById(idTitleInput);
            titleUserInput.classList.add("border-2", "border-[#af1e1e]");
    
            whichInputFailed = "title";
            clearOtherMessagesEdit(whichInputFailed);            
            return false;
        }

        if (!validateReleaseDate(inputReleaseDateStartYearValue, inputReleaseDateEndYearValue)) {
            let divId = "errorMessageForReleaseDate" + IdToRemember;
            let manipulatedDiv = document.getElementById(divId);
            manipulatedDiv.innerHTML = errorMessageForReleaseDate;
            manipulatedDiv.style.color = colorForErrorMessages;
    
            whichInputFailed = "releaseDate";
            clearOtherMessagesEdit(whichInputFailed);
            return false;
        }
    
        if (!validateRatings(inputIMDbRatingValue)) {
            let divId = "errorMessageForIMDbRating" + IdToRemember;
            let manipulatedDiv = document.getElementById(divId);            
            manipulatedDiv.innerHTML = errorMessageForRatings;
            manipulatedDiv.style.color = colorForErrorMessages;
    
            whichInputFailed = "imdbRating";
            clearOtherMessagesEdit(whichInputFailed);
            return false;
        }
    
        if (!validateFileType(inputFileName)) {
            let divId = "errorMessageForEditFileType" + IdToRemember;
            let manipulatedDiv = document.getElementById(divId);
            manipulatedDiv.innerHTML = errorMessageForFileType;
            manipulatedDiv.style.color = colorForErrorMessages;
    
            whichInputFailed = "fileType";
            clearOtherMessagesEdit(whichInputFailed);
            return false;
        }
    } else {
        if (!validateRatings(inputRatingValue)) {
            let divId = "errorMessageForRating" + IdToRemember;
            let manipulatedDiv = document.getElementById(divId);
            manipulatedDiv.innerHTML = errorMessageForRatings;
            manipulatedDiv.style.color = colorForErrorMessages;
            
            return false;
        }
    }
}

function resettingFieldsAttributeToDefault() {
    let idDirector = "director" + IdToRemember;
    let directorInput = document.getElementById(idDirector);
    directorInput.removeAttribute("disabled");
    let idWriter = "writer" + IdToRemember;     
    let writerInput = document.getElementById(idWriter);
    writerInput.removeAttribute("disabled");
    let idCreator = "creator" + IdToRemember;
    let creatorInput = document.getElementById(idCreator);
    creatorInput.removeAttribute("disabled");
    let idReleaseDateEndYear = "releaseDateEndYear" + IdToRemember;
    let releaseDateInput = document.getElementById(idReleaseDateEndYear);    
    if (releaseDateInput != null) {
        releaseDateInput.removeAttribute("disabled");
    }    
}

function afterModalIsClosed() {
    let selectedForm = document.getElementById(formId);
    selectedForm.reset();
    
    clearingErrorMessagesForEditForm();
    resettingFieldsAttributeToDefault();
    
    let divId = "hiddenInputs" + IdToRemember;
    let manipulatedDiv = document.getElementById(divId);
    
    if (!manipulatedDiv.classList.contains("hidden")) {
        manipulatedDiv.classList.add("hidden");
    }
}

for (let i = 0; i < modalClose.length; i++) {
    modalClose[i].addEventListener("click", function(e) {
        afterModalIsClosed();
    });
}