const errorMessageForNoTitle = "Title is required!";
const errorMessageForFileType = "Only jpg/jpeg and png files are allowed!";
const errorMessageForReleaseDate = "Invalid date!";
const errorMessageForIMDbRating = "Invalid value!";
const icons = document.querySelectorAll('#selected-value-example [data-te-rating-icon-ref]')
const titleUserInput = document.getElementById("originalTitle");
const divForNoTitleErrorMessage = document.getElementById("errorMessageForTitle");
const divForReleaseDateErrorMessage = document.getElementById("errorMessageForReleaseDate");
const divForIMDbRatingErrorMessage = document.getElementById("errorMessageForIMDbRating");
const divForFileTypeErrorMessage = document.getElementById("errorMessageForFileType");

let ratingValueToRemember = "";

icons.forEach((el) => {
  el.addEventListener('onSelect.te.rating', (e) => {
    ratingValueToRemember = e.value;
  })
})

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

function iMDbRatingInput() {		
	let input = document.getElementById("imdbRating").value;			
	return input;
}

function fileInput() {		
	let input = document.getElementById("fileName").value;			
	return input;
}

function validateYearInput(userInput) {
    let isInputValueCorrect;
    
    if (userInput.length != 4) {
        isInputValueCorrect = false;
    } else {
        if (isNaN(userInput)) {
            isInputValueCorrect = false;
        } else {
            if (userInput.includes(".")) {
                isInputValueCorrect = false;
            } else {
                if (userInput < 1900 || userInput > 3000) {
                    isInputValueCorrect = false;
                } else isInputValueCorrect = true;
            }
        }
    }
    return isInputValueCorrect;
}

function validateTitle() {
    let inputValue = titleInput();
    
    if (inputValue == "") {
        return false;
    } else return true;
}

function validateReleaseDate() {
    let isReleaseDateStartCorrect;
    let isReleaseDateEndCorrect;    
    let releaseDateStartYearInputValue = releaseDateStartYearInput();
    let releaseDateEndYearInputValue = releaseDateEndYearInput();
    
    //First is end year!
    if (releaseDateEndYearInputValue.length == "") {
        isReleaseDateEndCorrect = true;
    } else {
        isReleaseDateEndCorrect = validateYearInput(releaseDateEndYearInputValue);
    }
    
    if (releaseDateStartYearInputValue.length == "") {
        isReleaseDateStartCorrect = true;
        if (releaseDateEndYearInputValue.length == "") {
            isReleaseDateEndCorrect = true;
        } else isReleaseDateEndCorrect = false;
    } else {
        isReleaseDateStartCorrect = validateYearInput(releaseDateStartYearInputValue);
    }
    
    if (isReleaseDateStartCorrect == true && isReleaseDateEndCorrect == true) {
        if (releaseDateStartYearInputValue.length == "" && releaseDateEndYearInputValue.length == "") {
            return true;
        } else if (releaseDateEndYearInputValue.length == "") {
            return true;
        } else {
            if (releaseDateStartYearInputValue > releaseDateEndYearInputValue) {
                return false;
            } else return true;
        }
    } else return false;
}

function validateIMDbRating() {
    let isIMDbRatingValueCorrect;
    let inputIsValid;
    
    let inputValue = iMDbRatingInput();

    if (inputValue == "") {
        isIMDbRatingValueCorrect = true;
    } else {
        if (inputValue.includes(",")) {
            result = inputValue.replace(",", ".");            
            inputIsValid = checkingInputConditions(result);

            if (!inputIsValid) {
                isIMDbRatingValueCorrect = false;
            } else isIMDbRatingValueCorrect = true; 
        } else {
            inputIsValid = checkingInputConditions(inputValue);
            
            if (!inputIsValid) {
                isIMDbRatingValueCorrect = false;
            } else isIMDbRatingValueCorrect = true;
        }        
    }    

    if (isIMDbRatingValueCorrect) {
        return true;
    } else {
        divForIMDbRatingErrorMessage.innerHTML = errorMessageForIMDbRating;
        divForIMDbRatingErrorMessage.style.color = "rgb(239 68 68)";
        return false;
    }
}

function validateFileType() {
    let isFileTypeCorrect; 
    let fileName = fileInput();
    
    let positionOfFileExtension = fileName.lastIndexOf(".") + 1;
    let extFile = fileName.substr(positionOfFileExtension, fileName.length).toLowerCase();
    
    if (fileName === "") {
        isFileTypeCorrect = true;
    } else {
        if (extFile == "jpg" || extFile == "jpeg" || extFile == "png") {
            isFileTypeCorrect = true;
        } else isFileTypeCorrect = false;
    }    
    return isFileTypeCorrect;
}

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

