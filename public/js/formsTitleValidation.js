function validateTitle(inputValue) {    
    if (inputValue == "") {
        return false;
    } else return true;
}

function checkingConditionsForRatingsInput(userInput) {
    let inputIsValid = true;
    
    if (isNaN(userInput) || userInput < 1 || userInput > 10) {
        inputIsValid = false;
    }

    return inputIsValid;
}

function validateRatings(inputValue) {
    let isRatingValueCorrect;
    let inputIsValid;

    if (inputValue == "") {
        isRatingValueCorrect = true;
    } else {
        if (inputValue.includes(",")) {
            result = inputValue.replace(",", ".");            
            inputIsValid = checkingConditionsForRatingsInput(result);

            if (!inputIsValid) {
                isRatingValueCorrect = false;
            } else isRatingValueCorrect = true; 
        } else {
            inputIsValid = checkingConditionsForRatingsInput(inputValue);
            
            if (!inputIsValid) {
                isRatingValueCorrect = false;
            } else isRatingValueCorrect = true;
        }        
    }    

    if (isRatingValueCorrect) {
        return true;
    } else return false;
}

//RELEASE DATES
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

function validateReleaseDate(startYear, endYear) {
    let isReleaseDateStartYearCorrect;
    let isReleaseDateEndYearCorrect;
    let isReleaseDateEndYearExists;

    if (endYear != null) {
        isReleaseDateEndYearExists = true;
    } else isReleaseDateEndYearExists = false;

    if (isReleaseDateEndYearExists) {
        //First is end year!
        if (endYear.length == "") {
            isReleaseDateEndYearCorrect = true;
        } else {
            isReleaseDateEndYearCorrect = validateYearInput(endYear);
        }
        
        if (startYear.length == "") {
            isReleaseDateStartYearCorrect = true;
            
            if (endYear.length == "") {
                isReleaseDateEndYearCorrect = true;
            } else isReleaseDateEndYearCorrect = false;
        } else isReleaseDateStartYearCorrect = validateYearInput(startYear);
        
        if (isReleaseDateStartYearCorrect == true && isReleaseDateEndYearCorrect == true) {
            if (startYear.length == "" && endYear.length == "") {
                return true;
            } else if (endYear.length == "") {
                return true;
            } else {
                if (startYear > endYear) {
                    return false;
                } else return true;
            }
        } else return false;
    } else {
        //Only start date exists
        if (startYear.length == "") {
            isReleaseDateStartYearCorrect = true;
        } else isReleaseDateStartYearCorrect = validateYearInput(startYear);

        if (isReleaseDateStartYearCorrect) {
            return true;
        } else return false;
    }
}
//  ...  //

function validateFileType(fileName) {
    let isFileTypeCorrect;  
    
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

function clearingErrorMessagesForEditForm() {
    let ratingElement = "errorMessageForRating" + IdToRemember;
    document.getElementById(ratingElement).innerHTML = "";
    let titleElement = "errorMessageForTitle" + IdToRemember;
    document.getElementById(titleElement).innerHTML = "";
    let idTitleInput = "originalTitle" + IdToRemember;
    let titleUserInput = document.getElementById(idTitleInput);
    titleUserInput.classList.remove("border-2", "border-[#af1e1e]");
    let releaseDateElement = "errorMessageForReleaseDate" + IdToRemember;
    document.getElementById(releaseDateElement).innerHTML = "";
    let imdbRatingElement = "errorMessageForIMDbRating" + IdToRemember;
    document.getElementById(imdbRatingElement).innerHTML = "";
    let imageElement = "errorMessageForEditFileType" + IdToRemember;
    document.getElementById(imageElement).innerHTML = "";
}