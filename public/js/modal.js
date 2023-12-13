//VALUES TO REMEMBER:
let ratingValue = "";
let toWatchValue = "";
let reviewValue = "";
//let optionalInfoValue = "";
let tempModalId = "";
let elemArr = [];
// let modals = document.getElementsByClassName("modal");
const modalClose = document.querySelectorAll('[data-te-modal-dismiss]');
//const ariaInfo = document.querySelectorAll('[aria-expanded]');

function test23(modalId) {    
    let selectedForm = document.getElementById(formIdToRemember);    
    let elements = selectedForm.elements;

    elemArr = Array.from(elements);
    
    let elemRating = elemArr[0].value;
    ratingValue = elemRating;
    
    let elemToWatch = elemArr[1];
    if (elemToWatch.checked == true) {
        toWatchValue = "checked";
    } else toWatchValue = "unchecked";
    
    let elemReview = elemArr[2].value;
    reviewValue = elemReview;

    // let elemOptionalInfo = elemArr[3];
    // if (elemOptionalInfo.checked == true) {
    //     optionalInfoValue = "checked";
    // } else optionalInfoValue = "unchecked";

    tempModalId = modalId;
    //console.log(ratingValue + " " + toWatchValue + " " + reviewValue);
    //console.log(tempModalId);    
}

function afterModalIsClosed() {
    //let myCollapsedDivId = "collapseItems2";
    let selectedForm = document.getElementById(formIdToRemember);
    selectedForm.reset();
    
    let divId = "hiddenItems" + tempModalId;
    let manipulatedDiv = document.getElementById(divId);
    
    if (!manipulatedDiv.classList.contains("hidden")) {
        manipulatedDiv.classList.add("hidden");
    }
}

function getIdOut3(id) {
    tempModalId = id;
}

for (let i = 0; i < modalClose.length; i++) {
    modalClose[i].addEventListener("click", function(e) {
        //let clickedButtonId = e.target.id;
        //console.log(tempModalId);
        // let idNumber = getIdOut(clickedButtonId);
        // getIdOut3(idNumber);
        afterModalIsClosed();
    });
}




