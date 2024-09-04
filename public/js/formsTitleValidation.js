function validateTitle(inputValue) {    
    if (inputValue == "") {
        return false;
    } else return true;
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
                if (startYear > endYear || startYear == endYear) {
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
//  ...  \\

//FILE
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

function validateFileSize(fileSize) {
    let isFileSizeCorrect;

    if (fileSize >= 5242880) {
        isFileSizeCorrect = false;
    } else isFileSizeCorrect = true;    
    
    return isFileSizeCorrect;
}
//  ...  \\

function clearingErrorMessagesForEditForm() {    
    let titleElement = "errorMessageForTitle" + IdToRemember;
    document.getElementById(titleElement).innerHTML = "";
    let idTitleInput = "originalTitle" + IdToRemember;
    let titleUserInput = document.getElementById(idTitleInput);
    titleUserInput.classList.remove("border-[#af1e1e]");
    let releaseDateElement = "errorMessageForReleaseDate" + IdToRemember;
    document.getElementById(releaseDateElement).innerHTML = "";
    let idReleaseDateInput = "releaseDate" + IdToRemember;
    let releaseDateInput = document.getElementById(idReleaseDateInput);
    releaseDateInput.classList.remove("border-[#af1e1e]");
    let idReleaseDateEndYearInput = "releaseDateEndYear" + IdToRemember;
    let releaseDateEndYearInput = document.getElementById(idReleaseDateEndYearInput);
    releaseDateEndYearInput.classList.remove("border-[#af1e1e]");
    let idDashBetweenDates = "dashBetweenDates" + IdToRemember;
    let dashBetweenDates = document.getElementById(idDashBetweenDates);
    dashBetweenDates.style.color = "";    
    let imageElement = "errorMessageForEditFileInput" + IdToRemember;
    document.getElementById(imageElement).innerHTML = "";
}