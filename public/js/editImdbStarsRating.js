let editImdbRatingValueToRemember = "";
let rememberImdbRatingValueWhenClosingModalWithoutSaving = "";
let arrayToRememberImdbStarsElements = [];
let arrayToRememberImdbStarsFilling = [];
let arrayToRememberImdbStarsTooltips = [];

//GETTING VALUES & SETTING FLAGS
function getImdbRatingValue(id) {		
	let hiddenInputImdbRating = "imdbRating" + id;
    let imdbRatingValue = document.getElementById(hiddenInputImdbRating).value;
    return imdbRatingValue;
}

function isImdbRatingValueEmpty(id) {    
    let hiddenInputImdbRating = "imdbRating" + id;
    let imdbRatingValue = document.getElementById(hiddenInputImdbRating).value;
    
    if (imdbRatingValue === "") {
        return true;
    } else return false;
}

function getTooltipForSetImdbRating() {
    const editImdbChosenRatingTooltip = document.getElementById("editImdbChosenRating" + IdToRemember);    
    return editImdbChosenRatingTooltip;
}

function setHiddenInputForImdbRatingWhenClosingModalWithoutSaving() {
    let imdbRatingElement = "imdbRating" + IdToRemember;
    document.getElementById(imdbRatingElement).setAttribute("value", rememberImdbRatingValueWhenClosingModalWithoutSaving);
}
//      ...     \\

function partialStarsFillingForImdbRating(number, id) {
    if (number == 1.1) {
        arrayToRememberImdbStarsFilling[1].setAttribute("fill", "url(#editImdbStar2Grad1Id" + id + ")");
    }
    if (number == 1.2) {
        arrayToRememberImdbStarsFilling[1].setAttribute("fill", "url(#editImdbStar2Grad2Id" + id + ")");
    }
    if (number == 1.3) {
        arrayToRememberImdbStarsFilling[1].setAttribute("fill", "url(#editImdbStar2Grad3Id" + id + ")");
    }
    if (number == 1.4) {
        arrayToRememberImdbStarsFilling[1].setAttribute("fill", "url(#editImdbStar2Grad4Id" + id + ")");
    }
    if (number == 1.5) {
        arrayToRememberImdbStarsFilling[1].setAttribute("fill", "url(#editImdbStar2Grad5Id" + id + ")");
    }
    if (number == 1.6) {
        arrayToRememberImdbStarsFilling[1].setAttribute("fill", "url(#editImdbStar2Grad6Id" + id + ")");
    }
    if (number == 1.7) {
        arrayToRememberImdbStarsFilling[1].setAttribute("fill", "url(#editImdbStar2Grad7Id" + id + ")");
    }
    if (number == 1.8) {
        arrayToRememberImdbStarsFilling[1].setAttribute("fill", "url(#editImdbStar2Grad8Id" + id + ")");
    }
    if (number == 1.9) {
        arrayToRememberImdbStarsFilling[1].setAttribute("fill", "url(#editImdbStar2Grad9Id" + id + ")");
    }
    if (number == 2) {
        arrayToRememberImdbStarsFilling[1].setAttribute("fill", "url(#editImdbStar2GradFullId" + id + ")");
    }
    if (number == 2.1) {
        arrayToRememberImdbStarsFilling[2].setAttribute("fill", "url(#editImdbStar3Grad1Id" + id + ")");
    }
    if (number == 2.2) {
        arrayToRememberImdbStarsFilling[2].setAttribute("fill", "url(#editImdbStar3Grad2Id" + id + ")");
    }
    if (number == 2.3) {
        arrayToRememberImdbStarsFilling[2].setAttribute("fill", "url(#editImdbStar3Grad3Id" + id + ")");
    }
    if (number == 2.4) {
        arrayToRememberImdbStarsFilling[2].setAttribute("fill", "url(#editImdbStar3Grad4Id" + id + ")");
    }
    if (number == 2.5) {
        arrayToRememberImdbStarsFilling[2].setAttribute("fill", "url(#editImdbStar3Grad5Id" + id + ")");
    }
    if (number == 2.6) {
        arrayToRememberImdbStarsFilling[2].setAttribute("fill", "url(#editImdbStar3Grad6Id" + id + ")");
    }
    if (number == 2.7) {
        arrayToRememberImdbStarsFilling[2].setAttribute("fill", "url(#editImdbStar3Grad7Id" + id + ")");
    }
    if (number == 2.8) {
        arrayToRememberImdbStarsFilling[2].setAttribute("fill", "url(#editImdbStar3Grad8Id" + id + ")");
    }
    if (number == 2.9) {
        arrayToRememberImdbStarsFilling[2].setAttribute("fill", "url(#editImdbStar3Grad9Id" + id + ")");
    }
    if (number == 3) {
        arrayToRememberImdbStarsFilling[2].setAttribute("fill", "url(#editImdbStar3GradFullId" + id + ")");
    }
    if (number == 3.1) {
        arrayToRememberImdbStarsFilling[3].setAttribute("fill", "url(#editImdbStar4Grad1Id" + id + ")");
    }
    if (number == 3.2) {
        arrayToRememberImdbStarsFilling[3].setAttribute("fill", "url(#editImdbStar4Grad2Id" + id + ")");
    }
    if (number == 3.3) {
        arrayToRememberImdbStarsFilling[3].setAttribute("fill", "url(#editImdbStar4Grad3Id" + id + ")");
    }
    if (number == 3.4) {
        arrayToRememberImdbStarsFilling[3].setAttribute("fill", "url(#editImdbStar4Grad4Id" + id + ")");
    }
    if (number == 3.5) {
        arrayToRememberImdbStarsFilling[3].setAttribute("fill", "url(#editImdbStar4Grad5Id" + id + ")");
    }
    if (number == 3.6) {
        arrayToRememberImdbStarsFilling[3].setAttribute("fill", "url(#editImdbStar4Grad6Id" + id + ")");
    }
    if (number == 3.7) {
        arrayToRememberImdbStarsFilling[3].setAttribute("fill", "url(#editImdbStar4Grad7Id" + id + ")");
    }
    if (number == 3.8) {
        arrayToRememberImdbStarsFilling[3].setAttribute("fill", "url(#editImdbStar4Grad8Id" + id + ")");
    }
    if (number == 3.9) {
        arrayToRememberImdbStarsFilling[3].setAttribute("fill", "url(#editImdbStar4Grad9Id" + id + ")");
    }
    if (number == 4) {
        arrayToRememberImdbStarsFilling[3].setAttribute("fill", "url(#editImdbStar4GradFullId" + id + ")");
    }
    if (number == 4.1) {
        arrayToRememberImdbStarsFilling[4].setAttribute("fill", "url(#editImdbStar5Grad1Id" + id + ")");    
    }
    if (number == 4.2) {
        arrayToRememberImdbStarsFilling[4].setAttribute("fill", "url(#editImdbStar5Grad2Id" + id + ")");
    }
    if (number == 4.3) {
        arrayToRememberImdbStarsFilling[4].setAttribute("fill", "url(#editImdbStar5Grad3Id" + id + ")");
    }
    if (number == 4.4) {
        arrayToRememberImdbStarsFilling[4].setAttribute("fill", "url(#editImdbStar5Grad4Id" + id + ")");
    }
    if (number == 4.5) {
        arrayToRememberImdbStarsFilling[4].setAttribute("fill", "url(#editImdbStar5Grad5Id" + id + ")");
    }
    if (number == 4.6) {
        arrayToRememberImdbStarsFilling[4].setAttribute("fill", "url(#editImdbStar5Grad6Id" + id + ")");
    }
    if (number == 4.7) {
        arrayToRememberImdbStarsFilling[4].setAttribute("fill", "url(#editImdbStar5Grad7Id" + id + ")");
    }
    if (number == 4.8) {
        arrayToRememberImdbStarsFilling[4].setAttribute("fill", "url(#editImdbStar5Grad8Id" + id + ")");
    }
    if (number == 4.9) {
        arrayToRememberImdbStarsFilling[4].setAttribute("fill", "url(#editImdbStar5Grad9Id" + id + ")");
    }
    if (number == 5) {
        arrayToRememberImdbStarsFilling[4].setAttribute("fill", "url(#editImdbStar5GradFullId" + id + ")");
    }
    if (number == 5.1) {
        arrayToRememberImdbStarsFilling[5].setAttribute("fill", "url(#editImdbStar6Grad1Id" + id + ")");
    }
    if (number == 5.2) {
        arrayToRememberImdbStarsFilling[5].setAttribute("fill", "url(#editImdbStar6Grad2Id" + id + ")");
    }
    if (number == 5.3) {
        arrayToRememberImdbStarsFilling[5].setAttribute("fill", "url(#editImdbStar6Grad3Id" + id + ")");
    }
    if (number == 5.4) {
        arrayToRememberImdbStarsFilling[5].setAttribute("fill", "url(#editImdbStar6Grad4Id" + id + ")");
    }
    if (number == 5.5) {
        arrayToRememberImdbStarsFilling[5].setAttribute("fill", "url(#editImdbStar6Grad5Id" + id + ")");
    }
    if (number == 5.6) {
        arrayToRememberImdbStarsFilling[5].setAttribute("fill", "url(#editImdbStar6Grad6Id" + id + ")");
    }
    if (number == 5.7) {
        arrayToRememberImdbStarsFilling[5].setAttribute("fill", "url(#editImdbStar6Grad7Id" + id + ")");
    }
    if (number == 5.8) {
        arrayToRememberImdbStarsFilling[5].setAttribute("fill", "url(#editImdbStar6Grad8Id" + id + ")");
    }
    if (number == 5.9) {
        arrayToRememberImdbStarsFilling[5].setAttribute("fill", "url(#editImdbStar6Grad9Id" + id + ")");
    }
    if (number == 6) {
        arrayToRememberImdbStarsFilling[5].setAttribute("fill", "url(#editImdbStar6GradFullId" + id + ")");
    }
    if (number == 6.1) {
        arrayToRememberImdbStarsFilling[6].setAttribute("fill", "url(#editImdbStar7Grad1Id" + id + ")");
    }
    if (number == 6.2) {
        arrayToRememberImdbStarsFilling[6].setAttribute("fill", "url(#editImdbStar7Grad2Id" + id + ")");
    }
    if (number == 6.3) {
        arrayToRememberImdbStarsFilling[6].setAttribute("fill", "url(#editImdbStar7Grad3Id" + id + ")");
    }
    if (number == 6.4) {
        arrayToRememberImdbStarsFilling[6].setAttribute("fill", "url(#editImdbStar7Grad4Id" + id + ")");
    }
    if (number == 6.5) {
        arrayToRememberImdbStarsFilling[6].setAttribute("fill", "url(#editImdbStar7Grad5Id" + id + ")");
    }
    if (number == 6.6) {
        arrayToRememberImdbStarsFilling[6].setAttribute("fill", "url(#editImdbStar7Grad6Id" + id + ")");
    }
    if (number == 6.7) {
        arrayToRememberImdbStarsFilling[6].setAttribute("fill", "url(#editImdbStar7Grad7Id" + id + ")");
    }
    if (number == 6.8) {
        arrayToRememberImdbStarsFilling[6].setAttribute("fill", "url(#editImdbStar7Grad8Id" + id + ")");
    }
    if (number == 6.9) {
        arrayToRememberImdbStarsFilling[6].setAttribute("fill", "url(#editImdbStar7Grad9Id" + id + ")");
    }
    if (number == 7) {
        arrayToRememberImdbStarsFilling[6].setAttribute("fill", "url(#editImdbStar7GradFullId" + id + ")");
    }
    if (number == 7.1) {
        arrayToRememberImdbStarsFilling[7].setAttribute("fill", "url(#editImdbStar8Grad1Id" + id + ")");
    }
    if (number == 7.2) {
        arrayToRememberImdbStarsFilling[7].setAttribute("fill", "url(#editImdbStar8Grad2Id" + id + ")");
    }
    if (number == 7.3) {
        arrayToRememberImdbStarsFilling[7].setAttribute("fill", "url(#editImdbStar8Grad3Id" + id + ")");
    }
    if (number == 7.4) {
        arrayToRememberImdbStarsFilling[7].setAttribute("fill", "url(#editImdbStar8Grad4Id" + id + ")");
    }
    if (number == 7.5) {
        arrayToRememberImdbStarsFilling[7].setAttribute("fill", "url(#editImdbStar8Grad5Id" + id + ")");
    }
    if (number == 7.6) {
        arrayToRememberImdbStarsFilling[7].setAttribute("fill", "url(#editImdbStar8Grad6Id" + id + ")");
    }
    if (number == 7.7) {
        arrayToRememberImdbStarsFilling[7].setAttribute("fill", "url(#editImdbStar8Grad7Id" + id + ")");
    }
    if (number == 7.8) {
        arrayToRememberImdbStarsFilling[7].setAttribute("fill", "url(#editImdbStar8Grad8Id" + id + ")");
    }
    if (number == 7.9) {
        arrayToRememberImdbStarsFilling[7].setAttribute("fill", "url(#editImdbStar8Grad9Id" + id + ")");
    }
    if (number == 8) {
        arrayToRememberImdbStarsFilling[7].setAttribute("fill", "url(#editImdbStar8GradFullId" + id + ")");
    }
    if (number == 8.1) {
        arrayToRememberImdbStarsFilling[8].setAttribute("fill", "url(#editImdbStar9Grad1Id" + id + ")");
    }
    if (number == 8.2) {
        arrayToRememberImdbStarsFilling[8].setAttribute("fill", "url(#editImdbStar9Grad2Id" + id + ")");
    }
    if (number == 8.3) {
        arrayToRememberImdbStarsFilling[8].setAttribute("fill", "url(#editImdbStar9Grad3Id" + id + ")");
    }
    if (number == 8.4) {
        arrayToRememberImdbStarsFilling[8].setAttribute("fill", "url(#editImdbStar9Grad4Id" + id + ")");
    }
    if (number == 8.5) {
        arrayToRememberImdbStarsFilling[8].setAttribute("fill", "url(#editImdbStar9Grad5Id" + id + ")");
    }
    if (number == 8.6) {
        arrayToRememberImdbStarsFilling[8].setAttribute("fill", "url(#editImdbStar9Grad6Id" + id + ")");
    }
    if (number == 8.7) {
        arrayToRememberImdbStarsFilling[8].setAttribute("fill", "url(#editImdbStar9Grad7Id" + id + ")");
    }
    if (number == 8.8) {
        arrayToRememberImdbStarsFilling[8].setAttribute("fill", "url(#editImdbStar9Grad8Id" + id + ")");
    }
    if (number == 8.9) {
        arrayToRememberImdbStarsFilling[8].setAttribute("fill", "url(#editImdbStar9Grad9Id" + id + ")");
    }
    if (number == 9) {
        arrayToRememberImdbStarsFilling[8].setAttribute("fill", "url(#editImdbStar9GradFullId" + id + ")");
    }
    if (number == 9.1) {
        arrayToRememberImdbStarsFilling[9].setAttribute("fill", "url(#editImdbStar10Grad1Id" + id + ")");
    }
    if (number == 9.2) {
        arrayToRememberImdbStarsFilling[9].setAttribute("fill", "url(#editImdbStar10Grad2Id" + id + ")");
    }
    if (number == 9.3) {
        arrayToRememberImdbStarsFilling[9].setAttribute("fill", "url(#editImdbStar10Grad3Id" + id + ")");
    }
    if (number == 9.4) {
        arrayToRememberImdbStarsFilling[9].setAttribute("fill", "url(#editImdbStar10Grad4Id" + id + ")");
    }
    if (number == 9.5) {
        arrayToRememberImdbStarsFilling[9].setAttribute("fill", "url(#editImdbStar10Grad5Id" + id + ")");
    }
    if (number == 9.6) {
        arrayToRememberImdbStarsFilling[9].setAttribute("fill", "url(#editImdbStar10Grad6Id" + id + ")");
    }
    if (number == 9.7) {
        arrayToRememberImdbStarsFilling[9].setAttribute("fill", "url(#editImdbStar10Grad7Id" + id + ")");
    }
    if (number == 9.8) {
        arrayToRememberImdbStarsFilling[9].setAttribute("fill", "url(#editImdbStar10Grad8Id" + id + ")");
    }
    if (number == 9.9) {
        arrayToRememberImdbStarsFilling[9].setAttribute("fill", "url(#editImdbStar10Grad9Id" + id + ")");
    }
    if (number == 10) {
        arrayToRememberImdbStarsFilling[9].setAttribute("fill", "url(#editImdbStar10GradFullId" + id + ")");
    }
}

