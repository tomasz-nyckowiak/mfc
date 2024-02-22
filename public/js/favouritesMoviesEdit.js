//CONSTANTS
const arrayItemsEdit = [
    "editMovieSelection1", "editMovieSelection2", "editMovieSelection3", "editMovieSelection4", "editMovieSelection5",
    "editMovieSelection6", "editMovieSelection7", "editMovieSelection8", "editMovieSelection9", "editMovieSelection10"
];
const editListItemNameWithoutNumber = "editPosition";
const editOrderedListCheckBox = document.getElementById("editOrderedListCheckbox");
const editUnorderedListCheckBox = document.getElementById("editUnorderedListCheckbox");
const editTop10MoviesList = document.getElementById("editTop10MoviesList");
const editHiddenInput = document.getElementById("editTypeOfList");
const editTop10MoviesButton = document.getElementById("editTop10Movies");
//  ...  //

function reducingArrayByOneElementEdit(tempArray, indexOfElement) {
    let manipulatedArray = [];
    
    for (let i = 0; i < 10; i++) {        
        manipulatedArray.push(tempArray[i]); 
    }
    
    const index = manipulatedArray.indexOf(manipulatedArray[indexOfElement]);
    manipulatedArray.splice(index, 1);

    return manipulatedArray;
}

function checkingIfTitleIsDuplicatedEdit(tempArray, title) {
    let isTitleDuplicated = false;
    
    for (let i = 0; i < tempArray.length; i++) {
        if (tempArray[i] == title && title != "") {
            isTitleDuplicated = true;
        }
    }    
    return isTitleDuplicated;
}

function removeDuplicatesEdit(data) {
    return data.filter((value, index) => data.indexOf(value) === index);
}

function getIdOutFromEditMovieSelection(id) {
    let result = id.slice(18);

    return result;
}

function creatingFullIdNameEdit(name, numberAsString) {
    let result = name + numberAsString;

    return result;
}

function enablingSubmitButtonEdit() {
    editTop10MoviesButton.removeAttribute("disabled", true);
    editTop10MoviesButton.classList.remove("opacity-25");
}

function disablingSubmitButtonEdit() {
    editTop10MoviesButton.setAttribute("disabled", true);
    editTop10MoviesButton.classList.add("opacity-25");
}

function markingDuplicatedTitlesEdit(duplicatedTitlesArray) {
    for (let i = 0; i < arrayItemsEdit.length; i++) {
        let x = document.getElementById(arrayItemsEdit[i]).selectedIndex;
        let y = document.getElementById(arrayItemsEdit[i]).options;
        let selectedOptionValue = y[x].text;

        if (duplicatedTitlesArray.includes(selectedOptionValue)) {
            let idNumber = getIdOutFromEditMovieSelection(arrayItemsEdit[i]);    
            let itemFullId = creatingFullIdNameEdit(editListItemNameWithoutNumber, idNumber);
            let listItem = document.getElementById(itemFullId);
            listItem.classList.remove("border-emerald-500");
            listItem.classList.add("border-red-500");
        } else {
            let idNumber = getIdOutFromEditMovieSelection(arrayItemsEdit[i]);    
            let itemFullId = creatingFullIdNameEdit(editListItemNameWithoutNumber, idNumber);
            let listItem = document.getElementById(itemFullId);
            listItem.classList.remove("border-red-500");
            listItem.classList.add("border-emerald-500");
        }
    }
}

function validateFormForEditFavouriteMovies() {
    const selectedInputsArray = [];
    let tempArray = [];
    let newArray = [];
    let duplicatedTitlesArray = [];
    let finalArrayOfDuplicateTitles = [];
    
    for (let i = 0; i < arrayItemsEdit.length; i++) {
        selectedInputsArray[i] = document.querySelector("#" + arrayItemsEdit[i]);
        tempArray.push(selectedInputsArray[i].value);
    }

    for (let i = arrayItemsEdit.length-1; i > 0; i--) {
        let title = tempArray[i];
        newArray = reducingArrayByOneElementEdit(tempArray, i);
        
        if (checkingIfTitleIsDuplicatedEdit(newArray, title)) {
            duplicatedTitlesArray.push(title);
        }
    }
    
    finalArrayOfDuplicateTitles = removeDuplicatesEdit(duplicatedTitlesArray);
    
    if (finalArrayOfDuplicateTitles.length > 0) {
        markingDuplicatedTitlesEdit(finalArrayOfDuplicateTitles);
        disablingSubmitButtonEdit();
    } else {
        for (let i = 0; i < arrayItemsEdit.length; i++) {
            let idNumber = getIdOutFromEditMovieSelection(arrayItemsEdit[i]);    
            let itemFullId = creatingFullIdNameEdit(editListItemNameWithoutNumber, idNumber);
            let listItem = document.getElementById(itemFullId);            
            listItem.classList.remove("border-red-500");
            listItem.classList.add("border-emerald-500");
        }
        enablingSubmitButtonEdit();
    }
}

function editCheckingIfSelectedTitleIsDuplicated(event) {
    selectedTitle = event.target.value;
    let selectedListId = event.target.id;
    let idNumber = getIdOutFromEditMovieSelection(selectedListId);    
    let itemFullId = creatingFullIdNameEdit(editListItemNameWithoutNumber, idNumber);
    let listItem = document.getElementById(itemFullId);

    if (selectedTitle == "") {
        if (listItem.classList.contains("border-red-500")) {
            listItem.classList.remove("border-red-500");
            listItem.classList.add("border-emerald-500");
        }
        validateFormForEditFavouriteMovies();
    } else {
        validateFormForEditFavouriteMovies();
    }
}

//MANAGING TYPE OF LIST
editUnorderedListCheckBox.addEventListener("click", function(){
    editUnorderedListCheckBox.setAttribute("disabled", true);
    editOrderedListCheckBox.checked = false;
    editOrderedListCheckBox.removeAttribute("disabled", true);
    
    editTop10MoviesList.classList.remove("list-decimal");
    editTop10MoviesList.classList.add("list-none");
    editHiddenInput.value = "unordered";
})

editOrderedListCheckBox.addEventListener("click", function(){
    editOrderedListCheckBox.setAttribute("disabled", true);
    editUnorderedListCheckBox.checked = false;
    editUnorderedListCheckBox.removeAttribute("disabled", true);
    
    editTop10MoviesList.classList.remove("list-none");
    editTop10MoviesList.classList.add("list-decimal");
    editHiddenInput.value = "ordered";
})