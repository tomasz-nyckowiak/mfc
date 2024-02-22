//CONSTANTS
const arrayItems = [
    "movieSelection1", "movieSelection2", "movieSelection3", "movieSelection4", "movieSelection5", "movieSelection6",
    "movieSelection7", "movieSelection8", "movieSelection9", "movieSelection10"
];
const listItemNameWithoutNumber = "position";
const orderedListCheckBox = document.getElementById("orderedListCheckbox");
const unorderedListCheckBox = document.getElementById("unorderedListCheckbox");
const top10MoviesList = document.getElementById("top10MoviesList");
const hiddenInput = document.getElementById("typeOfList");
//  ...  //

function reducingArrayByOneElement(tempArray, indexOfElement) {
    let manipulatedArray = [];
    
    for (let i = 0; i < 10; i++) {        
        manipulatedArray.push(tempArray[i]); 
    }
    
    const index = manipulatedArray.indexOf(manipulatedArray[indexOfElement]);
    manipulatedArray.splice(index, 1);

    return manipulatedArray;
}

function checkingIfTitleIsDuplicated(tempArray, title) {
    let isTitleDuplicated = false;
    
    for (let i = 0; i < tempArray.length; i++) {
        if (tempArray[i] == title && title != "") {
            isTitleDuplicated = true;
        }
    }    
    return isTitleDuplicated;
}

function removeDuplicates(data) {
    return data.filter((value, index) => data.indexOf(value) === index);
}

function getIdOutFromMovieSelection(id) {
    let result = id.slice(14);

    return result;
}

function creatingFullIdName(name, numberAsString) {
    let result = name + numberAsString;

    return result;
}

function enablingSubmitButton() {     
    let btn = document.getElementById("top10Movies");
    btn.removeAttribute("disabled", true);
    btn.classList.remove("opacity-25");
}

function disablingSubmitButton() {     
    let btn = document.getElementById("top10Movies");
    btn.setAttribute("disabled", true);
    btn.classList.add("opacity-25");
}

function markingDuplicatedTitles(duplicatedTitlesArray) {
    for (let i = 0; i < arrayItems.length; i++) {
        let x = document.getElementById(arrayItems[i]).selectedIndex;
        let y = document.getElementById(arrayItems[i]).options;
        let selectedOptionValue = y[x].text;

        if (duplicatedTitlesArray.includes(selectedOptionValue)) {
            let idNumber = getIdOutFromMovieSelection(arrayItems[i]);    
            let itemFullId = creatingFullIdName(listItemNameWithoutNumber, idNumber);
            let listItem = document.getElementById(itemFullId);
            listItem.classList.remove("border-emerald-500");
            listItem.classList.add("border-red-500");
        } else {
            let idNumber = getIdOutFromMovieSelection(arrayItems[i]);    
            let itemFullId = creatingFullIdName(listItemNameWithoutNumber, idNumber);
            let listItem = document.getElementById(itemFullId);
            listItem.classList.remove("border-red-500");
            listItem.classList.add("border-emerald-500");
        }
    }
}

function validateFormForFavourites() {
    const selectedInputsArray = [];
    let tempArray = [];
    let newArray = [];
    let duplicatedTitlesArray = [];
    let finalArrayOfDuplicateTitles = [];
    
    for (let i = 0; i < arrayItems.length; i++) {
        selectedInputsArray[i] = document.querySelector("#" + arrayItems[i]);
        tempArray.push(selectedInputsArray[i].value);
    }

    for (let i = arrayItems.length-1; i > 0; i--) {
        let title = tempArray[i];
        newArray = reducingArrayByOneElement(tempArray, i);
        
        if (checkingIfTitleIsDuplicated(newArray, title)) {
            duplicatedTitlesArray.push(title);
        }
    }
    
    finalArrayOfDuplicateTitles = removeDuplicates(duplicatedTitlesArray);
    
    if (finalArrayOfDuplicateTitles.length > 0) {
        markingDuplicatedTitles(finalArrayOfDuplicateTitles);
        disablingSubmitButton();
    } else {
        for (let i = 0; i < arrayItems.length; i++) {
            let idNumber = getIdOutFromMovieSelection(arrayItems[i]);    
            let itemFullId = creatingFullIdName(listItemNameWithoutNumber, idNumber);
            let listItem = document.getElementById(itemFullId);            
            listItem.classList.remove("border-red-500");
            listItem.classList.add("border-emerald-500");
        }
        enablingSubmitButton();
    }
}

function checkingIfSelectedTitleIsDuplicated(event) {
    selectedTitle = event.target.value;
    let selectedListId = event.target.id;
    let idNumber = getIdOutFromMovieSelection(selectedListId);    
    let itemFullId = creatingFullIdName(listItemNameWithoutNumber, idNumber);
    let listItem = document.getElementById(itemFullId);

    if (selectedTitle == "") {
        if (listItem.classList.contains("border-red-500")) {
            listItem.classList.remove("border-red-500");
            listItem.classList.add("border-emerald-500");
        }
        validateFormForFavourites();
    } else {
        validateFormForFavourites();
    }
}

//MANAGING TYPE OF LIST
unorderedListCheckBox.addEventListener("click", function(){
    unorderedListCheckBox.setAttribute("disabled", true);
    orderedListCheckBox.checked = false;
    orderedListCheckBox.removeAttribute("disabled", true);
    
    top10MoviesList.classList.remove("list-decimal");
    top10MoviesList.classList.add("list-none");
    hiddenInput.value = "unordered";
})

orderedListCheckBox.addEventListener("click", function(){
    orderedListCheckBox.setAttribute("disabled", true);
    unorderedListCheckBox.checked = false;
    unorderedListCheckBox.removeAttribute("disabled", true);
    
    top10MoviesList.classList.remove("list-none");
    top10MoviesList.classList.add("list-decimal");
    hiddenInput.value = "ordered";
})