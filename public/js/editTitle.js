const modalClose = document.querySelectorAll('[data-te-modal-dismiss]');
const editStarsDivWidth = 32;
//document.getElementById("editStar1Rating").clientWidth; // w = 32

let formId = "";

function settingUpNeededElements() {
    formId = "editForm" + IdToRemember;    
}

//GETTING VALUES
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

function getFileInput() {		
	let idFileInput = "imageName" + IdToRemember;
    let input = document.getElementById(idFileInput).value;
    return input;
}

function getFileInputSize() {		
	let idFileInput = "imageName" + IdToRemember;    
    const file = document.getElementById(idFileInput);
    let fileSize;
    
    if (getFileInput() != "") {
        fileSize = file.files[0].size;
    } else fileSize = 0;
    
	return fileSize;
}
//  ...  \\

function clearOtherMessagesEdit(failedInput) {
    let idTitleDiv = "errorMessageForTitle" + IdToRemember;
    let titleElement = document.getElementById(idTitleDiv);
    let idTitleInput = "originalTitle" + IdToRemember;
    let titleUserInput = document.getElementById(idTitleInput);    
    let idReleaseDateDiv = "errorMessageForReleaseDate" + IdToRemember;
    let releaseDateElement = document.getElementById(idReleaseDateDiv);    
    let idReleaseDateInput = "releaseDate" + IdToRemember;
    let releaseDateInput = document.getElementById(idReleaseDateInput);
    let idReleaseDateEndYearInput = "releaseDateEndYear" + IdToRemember;
    let releaseDateEndYearInput = document.getElementById(idReleaseDateEndYearInput);
    let idDashBetweenDates = "dashBetweenDates" + IdToRemember;
    let dashBetweenDates = document.getElementById(idDashBetweenDates);
    let idFileDiv = "errorMessageForEditFileInput" + IdToRemember;
    let imageElement = document.getElementById(idFileDiv);
    
    if (failedInput == "title") {        
        if (releaseDateElement.innerHTML == errorMessageForReleaseDate) {
            releaseDateElement.innerHTML = "";
            releaseDateInput.classList.remove("border-[#af1e1e]");
            releaseDateEndYearInput.classList.remove("border-[#af1e1e]");
            dashBetweenDates.style.color = "";
        }
        if (imageElement.innerHTML == errorMessageForFileType || imageElement.innerHTML == errorMessageForFileSize) {
            imageElement.innerHTML = "";
        }
    }
    if (failedInput == "releaseDate") {        
        if (titleElement.innerHTML == errorMessageForNoTitle) {
            titleElement.innerHTML = "";
            titleUserInput.classList.remove("border-[#af1e1e]");
        }
        if (imageElement.innerHTML == errorMessageForFileType || imageElement.innerHTML == errorMessageForFileSize) {
            imageElement.innerHTML = "";
        }
    }
    if (failedInput == "fileType" || failedInput == "fileSize") {        
        if (titleElement.innerHTML == errorMessageForNoTitle) {
            titleElement.innerHTML = "";
            titleUserInput.classList.remove("border-[#af1e1e]");
        }
        if (releaseDateElement.innerHTML == errorMessageForReleaseDate) {
            releaseDateElement.innerHTML = "";
            releaseDateInput.classList.remove("border-[#af1e1e]");
            releaseDateEndYearInput.classList.remove("border-[#af1e1e]");
            dashBetweenDates.style.color = "";
        }
    }
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
//  ...  \\

function validateForm() {    
    let inputTitleValue = getTitleInput();    
    let inputReleaseDateStartYearValue = getReleaseDateStartYearInput();
    let inputReleaseDateEndYearValue = getReleaseDateEndYearInput();
    let inputFileName = getFileInput();
    let inputFileSize = getFileInputSize();
    
    let whichInputFailed;
        
    //Title can't be empty!
    if (!validateTitle(inputTitleValue)) {
        let divId = "errorMessageForTitle" + IdToRemember;
        let manipulatedDiv = document.getElementById(divId);
        manipulatedDiv.innerHTML = errorMessageForNoTitle;
        manipulatedDiv.style.color = colorForErrorMessages;
        let idTitleInput = "originalTitle" + IdToRemember;
        let titleUserInput = document.getElementById(idTitleInput);
        titleUserInput.classList.add("border-[#af1e1e]");

        whichInputFailed = "title";
        clearOtherMessagesEdit(whichInputFailed);
        console.log("IN " + inputTitleValue);          
        return false;
    }
    if (!validateReleaseDate(inputReleaseDateStartYearValue, inputReleaseDateEndYearValue)) {
        let divId = "errorMessageForReleaseDate" + IdToRemember;
        let manipulatedDiv = document.getElementById(divId);
        manipulatedDiv.innerHTML = errorMessageForReleaseDate;
        manipulatedDiv.style.color = colorForErrorMessages;
        let idReleaseDateInput = "releaseDate" + IdToRemember;
        let releaseDateInput = document.getElementById(idReleaseDateInput);
        let idReleaseDateEndYearInput = "releaseDateEndYear" + IdToRemember;
        let releaseDateEndYearInput = document.getElementById(idReleaseDateEndYearInput);
        let idDashBetweenDates = "dashBetweenDates" + IdToRemember;
        let dashBetweenDates = document.getElementById(idDashBetweenDates);
        releaseDateInput.classList.add("border-[#af1e1e]");
        releaseDateEndYearInput.classList.add("border-[#af1e1e]");
        dashBetweenDates.style.color = colorForErrorMessages;

        whichInputFailed = "releaseDate";
        clearOtherMessagesEdit(whichInputFailed);
        return false;
    }
    if (!validateFileType(inputFileName)) {
        let divId = "errorMessageForEditFileInput" + IdToRemember;
        let manipulatedDiv = document.getElementById(divId);
        manipulatedDiv.innerHTML = errorMessageForFileType;
        manipulatedDiv.style.color = colorForErrorMessages;

        whichInputFailed = "fileType";
        clearOtherMessagesEdit(whichInputFailed);
        return false;
    }
    if (!validateFileSize(inputFileSize)) {
        let divId = "errorMessageForEditFileInput" + IdToRemember;
        let manipulatedDiv = document.getElementById(divId);
        manipulatedDiv.innerHTML = errorMessageForFileSize;
        manipulatedDiv.style.color = colorForErrorMessages;

        whichInputFailed = "fileSize";
        clearOtherMessagesEdit(whichInputFailed);
        return false;
    }
    
    return true;
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
    
    //Resetting stars for user rating
    settingStarsEmpty();
    removeEventListenersForChosenRatingTooltips();
    removingEventListenersForUserRatingChoosing();
    setHiddenInputWhenClosingModalWithoutSaving();
    //Resetting stars for imdb rating
    settingStarsEmptyForImdbRating();
    removeEventListenersForChosenImdbRatingTooltips();
    removingEventListenersForImdbRatingChoosing();
    setHiddenInputForImdbRatingWhenClosingModalWithoutSaving();
    
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