function fillingStarsWithTheCorrespondingImdbRating(rating, id) {
    editImdbRatingValueToRemember = rating;
    
    let star1Full = "url(#editImdbStar1GradFullId" + id + ")";
    let star2Full = "url(#editImdbStar2GradFullId" + id + ")";
    let star3Full = "url(#editImdbStar3GradFullId" + id + ")";
    let star4Full = "url(#editImdbStar4GradFullId" + id + ")";
    let star5Full = "url(#editImdbStar5GradFullId" + id + ")";
    let star6Full = "url(#editImdbStar6GradFullId" + id + ")";
    let star7Full = "url(#editImdbStar7GradFullId" + id + ")";
    let star8Full = "url(#editImdbStar8GradFullId" + id + ")";
    let star9Full = "url(#editImdbStar9GradFullId" + id + ")";
    let star10Full = "url(#editImdbStar10GradFullId" + id + ")";
    
    if (rating == 1) {
        arrayToRememberImdbStarsFilling[0].setAttribute("fill", star1Full);
    } else if (rating >= 1.1 && rating <= 2) {
        arrayToRememberImdbStarsFilling[0].setAttribute("fill", star1Full);
    } else if (rating >= 2.1 && rating <= 3) {
        arrayToRememberImdbStarsFilling[0].setAttribute("fill", star1Full);
        arrayToRememberImdbStarsFilling[1].setAttribute("fill", star2Full);
    } else if (rating >= 3.1 && rating <= 4) {
        arrayToRememberImdbStarsFilling[0].setAttribute("fill", star1Full);
        arrayToRememberImdbStarsFilling[1].setAttribute("fill", star2Full);
        arrayToRememberImdbStarsFilling[2].setAttribute("fill", star3Full);
    } else if (rating >= 4.1 && rating <= 5) {
        arrayToRememberImdbStarsFilling[0].setAttribute("fill", star1Full);
        arrayToRememberImdbStarsFilling[1].setAttribute("fill", star2Full);
        arrayToRememberImdbStarsFilling[2].setAttribute("fill", star3Full);
        arrayToRememberImdbStarsFilling[3].setAttribute("fill", star4Full);
    } else if (rating >= 5.1 && rating <= 6) {
        arrayToRememberImdbStarsFilling[0].setAttribute("fill", star1Full);
        arrayToRememberImdbStarsFilling[1].setAttribute("fill", star2Full);
        arrayToRememberImdbStarsFilling[2].setAttribute("fill", star3Full);
        arrayToRememberImdbStarsFilling[3].setAttribute("fill", star4Full);
        arrayToRememberImdbStarsFilling[4].setAttribute("fill", star5Full);
    } else if (rating >= 6.1 && rating <= 7) {
        arrayToRememberImdbStarsFilling[0].setAttribute("fill", star1Full);
        arrayToRememberImdbStarsFilling[1].setAttribute("fill", star2Full);
        arrayToRememberImdbStarsFilling[2].setAttribute("fill", star3Full);
        arrayToRememberImdbStarsFilling[3].setAttribute("fill", star4Full);
        arrayToRememberImdbStarsFilling[4].setAttribute("fill", star5Full);
        arrayToRememberImdbStarsFilling[5].setAttribute("fill", star6Full);
    } else if (rating >= 7.1 && rating <= 8) {
        arrayToRememberImdbStarsFilling[0].setAttribute("fill", star1Full);
        arrayToRememberImdbStarsFilling[1].setAttribute("fill", star2Full);
        arrayToRememberImdbStarsFilling[2].setAttribute("fill", star3Full);
        arrayToRememberImdbStarsFilling[3].setAttribute("fill", star4Full);
        arrayToRememberImdbStarsFilling[4].setAttribute("fill", star5Full);
        arrayToRememberImdbStarsFilling[5].setAttribute("fill", star6Full);
        arrayToRememberImdbStarsFilling[6].setAttribute("fill", star7Full);
    } else if (rating >= 8.1 && rating <= 9) {
        arrayToRememberImdbStarsFilling[0].setAttribute("fill", star1Full);
        arrayToRememberImdbStarsFilling[1].setAttribute("fill", star2Full);
        arrayToRememberImdbStarsFilling[2].setAttribute("fill", star3Full);
        arrayToRememberImdbStarsFilling[3].setAttribute("fill", star4Full);
        arrayToRememberImdbStarsFilling[4].setAttribute("fill", star5Full);
        arrayToRememberImdbStarsFilling[5].setAttribute("fill", star6Full);
        arrayToRememberImdbStarsFilling[6].setAttribute("fill", star7Full);
        arrayToRememberImdbStarsFilling[7].setAttribute("fill", star8Full);
    } else if (rating >= 9.1 && rating < 10) {
        arrayToRememberImdbStarsFilling[0].setAttribute("fill", star1Full);
        arrayToRememberImdbStarsFilling[1].setAttribute("fill", star2Full);
        arrayToRememberImdbStarsFilling[2].setAttribute("fill", star3Full);
        arrayToRememberImdbStarsFilling[3].setAttribute("fill", star4Full);
        arrayToRememberImdbStarsFilling[4].setAttribute("fill", star5Full);
        arrayToRememberImdbStarsFilling[5].setAttribute("fill", star6Full);
        arrayToRememberImdbStarsFilling[6].setAttribute("fill", star7Full);
        arrayToRememberImdbStarsFilling[7].setAttribute("fill", star8Full);
        arrayToRememberImdbStarsFilling[8].setAttribute("fill", star9Full);
    } else if (rating == 10) {
        arrayToRememberImdbStarsFilling[0].setAttribute("fill", star1Full);
        arrayToRememberImdbStarsFilling[1].setAttribute("fill", star2Full);
        arrayToRememberImdbStarsFilling[2].setAttribute("fill", star3Full);
        arrayToRememberImdbStarsFilling[3].setAttribute("fill", star4Full);
        arrayToRememberImdbStarsFilling[4].setAttribute("fill", star5Full);
        arrayToRememberImdbStarsFilling[5].setAttribute("fill", star6Full);
        arrayToRememberImdbStarsFilling[6].setAttribute("fill", star7Full);
        arrayToRememberImdbStarsFilling[7].setAttribute("fill", star8Full);
        arrayToRememberImdbStarsFilling[8].setAttribute("fill", star9Full);
        arrayToRememberImdbStarsFilling[9].setAttribute("fill", star10Full);   
    }
    partialStarsFillingForImdbRating(rating, id);
}

