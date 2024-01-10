const errorMessageForNoTitle = "Title is required!";
const errorMessageForReleaseDate = "Invalid date!";
const errorMessageForRatings = "Invalid value!";
const errorMessageForFileType = "Only jpg/jpeg and png files are allowed!";
const colorForErrorMessages = "rgb(239 68 68)";

let IdToRemember = "";
let reviewsBtnsId = "";
let editBtns = document.getElementsByClassName("edit");
let revBtns = document.getElementsByClassName("revBtn");
let allInfoCheckB = document.getElementsByClassName("allInfo");

function thatCollapse(id) {    
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
    let isNoGenreSelected = false;
    
    for (let i = 0; i < arrayOfGenres.length; i++) {
        if (defaultGenresValue.includes(arrayOfGenres[i])) {
            multiSelect.getElementsByTagName('option')[i].setAttribute("selected", true);
        }       
    }
}

function getIdOut(editBtnid) {
    let result = editBtnid.slice(3);

    return result;
}

for (let i = 0; i < editBtns.length; i++) {
    editBtns[i].addEventListener("click", function(e) {
        let clickedButtonId = e.target.id;
        IdToRemember = getIdOut(clickedButtonId);
        settingUpNeededElements();
        thatCollapse(IdToRemember);
    });
}

//REVIEWS
function showHideFullReview(id) {
    let divId = "beginningRev" + id;
    let manipulatedDiv = document.getElementById(divId);
    let revBtn = "reviewExpandBtn" + id;
    let manipulatedBtn = document.getElementById(revBtn);
    
    if (manipulatedDiv.classList.contains("hidden")) {
        manipulatedDiv.classList.remove("hidden");
        manipulatedBtn.innerHTML = "Show full review";
    } else {
        manipulatedDiv.classList.add("hidden");        
        manipulatedBtn.innerHTML = "Hide full review";
    }    
}

function getIdOut2(id) {
    let temp = id.slice(15);
    
    return temp;
}

for (let i = 0; i < revBtns.length; i++) {
    revBtns[i].addEventListener("click", function(e) {
        let clickedButtonId = e.target.id;
        let idNumber = getIdOut2(clickedButtonId);
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

function getIdOut5(id) {
    let temp = id.slice(20);
    
    return temp;
}

for (let i = 0; i < allInfoCheckB.length; i++) {
    allInfoCheckB[i].addEventListener("click", function(e) {
        let clickedButtonId = e.target.id;
        let idNumber = getIdOut5(clickedButtonId);
        showHideAllInformationAboutTheTitle(idNumber);
    });
}






