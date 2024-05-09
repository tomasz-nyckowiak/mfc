let rememberArrayNameAsString = "";

function getIdNumberOutFromItemSelection(id) {
    let result = id.slice(19);

    return result;
}

function getNameWithoutIdNumberFromItemSelection(id) {
    let result = id.substring(0, 19);

    return result;
}

function checkingWhichItemWasClicked(idNameWithoutNumber) {    
    if (idNameWithoutNumber == "pickMoviesSelection") {
        rememberArrayNameAsString = "arrayMovieItems";
        return listMovieItemNameWithoutNumber;
    }
    if (idNameWithoutNumber == "pickSeriesSelection") {
        rememberArrayNameAsString = "arraySeriesItems";
        return listSeriesItemNameWithoutNumber;
    }
    if (idNameWithoutNumber == "editMoviesSelection") {
        rememberArrayNameAsString = "arrayMovieItemsEdit";
        return editListMovieItemNameWithoutNumber;
    }
    if (idNameWithoutNumber == "editSeriesSelection") {
        rememberArrayNameAsString = "arraySeriesItemsEdit";
        return editListSeriesItemNameWithoutNumber;
    }
}

function creatingFullIdName(name, numberAsString) {
    let result = name + numberAsString;

    return result;
}

function reducingArrayByOneElement(temporaryArray, indexOfElement) {
    let manipulatedArray = [];
    
    for (let i = 0; i < temporaryArray.length; i++) {        
        manipulatedArray.push(temporaryArray[i]); 
    }
    
    const index = manipulatedArray.indexOf(manipulatedArray[indexOfElement]);
    manipulatedArray.splice(index, 1);

    return manipulatedArray;
}

function checkingIfTitleIsDuplicated(temporaryArray, title) {
    let isTitleDuplicated = false;
    
    for (let i = 0; i < temporaryArray.length; i++) {
        if (temporaryArray[i] == title && title != "") {
            isTitleDuplicated = true;
        }
    }    
    return isTitleDuplicated;
}

function removeDuplicates(data) {
    return data.filter((value, index) => data.indexOf(value) === index);
}

function markingDuplicatedTitles(duplicatedTitlesArray, arrayUsed) {
    for (let i = 0; i < arrayUsed.length; i++) {
        let x = document.getElementById(arrayUsed[i]).selectedIndex;
        let y = document.getElementById(arrayUsed[i]).options;
        let selectedOptionValue = y[x].text;

        if (duplicatedTitlesArray.includes(selectedOptionValue)) {
            let idNumber = getIdNumberOutFromItemSelection(arrayUsed[i]);
            let idNameWithoutNumber = getNameWithoutIdNumberFromItemSelection(arrayUsed[i]);
            let itemListName = checkingWhichItemWasClicked(idNameWithoutNumber);    
            let itemFullId = creatingFullIdName(itemListName, idNumber);
            let listItem = document.getElementById(itemFullId);
            listItem.classList.remove("border-emerald-500");
            listItem.classList.add("border-red-500");
        } else {
            let idNumber = getIdNumberOutFromItemSelection(arrayUsed[i]);
            let idNameWithoutNumber = getNameWithoutIdNumberFromItemSelection(arrayUsed[i]);
            let itemListName = checkingWhichItemWasClicked(idNameWithoutNumber);    
            let itemFullId = creatingFullIdName(itemListName, idNumber);
            let listItem = document.getElementById(itemFullId);
            listItem.classList.remove("border-red-500");
            listItem.classList.add("border-emerald-500");
        }
    }
}

function enablingSubmitButton() {
    if (rememberArrayNameAsString == "arrayMovieItems") {
        top10MoviesSaveButton.removeAttribute("disabled", true);
        top10MoviesSaveButton.classList.remove("opacity-25");
    }
    if (rememberArrayNameAsString == "arraySeriesItems") {
        top5TvSeriesSaveButton.removeAttribute("disabled", true);
        top5TvSeriesSaveButton.classList.remove("opacity-25");
    }
    if (rememberArrayNameAsString == "arrayMovieItemsEdit") {
        editTop10MoviesSaveButton.removeAttribute("disabled", true);
        editTop10MoviesSaveButton.classList.remove("opacity-25");
    }
    if (rememberArrayNameAsString == "arraySeriesItemsEdit") {
        editTop5TvSeriesSaveButton.removeAttribute("disabled", true);
        editTop5TvSeriesSaveButton.classList.remove("opacity-25");
    }    
}