//RATING IS SET/CHOSEN
function resetValueForHiddenInputForImdbRating() {
    let imdbRatingElement = "imdbRating" + IdToRemember;
    document.getElementById(imdbRatingElement).setAttribute("value", "");
}

const editMouseOverSetImdbRating = () => {
    const editImdbChosenRatingTooltip = getTooltipForSetImdbRating();
    editImdbChosenRatingTooltip.classList.remove("hidden");
    editImdbChosenRatingTooltip.innerHTML = firstPartForChosenRatingTooltipMessage + editImdbRatingValueToRemember + lastPartForChosenRatingTooltipMessage;
};
const editMouseOutOfSetImdbRating = () => {
    const editImdbChosenRatingTooltip = getTooltipForSetImdbRating();
    editImdbChosenRatingTooltip.classList.add("hidden");
    editImdbChosenRatingTooltip.innerHTML = "";
};

function runEventListenersWhenImdbRatingIsChosenOrAlreadySet() {
    arrayToRememberImdbStarsElements[0].addEventListener("mouseover", editMouseOverSetImdbRating);
    arrayToRememberImdbStarsElements[0].addEventListener("mouseout", editMouseOutOfSetImdbRating);
    arrayToRememberImdbStarsElements[1].addEventListener("mouseover", editMouseOverSetImdbRating);
    arrayToRememberImdbStarsElements[1].addEventListener("mouseout", editMouseOutOfSetImdbRating);
    arrayToRememberImdbStarsElements[2].addEventListener("mouseover", editMouseOverSetImdbRating);
    arrayToRememberImdbStarsElements[2].addEventListener("mouseout", editMouseOutOfSetImdbRating);
    arrayToRememberImdbStarsElements[3].addEventListener("mouseover", editMouseOverSetImdbRating);
    arrayToRememberImdbStarsElements[3].addEventListener("mouseout", editMouseOutOfSetImdbRating);
    arrayToRememberImdbStarsElements[4].addEventListener("mouseover", editMouseOverSetImdbRating);
    arrayToRememberImdbStarsElements[4].addEventListener("mouseout", editMouseOutOfSetImdbRating);
    arrayToRememberImdbStarsElements[5].addEventListener("mouseover", editMouseOverSetImdbRating);
    arrayToRememberImdbStarsElements[5].addEventListener("mouseout", editMouseOutOfSetImdbRating);
    arrayToRememberImdbStarsElements[6].addEventListener("mouseover", editMouseOverSetImdbRating);
    arrayToRememberImdbStarsElements[6].addEventListener("mouseout", editMouseOutOfSetImdbRating);
    arrayToRememberImdbStarsElements[7].addEventListener("mouseover", editMouseOverSetImdbRating);
    arrayToRememberImdbStarsElements[7].addEventListener("mouseout", editMouseOutOfSetImdbRating);
    arrayToRememberImdbStarsElements[8].addEventListener("mouseover", editMouseOverSetImdbRating);
    arrayToRememberImdbStarsElements[8].addEventListener("mouseout", editMouseOutOfSetImdbRating);
    arrayToRememberImdbStarsElements[9].addEventListener("mouseover", editMouseOverSetImdbRating);
    arrayToRememberImdbStarsElements[9].addEventListener("mouseout", editMouseOutOfSetImdbRating);
}

function removeEventListenersForChosenImdbRatingTooltips() {
    arrayToRememberImdbStarsElements[0].removeEventListener("mouseover", editMouseOverSetImdbRating);
    arrayToRememberImdbStarsElements[0].removeEventListener("mouseout", editMouseOutOfSetImdbRating);
    arrayToRememberImdbStarsElements[1].removeEventListener("mouseover", editMouseOverSetImdbRating);
    arrayToRememberImdbStarsElements[1].removeEventListener("mouseout", editMouseOutOfSetImdbRating);
    arrayToRememberImdbStarsElements[2].removeEventListener("mouseover", editMouseOverSetImdbRating);
    arrayToRememberImdbStarsElements[2].removeEventListener("mouseout", editMouseOutOfSetImdbRating);
    arrayToRememberImdbStarsElements[3].removeEventListener("mouseover", editMouseOverSetImdbRating);
    arrayToRememberImdbStarsElements[3].removeEventListener("mouseout", editMouseOutOfSetImdbRating);
    arrayToRememberImdbStarsElements[4].removeEventListener("mouseover", editMouseOverSetImdbRating);
    arrayToRememberImdbStarsElements[4].removeEventListener("mouseout", editMouseOutOfSetImdbRating);
    arrayToRememberImdbStarsElements[5].removeEventListener("mouseover", editMouseOverSetImdbRating);
    arrayToRememberImdbStarsElements[5].removeEventListener("mouseout", editMouseOutOfSetImdbRating);
    arrayToRememberImdbStarsElements[6].removeEventListener("mouseover", editMouseOverSetImdbRating);
    arrayToRememberImdbStarsElements[6].removeEventListener("mouseout", editMouseOutOfSetImdbRating);
    arrayToRememberImdbStarsElements[7].removeEventListener("mouseover", editMouseOverSetImdbRating);
    arrayToRememberImdbStarsElements[7].removeEventListener("mouseout", editMouseOutOfSetImdbRating);
    arrayToRememberImdbStarsElements[8].removeEventListener("mouseover", editMouseOverSetImdbRating);
    arrayToRememberImdbStarsElements[8].removeEventListener("mouseout", editMouseOutOfSetImdbRating);
    arrayToRememberImdbStarsElements[9].removeEventListener("mouseover", editMouseOverSetImdbRating);
    arrayToRememberImdbStarsElements[9].removeEventListener("mouseout", editMouseOutOfSetImdbRating);
}
//      ...     \\

function runEventListenersForImdbRatingChoosing() {
    editImdbRatingValueToRemember = "";
    arrayToRememberImdbStarsElements[0].addEventListener("mouseover", editMouseOver1StarForImdbRating);
    arrayToRememberImdbStarsElements[0].addEventListener("mouseout", editMouseOutOf1StarForImdbRating);
    arrayToRememberImdbStarsElements[0].addEventListener("click", editChoose1StarForImdbRating);
    arrayToRememberImdbStarsElements[1].addEventListener("mouseover", editMouseOver2StarForImdbRating);
    arrayToRememberImdbStarsElements[1].addEventListener("mouseout", editMouseOutOf2StarForImdbRating);
    arrayToRememberImdbStarsElements[1].addEventListener("click", editChoose2StarForImdbRating);
    arrayToRememberImdbStarsElements[1].addEventListener("mousemove", editFilling2StarForImdbRating, false);
    arrayToRememberImdbStarsElements[2].addEventListener("mouseover", editMouseOver3StarForImdbRating);
    arrayToRememberImdbStarsElements[2].addEventListener("mouseout", editMouseOutOf3StarForImdbRating);
    arrayToRememberImdbStarsElements[2].addEventListener("click", editChoose3StarForImdbRating);
    arrayToRememberImdbStarsElements[2].addEventListener("mousemove", editFilling3StarForImdbRating, false);
    arrayToRememberImdbStarsElements[3].addEventListener("mouseover", editMouseOver4StarForImdbRating);
    arrayToRememberImdbStarsElements[3].addEventListener("mouseout", editMouseOutOf4StarForImdbRating);
    arrayToRememberImdbStarsElements[3].addEventListener("click", editChoose4StarForImdbRating);
    arrayToRememberImdbStarsElements[3].addEventListener("mousemove", editFilling4StarForImdbRating, false);
    arrayToRememberImdbStarsElements[4].addEventListener("mouseover", editMouseOver5StarForImdbRating);
    arrayToRememberImdbStarsElements[4].addEventListener("mouseout", editMouseOutOf5StarForImdbRating);
    arrayToRememberImdbStarsElements[4].addEventListener("click", editChoose5StarForImdbRating);
    arrayToRememberImdbStarsElements[4].addEventListener("mousemove", editFilling5StarForImdbRating, false);
    arrayToRememberImdbStarsElements[5].addEventListener("mouseover", editMouseOver6StarForImdbRating);
    arrayToRememberImdbStarsElements[5].addEventListener("mouseout", editMouseOutOf6StarForImdbRating);
    arrayToRememberImdbStarsElements[5].addEventListener("click", editChoose6StarForImdbRating);
    arrayToRememberImdbStarsElements[5].addEventListener("mousemove", editFilling6StarForImdbRating, false);
    arrayToRememberImdbStarsElements[6].addEventListener("mouseover", editMouseOver7StarForImdbRating);
    arrayToRememberImdbStarsElements[6].addEventListener("mouseout", editMouseOutOf7StarForImdbRating);
    arrayToRememberImdbStarsElements[6].addEventListener("click", editChoose7StarForImdbRating);
    arrayToRememberImdbStarsElements[6].addEventListener("mousemove", editFilling7StarForImdbRating, false);
    arrayToRememberImdbStarsElements[7].addEventListener("mouseover", editMouseOver8StarForImdbRating);
    arrayToRememberImdbStarsElements[7].addEventListener("mouseout", editMouseOutOf8StarForImdbRating);
    arrayToRememberImdbStarsElements[7].addEventListener("click", editChoose8StarForImdbRating);
    arrayToRememberImdbStarsElements[7].addEventListener("mousemove", editFilling8StarForImdbRating, false);
    arrayToRememberImdbStarsElements[8].addEventListener("mouseover", editMouseOver9StarForImdbRating);
    arrayToRememberImdbStarsElements[8].addEventListener("mouseout", editMouseOutOf9StarForImdbRating);
    arrayToRememberImdbStarsElements[8].addEventListener("click", editChoose9StarForImdbRating);
    arrayToRememberImdbStarsElements[8].addEventListener("mousemove", editFilling9StarForImdbRating, false);
    arrayToRememberImdbStarsElements[9].addEventListener("mouseover", editMouseOver10StarForImdbRating);
    arrayToRememberImdbStarsElements[9].addEventListener("mouseout", editMouseOutOf10StarForImdbRating);
    arrayToRememberImdbStarsElements[9].addEventListener("click", editChoose10StarForImdbRating);
    arrayToRememberImdbStarsElements[9].addEventListener("mousemove", editFilling10StarForImdbRating, false);
}

