let IdToRemember = "";
let formIdToRemember = "";
let reviewsBtnsId = "";
let editBtns = document.getElementsByClassName("edit");
let revBtns = document.getElementsByClassName("revBtn");
let allInfoCheckB = document.getElementsByClassName("allInfo");

function thatCollapse(id) {
    const arrayOfGenres = ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime",
    "Documentary", "Drama", "Family", "Fantasy", "Film-Noir", "Game-Show", "History", "Horror", "Music",
    "Musical", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller",
    "War", "Western"];
    
    let titleTypeId = "titleType" + id;
    let defaultValueId = "hiddenValueTitleType" + id;
    let chosen = document.getElementById(titleTypeId);
    let defaultValue = document.getElementById(defaultValueId).value;    
    const singleSelectInstance = te.Select.getInstance(chosen);
    singleSelectInstance.setValue(defaultValue);
    
    //Multiple selection
    let genresId = "genres" + id;
    let hiddenValueForGenres = "hiddenValueGenres" + id;
    let multiSelect = document.getElementById(genresId);
    let defaultGenresValue = document.getElementById(hiddenValueForGenres).value;
    //let temp = [];
    //console.log(multiSelect);
    //const multiSelectInstance = te.Select.getInstance(multiSelect);
    for (let i = 0; i < arrayOfGenres.length; i++) {
        if (defaultGenresValue.includes(arrayOfGenres[i])) {
            //temp.push(arrayOfGenres[i]);
            multiSelect.getElementsByTagName('option')[i].setAttribute("selected", true);
        }       
    }

    // for (let i = 0; i < temp.length; i++) {
    //     //multiSelectInstance.setValue([arrayOfGenres[i]]);
    //     //multiSelect.getElementsByTagName('option')[temp[i]].setAttribute("selected", true);      
    // }
    //let sth = multiSelect.getElementsByTagName('option')[0].setAttribute("selected", true);
    //console.log(sth);   
}

function getIdOut(id) {
    let temp = id.slice(3);
    
    return temp;
}

for (let i = 0; i < editBtns.length; i++) {
    editBtns[i].addEventListener("click", function(e) {
        let clickedButtonId = e.target.id;
        IdToRemember = clickedButtonId;
        let idNumber = getIdOut(IdToRemember);
        formIdToRemember = "form" + idNumber;
        let modalId = "exampleModal" + idNumber;
        //console.log("MODAL: " + modalId + "; FORM: " + formIdToRemember);
        test23(modalId);
        getIdOut3(idNumber);
        thatCollapse(idNumber);
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
        //reviewsBtnsId = "reviewExpandBtn" + idNumber;
        //console.log(formIdToRemember);
        showHideFullReview(idNumber);
    });
}

//ALL INFORMATION ABOUT THE TITLE
function showHideAllInformationAboutTheTitle(id) {
    let divId = "hiddenItems" + id;
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
        //reviewsBtnsId = "reviewExpandBtn" + idNumber;
        //console.log(clickedButtonId);
        //showHideFullReview(idNumber);
        showHideAllInformationAboutTheTitle(idNumber);
    });
}

//DELETE TITLE


function checkingInputConditions(userInput) {
    let inputIsValid = true;
    
    if (isNaN(userInput) || userInput < 1 || userInput > 10) {
        inputIsValid = false;
    }

    return inputIsValid;
}

function validateForm() {
    let idNumber = getIdOut(IdToRemember);
    let idInput = "rating" + idNumber;
    let titleIdInput = "originalTitle" + idNumber;
    let x = document.getElementById(idInput).value;
    let z = document.getElementById(titleIdInput).value;
    let text;
    let errorMsg = "Title is required!";
    let y = "demo" + idNumber;
    let y2 = "requiredTitle" + idNumber;
    let result;
    let inputIsValid;

    if (x === "") {
        text = "Input is empty - valid";
        inputIsValid = true;
    } else {
        if (x.includes(",")) {
            result = x.replace(",", ".");            
            inputIsValid = checkingInputConditions(result);
            
            if (!inputIsValid) {
                text = "Input not valid";
                inputIsValid = false;
            } else {
                text = "Input OK";
                inputIsValid = true;
            }   
        } else {            
            inputIsValid = checkingInputConditions(x);
            
            if (!inputIsValid) {
                text = "Input not valid";
                inputIsValid = false;
            } else {
                text = "Input OK";
                inputIsValid = true;
            }
        }       
    }

    if (z === "") {
        document.getElementById(y2).innerHTML = errorMsg;
        return false;
    }
    
    if (inputIsValid) {
        return true;
    } else {
        document.getElementById(y).innerHTML = text;
        return false;
    }    
    //document.getElementById(y).style.color = "red";
    //return false;

}


