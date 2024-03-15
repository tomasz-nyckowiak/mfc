const errorMessageForNoTitle = "Title is required!";
const errorMessageForReleaseDate = "Invalid date!";
const errorMessageForRatings = "Invalid value!";
const errorMessageForFileType = "Only jpg/jpeg and png files are allowed!";
const colorForErrorMessages = "rgb(175 30 30)";

let IdToRemember = "";
let editBtns = document.getElementsByClassName("edit");
let revBtns = document.getElementsByClassName("revBtn");
let allInfoCheckBtn = document.getElementsByClassName("allInfo");

function getIdNumberOut(id) {
    let result = id.slice(20);

    return result;
}

//EDIT TITLES
function setupForSelectedValues(id) {    
    const arrayOfGenres = ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime",
    "Documentary", "Drama", "Family", "Fantasy", "Film-Noir", "Game-Show", "History", "Horror", "Music",
    "Musical", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller",
    "War", "Western"];
    
    //Single selection
    let idTitleTypeElement = "titleType" + id;
    let idHiddenValueForTitleTypeElement = "hiddenValueTitleType" + id;    
    let defaultTitleTypeValue = document.getElementById(idHiddenValueForTitleTypeElement).value;
    
    const singleSelect = document.querySelector("#" + idTitleTypeElement);    
    const singleSelectInstance = te.Select.getInstance(singleSelect);
    singleSelectInstance.setValue(defaultTitleTypeValue);
    
    //Multiple selection
    let genresId = "genres" + id;
    let hiddenValueForGenres = "hiddenValueGenres" + id;
    let multiSelect = document.getElementById(genresId);
    let defaultGenresValue = document.getElementById(hiddenValueForGenres).value;
    
    for (let i = 0; i < arrayOfGenres.length; i++) {
        if (defaultGenresValue.includes(arrayOfGenres[i])) {
            multiSelect.getElementsByTagName('option')[i].setAttribute("selected", true);
        }       
    }
}

for (let i = 0; i < editBtns.length; i++) {
    editBtns[i].addEventListener("click", function(e) {
        let clickedButtonId = e.target.id;
        IdToRemember = getIdNumberOut(clickedButtonId);
        settingUpNeededElements();
        setupForSelectedValues(IdToRemember);
    });
}

//REVIEWS
function changingButtonPosition(id, textBtn) {
    let divId = "reviewContent" + id;
    let manipulatedDiv = document.getElementById(divId);
    
    if (textBtn == "Hide full review") {
        manipulatedDiv.classList.remove("justify-between");
        manipulatedDiv.classList.add("justify-end");
    } else {
        manipulatedDiv.classList.remove("justify-end");
        manipulatedDiv.classList.add("justify-between");
    }    
}

function showHideFullReview(id) {
    let divId = "beginningRev" + id;
    let manipulatedDiv = document.getElementById(divId);
    let revBtn = "reviewExpandedButton" + id;
    let manipulatedBtn = document.getElementById(revBtn);
    let buttonTextAsString = "";
    
    if (manipulatedDiv.classList.contains("hidden")) {
        manipulatedDiv.classList.remove("hidden");
        manipulatedBtn.innerHTML = "Show full review";
        buttonTextAsString = "Show full review";
        changingButtonPosition(id, buttonTextAsString);
    } else {
        manipulatedDiv.classList.add("hidden");        
        manipulatedBtn.innerHTML = "Hide full review";
        buttonTextAsString = "Hide full review";
        changingButtonPosition(id, buttonTextAsString);
    }    
}

for (let i = 0; i < revBtns.length; i++) {
    revBtns[i].addEventListener("click", function(e) {
        let clickedButtonId = e.target.id;
        let idNumber = getIdNumberOut(clickedButtonId);
        showHideFullReview(idNumber);
    });
}

//ALL INFORMATION ABOUT THE TITLE
function showHideAllInformationAboutTheTitle(id) {
    let divId = "hiddenInputs" + id;
    let manipulatedDiv = document.getElementById(divId);

    if (!manipulatedDiv.classList.contains("hidden")) {
        manipulatedDiv.classList.add("hidden");
    } else {
        manipulatedDiv.classList.remove("hidden");
    }
}

for (let i = 0; i < allInfoCheckBtn.length; i++) {
    allInfoCheckBtn[i].addEventListener("click", function(e) {
        let clickedButtonId = e.target.id;
        let idNumber = getIdNumberOut(clickedButtonId);
        showHideAllInformationAboutTheTitle(idNumber);
    });
}