function removingEventListenersForImdbRatingChoosing() {
    arrayToRememberImdbStarsElements[0].removeEventListener("mouseover", editMouseOver1StarForImdbRating);
    arrayToRememberImdbStarsElements[0].removeEventListener("mouseout", editMouseOutOf1StarForImdbRating);
    arrayToRememberImdbStarsElements[0].removeEventListener("click", editChoose1StarForImdbRating);
    arrayToRememberImdbStarsElements[1].removeEventListener("mouseover", editMouseOver2StarForImdbRating);
    arrayToRememberImdbStarsElements[1].removeEventListener("mouseout", editMouseOutOf2StarForImdbRating);
    arrayToRememberImdbStarsElements[1].removeEventListener("click", editChoose2StarForImdbRating);
    arrayToRememberImdbStarsElements[1].removeEventListener("mousemove", editFilling2StarForImdbRating, false);
    arrayToRememberImdbStarsElements[2].removeEventListener("mouseover", editMouseOver3StarForImdbRating);
    arrayToRememberImdbStarsElements[2].removeEventListener("mouseout", editMouseOutOf3StarForImdbRating);
    arrayToRememberImdbStarsElements[2].removeEventListener("click", editChoose3StarForImdbRating);
    arrayToRememberImdbStarsElements[2].removeEventListener("mousemove", editFilling3StarForImdbRating, false);
    arrayToRememberImdbStarsElements[3].removeEventListener("mouseover", editMouseOver4StarForImdbRating);
    arrayToRememberImdbStarsElements[3].removeEventListener("mouseout", editMouseOutOf4StarForImdbRating);
    arrayToRememberImdbStarsElements[3].removeEventListener("click", editChoose4StarForImdbRating);
    arrayToRememberImdbStarsElements[3].removeEventListener("mousemove", editFilling4StarForImdbRating, false);
    arrayToRememberImdbStarsElements[4].removeEventListener("mouseover", editMouseOver5StarForImdbRating);
    arrayToRememberImdbStarsElements[4].removeEventListener("mouseout", editMouseOutOf5StarForImdbRating);
    arrayToRememberImdbStarsElements[4].removeEventListener("click", editChoose5StarForImdbRating);
    arrayToRememberImdbStarsElements[4].removeEventListener("mousemove", editFilling5StarForImdbRating, false);
    arrayToRememberImdbStarsElements[5].removeEventListener("mouseover", editMouseOver6StarForImdbRating);
    arrayToRememberImdbStarsElements[5].removeEventListener("mouseout", editMouseOutOf6StarForImdbRating);
    arrayToRememberImdbStarsElements[5].removeEventListener("click", editChoose6StarForImdbRating);
    arrayToRememberImdbStarsElements[5].removeEventListener("mousemove", editFilling6StarForImdbRating, false);
    arrayToRememberImdbStarsElements[6].removeEventListener("mouseover", editMouseOver7StarForImdbRating);
    arrayToRememberImdbStarsElements[6].removeEventListener("mouseout", editMouseOutOf7StarForImdbRating);
    arrayToRememberImdbStarsElements[6].removeEventListener("click", editChoose7StarForImdbRating);
    arrayToRememberImdbStarsElements[6].removeEventListener("mousemove", editFilling7StarForImdbRating, false);
    arrayToRememberImdbStarsElements[7].removeEventListener("mouseover", editMouseOver8StarForImdbRating);
    arrayToRememberImdbStarsElements[7].removeEventListener("mouseout", editMouseOutOf8StarForImdbRating);
    arrayToRememberImdbStarsElements[7].removeEventListener("click", editChoose8StarForImdbRating);
    arrayToRememberImdbStarsElements[7].removeEventListener("mousemove", editFilling8StarForImdbRating, false);
    arrayToRememberImdbStarsElements[8].removeEventListener("mouseover", editMouseOver9StarForImdbRating);
    arrayToRememberImdbStarsElements[8].removeEventListener("mouseout", editMouseOutOf9StarForImdbRating);
    arrayToRememberImdbStarsElements[8].removeEventListener("click", editChoose9StarForImdbRating);
    arrayToRememberImdbStarsElements[8].removeEventListener("mousemove", editFilling9StarForImdbRating, false);
    arrayToRememberImdbStarsElements[9].removeEventListener("mouseover", editMouseOver10StarForImdbRating);
    arrayToRememberImdbStarsElements[9].removeEventListener("mouseout", editMouseOutOf10StarForImdbRating);
    arrayToRememberImdbStarsElements[9].removeEventListener("click", editChoose10StarForImdbRating);
    arrayToRememberImdbStarsElements[9].removeEventListener("mousemove", editFilling10StarForImdbRating, false);
}

function settingStarsEmptyForImdbRating() {
    arrayToRememberImdbStarsFilling[0].setAttribute("fill", "none");
    arrayToRememberImdbStarsFilling[1].setAttribute("fill", "none");
    arrayToRememberImdbStarsFilling[2].setAttribute("fill", "none");
    arrayToRememberImdbStarsFilling[3].setAttribute("fill", "none");
    arrayToRememberImdbStarsFilling[4].setAttribute("fill", "none");
    arrayToRememberImdbStarsFilling[5].setAttribute("fill", "none");
    arrayToRememberImdbStarsFilling[6].setAttribute("fill", "none");
    arrayToRememberImdbStarsFilling[7].setAttribute("fill", "none");
    arrayToRememberImdbStarsFilling[8].setAttribute("fill", "none");
    arrayToRememberImdbStarsFilling[9].setAttribute("fill", "none");
}

const resetStarImdbRating = () => {
    const editImdbChosenRatingTooltip = getTooltipForSetImdbRating();
    editImdbChosenRatingTooltip.classList.add("hidden");
    settingStarsEmptyForImdbRating();
    removeEventListenersForChosenImdbRatingTooltips();
    runEventListenersForImdbRatingChoosing();
    resetValueForHiddenInputForImdbRating();
};

function runDoubleClickEventListenersForImdbRating() {
    arrayToRememberImdbStarsElements[0].addEventListener("dblclick", resetStarImdbRating);
    arrayToRememberImdbStarsElements[1].addEventListener("dblclick", resetStarImdbRating);
    arrayToRememberImdbStarsElements[2].addEventListener("dblclick", resetStarImdbRating);
    arrayToRememberImdbStarsElements[3].addEventListener("dblclick", resetStarImdbRating);
    arrayToRememberImdbStarsElements[4].addEventListener("dblclick", resetStarImdbRating);
    arrayToRememberImdbStarsElements[5].addEventListener("dblclick", resetStarImdbRating);
    arrayToRememberImdbStarsElements[6].addEventListener("dblclick", resetStarImdbRating);
    arrayToRememberImdbStarsElements[7].addEventListener("dblclick", resetStarImdbRating);
    arrayToRememberImdbStarsElements[8].addEventListener("dblclick", resetStarImdbRating);
    arrayToRememberImdbStarsElements[9].addEventListener("dblclick", resetStarImdbRating);
}

function setValueForHiddenInputForImdbRating() {
    let imdbRatingElement = "imdbRating" + IdToRemember;
    document.getElementById(imdbRatingElement).setAttribute("value", editImdbRatingValueToRemember);
}

function runNeededFunctionsAfterUserHasChosenImdbRating() {
    removingEventListenersForImdbRatingChoosing();
    runDoubleClickEventListenersForImdbRating();
    runEventListenersWhenImdbRatingIsChosenOrAlreadySet();
    setValueForHiddenInputForImdbRating();    
}

//          STARS           \\
//1 STAR
const editMouseOver1StarForImdbRating = () => {
    arrayToRememberImdbStarsFilling[0].setAttribute("fill", "url(#editImdbStar1GradFullId" + IdToRemember + ")");
    arrayToRememberImdbStarsTooltips[0].classList.remove("hidden");
    arrayToRememberImdbStarsTooltips[0].innerHTML = "1";
    editImdbRatingValueToRemember = arrayToRememberImdbStarsTooltips[0].innerHTML;
};
const editMouseOutOf1StarForImdbRating = () => {
    arrayToRememberImdbStarsFilling[0].setAttribute("fill", "none");
    arrayToRememberImdbStarsTooltips[0].classList.add("hidden");
};
const editChoose1StarForImdbRating = () => {
    arrayToRememberImdbStarsTooltips[0].classList.add("hidden");
    runNeededFunctionsAfterUserHasChosenImdbRating();  
};