function disablingSubmitButton() {     
    if (rememberArrayNameAsString == "arrayMovieItems") {
        top10MoviesSaveButton.setAttribute("disabled", true);
        top10MoviesSaveButton.classList.add("opacity-25");
    }
    if (rememberArrayNameAsString == "arraySeriesItems") {
        top5TvSeriesSaveButton.setAttribute("disabled", true);
        top5TvSeriesSaveButton.classList.add("opacity-25");
    }
    if (rememberArrayNameAsString == "arrayMovieItemsEdit") {
        editTop10MoviesSaveButton.setAttribute("disabled", true);
        editTop10MoviesSaveButton.classList.add("opacity-25");
    }
    if (rememberArrayNameAsString == "arraySeriesItemsEdit") {
        editTop5TvSeriesSaveButton.setAttribute("disabled", true);
        editTop5TvSeriesSaveButton.classList.add("opacity-25");
    }    
}

function checkingIfListIsEmpty(favouritesList) {
    let isListEmpty;
    
    for (let i = 0; i < favouritesList.length; i++) {
        if (favouritesList[i] != "") {
            isListEmpty = false;
            break;
        } else isListEmpty = true;
    }
    return isListEmpty;
}

function validateForm(arrayUsed) {
    const selectedInputsArray = [];
    let temporaryArray = [];
    let newArray = [];
    let duplicatedTitlesArray = [];
    let finalArrayOfDuplicateTitles = [];    
    
    for (let i = 0; i < arrayUsed.length; i++) {
        selectedInputsArray[i] = document.querySelector("#" + arrayUsed[i]);
        temporaryArray.push(selectedInputsArray[i].value);
    }

    for (let i = arrayUsed.length-1; i > 0; i--) {
        let title = temporaryArray[i];
        newArray = reducingArrayByOneElement(temporaryArray, i);
        
        if (checkingIfTitleIsDuplicated(newArray, title)) {
            duplicatedTitlesArray.push(title);
        }
    }
    
    finalArrayOfDuplicateTitles = removeDuplicates(duplicatedTitlesArray);
    
    if (finalArrayOfDuplicateTitles.length > 0) {
        markingDuplicatedTitles(finalArrayOfDuplicateTitles, arrayUsed);
        disablingSubmitButton();
    } else {
        for (let i = 0; i < arrayUsed.length; i++) {
            let idNumber = getIdNumberOutFromItemSelection(arrayUsed[i]);
            let idNameWithoutNumber = getNameWithoutIdNumberFromItemSelection(arrayUsed[i]);
            let itemListName = checkingWhichItemWasClicked(idNameWithoutNumber);    
            let itemFullId = creatingFullIdName(itemListName, idNumber);
            let listItem = document.getElementById(itemFullId);            
            listItem.classList.remove("border-red-500");
            listItem.classList.add("border-emerald-500");
        }        
        
        if (checkingIfListIsEmpty(temporaryArray)) {
            disablingSubmitButton();
        } else enablingSubmitButton();
    }
}

function specifyWhichArrayIsUsed(arrayNameAsString) {
    if (arrayNameAsString == "arrayMovieItems") {
        validateForm(arrayMovieItems);
    }
    if (arrayNameAsString == "arraySeriesItems") {
        validateForm(arraySeriesItems);
    }
    if (arrayNameAsString == "arrayMovieItemsEdit") {
        validateForm(arrayMovieItemsEdit);
    }
    if (arrayNameAsString == "arraySeriesItemsEdit") {
        validateForm(arraySeriesItemsEdit);
    }
}

function checkingIfSelectedTitleIsDuplicated(event) {
    selectedTitle = event.target.value;
    let selectedListId = event.target.id;
    let idNumber = getIdNumberOutFromItemSelection(selectedListId);
    let idNameWithoutNumber = getNameWithoutIdNumberFromItemSelection(selectedListId);
    let itemListName = checkingWhichItemWasClicked(idNameWithoutNumber);
    let itemFullId = creatingFullIdName(itemListName, idNumber);
    let listItem = document.getElementById(itemFullId);

    if (selectedTitle == "") {
        if (listItem.classList.contains("border-red-500")) {
            listItem.classList.remove("border-red-500");
            listItem.classList.add("border-emerald-500");
        }        
        specifyWhichArrayIsUsed(rememberArrayNameAsString);        
    } else {
        specifyWhichArrayIsUsed(rememberArrayNameAsString);
    }
}