//FORM VALIDATION
function validateFormForAddingTitleManually() {    
    let whichInputFailed;
    
    //We don't need to validate rating!
    document.getElementById("hiddenRatingInput").value = ratingValueToRemember;

    if (!validateTitle()) {
        //Title can't be empty!
        divForNoTitleErrorMessage.innerHTML = errorMessageForNoTitle;
        divForNoTitleErrorMessage.style.color = "rgb(239 68 68)";
        titleUserInput.classList.add("border-2", "border-red-500");

        whichInputFailed = "title";
        clearOtherMessages(whichInputFailed);
        return false;
    }
    
    if (!validateReleaseDate()) {
        divForReleaseDateErrorMessage.innerHTML = errorMessageForReleaseDate;
        divForReleaseDateErrorMessage.style.color = "rgb(239 68 68)";

        whichInputFailed = "releaseDate";
        clearOtherMessages(whichInputFailed);
        return false;
    }

    if (!validateIMDbRating()) {
        divForIMDbRatingErrorMessage.innerHTML = errorMessageForIMDbRating;
        divForIMDbRatingErrorMessage.style.color = "rgb(239 68 68)";

        whichInputFailed = "imdbRating";
        clearOtherMessages(whichInputFailed);
        return false;
    }

    if (!validateFileType()) {
        divForFileTypeErrorMessage.innerHTML = errorMessageForFileType;
        divForFileTypeErrorMessage.style.color = "rgb(239 68 68)";

        whichInputFailed = "fileType";
        clearOtherMessages(whichInputFailed);
        return false;
    }
    
    return true;
}

//FOR SELECT TITLETYPE INPUT
function selectTitleType(event) {
    if (event.target.value === "Movie" || event.target.value === "Short" || event.target.value === "Tv Episode" || 
        event.target.value === "Tv Movie" || event.target.value === "Tv Short" || event.target.value === "Tv Special" || 
        event.target.value === "Video" || event.target.value === "Video Game") {
        
        let creatorInput = document.getElementById("creator");
        creatorInput.setAttribute("disabled", true);

        let directorInput = document.getElementById("director");
        let writerInput = document.getElementById("writer");
        directorInput.removeAttribute("disabled");
        writerInput.removeAttribute("disabled");
        
        let releaseDateInput = document.getElementById("releaseDateEndYear");
        releaseDateInput.setAttribute("disabled", true);
    }

    if (event.target.value === "Tv Series" || event.target.value === "Tv MiniSeries") {
        let directorInput = document.getElementById("director");
        let writerInput = document.getElementById("writer");
        directorInput.setAttribute("disabled", true);
        writerInput.setAttribute("disabled", true);

        let creatorInput = document.getElementById("creator");
        creatorInput.removeAttribute("disabled");

        let releaseDateInput = document.getElementById("releaseDateEndYear");
        releaseDateInput.removeAttribute("disabled");
    }

    if (event.target.value === "Podcast Episode" || event.target.value === "Podcast Series") {
        let directorInput = document.getElementById("director");
        let writerInput = document.getElementById("writer");
        let creatorInput = document.getElementById("creator");
        directorInput.setAttribute("disabled", true);
        writerInput.setAttribute("disabled", true);
        creatorInput.setAttribute("disabled", true);

        let releaseDateInput = document.getElementById("releaseDateEndYear");
        releaseDateInput.removeAttribute("disabled");
    }

    if (event.target.value === "Music Video") {
        let creatorInput = document.getElementById("creator");
        let writerInput = document.getElementById("writer");
        creatorInput.setAttribute("disabled", true);
        writerInput.setAttribute("disabled", true);

        let directorInput = document.getElementById("director");
        directorInput.removeAttribute("disabled");

        let releaseDateInput = document.getElementById("releaseDateEndYear");
        releaseDateInput.setAttribute("disabled", true);
    }    
}

function countCharacters(id) {
    let element = document.getElementById(id).value;
    document.getElementById("charactersForPlot").innerText = element.length;    
}

function resetForm() {
    let form = document.getElementById("formAddManually");
    form.reset();
    
    document.getElementById("charactersForPlot").innerText = "0";    
    document.getElementById("originalTitle").classList.remove("border-2", "border-red-500");
    document.getElementById("errorMessageForTitle").innerHTML = "";
    document.getElementById("errorMessageForReleaseDate").innerHTML = "";
    document.getElementById("errorMessageForIMDbRating").innerHTML = "";
    document.getElementById("errorMessageForFileType").innerHTML = "";
    
    let directorInput = document.getElementById("director");
    let writerInput = document.getElementById("writer");
    let creatorInput = document.getElementById("creator");
    let releaseDateEndYearInput = document.getElementById("releaseDateEndYear");
    directorInput.removeAttribute("disabled");
    writerInput.removeAttribute("disabled");
    creatorInput.removeAttribute("disabled");
    releaseDateEndYearInput.removeAttribute("disabled");

    const test5 = document.querySelectorAll('#selected-value-example li span svg')
    test5.forEach((el) => console.log(el.classList.remove("fill-current")))
    
    ratingValueToRemember = "";
    document.getElementById("hiddenRatingInput").value = "";
}