//2 STAR
const editMouseOver2StarForImdbRating = () => {
    arrayToRememberImdbStarsTooltips[1].classList.remove("hidden");
    arrayToRememberImdbStarsFilling[0].setAttribute("fill", "url(#editImdbStar1GradFullId" + IdToRemember + ")");
};
const editMouseOutOf2StarForImdbRating = () => {
    arrayToRememberImdbStarsFilling[1].setAttribute("fill", "none");
    arrayToRememberImdbStarsFilling[0].setAttribute("fill", "none");
    arrayToRememberImdbStarsTooltips[1].classList.add("hidden");
};
const editChoose2StarForImdbRating = () => {
    arrayToRememberImdbStarsTooltips[1].classList.add("hidden");
    runNeededFunctionsAfterUserHasChosenImdbRating();
};

function editFilling2StarForImdbRating(event) {
    let bnds = event.target.getBoundingClientRect();
    let x = event.clientX - bnds.left;
    let number = Math.floor(x);

    if (number >= (editStarsDivWidth * 0.1)) {
        arrayToRememberImdbStarsFilling[1].setAttribute("fill", "url(#editImdbStar2Grad1Id" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[1].innerHTML = "1.1";
    }
    if (number >= (editStarsDivWidth * 0.2)) {
        arrayToRememberImdbStarsFilling[1].setAttribute("fill", "url(#editImdbStar2Grad2Id" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[1].innerHTML = "1.2";
    }
    if (number >= (editStarsDivWidth * 0.3)) {
        arrayToRememberImdbStarsFilling[1].setAttribute("fill", "url(#editImdbStar2Grad3Id" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[1].innerHTML = "1.3";
    }
    if (number >= (editStarsDivWidth * 0.4)) {
        arrayToRememberImdbStarsFilling[1].setAttribute("fill", "url(#editImdbStar2Grad4Id" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[1].innerHTML = "1.4";
    }
    if (number >= editStarsDivWidth / 2) {
        arrayToRememberImdbStarsFilling[1].setAttribute("fill", "url(#editImdbStar2Grad5Id" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[1].innerHTML = "1.5";
    }
    if (number >= (editStarsDivWidth * 0.5) + 1.6) {
        arrayToRememberImdbStarsFilling[1].setAttribute("fill", "url(#editImdbStar2Grad6Id" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[1].innerHTML = "1.6";
    }
    if (number >= (editStarsDivWidth * 0.6)) {
        arrayToRememberImdbStarsFilling[1].setAttribute("fill", "url(#editImdbStar2Grad7Id" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[1].innerHTML = "1.7";
    }
    if (number >= (editStarsDivWidth * 0.7)) {
        arrayToRememberImdbStarsFilling[1].setAttribute("fill", "url(#editImdbStar2Grad8Id" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[1].innerHTML = "1.8";
    }
    if (number >= (editStarsDivWidth * 0.8)) {
        arrayToRememberImdbStarsFilling[1].setAttribute("fill", "url(#editImdbStar2Grad9Id" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[1].innerHTML = "1.9";
    }
    if (number >= (editStarsDivWidth * 0.9)) {
        arrayToRememberImdbStarsFilling[1].setAttribute("fill", "url(#editImdbStar2GradFullId" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[1].innerHTML = "2";
    }
    editImdbRatingValueToRemember = arrayToRememberImdbStarsTooltips[1].innerHTML;
}

//STAR 3
const editMouseOver3StarForImdbRating = () => {
    arrayToRememberImdbStarsTooltips[2].classList.remove("hidden");
    arrayToRememberImdbStarsFilling[0].setAttribute("fill", "url(#editImdbStar1GradFullId" + IdToRemember + ")");
    arrayToRememberImdbStarsFilling[1].setAttribute("fill", "url(#editImdbStar2GradFullId" + IdToRemember + ")");
};
const editMouseOutOf3StarForImdbRating = () => {
    arrayToRememberImdbStarsFilling[2].setAttribute("fill", "none");
    arrayToRememberImdbStarsFilling[1].setAttribute("fill", "none");
    arrayToRememberImdbStarsFilling[0].setAttribute("fill", "none");
    arrayToRememberImdbStarsTooltips[2].classList.add("hidden");
};
const editChoose3StarForImdbRating = () => {
    arrayToRememberImdbStarsTooltips[2].classList.add("hidden");
    runNeededFunctionsAfterUserHasChosenImdbRating();
};

function editFilling3StarForImdbRating(event) {
    let bnds = event.target.getBoundingClientRect();
    let x = event.clientX - bnds.left;
    let number = Math.floor(x);

    if (number >= (editStarsDivWidth * 0.1)) {
        arrayToRememberImdbStarsFilling[2].setAttribute("fill", "url(#editImdbStar3Grad1Id" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[2].innerHTML = "2.1";
    }
    if (number >= (editStarsDivWidth * 0.2)) {
        arrayToRememberImdbStarsFilling[2].setAttribute("fill", "url(#editImdbStar3Grad2Id" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[2].innerHTML = "2.2";
    }
    if (number >= (editStarsDivWidth * 0.3)) {
        arrayToRememberImdbStarsFilling[2].setAttribute("fill", "url(#editImdbStar3Grad3Id" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[2].innerHTML = "2.3";
    }
    if (number >= (editStarsDivWidth * 0.4)) {
        arrayToRememberImdbStarsFilling[2].setAttribute("fill", "url(#editImdbStar3Grad4Id" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[2].innerHTML = "2.4";
    }
    if (number >= editStarsDivWidth / 2) {
        arrayToRememberImdbStarsFilling[2].setAttribute("fill", "url(#editImdbStar3Grad5Id" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[2].innerHTML = "2.5";
    }
    if (number >= (editStarsDivWidth * 0.5) + 1.6) {
        arrayToRememberImdbStarsFilling[2].setAttribute("fill", "url(#editImdbStar3Grad6Id" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[2].innerHTML = "2.6";
    }
    if (number >= (editStarsDivWidth * 0.6)) {
        arrayToRememberImdbStarsFilling[2].setAttribute("fill", "url(#editImdbStar3Grad7Id" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[2].innerHTML = "2.7";
    }
    if (number >= (editStarsDivWidth * 0.7)) {
        arrayToRememberImdbStarsFilling[2].setAttribute("fill", "url(#editImdbStar3Grad8Id" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[2].innerHTML = "2.8";
    }
    if (number >= (editStarsDivWidth * 0.8)) {
        arrayToRememberImdbStarsFilling[2].setAttribute("fill", "url(#editImdbStar3Grad9Id" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[2].innerHTML = "2.9";
    }
    if (number >= (editStarsDivWidth * 0.9)) {
        arrayToRememberImdbStarsFilling[2].setAttribute("fill", "url(#editImdbStar3GradFullId" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[2].innerHTML = "3";
    }
    editImdbRatingValueToRemember = arrayToRememberImdbStarsTooltips[2].innerHTML;
}

//4 STAR
const editMouseOver4StarForImdbRating = () => {
    arrayToRememberImdbStarsTooltips[3].classList.remove("hidden");
    arrayToRememberImdbStarsFilling[0].setAttribute("fill", "url(#editImdbStar1GradFullId" + IdToRemember + ")");
    arrayToRememberImdbStarsFilling[1].setAttribute("fill", "url(#editImdbStar2GradFullId" + IdToRemember + ")");
    arrayToRememberImdbStarsFilling[2].setAttribute("fill", "url(#editImdbStar3GradFullId" + IdToRemember + ")");
};
const editMouseOutOf4StarForImdbRating = () => {
    arrayToRememberImdbStarsFilling[3].setAttribute("fill", "none");
    arrayToRememberImdbStarsFilling[2].setAttribute("fill", "none");
    arrayToRememberImdbStarsFilling[1].setAttribute("fill", "none");
    arrayToRememberImdbStarsFilling[0].setAttribute("fill", "none");
    arrayToRememberImdbStarsTooltips[3].classList.add("hidden");
};
const editChoose4StarForImdbRating = () => {
    arrayToRememberImdbStarsTooltips[3].classList.add("hidden");
    runNeededFunctionsAfterUserHasChosenImdbRating();    
};

function editFilling4StarForImdbRating(event) {
    let bnds = event.target.getBoundingClientRect();
    let x = event.clientX - bnds.left;
    let number = Math.floor(x);

    if (number >= (editStarsDivWidth * 0.1)) {
        arrayToRememberImdbStarsFilling[3].setAttribute("fill", "url(#editImdbStar4Grad1Id" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[3].innerHTML = "3.1";
    }
    if (number >= (editStarsDivWidth * 0.2)) {
        arrayToRememberImdbStarsFilling[3].setAttribute("fill", "url(#editImdbStar4Grad2Id" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[3].innerHTML = "3.2";
    }
    if (number >= (editStarsDivWidth * 0.3)) {
        arrayToRememberImdbStarsFilling[3].setAttribute("fill", "url(#editImdbStar4Grad3Id" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[3].innerHTML = "3.3";
    }
    if (number >= (editStarsDivWidth * 0.4)) {
        arrayToRememberImdbStarsFilling[3].setAttribute("fill", "url(#editImdbStar4Grad4Id" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[3].innerHTML = "3.4";
    }
    if (number >= editStarsDivWidth / 2) {
        arrayToRememberImdbStarsFilling[3].setAttribute("fill", "url(#editImdbStar4Grad5Id" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[3].innerHTML = "3.5";
    }
    if (number >= (editStarsDivWidth * 0.5) + 1.6) {
        arrayToRememberImdbStarsFilling[3].setAttribute("fill", "url(#editImdbStar4Grad6Id" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[3].innerHTML = "3.6";
    }
    if (number >= (editStarsDivWidth * 0.6)) {
        arrayToRememberImdbStarsFilling[3].setAttribute("fill", "url(#editImdbStar4Grad7Id" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[3].innerHTML = "3.7";
    }
    if (number >= (editStarsDivWidth * 0.7)) {
        arrayToRememberImdbStarsFilling[3].setAttribute("fill", "url(#editImdbStar4Grad8Id" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[3].innerHTML = "3.8";
    }
    if (number >= (editStarsDivWidth * 0.8)) {
        arrayToRememberImdbStarsFilling[3].setAttribute("fill", "url(#editImdbStar4Grad9Id" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[3].innerHTML = "3.9";
    }
    if (number >= (editStarsDivWidth * 0.9)) {
        arrayToRememberImdbStarsFilling[3].setAttribute("fill", "url(#editImdbStar4GradFullId" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[3].innerHTML = "4";
    }
    editImdbRatingValueToRemember = arrayToRememberImdbStarsTooltips[3].innerHTML;
}

//5 STAR
const editMouseOver5StarForImdbRating = () => {
    arrayToRememberImdbStarsTooltips[4].classList.remove("hidden");
    arrayToRememberImdbStarsFilling[0].setAttribute("fill", "url(#editImdbStar1GradFullId" + IdToRemember + ")");
    arrayToRememberImdbStarsFilling[1].setAttribute("fill", "url(#editImdbStar2GradFullId" + IdToRemember + ")");
    arrayToRememberImdbStarsFilling[2].setAttribute("fill", "url(#editImdbStar3GradFullId" + IdToRemember + ")");
    arrayToRememberImdbStarsFilling[3].setAttribute("fill", "url(#editImdbStar4GradFullId" + IdToRemember + ")");
};
const editMouseOutOf5StarForImdbRating = () => {
    arrayToRememberImdbStarsFilling[4].setAttribute("fill", "none");
    arrayToRememberImdbStarsFilling[3].setAttribute("fill", "none");
    arrayToRememberImdbStarsFilling[2].setAttribute("fill", "none");
    arrayToRememberImdbStarsFilling[1].setAttribute("fill", "none");
    arrayToRememberImdbStarsFilling[0].setAttribute("fill", "none");
    arrayToRememberImdbStarsTooltips[4].classList.add("hidden");
};
const editChoose5StarForImdbRating = () => {
    arrayToRememberImdbStarsTooltips[4].classList.add("hidden");
    runNeededFunctionsAfterUserHasChosenImdbRating();   
};

function editFilling5StarForImdbRating(event) {
    let bnds = event.target.getBoundingClientRect();
    let x = event.clientX - bnds.left;
    let number = Math.floor(x);

    if (number >= (editStarsDivWidth * 0.1)) {
        arrayToRememberImdbStarsFilling[4].setAttribute("fill", "url(#editImdbStar5Grad1Id" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[4].innerHTML = "4.1";
    }
    if (number >= (editStarsDivWidth * 0.2)) {
        arrayToRememberImdbStarsFilling[4].setAttribute("fill", "url(#editImdbStar5Grad2Id" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[4].innerHTML = "4.2";
    }
    if (number >= (editStarsDivWidth * 0.3)) {
        arrayToRememberImdbStarsFilling[4].setAttribute("fill", "url(#editImdbStar5Grad3Id" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[4].innerHTML = "4.3";
    }
    if (number >= (editStarsDivWidth * 0.4)) {
        arrayToRememberImdbStarsFilling[4].setAttribute("fill", "url(#editImdbStar5Grad4Id" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[4].innerHTML = "4.4";
    }
    if (number >= editStarsDivWidth / 2) {
        arrayToRememberImdbStarsFilling[4].setAttribute("fill", "url(#editImdbStar5Grad5Id" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[4].innerHTML = "4.5";
    }
    if (number >= (editStarsDivWidth * 0.5) + 1.6) {
        arrayToRememberImdbStarsFilling[4].setAttribute("fill", "url(#editImdbStar5Grad6Id" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[4].innerHTML = "4.6";
    }
    if (number >= (editStarsDivWidth * 0.6)) {
        arrayToRememberImdbStarsFilling[4].setAttribute("fill", "url(#editImdbStar5Grad7Id" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[4].innerHTML = "4.7";
    }
    if (number >= (editStarsDivWidth * 0.7)) {
        arrayToRememberImdbStarsFilling[4].setAttribute("fill", "url(#editImdbStar5Grad8Id" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[4].innerHTML = "4.8";
    }
    if (number >= (editStarsDivWidth * 0.8)) {
        arrayToRememberImdbStarsFilling[4].setAttribute("fill", "url(#editImdbStar5Grad9Id" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[4].innerHTML = "4.9";
    }
    if (number >= (editStarsDivWidth * 0.9)) {
        arrayToRememberImdbStarsFilling[4].setAttribute("fill", "url(#editImdbStar5GradFullId" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[4].innerHTML = "5";
    }
    editImdbRatingValueToRemember = arrayToRememberImdbStarsTooltips[4].innerHTML;
}

//6 STAR
const editMouseOver6StarForImdbRating = () => {
    arrayToRememberImdbStarsTooltips[5].classList.remove("hidden");
    arrayToRememberImdbStarsFilling[0].setAttribute("fill", "url(#editImdbStar1GradFullId" + IdToRemember + ")");
    arrayToRememberImdbStarsFilling[1].setAttribute("fill", "url(#editImdbStar2GradFullId" + IdToRemember + ")");
    arrayToRememberImdbStarsFilling[2].setAttribute("fill", "url(#editImdbStar3GradFullId" + IdToRemember + ")");
    arrayToRememberImdbStarsFilling[3].setAttribute("fill", "url(#editImdbStar4GradFullId" + IdToRemember + ")");
    arrayToRememberImdbStarsFilling[4].setAttribute("fill", "url(#editImdbStar5GradFullId" + IdToRemember + ")");
};
const editMouseOutOf6StarForImdbRating = () => {
    arrayToRememberImdbStarsFilling[5].setAttribute("fill", "none");
    arrayToRememberImdbStarsFilling[4].setAttribute("fill", "none");
    arrayToRememberImdbStarsFilling[3].setAttribute("fill", "none");
    arrayToRememberImdbStarsFilling[2].setAttribute("fill", "none");
    arrayToRememberImdbStarsFilling[1].setAttribute("fill", "none");
    arrayToRememberImdbStarsFilling[0].setAttribute("fill", "none");
    arrayToRememberImdbStarsTooltips[5].classList.add("hidden");
};
const editChoose6StarForImdbRating = () => {
    arrayToRememberImdbStarsTooltips[5].classList.add("hidden");
    runNeededFunctionsAfterUserHasChosenImdbRating();    
};

function editFilling6StarForImdbRating(event) {
    let bnds = event.target.getBoundingClientRect();
    let x = event.clientX - bnds.left;
    let number = Math.floor(x);

    if (number >= (editStarsDivWidth * 0.1)) {
        arrayToRememberImdbStarsFilling[5].setAttribute("fill", "url(#editImdbStar6Grad1Id" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[5].innerHTML = "5.1";
    }
    if (number >= (editStarsDivWidth * 0.2)) {
        arrayToRememberImdbStarsFilling[5].setAttribute("fill", "url(#editImdbStar6Grad2Id" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[5].innerHTML = "5.2";
    }
    if (number >= (editStarsDivWidth * 0.3)) {
        arrayToRememberImdbStarsFilling[5].setAttribute("fill", "url(#editImdbStar6Grad3Id" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[5].innerHTML = "5.3";
    }
    if (number >= (editStarsDivWidth * 0.4)) {
        arrayToRememberImdbStarsFilling[5].setAttribute("fill", "url(#editImdbStar6Grad4Id" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[5].innerHTML = "5.4";
    }
    if (number >= editStarsDivWidth / 2) {
        arrayToRememberImdbStarsFilling[5].setAttribute("fill", "url(#editImdbStar6Grad5Id" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[5].innerHTML = "5.5";
    }
    if (number >= (editStarsDivWidth * 0.5) + 1.6) {
        arrayToRememberImdbStarsFilling[5].setAttribute("fill", "url(#editImdbStar6Grad6Id" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[5].innerHTML = "5.6";
    }
    if (number >= (editStarsDivWidth * 0.6)) {
        arrayToRememberImdbStarsFilling[5].setAttribute("fill", "url(#editImdbStar6Grad7Id" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[5].innerHTML = "5.7";
    }
    if (number >= (editStarsDivWidth * 0.7)) {
        arrayToRememberImdbStarsFilling[5].setAttribute("fill", "url(#editImdbStar6Grad8Id" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[5].innerHTML = "5.8";
    }
    if (number >= (editStarsDivWidth * 0.8)) {
        arrayToRememberImdbStarsFilling[5].setAttribute("fill", "url(#editImdbStar6Grad9Id" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[5].innerHTML = "5.9";
    }
    if (number >= (editStarsDivWidth * 0.9)) {
        arrayToRememberImdbStarsFilling[5].setAttribute("fill", "url(#editImdbStar6GradFullId" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[5].innerHTML = "6";
    }
    editImdbRatingValueToRemember = arrayToRememberImdbStarsTooltips[5].innerHTML;
}

//7 STAR
const editMouseOver7StarForImdbRating = () => {
    arrayToRememberImdbStarsTooltips[6].classList.remove("hidden");
    arrayToRememberImdbStarsFilling[0].setAttribute("fill", "url(#editImdbStar1GradFullId" + IdToRemember + ")");
    arrayToRememberImdbStarsFilling[1].setAttribute("fill", "url(#editImdbStar2GradFullId" + IdToRemember + ")");
    arrayToRememberImdbStarsFilling[2].setAttribute("fill", "url(#editImdbStar3GradFullId" + IdToRemember + ")");
    arrayToRememberImdbStarsFilling[3].setAttribute("fill", "url(#editImdbStar4GradFullId" + IdToRemember + ")");
    arrayToRememberImdbStarsFilling[4].setAttribute("fill", "url(#editImdbStar5GradFullId" + IdToRemember + ")");
    arrayToRememberImdbStarsFilling[5].setAttribute("fill", "url(#editImdbStar6GradFullId" + IdToRemember + ")");
};
const editMouseOutOf7StarForImdbRating = () => {
    arrayToRememberImdbStarsFilling[6].setAttribute("fill", "none");
    arrayToRememberImdbStarsFilling[5].setAttribute("fill", "none");
    arrayToRememberImdbStarsFilling[4].setAttribute("fill", "none");
    arrayToRememberImdbStarsFilling[3].setAttribute("fill", "none");
    arrayToRememberImdbStarsFilling[2].setAttribute("fill", "none");
    arrayToRememberImdbStarsFilling[1].setAttribute("fill", "none");
    arrayToRememberImdbStarsFilling[0].setAttribute("fill", "none");
    arrayToRememberImdbStarsTooltips[6].classList.add("hidden");
};
const editChoose7StarForImdbRating = () => {
    arrayToRememberImdbStarsTooltips[6].classList.add("hidden");
    runNeededFunctionsAfterUserHasChosenImdbRating();    
};

function editFilling7StarForImdbRating(event) {
    let bnds = event.target.getBoundingClientRect();
    let x = event.clientX - bnds.left;
    let number = Math.floor(x);

    if (number >= (editStarsDivWidth * 0.1)) {
        arrayToRememberImdbStarsFilling[6].setAttribute("fill", "url(#editImdbStar7Grad1Id" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[6].innerHTML = "6.1";
    }
    if (number >= (editStarsDivWidth * 0.2)) {
        arrayToRememberImdbStarsFilling[6].setAttribute("fill", "url(#editImdbStar7Grad2Id" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[6].innerHTML = "6.2";
    }
    if (number >= (editStarsDivWidth * 0.3)) {
        arrayToRememberImdbStarsFilling[6].setAttribute("fill", "url(#editImdbStar7Grad3Id" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[6].innerHTML = "6.3";
    }
    if (number >= (editStarsDivWidth * 0.4)) {
        arrayToRememberImdbStarsFilling[6].setAttribute("fill", "url(#editImdbStar7Grad4Id" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[6].innerHTML = "6.4";
    }
    if (number >= editStarsDivWidth / 2) {
        arrayToRememberImdbStarsFilling[6].setAttribute("fill", "url(#editImdbStar7Grad5Id" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[6].innerHTML = "6.5";
    }
    if (number >= (editStarsDivWidth * 0.5) + 1.6) {
        arrayToRememberImdbStarsFilling[6].setAttribute("fill", "url(#editImdbStar7Grad6Id" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[6].innerHTML = "6.6";
    }
    if (number >= (editStarsDivWidth * 0.6)) {
        arrayToRememberImdbStarsFilling[6].setAttribute("fill", "url(#editImdbStar7Grad7Id" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[6].innerHTML = "6.7";
    }
    if (number >= (editStarsDivWidth * 0.7)) {
        arrayToRememberImdbStarsFilling[6].setAttribute("fill", "url(#editImdbStar7Grad8Id" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[6].innerHTML = "6.8";
    }
    if (number >= (editStarsDivWidth * 0.8)) {
        arrayToRememberImdbStarsFilling[6].setAttribute("fill", "url(#editImdbStar7Grad9Id" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[6].innerHTML = "6.9";
    }
    if (number >= (editStarsDivWidth * 0.9)) {
        arrayToRememberImdbStarsFilling[6].setAttribute("fill", "url(#editImdbStar7GradFullId" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[6].innerHTML = "7";
    }
    editImdbRatingValueToRemember = arrayToRememberImdbStarsTooltips[6].innerHTML;
}

//8 STAR
const editMouseOver8StarForImdbRating = () => {
    arrayToRememberImdbStarsTooltips[7].classList.remove("hidden");
    arrayToRememberImdbStarsFilling[0].setAttribute("fill", "url(#editImdbStar1GradFullId" + IdToRemember + ")");
    arrayToRememberImdbStarsFilling[1].setAttribute("fill", "url(#editImdbStar2GradFullId" + IdToRemember + ")");
    arrayToRememberImdbStarsFilling[2].setAttribute("fill", "url(#editImdbStar3GradFullId" + IdToRemember + ")");
    arrayToRememberImdbStarsFilling[3].setAttribute("fill", "url(#editImdbStar4GradFullId" + IdToRemember + ")");
    arrayToRememberImdbStarsFilling[4].setAttribute("fill", "url(#editImdbStar5GradFullId" + IdToRemember + ")");
    arrayToRememberImdbStarsFilling[5].setAttribute("fill", "url(#editImdbStar6GradFullId" + IdToRemember + ")");
    arrayToRememberImdbStarsFilling[6].setAttribute("fill", "url(#editImdbStar7GradFullId" + IdToRemember + ")");
};
const editMouseOutOf8StarForImdbRating = () => {
    arrayToRememberImdbStarsFilling[7].setAttribute("fill", "none");
    arrayToRememberImdbStarsFilling[6].setAttribute("fill", "none");
    arrayToRememberImdbStarsFilling[5].setAttribute("fill", "none");
    arrayToRememberImdbStarsFilling[4].setAttribute("fill", "none");
    arrayToRememberImdbStarsFilling[3].setAttribute("fill", "none");
    arrayToRememberImdbStarsFilling[2].setAttribute("fill", "none");
    arrayToRememberImdbStarsFilling[1].setAttribute("fill", "none");
    arrayToRememberImdbStarsFilling[0].setAttribute("fill", "none");
    arrayToRememberImdbStarsTooltips[7].classList.add("hidden");
};
const editChoose8StarForImdbRating = () => {
    arrayToRememberImdbStarsTooltips[7].classList.add("hidden");
    runNeededFunctionsAfterUserHasChosenImdbRating();    
};

function editFilling8StarForImdbRating(event) {
    let bnds = event.target.getBoundingClientRect();
    let x = event.clientX - bnds.left;
    let number = Math.floor(x);

    if (number >= (editStarsDivWidth * 0.1)) {
        arrayToRememberImdbStarsFilling[7].setAttribute("fill", "url(#editImdbStar8Grad1Id" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[7].innerHTML = "7.1";
    }
    if (number >= (editStarsDivWidth * 0.2)) {
        arrayToRememberImdbStarsFilling[7].setAttribute("fill", "url(#editImdbStar8Grad2Id" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[7].innerHTML = "7.2";
    }
    if (number >= (editStarsDivWidth * 0.3)) {
        arrayToRememberImdbStarsFilling[7].setAttribute("fill", "url(#editImdbStar8Grad3Id" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[7].innerHTML = "7.3";
    }
    if (number >= (editStarsDivWidth * 0.4)) {
        arrayToRememberImdbStarsFilling[7].setAttribute("fill", "url(#editImdbStar8Grad4Id" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[7].innerHTML = "7.4";
    }
    if (number >= editStarsDivWidth / 2) {
        arrayToRememberImdbStarsFilling[7].setAttribute("fill", "url(#editImdbStar8Grad5Id" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[7].innerHTML = "7.5";
    }
    if (number >= (editStarsDivWidth * 0.5) + 1.6) {
        arrayToRememberImdbStarsFilling[7].setAttribute("fill", "url(#editImdbStar8Grad6Id" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[7].innerHTML = "7.6";
    }
    if (number >= (editStarsDivWidth * 0.6)) {
        arrayToRememberImdbStarsFilling[7].setAttribute("fill", "url(#editImdbStar8Grad7Id" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[7].innerHTML = "7.7";
    }
    if (number >= (editStarsDivWidth * 0.7)) {
        arrayToRememberImdbStarsFilling[7].setAttribute("fill", "url(#editImdbStar8Grad8Id" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[7].innerHTML = "7.8";
    }
    if (number >= (editStarsDivWidth * 0.8)) {
        arrayToRememberImdbStarsFilling[7].setAttribute("fill", "url(#editImdbStar8Grad9Id" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[7].innerHTML = "7.9";
    }
    if (number >= (editStarsDivWidth * 0.9)) {
        arrayToRememberImdbStarsFilling[7].setAttribute("fill", "url(#editImdbStar8GradFullId" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[7].innerHTML = "8";
    }
    editImdbRatingValueToRemember = arrayToRememberImdbStarsTooltips[7].innerHTML;
}

//9 STAR
const editMouseOver9StarForImdbRating = () => {
    arrayToRememberImdbStarsTooltips[8].classList.remove("hidden");
    arrayToRememberImdbStarsFilling[0].setAttribute("fill", "url(#editImdbStar1GradFullId" + IdToRemember + ")");
    arrayToRememberImdbStarsFilling[1].setAttribute("fill", "url(#editImdbStar2GradFullId" + IdToRemember + ")");
    arrayToRememberImdbStarsFilling[2].setAttribute("fill", "url(#editImdbStar3GradFullId" + IdToRemember + ")");
    arrayToRememberImdbStarsFilling[3].setAttribute("fill", "url(#editImdbStar4GradFullId" + IdToRemember + ")");
    arrayToRememberImdbStarsFilling[4].setAttribute("fill", "url(#editImdbStar5GradFullId" + IdToRemember + ")");
    arrayToRememberImdbStarsFilling[5].setAttribute("fill", "url(#editImdbStar6GradFullId" + IdToRemember + ")");
    arrayToRememberImdbStarsFilling[6].setAttribute("fill", "url(#editImdbStar7GradFullId" + IdToRemember + ")");
    arrayToRememberImdbStarsFilling[7].setAttribute("fill", "url(#editImdbStar8GradFullId" + IdToRemember + ")");
};
const editMouseOutOf9StarForImdbRating = () => {
    arrayToRememberImdbStarsFilling[8].setAttribute("fill", "none");
    arrayToRememberImdbStarsFilling[7].setAttribute("fill", "none");
    arrayToRememberImdbStarsFilling[6].setAttribute("fill", "none");
    arrayToRememberImdbStarsFilling[5].setAttribute("fill", "none");
    arrayToRememberImdbStarsFilling[4].setAttribute("fill", "none");
    arrayToRememberImdbStarsFilling[3].setAttribute("fill", "none");
    arrayToRememberImdbStarsFilling[2].setAttribute("fill", "none");
    arrayToRememberImdbStarsFilling[1].setAttribute("fill", "none");
    arrayToRememberImdbStarsFilling[0].setAttribute("fill", "none");
    arrayToRememberImdbStarsTooltips[8].classList.add("hidden");
};
const editChoose9StarForImdbRating = () => {
    arrayToRememberImdbStarsTooltips[8].classList.add("hidden");
    runNeededFunctionsAfterUserHasChosenImdbRating();    
};

function editFilling9StarForImdbRating(event) {
    let bnds = event.target.getBoundingClientRect();
    let x = event.clientX - bnds.left;
    let number = Math.floor(x);

    if (number >= (editStarsDivWidth * 0.1)) {
        arrayToRememberImdbStarsFilling[8].setAttribute("fill", "url(#editImdbStar9Grad1Id" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[8].innerHTML = "8.1";
    }
    if (number >= (editStarsDivWidth * 0.2)) {
        arrayToRememberImdbStarsFilling[8].setAttribute("fill", "url(#editImdbStar9Grad2Id" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[8].innerHTML = "8.2";
    }
    if (number >= (editStarsDivWidth * 0.3)) {
        arrayToRememberImdbStarsFilling[8].setAttribute("fill", "url(#editImdbStar9Grad3Id" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[8].innerHTML = "8.3";
    }
    if (number >= (editStarsDivWidth * 0.4)) {
        arrayToRememberImdbStarsFilling[8].setAttribute("fill", "url(#editImdbStar9Grad4Id" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[8].innerHTML = "8.4";
    }
    if (number >= editStarsDivWidth / 2) {
        arrayToRememberImdbStarsFilling[8].setAttribute("fill", "url(#editImdbStar9Grad5Id" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[8].innerHTML = "8.5";
    }
    if (number >= (editStarsDivWidth * 0.5) + 1.6) {
        arrayToRememberImdbStarsFilling[8].setAttribute("fill", "url(#editImdbStar9Grad6Id" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[8].innerHTML = "8.6";
    }
    if (number >= (editStarsDivWidth * 0.6)) {
        arrayToRememberImdbStarsFilling[8].setAttribute("fill", "url(#editImdbStar9Grad7Id" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[8].innerHTML = "8.7";
    }
    if (number >= (editStarsDivWidth * 0.7)) {
        arrayToRememberImdbStarsFilling[8].setAttribute("fill", "url(#editImdbStar9Grad8Id" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[8].innerHTML = "8.8";
    }
    if (number >= (editStarsDivWidth * 0.8)) {
        arrayToRememberImdbStarsFilling[8].setAttribute("fill", "url(#editImdbStar9Grad9Id" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[8].innerHTML = "8.9";
    }
    if (number >= (editStarsDivWidth * 0.9)) {
        arrayToRememberImdbStarsFilling[8].setAttribute("fill", "url(#editImdbStar9GradFullId" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[8].innerHTML = "9";
    }
    editImdbRatingValueToRemember = arrayToRememberImdbStarsTooltips[8].innerHTML;
}

//10 STAR
const editMouseOver10StarForImdbRating = () => {
    arrayToRememberImdbStarsTooltips[9].classList.remove("hidden");
    arrayToRememberImdbStarsFilling[0].setAttribute("fill", "url(#editImdbStar1GradFullId" + IdToRemember + ")");
    arrayToRememberImdbStarsFilling[1].setAttribute("fill", "url(#editImdbStar2GradFullId" + IdToRemember + ")");
    arrayToRememberImdbStarsFilling[2].setAttribute("fill", "url(#editImdbStar3GradFullId" + IdToRemember + ")");
    arrayToRememberImdbStarsFilling[3].setAttribute("fill", "url(#editImdbStar4GradFullId" + IdToRemember + ")");
    arrayToRememberImdbStarsFilling[4].setAttribute("fill", "url(#editImdbStar5GradFullId" + IdToRemember + ")");
    arrayToRememberImdbStarsFilling[5].setAttribute("fill", "url(#editImdbStar6GradFullId" + IdToRemember + ")");
    arrayToRememberImdbStarsFilling[6].setAttribute("fill", "url(#editImdbStar7GradFullId" + IdToRemember + ")");
    arrayToRememberImdbStarsFilling[7].setAttribute("fill", "url(#editImdbStar8GradFullId" + IdToRemember + ")");
    arrayToRememberImdbStarsFilling[8].setAttribute("fill", "url(#editImdbStar9GradFullId" + IdToRemember + ")");
};
const editMouseOutOf10StarForImdbRating = () => {
    arrayToRememberImdbStarsFilling[9].setAttribute("fill", "none");
    arrayToRememberImdbStarsFilling[8].setAttribute("fill", "none");
    arrayToRememberImdbStarsFilling[7].setAttribute("fill", "none");
    arrayToRememberImdbStarsFilling[6].setAttribute("fill", "none");
    arrayToRememberImdbStarsFilling[5].setAttribute("fill", "none");
    arrayToRememberImdbStarsFilling[4].setAttribute("fill", "none");
    arrayToRememberImdbStarsFilling[3].setAttribute("fill", "none");
    arrayToRememberImdbStarsFilling[2].setAttribute("fill", "none");
    arrayToRememberImdbStarsFilling[1].setAttribute("fill", "none");
    arrayToRememberImdbStarsFilling[0].setAttribute("fill", "none");
    arrayToRememberImdbStarsTooltips[9].classList.add("hidden");
};
const editChoose10StarForImdbRating = () => {
    arrayToRememberImdbStarsTooltips[9].classList.add("hidden");
    runNeededFunctionsAfterUserHasChosenImdbRating(); 
};

function editFilling10StarForImdbRating(event) {
    let bnds = event.target.getBoundingClientRect();
    let x = event.clientX - bnds.left;
    let number = Math.floor(x);

    if (number >= (editStarsDivWidth * 0.1)) {
        arrayToRememberImdbStarsFilling[9].setAttribute("fill", "url(#editImdbStar10Grad1Id" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[9].innerHTML = "9.1";
    }
    if (number >= (editStarsDivWidth * 0.2)) {
        arrayToRememberImdbStarsFilling[9].setAttribute("fill", "url(#editImdbStar10Grad2Id" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[9].innerHTML = "9.2";
    }
    if (number >= (editStarsDivWidth * 0.3)) {
        arrayToRememberImdbStarsFilling[9].setAttribute("fill", "url(#editImdbStar10Grad3Id" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[9].innerHTML = "9.3";
    }
    if (number >= (editStarsDivWidth * 0.4)) {
        arrayToRememberImdbStarsFilling[9].setAttribute("fill", "url(#editImdbStar10Grad4Id" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[9].innerHTML = "9.4";
    }
    if (number >= editStarsDivWidth / 2) {
        arrayToRememberImdbStarsFilling[9].setAttribute("fill", "url(#editImdbStar10Grad5Id" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[9].innerHTML = "9.5";
    }
    if (number >= (editStarsDivWidth * 0.5) + 1.6) {
        arrayToRememberImdbStarsFilling[9].setAttribute("fill", "url(#editImdbStar10Grad6Id" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[9].innerHTML = "9.6";
    }
    if (number >= (editStarsDivWidth * 0.6)) {
        arrayToRememberImdbStarsFilling[9].setAttribute("fill", "url(#editImdbStar10Grad7Id" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[9].innerHTML = "9.7";
    }
    if (number >= (editStarsDivWidth * 0.7)) {
        arrayToRememberImdbStarsFilling[9].setAttribute("fill", "url(#editImdbStar10Grad8Id" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[9].innerHTML = "9.8";
    }
    if (number >= (editStarsDivWidth * 0.8)) {
        arrayToRememberImdbStarsFilling[9].setAttribute("fill", "url(#editImdbStar10Grad9Id" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[9].innerHTML = "9.9";
    }
    if (number >= (editStarsDivWidth * 0.9)) {
        arrayToRememberImdbStarsFilling[9].setAttribute("fill", "url(#editImdbStar10GradFullId" + IdToRemember + ")");
        arrayToRememberImdbStarsTooltips[9].innerHTML = "10";
    }
    editImdbRatingValueToRemember = arrayToRememberImdbStarsTooltips[9].innerHTML;
}

//                          M   A   I   N                        \\
function starsImdbRating(id) {
    rememberImdbRatingValueWhenClosingModalWithoutSaving = getImdbRatingValue(id);
    let imdbRatingValue;    
    let divWithStars = document.getElementById("imdbRatingAsStars" + id);

    const editStar1Element = divWithStars.querySelector("#editImdbStar1Rating" + id);
    const editStar2Element = divWithStars.querySelector("#editImdbStar2Rating" + id);
    const editStar3Element = divWithStars.querySelector("#editImdbStar3Rating" + id);
    const editStar4Element = divWithStars.querySelector("#editImdbStar4Rating" + id);
    const editStar5Element = divWithStars.querySelector("#editImdbStar5Rating" + id);
    const editStar6Element = divWithStars.querySelector("#editImdbStar6Rating" + id);
    const editStar7Element = divWithStars.querySelector("#editImdbStar7Rating" + id);
    const editStar8Element = divWithStars.querySelector("#editImdbStar8Rating" + id);
    const editStar9Element = divWithStars.querySelector("#editImdbStar9Rating" + id);
    const editStar10Element = divWithStars.querySelector("#editImdbStar10Rating" + id);
    let arrayOfStarsElements = [editStar1Element, editStar2Element, editStar3Element, editStar4Element, 
        editStar5Element, editStar6Element, editStar7Element, editStar8Element, editStar9Element, editStar10Element
    ];
    arrayToRememberImdbStarsElements = arrayOfStarsElements;

    const editStar1Fill = editStar1Element.querySelector("path");
    const editStar2Fill = editStar2Element.querySelector("path");
    const editStar3Fill = editStar3Element.querySelector("path");
    const editStar4Fill = editStar4Element.querySelector("path");
    const editStar5Fill = editStar5Element.querySelector("path");
    const editStar6Fill = editStar6Element.querySelector("path");
    const editStar7Fill = editStar7Element.querySelector("path");
    const editStar8Fill = editStar8Element.querySelector("path");
    const editStar9Fill = editStar9Element.querySelector("path");
    const editStar10Fill = editStar10Element.querySelector("path");
    let arrayOfStarsFilling = [editStar1Fill, editStar2Fill, editStar3Fill, editStar4Fill, editStar5Fill, 
        editStar6Fill, editStar7Fill, editStar8Fill, editStar9Fill, editStar10Fill
    ];
    arrayToRememberImdbStarsFilling = arrayOfStarsFilling;

    const editStar1Tooltip = document.getElementById("editImdbStar1Tooltip" + id);
    const editStar2Tooltip = document.getElementById("editImdbStar2Tooltip" + id);
    const editStar3Tooltip = document.getElementById("editImdbStar3Tooltip" + id);
    const editStar4Tooltip = document.getElementById("editImdbStar4Tooltip" + id);
    const editStar5Tooltip = document.getElementById("editImdbStar5Tooltip" + id);
    const editStar6Tooltip = document.getElementById("editImdbStar6Tooltip" + id);
    const editStar7Tooltip = document.getElementById("editImdbStar7Tooltip" + id);
    const editStar8Tooltip = document.getElementById("editImdbStar8Tooltip" + id);
    const editStar9Tooltip = document.getElementById("editImdbStar9Tooltip" + id);
    const editStar10Tooltip = document.getElementById("editImdbStar10Tooltip" + id);
    let arrayOfStarsTooltips = [editStar1Tooltip, editStar2Tooltip, editStar3Tooltip, editStar4Tooltip,
        editStar5Tooltip, editStar6Tooltip, editStar7Tooltip, editStar8Tooltip, editStar9Tooltip, editStar10Tooltip
    ];
    arrayToRememberImdbStarsTooltips = arrayOfStarsTooltips;

    if (isImdbRatingValueEmpty(id)) {
        runEventListenersForImdbRatingChoosing();
    } else {
        imdbRatingValue = getImdbRatingValue(id);
        fillingStarsWithTheCorrespondingImdbRating(imdbRatingValue, id);
        runEventListenersWhenImdbRatingIsChosenOrAlreadySet();
        runDoubleClickEventListenersForImdbRating();
    }
}