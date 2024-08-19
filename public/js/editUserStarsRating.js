let editRatingValueToRemember = "";
let rememberRatingValueWhenClosingModalWithoutSaving = "";
let arrayToRememberStarsElements = [];
let arrayToRememberStarsFilling = [];
let arrayToRememberStarsTooltips = [];

//GETTING VALUES & SETTING FLAGS
function getRatingValue(id) {		
	let hiddenInputRating = "rating" + id;
    let ratingValue = document.getElementById(hiddenInputRating).value;
    return ratingValue;
}

function isRatingValueEmpty(id) {    
    let hiddenInputRating = "rating" + id;
    let ratingValue = document.getElementById(hiddenInputRating).value;
    
    if (ratingValue === "") {
        return true;
    } else return false;
}

function getTooltipForSetRating() {
    const editChosenRatingTooltip = document.getElementById("editChosenRating" + IdToRemember);    
    return editChosenRatingTooltip;
}

function setHiddenInputWhenClosingModalWithoutSaving() {
    let ratingElement = "rating" + IdToRemember;
    document.getElementById(ratingElement).setAttribute("value", rememberRatingValueWhenClosingModalWithoutSaving);
}
//      ...     \\

function partialStarsFilling(number, id) {
    if (number == 1.1) {
        arrayToRememberStarsFilling[1].setAttribute("fill", "url(#editStar2Grad1Id" + id + ")");
    }
    if (number == 1.2) {
        arrayToRememberStarsFilling[1].setAttribute("fill", "url(#editStar2Grad2Id" + id + ")");
    }
    if (number == 1.3) {
        arrayToRememberStarsFilling[1].setAttribute("fill", "url(#editStar2Grad3Id" + id + ")");
    }
    if (number == 1.4) {
        arrayToRememberStarsFilling[1].setAttribute("fill", "url(#editStar2Grad4Id" + id + ")");
    }
    if (number == 1.5) {
        arrayToRememberStarsFilling[1].setAttribute("fill", "url(#editStar2Grad5Id" + id + ")");
    }
    if (number == 1.6) {
        arrayToRememberStarsFilling[1].setAttribute("fill", "url(#editStar2Grad6Id" + id + ")");
    }
    if (number == 1.7) {
        arrayToRememberStarsFilling[1].setAttribute("fill", "url(#editStar2Grad7Id" + id + ")");
    }
    if (number == 1.8) {
        arrayToRememberStarsFilling[1].setAttribute("fill", "url(#editStar2Grad8Id" + id + ")");
    }
    if (number == 1.9) {
        arrayToRememberStarsFilling[1].setAttribute("fill", "url(#editStar2Grad9Id" + id + ")");
    }
    if (number == 2) {
        arrayToRememberStarsFilling[1].setAttribute("fill", "url(#editStar2GradFullId" + id + ")");
    }
    if (number == 2.1) {
        arrayToRememberStarsFilling[2].setAttribute("fill", "url(#editStar3Grad1Id" + id + ")");
    }
    if (number == 2.2) {
        arrayToRememberStarsFilling[2].setAttribute("fill", "url(#editStar3Grad2Id" + id + ")");
    }
    if (number == 2.3) {
        arrayToRememberStarsFilling[2].setAttribute("fill", "url(#editStar3Grad3Id" + id + ")");
    }
    if (number == 2.4) {
        arrayToRememberStarsFilling[2].setAttribute("fill", "url(#editStar3Grad4Id" + id + ")");
    }
    if (number == 2.5) {
        arrayToRememberStarsFilling[2].setAttribute("fill", "url(#editStar3Grad5Id" + id + ")");
    }
    if (number == 2.6) {
        arrayToRememberStarsFilling[2].setAttribute("fill", "url(#editStar3Grad6Id" + id + ")");
    }
    if (number == 2.7) {
        arrayToRememberStarsFilling[2].setAttribute("fill", "url(#editStar3Grad7Id" + id + ")");
    }
    if (number == 2.8) {
        arrayToRememberStarsFilling[2].setAttribute("fill", "url(#editStar3Grad8Id" + id + ")");
    }
    if (number == 2.9) {
        arrayToRememberStarsFilling[2].setAttribute("fill", "url(#editStar3Grad9Id" + id + ")");
    }
    if (number == 3) {
        arrayToRememberStarsFilling[2].setAttribute("fill", "url(#editStar3GradFullId" + id + ")");
    }
    if (number == 3.1) {
        arrayToRememberStarsFilling[3].setAttribute("fill", "url(#editStar4Grad1Id" + id + ")");
    }
    if (number == 3.2) {
        arrayToRememberStarsFilling[3].setAttribute("fill", "url(#editStar4Grad2Id" + id + ")");
    }
    if (number == 3.3) {
        arrayToRememberStarsFilling[3].setAttribute("fill", "url(#editStar4Grad3Id" + id + ")");
    }
    if (number == 3.4) {
        arrayToRememberStarsFilling[3].setAttribute("fill", "url(#editStar4Grad4Id" + id + ")");
    }
    if (number == 3.5) {
        arrayToRememberStarsFilling[3].setAttribute("fill", "url(#editStar4Grad5Id" + id + ")");
    }
    if (number == 3.6) {
        arrayToRememberStarsFilling[3].setAttribute("fill", "url(#editStar4Grad6Id" + id + ")");
    }
    if (number == 3.7) {
        arrayToRememberStarsFilling[3].setAttribute("fill", "url(#editStar4Grad7Id" + id + ")");
    }
    if (number == 3.8) {
        arrayToRememberStarsFilling[3].setAttribute("fill", "url(#editStar4Grad8Id" + id + ")");
    }
    if (number == 3.9) {
        arrayToRememberStarsFilling[3].setAttribute("fill", "url(#editStar4Grad9Id" + id + ")");
    }
    if (number == 4) {
        arrayToRememberStarsFilling[3].setAttribute("fill", "url(#editStar4GradFullId" + id + ")");
    }
    if (number == 4.1) {
        arrayToRememberStarsFilling[4].setAttribute("fill", "url(#editStar5Grad1Id" + id + ")");    
    }
    if (number == 4.2) {
        arrayToRememberStarsFilling[4].setAttribute("fill", "url(#editStar5Grad2Id" + id + ")");
    }
    if (number == 4.3) {
        arrayToRememberStarsFilling[4].setAttribute("fill", "url(#editStar5Grad3Id" + id + ")");
    }
    if (number == 4.4) {
        arrayToRememberStarsFilling[4].setAttribute("fill", "url(#editStar5Grad4Id" + id + ")");
    }
    if (number == 4.5) {
        arrayToRememberStarsFilling[4].setAttribute("fill", "url(#editStar5Grad5Id" + id + ")");
    }
    if (number == 4.6) {
        arrayToRememberStarsFilling[4].setAttribute("fill", "url(#editStar5Grad6Id" + id + ")");
    }
    if (number == 4.7) {
        arrayToRememberStarsFilling[4].setAttribute("fill", "url(#editStar5Grad7Id" + id + ")");
    }
    if (number == 4.8) {
        arrayToRememberStarsFilling[4].setAttribute("fill", "url(#editStar5Grad8Id" + id + ")");
    }
    if (number == 4.9) {
        arrayToRememberStarsFilling[4].setAttribute("fill", "url(#editStar5Grad9Id" + id + ")");
    }
    if (number == 5) {
        arrayToRememberStarsFilling[4].setAttribute("fill", "url(#editStar5GradFullId" + id + ")");
    }
    if (number == 5.1) {
        arrayToRememberStarsFilling[5].setAttribute("fill", "url(#editStar6Grad1Id" + id + ")");
    }
    if (number == 5.2) {
        arrayToRememberStarsFilling[5].setAttribute("fill", "url(#editStar6Grad2Id" + id + ")");
    }
    if (number == 5.3) {
        arrayToRememberStarsFilling[5].setAttribute("fill", "url(#editStar6Grad3Id" + id + ")");
    }
    if (number == 5.4) {
        arrayToRememberStarsFilling[5].setAttribute("fill", "url(#editStar6Grad4Id" + id + ")");
    }
    if (number == 5.5) {
        arrayToRememberStarsFilling[5].setAttribute("fill", "url(#editStar6Grad5Id" + id + ")");
    }
    if (number == 5.6) {
        arrayToRememberStarsFilling[5].setAttribute("fill", "url(#editStar6Grad6Id" + id + ")");
    }
    if (number == 5.7) {
        arrayToRememberStarsFilling[5].setAttribute("fill", "url(#editStar6Grad7Id" + id + ")");
    }
    if (number == 5.8) {
        arrayToRememberStarsFilling[5].setAttribute("fill", "url(#editStar6Grad8Id" + id + ")");
    }
    if (number == 5.9) {
        arrayToRememberStarsFilling[5].setAttribute("fill", "url(#editStar6Grad9Id" + id + ")");
    }
    if (number == 6) {
        arrayToRememberStarsFilling[5].setAttribute("fill", "url(#editStar6GradFullId" + id + ")");
    }
    if (number == 6.1) {
        arrayToRememberStarsFilling[6].setAttribute("fill", "url(#editStar7Grad1Id" + id + ")");
    }
    if (number == 6.2) {
        arrayToRememberStarsFilling[6].setAttribute("fill", "url(#editStar7Grad2Id" + id + ")");
    }
    if (number == 6.3) {
        arrayToRememberStarsFilling[6].setAttribute("fill", "url(#editStar7Grad3Id" + id + ")");
    }
    if (number == 6.4) {
        arrayToRememberStarsFilling[6].setAttribute("fill", "url(#editStar7Grad4Id" + id + ")");
    }
    if (number == 6.5) {
        arrayToRememberStarsFilling[6].setAttribute("fill", "url(#editStar7Grad5Id" + id + ")");
    }
    if (number == 6.6) {
        arrayToRememberStarsFilling[6].setAttribute("fill", "url(#editStar7Grad6Id" + id + ")");
    }
    if (number == 6.7) {
        arrayToRememberStarsFilling[6].setAttribute("fill", "url(#editStar7Grad7Id" + id + ")");
    }
    if (number == 6.8) {
        arrayToRememberStarsFilling[6].setAttribute("fill", "url(#editStar7Grad8Id" + id + ")");
    }
    if (number == 6.9) {
        arrayToRememberStarsFilling[6].setAttribute("fill", "url(#editStar7Grad9Id" + id + ")");
    }
    if (number == 7) {
        arrayToRememberStarsFilling[6].setAttribute("fill", "url(#editStar7GradFullId" + id + ")");
    }
    if (number == 7.1) {
        arrayToRememberStarsFilling[7].setAttribute("fill", "url(#editStar8Grad1Id" + id + ")");
    }
    if (number == 7.2) {
        arrayToRememberStarsFilling[7].setAttribute("fill", "url(#editStar8Grad2Id" + id + ")");
    }
    if (number == 7.3) {
        arrayToRememberStarsFilling[7].setAttribute("fill", "url(#editStar8Grad3Id" + id + ")");
    }
    if (number == 7.4) {
        arrayToRememberStarsFilling[7].setAttribute("fill", "url(#editStar8Grad4Id" + id + ")");
    }
    if (number == 7.5) {
        arrayToRememberStarsFilling[7].setAttribute("fill", "url(#editStar8Grad5Id" + id + ")");
    }
    if (number == 7.6) {
        arrayToRememberStarsFilling[7].setAttribute("fill", "url(#editStar8Grad6Id" + id + ")");
    }
    if (number == 7.7) {
        arrayToRememberStarsFilling[7].setAttribute("fill", "url(#editStar8Grad7Id" + id + ")");
    }
    if (number == 7.8) {
        arrayToRememberStarsFilling[7].setAttribute("fill", "url(#editStar8Grad8Id" + id + ")");
    }
    if (number == 7.9) {
        arrayToRememberStarsFilling[7].setAttribute("fill", "url(#editStar8Grad9Id" + id + ")");
    }
    if (number == 8) {
        arrayToRememberStarsFilling[7].setAttribute("fill", "url(#editStar8GradFullId" + id + ")");
    }
    if (number == 8.1) {
        arrayToRememberStarsFilling[8].setAttribute("fill", "url(#editStar9Grad1Id" + id + ")");
    }
    if (number == 8.2) {
        arrayToRememberStarsFilling[8].setAttribute("fill", "url(#editStar9Grad2Id" + id + ")");
    }
    if (number == 8.3) {
        arrayToRememberStarsFilling[8].setAttribute("fill", "url(#editStar9Grad3Id" + id + ")");
    }
    if (number == 8.4) {
        arrayToRememberStarsFilling[8].setAttribute("fill", "url(#editStar9Grad4Id" + id + ")");
    }
    if (number == 8.5) {
        arrayToRememberStarsFilling[8].setAttribute("fill", "url(#editStar9Grad5Id" + id + ")");
    }
    if (number == 8.6) {
        arrayToRememberStarsFilling[8].setAttribute("fill", "url(#editStar9Grad6Id" + id + ")");
    }
    if (number == 8.7) {
        arrayToRememberStarsFilling[8].setAttribute("fill", "url(#editStar9Grad7Id" + id + ")");
    }
    if (number == 8.8) {
        arrayToRememberStarsFilling[8].setAttribute("fill", "url(#editStar9Grad8Id" + id + ")");
    }
    if (number == 8.9) {
        arrayToRememberStarsFilling[8].setAttribute("fill", "url(#editStar9Grad9Id" + id + ")");
    }
    if (number == 9) {
        arrayToRememberStarsFilling[8].setAttribute("fill", "url(#editStar9GradFullId" + id + ")");
    }
    if (number == 9.1) {
        arrayToRememberStarsFilling[9].setAttribute("fill", "url(#editStar10Grad1Id" + id + ")");
    }
    if (number == 9.2) {
        arrayToRememberStarsFilling[9].setAttribute("fill", "url(#editStar10Grad2Id" + id + ")");
    }
    if (number == 9.3) {
        arrayToRememberStarsFilling[9].setAttribute("fill", "url(#editStar10Grad3Id" + id + ")");
    }
    if (number == 9.4) {
        arrayToRememberStarsFilling[9].setAttribute("fill", "url(#editStar10Grad4Id" + id + ")");
    }
    if (number == 9.5) {
        arrayToRememberStarsFilling[9].setAttribute("fill", "url(#editStar10Grad5Id" + id + ")");
    }
    if (number == 9.6) {
        arrayToRememberStarsFilling[9].setAttribute("fill", "url(#editStar10Grad6Id" + id + ")");
    }
    if (number == 9.7) {
        arrayToRememberStarsFilling[9].setAttribute("fill", "url(#editStar10Grad7Id" + id + ")");
    }
    if (number == 9.8) {
        arrayToRememberStarsFilling[9].setAttribute("fill", "url(#editStar10Grad8Id" + id + ")");
    }
    if (number == 9.9) {
        arrayToRememberStarsFilling[9].setAttribute("fill", "url(#editStar10Grad9Id" + id + ")");
    }
    if (number == 10) {
        arrayToRememberStarsFilling[9].setAttribute("fill", "url(#editStar10GradFullId" + id + ")");
    }
}

function fillingStarsWithTheCorrespondingRating(rating, id) {
    editRatingValueToRemember = rating;
    
    let star1Full = "url(#editStar1GradFullId" + id + ")";
    let star2Full = "url(#editStar2GradFullId" + id + ")";
    let star3Full = "url(#editStar3GradFullId" + id + ")";
    let star4Full = "url(#editStar4GradFullId" + id + ")";
    let star5Full = "url(#editStar5GradFullId" + id + ")";
    let star6Full = "url(#editStar6GradFullId" + id + ")";
    let star7Full = "url(#editStar7GradFullId" + id + ")";
    let star8Full = "url(#editStar8GradFullId" + id + ")";
    let star9Full = "url(#editStar9GradFullId" + id + ")";
    let star10Full = "url(#editStar10GradFullId" + id + ")";
    
    if (rating == 1) {
        arrayToRememberStarsFilling[0].setAttribute("fill", star1Full);
    } else if (rating >= 1.1 && rating <= 2) {
        arrayToRememberStarsFilling[0].setAttribute("fill", star1Full);
    } else if (rating >= 2.1 && rating <= 3) {
        arrayToRememberStarsFilling[0].setAttribute("fill", star1Full);
        arrayToRememberStarsFilling[1].setAttribute("fill", star2Full);
    } else if (rating >= 3.1 && rating <= 4) {
        arrayToRememberStarsFilling[0].setAttribute("fill", star1Full);
        arrayToRememberStarsFilling[1].setAttribute("fill", star2Full);
        arrayToRememberStarsFilling[2].setAttribute("fill", star3Full);
    } else if (rating >= 4.1 && rating <= 5) {
        arrayToRememberStarsFilling[0].setAttribute("fill", star1Full);
        arrayToRememberStarsFilling[1].setAttribute("fill", star2Full);
        arrayToRememberStarsFilling[2].setAttribute("fill", star3Full);
        arrayToRememberStarsFilling[3].setAttribute("fill", star4Full);
    } else if (rating >= 5.1 && rating <= 6) {
        arrayToRememberStarsFilling[0].setAttribute("fill", star1Full);
        arrayToRememberStarsFilling[1].setAttribute("fill", star2Full);
        arrayToRememberStarsFilling[2].setAttribute("fill", star3Full);
        arrayToRememberStarsFilling[3].setAttribute("fill", star4Full);
        arrayToRememberStarsFilling[4].setAttribute("fill", star5Full);
    } else if (rating >= 6.1 && rating <= 7) {
        arrayToRememberStarsFilling[0].setAttribute("fill", star1Full);
        arrayToRememberStarsFilling[1].setAttribute("fill", star2Full);
        arrayToRememberStarsFilling[2].setAttribute("fill", star3Full);
        arrayToRememberStarsFilling[3].setAttribute("fill", star4Full);
        arrayToRememberStarsFilling[4].setAttribute("fill", star5Full);
        arrayToRememberStarsFilling[5].setAttribute("fill", star6Full);
    } else if (rating >= 7.1 && rating <= 8) {
        arrayToRememberStarsFilling[0].setAttribute("fill", star1Full);
        arrayToRememberStarsFilling[1].setAttribute("fill", star2Full);
        arrayToRememberStarsFilling[2].setAttribute("fill", star3Full);
        arrayToRememberStarsFilling[3].setAttribute("fill", star4Full);
        arrayToRememberStarsFilling[4].setAttribute("fill", star5Full);
        arrayToRememberStarsFilling[5].setAttribute("fill", star6Full);
        arrayToRememberStarsFilling[6].setAttribute("fill", star7Full);
    } else if (rating >= 8.1 && rating <= 9) {
        arrayToRememberStarsFilling[0].setAttribute("fill", star1Full);
        arrayToRememberStarsFilling[1].setAttribute("fill", star2Full);
        arrayToRememberStarsFilling[2].setAttribute("fill", star3Full);
        arrayToRememberStarsFilling[3].setAttribute("fill", star4Full);
        arrayToRememberStarsFilling[4].setAttribute("fill", star5Full);
        arrayToRememberStarsFilling[5].setAttribute("fill", star6Full);
        arrayToRememberStarsFilling[6].setAttribute("fill", star7Full);
        arrayToRememberStarsFilling[7].setAttribute("fill", star8Full);
    } else if (rating >= 9.1 && rating < 10) {
        arrayToRememberStarsFilling[0].setAttribute("fill", star1Full);
        arrayToRememberStarsFilling[1].setAttribute("fill", star2Full);
        arrayToRememberStarsFilling[2].setAttribute("fill", star3Full);
        arrayToRememberStarsFilling[3].setAttribute("fill", star4Full);
        arrayToRememberStarsFilling[4].setAttribute("fill", star5Full);
        arrayToRememberStarsFilling[5].setAttribute("fill", star6Full);
        arrayToRememberStarsFilling[6].setAttribute("fill", star7Full);
        arrayToRememberStarsFilling[7].setAttribute("fill", star8Full);
        arrayToRememberStarsFilling[8].setAttribute("fill", star9Full);
    } else if (rating == 10) {
        arrayToRememberStarsFilling[0].setAttribute("fill", star1Full);
        arrayToRememberStarsFilling[1].setAttribute("fill", star2Full);
        arrayToRememberStarsFilling[2].setAttribute("fill", star3Full);
        arrayToRememberStarsFilling[3].setAttribute("fill", star4Full);
        arrayToRememberStarsFilling[4].setAttribute("fill", star5Full);
        arrayToRememberStarsFilling[5].setAttribute("fill", star6Full);
        arrayToRememberStarsFilling[6].setAttribute("fill", star7Full);
        arrayToRememberStarsFilling[7].setAttribute("fill", star8Full);
        arrayToRememberStarsFilling[8].setAttribute("fill", star9Full);
        arrayToRememberStarsFilling[9].setAttribute("fill", star10Full);   
    }
    partialStarsFilling(rating, id);
}

//RATING IS SET/CHOSEN
function resetValueForHiddenInput() {
    let ratingElement = "rating" + IdToRemember;
    document.getElementById(ratingElement).setAttribute("value", "");
}

const editMouseOverSetRating = () => {
    const editChosenRatingTooltip = getTooltipForSetRating();
    editChosenRatingTooltip.classList.remove("hidden");
    editChosenRatingTooltip.innerHTML = firstPartForChosenRatingTooltipMessage + editRatingValueToRemember + lastPartForChosenRatingTooltipMessage;
};
const editMouseOutOfSetRating = () => {
    const editChosenRatingTooltip = getTooltipForSetRating();
    editChosenRatingTooltip.classList.add("hidden");
    editChosenRatingTooltip.innerHTML = "";
};

function runEventListenersWhenRatingIsChosenOrAlreadySet() {
    arrayToRememberStarsElements[0].addEventListener("mouseover", editMouseOverSetRating);
    arrayToRememberStarsElements[0].addEventListener("mouseout", editMouseOutOfSetRating);
    arrayToRememberStarsElements[1].addEventListener("mouseover", editMouseOverSetRating);
    arrayToRememberStarsElements[1].addEventListener("mouseout", editMouseOutOfSetRating);
    arrayToRememberStarsElements[2].addEventListener("mouseover", editMouseOverSetRating);
    arrayToRememberStarsElements[2].addEventListener("mouseout", editMouseOutOfSetRating);
    arrayToRememberStarsElements[3].addEventListener("mouseover", editMouseOverSetRating);
    arrayToRememberStarsElements[3].addEventListener("mouseout", editMouseOutOfSetRating);
    arrayToRememberStarsElements[4].addEventListener("mouseover", editMouseOverSetRating);
    arrayToRememberStarsElements[4].addEventListener("mouseout", editMouseOutOfSetRating);
    arrayToRememberStarsElements[5].addEventListener("mouseover", editMouseOverSetRating);
    arrayToRememberStarsElements[5].addEventListener("mouseout", editMouseOutOfSetRating);
    arrayToRememberStarsElements[6].addEventListener("mouseover", editMouseOverSetRating);
    arrayToRememberStarsElements[6].addEventListener("mouseout", editMouseOutOfSetRating);
    arrayToRememberStarsElements[7].addEventListener("mouseover", editMouseOverSetRating);
    arrayToRememberStarsElements[7].addEventListener("mouseout", editMouseOutOfSetRating);
    arrayToRememberStarsElements[8].addEventListener("mouseover", editMouseOverSetRating);
    arrayToRememberStarsElements[8].addEventListener("mouseout", editMouseOutOfSetRating);
    arrayToRememberStarsElements[9].addEventListener("mouseover", editMouseOverSetRating);
    arrayToRememberStarsElements[9].addEventListener("mouseout", editMouseOutOfSetRating);
}

function removeEventListenersForChosenRatingTooltips() {
    arrayToRememberStarsElements[0].removeEventListener("mouseover", editMouseOverSetRating);
    arrayToRememberStarsElements[0].removeEventListener("mouseout", editMouseOutOfSetRating);
    arrayToRememberStarsElements[1].removeEventListener("mouseover", editMouseOverSetRating);
    arrayToRememberStarsElements[1].removeEventListener("mouseout", editMouseOutOfSetRating);
    arrayToRememberStarsElements[2].removeEventListener("mouseover", editMouseOverSetRating);
    arrayToRememberStarsElements[2].removeEventListener("mouseout", editMouseOutOfSetRating);
    arrayToRememberStarsElements[3].removeEventListener("mouseover", editMouseOverSetRating);
    arrayToRememberStarsElements[3].removeEventListener("mouseout", editMouseOutOfSetRating);
    arrayToRememberStarsElements[4].removeEventListener("mouseover", editMouseOverSetRating);
    arrayToRememberStarsElements[4].removeEventListener("mouseout", editMouseOutOfSetRating);
    arrayToRememberStarsElements[5].removeEventListener("mouseover", editMouseOverSetRating);
    arrayToRememberStarsElements[5].removeEventListener("mouseout", editMouseOutOfSetRating);
    arrayToRememberStarsElements[6].removeEventListener("mouseover", editMouseOverSetRating);
    arrayToRememberStarsElements[6].removeEventListener("mouseout", editMouseOutOfSetRating);
    arrayToRememberStarsElements[7].removeEventListener("mouseover", editMouseOverSetRating);
    arrayToRememberStarsElements[7].removeEventListener("mouseout", editMouseOutOfSetRating);
    arrayToRememberStarsElements[8].removeEventListener("mouseover", editMouseOverSetRating);
    arrayToRememberStarsElements[8].removeEventListener("mouseout", editMouseOutOfSetRating);
    arrayToRememberStarsElements[9].removeEventListener("mouseover", editMouseOverSetRating);
    arrayToRememberStarsElements[9].removeEventListener("mouseout", editMouseOutOfSetRating);
}
//      ...     \\

function runEventListenersForUserRatingChoosing() {
    editRatingValueToRemember = "";
    arrayToRememberStarsElements[0].addEventListener("mouseover", editMouseOver1Star);
    arrayToRememberStarsElements[0].addEventListener("mouseout", editMouseOutOf1Star);
    arrayToRememberStarsElements[0].addEventListener("click", editChoose1Star);
    arrayToRememberStarsElements[1].addEventListener("mouseover", editMouseOver2Star);
    arrayToRememberStarsElements[1].addEventListener("mouseout", editMouseOutOf2Star);
    arrayToRememberStarsElements[1].addEventListener("click", editChoose2Star);
    arrayToRememberStarsElements[1].addEventListener("mousemove", editFilling2Star, false);
    arrayToRememberStarsElements[2].addEventListener("mouseover", editMouseOver3Star);
    arrayToRememberStarsElements[2].addEventListener("mouseout", editMouseOutOf3Star);
    arrayToRememberStarsElements[2].addEventListener("click", editChoose3Star);
    arrayToRememberStarsElements[2].addEventListener("mousemove", editFilling3Star, false);
    arrayToRememberStarsElements[3].addEventListener("mouseover", editMouseOver4Star);
    arrayToRememberStarsElements[3].addEventListener("mouseout", editMouseOutOf4Star);
    arrayToRememberStarsElements[3].addEventListener("click", editChoose4Star);
    arrayToRememberStarsElements[3].addEventListener("mousemove", editFilling4Star, false);
    arrayToRememberStarsElements[4].addEventListener("mouseover", editMouseOver5Star);
    arrayToRememberStarsElements[4].addEventListener("mouseout", editMouseOutOf5Star);
    arrayToRememberStarsElements[4].addEventListener("click", editChoose5Star);
    arrayToRememberStarsElements[4].addEventListener("mousemove", editFilling5Star, false);
    arrayToRememberStarsElements[5].addEventListener("mouseover", editMouseOver6Star);
    arrayToRememberStarsElements[5].addEventListener("mouseout", editMouseOutOf6Star);
    arrayToRememberStarsElements[5].addEventListener("click", editChoose6Star);
    arrayToRememberStarsElements[5].addEventListener("mousemove", editFilling6Star, false);
    arrayToRememberStarsElements[6].addEventListener("mouseover", editMouseOver7Star);
    arrayToRememberStarsElements[6].addEventListener("mouseout", editMouseOutOf7Star);
    arrayToRememberStarsElements[6].addEventListener("click", editChoose7Star);
    arrayToRememberStarsElements[6].addEventListener("mousemove", editFilling7Star, false);
    arrayToRememberStarsElements[7].addEventListener("mouseover", editMouseOver8Star);
    arrayToRememberStarsElements[7].addEventListener("mouseout", editMouseOutOf8Star);
    arrayToRememberStarsElements[7].addEventListener("click", editChoose8Star);
    arrayToRememberStarsElements[7].addEventListener("mousemove", editFilling8Star, false);
    arrayToRememberStarsElements[8].addEventListener("mouseover", editMouseOver9Star);
    arrayToRememberStarsElements[8].addEventListener("mouseout", editMouseOutOf9Star);
    arrayToRememberStarsElements[8].addEventListener("click", editChoose9Star);
    arrayToRememberStarsElements[8].addEventListener("mousemove", editFilling9Star, false);
    arrayToRememberStarsElements[9].addEventListener("mouseover", editMouseOver10Star);
    arrayToRememberStarsElements[9].addEventListener("mouseout", editMouseOutOf10Star);
    arrayToRememberStarsElements[9].addEventListener("click", editChoose10Star);
    arrayToRememberStarsElements[9].addEventListener("mousemove", editFilling10Star, false);
}

function removingEventListenersForUserRatingChoosing() {
    arrayToRememberStarsElements[0].removeEventListener("mouseover", editMouseOver1Star);
    arrayToRememberStarsElements[0].removeEventListener("mouseout", editMouseOutOf1Star);
    arrayToRememberStarsElements[0].removeEventListener("click", editChoose1Star);
    arrayToRememberStarsElements[1].removeEventListener("mouseover", editMouseOver2Star);
    arrayToRememberStarsElements[1].removeEventListener("mouseout", editMouseOutOf2Star);
    arrayToRememberStarsElements[1].removeEventListener("click", editChoose2Star);
    arrayToRememberStarsElements[1].removeEventListener("mousemove", editFilling2Star, false);
    arrayToRememberStarsElements[2].removeEventListener("mouseover", editMouseOver3Star);
    arrayToRememberStarsElements[2].removeEventListener("mouseout", editMouseOutOf3Star);
    arrayToRememberStarsElements[2].removeEventListener("click", editChoose3Star);
    arrayToRememberStarsElements[2].removeEventListener("mousemove", editFilling3Star, false);
    arrayToRememberStarsElements[3].removeEventListener("mouseover", editMouseOver4Star);
    arrayToRememberStarsElements[3].removeEventListener("mouseout", editMouseOutOf4Star);
    arrayToRememberStarsElements[3].removeEventListener("click", editChoose4Star);
    arrayToRememberStarsElements[3].removeEventListener("mousemove", editFilling4Star, false);
    arrayToRememberStarsElements[4].removeEventListener("mouseover", editMouseOver5Star);
    arrayToRememberStarsElements[4].removeEventListener("mouseout", editMouseOutOf5Star);
    arrayToRememberStarsElements[4].removeEventListener("click", editChoose5Star);
    arrayToRememberStarsElements[4].removeEventListener("mousemove", editFilling5Star, false);
    arrayToRememberStarsElements[5].removeEventListener("mouseover", editMouseOver6Star);
    arrayToRememberStarsElements[5].removeEventListener("mouseout", editMouseOutOf6Star);
    arrayToRememberStarsElements[5].removeEventListener("click", editChoose6Star);
    arrayToRememberStarsElements[5].removeEventListener("mousemove", editFilling6Star, false);
    arrayToRememberStarsElements[6].removeEventListener("mouseover", editMouseOver7Star);
    arrayToRememberStarsElements[6].removeEventListener("mouseout", editMouseOutOf7Star);
    arrayToRememberStarsElements[6].removeEventListener("click", editChoose7Star);
    arrayToRememberStarsElements[6].removeEventListener("mousemove", editFilling7Star, false);
    arrayToRememberStarsElements[7].removeEventListener("mouseover", editMouseOver8Star);
    arrayToRememberStarsElements[7].removeEventListener("mouseout", editMouseOutOf8Star);
    arrayToRememberStarsElements[7].removeEventListener("click", editChoose8Star);
    arrayToRememberStarsElements[7].removeEventListener("mousemove", editFilling8Star, false);
    arrayToRememberStarsElements[8].removeEventListener("mouseover", editMouseOver9Star);
    arrayToRememberStarsElements[8].removeEventListener("mouseout", editMouseOutOf9Star);
    arrayToRememberStarsElements[8].removeEventListener("click", editChoose9Star);
    arrayToRememberStarsElements[8].removeEventListener("mousemove", editFilling9Star, false);
    arrayToRememberStarsElements[9].removeEventListener("mouseover", editMouseOver10Star);
    arrayToRememberStarsElements[9].removeEventListener("mouseout", editMouseOutOf10Star);
    arrayToRememberStarsElements[9].removeEventListener("click", editChoose10Star);
    arrayToRememberStarsElements[9].removeEventListener("mousemove", editFilling10Star, false);
}

function settingStarsEmpty() {
    arrayToRememberStarsFilling[0].setAttribute("fill", "none");
    arrayToRememberStarsFilling[1].setAttribute("fill", "none");
    arrayToRememberStarsFilling[2].setAttribute("fill", "none");
    arrayToRememberStarsFilling[3].setAttribute("fill", "none");
    arrayToRememberStarsFilling[4].setAttribute("fill", "none");
    arrayToRememberStarsFilling[5].setAttribute("fill", "none");
    arrayToRememberStarsFilling[6].setAttribute("fill", "none");
    arrayToRememberStarsFilling[7].setAttribute("fill", "none");
    arrayToRememberStarsFilling[8].setAttribute("fill", "none");
    arrayToRememberStarsFilling[9].setAttribute("fill", "none");
}

const resetStarRating = () => {
    const editChosenRatingTooltip = getTooltipForSetRating();
    editChosenRatingTooltip.classList.add("hidden");
    settingStarsEmpty();
    removeEventListenersForChosenRatingTooltips();
    runEventListenersForUserRatingChoosing();
    resetValueForHiddenInput();
};

function runDoubleClickEventListeners() {
    arrayToRememberStarsElements[0].addEventListener("dblclick", resetStarRating);
    arrayToRememberStarsElements[1].addEventListener("dblclick", resetStarRating);
    arrayToRememberStarsElements[2].addEventListener("dblclick", resetStarRating);
    arrayToRememberStarsElements[3].addEventListener("dblclick", resetStarRating);
    arrayToRememberStarsElements[4].addEventListener("dblclick", resetStarRating);
    arrayToRememberStarsElements[5].addEventListener("dblclick", resetStarRating);
    arrayToRememberStarsElements[6].addEventListener("dblclick", resetStarRating);
    arrayToRememberStarsElements[7].addEventListener("dblclick", resetStarRating);
    arrayToRememberStarsElements[8].addEventListener("dblclick", resetStarRating);
    arrayToRememberStarsElements[9].addEventListener("dblclick", resetStarRating);
}

function setValueForHiddenInput() {
    let ratingElement = "rating" + IdToRemember;
    document.getElementById(ratingElement).setAttribute("value", editRatingValueToRemember);
}

function runNeededFunctionsAfterUserHasChosenRating() {
    removingEventListenersForUserRatingChoosing();
    runDoubleClickEventListeners();
    runEventListenersWhenRatingIsChosenOrAlreadySet();
    setValueForHiddenInput();    
}

//          STARS           \\
//1 STAR
const editMouseOver1Star = () => {
    arrayToRememberStarsFilling[0].setAttribute("fill", "url(#editStar1GradFullId" + IdToRemember + ")");
    arrayToRememberStarsTooltips[0].classList.remove("hidden");
    arrayToRememberStarsTooltips[0].innerHTML = "1";
    editRatingValueToRemember = arrayToRememberStarsTooltips[0].innerHTML;
};
const editMouseOutOf1Star = () => {
    arrayToRememberStarsFilling[0].setAttribute("fill", "none");
    arrayToRememberStarsTooltips[0].classList.add("hidden");
};
const editChoose1Star = () => {
    arrayToRememberStarsTooltips[0].classList.add("hidden");
    runNeededFunctionsAfterUserHasChosenRating();  
};

//2 STAR
const editMouseOver2Star = () => {
    arrayToRememberStarsTooltips[1].classList.remove("hidden");
    arrayToRememberStarsFilling[0].setAttribute("fill", "url(#editStar1GradFullId" + IdToRemember + ")");
};
const editMouseOutOf2Star = () => {
    arrayToRememberStarsFilling[1].setAttribute("fill", "none");
    arrayToRememberStarsFilling[0].setAttribute("fill", "none");
    arrayToRememberStarsTooltips[1].classList.add("hidden");
};
const editChoose2Star = () => {
    arrayToRememberStarsTooltips[1].classList.add("hidden");
    runNeededFunctionsAfterUserHasChosenRating();
};

function editFilling2Star(event) {
    let bnds = event.target.getBoundingClientRect();
    let x = event.clientX - bnds.left;
    let number = Math.floor(x);

    if (number >= (editStarsDivWidth * 0.1)) {
        arrayToRememberStarsFilling[1].setAttribute("fill", "url(#editStar2Grad1Id" + IdToRemember + ")");
        arrayToRememberStarsTooltips[1].innerHTML = "1.1";
    }
    if (number >= (editStarsDivWidth * 0.2)) {
        arrayToRememberStarsFilling[1].setAttribute("fill", "url(#editStar2Grad2Id" + IdToRemember + ")");
        arrayToRememberStarsTooltips[1].innerHTML = "1.2";
    }
    if (number >= (editStarsDivWidth * 0.3)) {
        arrayToRememberStarsFilling[1].setAttribute("fill", "url(#editStar2Grad3Id" + IdToRemember + ")");
        arrayToRememberStarsTooltips[1].innerHTML = "1.3";
    }
    if (number >= (editStarsDivWidth * 0.4)) {
        arrayToRememberStarsFilling[1].setAttribute("fill", "url(#editStar2Grad4Id" + IdToRemember + ")");
        arrayToRememberStarsTooltips[1].innerHTML = "1.4";
    }
    if (number >= editStarsDivWidth / 2) {
        arrayToRememberStarsFilling[1].setAttribute("fill", "url(#editStar2Grad5Id" + IdToRemember + ")");
        arrayToRememberStarsTooltips[1].innerHTML = "1.5";
    }
    if (number >= (editStarsDivWidth * 0.5) + 1.6) {
        arrayToRememberStarsFilling[1].setAttribute("fill", "url(#editStar2Grad6Id" + IdToRemember + ")");
        arrayToRememberStarsTooltips[1].innerHTML = "1.6";
    }
    if (number >= (editStarsDivWidth * 0.6)) {
        arrayToRememberStarsFilling[1].setAttribute("fill", "url(#editStar2Grad7Id" + IdToRemember + ")");
        arrayToRememberStarsTooltips[1].innerHTML = "1.7";
    }
    if (number >= (editStarsDivWidth * 0.7)) {
        arrayToRememberStarsFilling[1].setAttribute("fill", "url(#editStar2Grad8Id" + IdToRemember + ")");
        arrayToRememberStarsTooltips[1].innerHTML = "1.8";
    }
    if (number >= (editStarsDivWidth * 0.8)) {
        arrayToRememberStarsFilling[1].setAttribute("fill", "url(#editStar2Grad9Id" + IdToRemember + ")");
        arrayToRememberStarsTooltips[1].innerHTML = "1.9";
    }
    if (number >= (editStarsDivWidth * 0.9)) {
        arrayToRememberStarsFilling[1].setAttribute("fill", "url(#editStar2GradFullId" + IdToRemember + ")");
        arrayToRememberStarsTooltips[1].innerHTML = "2";
    }
    editRatingValueToRemember = arrayToRememberStarsTooltips[1].innerHTML;
}

//STAR 3
const editMouseOver3Star = () => {
    arrayToRememberStarsTooltips[2].classList.remove("hidden");
    arrayToRememberStarsFilling[0].setAttribute("fill", "url(#editStar1GradFullId" + IdToRemember + ")");
    arrayToRememberStarsFilling[1].setAttribute("fill", "url(#editStar2GradFullId" + IdToRemember + ")");
};
const editMouseOutOf3Star = () => {
    arrayToRememberStarsFilling[2].setAttribute("fill", "none");
    arrayToRememberStarsFilling[1].setAttribute("fill", "none");
    arrayToRememberStarsFilling[0].setAttribute("fill", "none");
    arrayToRememberStarsTooltips[2].classList.add("hidden");
};
const editChoose3Star = () => {
    arrayToRememberStarsTooltips[2].classList.add("hidden");
    runNeededFunctionsAfterUserHasChosenRating();
};

function editFilling3Star(event) {
    let bnds = event.target.getBoundingClientRect();
    let x = event.clientX - bnds.left;
    let number = Math.floor(x);

    if (number >= (editStarsDivWidth * 0.1)) {
        arrayToRememberStarsFilling[2].setAttribute("fill", "url(#editStar3Grad1Id" + IdToRemember + ")");
        arrayToRememberStarsTooltips[2].innerHTML = "2.1";
    }
    if (number >= (editStarsDivWidth * 0.2)) {
        arrayToRememberStarsFilling[2].setAttribute("fill", "url(#editStar3Grad2Id" + IdToRemember + ")");
        arrayToRememberStarsTooltips[2].innerHTML = "2.2";
    }
    if (number >= (editStarsDivWidth * 0.3)) {
        arrayToRememberStarsFilling[2].setAttribute("fill", "url(#editStar3Grad3Id" + IdToRemember + ")");
        arrayToRememberStarsTooltips[2].innerHTML = "2.3";
    }
    if (number >= (editStarsDivWidth * 0.4)) {
        arrayToRememberStarsFilling[2].setAttribute("fill", "url(#editStar3Grad4Id" + IdToRemember + ")");
        arrayToRememberStarsTooltips[2].innerHTML = "2.4";
    }
    if (number >= editStarsDivWidth / 2) {
        arrayToRememberStarsFilling[2].setAttribute("fill", "url(#editStar3Grad5Id" + IdToRemember + ")");
        arrayToRememberStarsTooltips[2].innerHTML = "2.5";
    }
    if (number >= (editStarsDivWidth * 0.5) + 1.6) {
        arrayToRememberStarsFilling[2].setAttribute("fill", "url(#editStar3Grad6Id" + IdToRemember + ")");
        arrayToRememberStarsTooltips[2].innerHTML = "2.6";
    }
    if (number >= (editStarsDivWidth * 0.6)) {
        arrayToRememberStarsFilling[2].setAttribute("fill", "url(#editStar3Grad7Id" + IdToRemember + ")");
        arrayToRememberStarsTooltips[2].innerHTML = "2.7";
    }
    if (number >= (editStarsDivWidth * 0.7)) {
        arrayToRememberStarsFilling[2].setAttribute("fill", "url(#editStar3Grad8Id" + IdToRemember + ")");
        arrayToRememberStarsTooltips[2].innerHTML = "2.8";
    }
    if (number >= (editStarsDivWidth * 0.8)) {
        arrayToRememberStarsFilling[2].setAttribute("fill", "url(#editStar3Grad9Id" + IdToRemember + ")");
        arrayToRememberStarsTooltips[2].innerHTML = "2.9";
    }
    if (number >= (editStarsDivWidth * 0.9)) {
        arrayToRememberStarsFilling[2].setAttribute("fill", "url(#editStar3GradFullId" + IdToRemember + ")");
        arrayToRememberStarsTooltips[2].innerHTML = "3";
    }
    editRatingValueToRemember = arrayToRememberStarsTooltips[2].innerHTML;
}

//4 STAR
const editMouseOver4Star = () => {
    arrayToRememberStarsTooltips[3].classList.remove("hidden");
    arrayToRememberStarsFilling[0].setAttribute("fill", "url(#editStar1GradFullId" + IdToRemember + ")");
    arrayToRememberStarsFilling[1].setAttribute("fill", "url(#editStar2GradFullId" + IdToRemember + ")");
    arrayToRememberStarsFilling[2].setAttribute("fill", "url(#editStar3GradFullId" + IdToRemember + ")");
};
const editMouseOutOf4Star = () => {
    arrayToRememberStarsFilling[3].setAttribute("fill", "none");
    arrayToRememberStarsFilling[2].setAttribute("fill", "none");
    arrayToRememberStarsFilling[1].setAttribute("fill", "none");
    arrayToRememberStarsFilling[0].setAttribute("fill", "none");
    arrayToRememberStarsTooltips[3].classList.add("hidden");
};
const editChoose4Star = () => {
    arrayToRememberStarsTooltips[3].classList.add("hidden");
    runNeededFunctionsAfterUserHasChosenRating();    
};

function editFilling4Star(event) {
    let bnds = event.target.getBoundingClientRect();
    let x = event.clientX - bnds.left;
    let number = Math.floor(x);

    if (number >= (editStarsDivWidth * 0.1)) {
        arrayToRememberStarsFilling[3].setAttribute("fill", "url(#editStar4Grad1Id" + IdToRemember + ")");
        arrayToRememberStarsTooltips[3].innerHTML = "3.1";
    }
    if (number >= (editStarsDivWidth * 0.2)) {
        arrayToRememberStarsFilling[3].setAttribute("fill", "url(#editStar4Grad2Id" + IdToRemember + ")");
        arrayToRememberStarsTooltips[3].innerHTML = "3.2";
    }
    if (number >= (editStarsDivWidth * 0.3)) {
        arrayToRememberStarsFilling[3].setAttribute("fill", "url(#editStar4Grad3Id" + IdToRemember + ")");
        arrayToRememberStarsTooltips[3].innerHTML = "3.3";
    }
    if (number >= (editStarsDivWidth * 0.4)) {
        arrayToRememberStarsFilling[3].setAttribute("fill", "url(#editStar4Grad4Id" + IdToRemember + ")");
        arrayToRememberStarsTooltips[3].innerHTML = "3.4";
    }
    if (number >= editStarsDivWidth / 2) {
        arrayToRememberStarsFilling[3].setAttribute("fill", "url(#editStar4Grad5Id" + IdToRemember + ")");
        arrayToRememberStarsTooltips[3].innerHTML = "3.5";
    }
    if (number >= (editStarsDivWidth * 0.5) + 1.6) {
        arrayToRememberStarsFilling[3].setAttribute("fill", "url(#editStar4Grad6Id" + IdToRemember + ")");
        arrayToRememberStarsTooltips[3].innerHTML = "3.6";
    }
    if (number >= (editStarsDivWidth * 0.6)) {
        arrayToRememberStarsFilling[3].setAttribute("fill", "url(#editStar4Grad7Id" + IdToRemember + ")");
        arrayToRememberStarsTooltips[3].innerHTML = "3.7";
    }
    if (number >= (editStarsDivWidth * 0.7)) {
        arrayToRememberStarsFilling[3].setAttribute("fill", "url(#editStar4Grad8Id" + IdToRemember + ")");
        arrayToRememberStarsTooltips[3].innerHTML = "3.8";
    }
    if (number >= (editStarsDivWidth * 0.8)) {
        arrayToRememberStarsFilling[3].setAttribute("fill", "url(#editStar4Grad9Id" + IdToRemember + ")");
        arrayToRememberStarsTooltips[3].innerHTML = "3.9";
    }
    if (number >= (editStarsDivWidth * 0.9)) {
        arrayToRememberStarsFilling[3].setAttribute("fill", "url(#editStar4GradFullId" + IdToRemember + ")");
        arrayToRememberStarsTooltips[3].innerHTML = "4";
    }
    editRatingValueToRemember = arrayToRememberStarsTooltips[3].innerHTML;
}

//5 STAR
const editMouseOver5Star = () => {
    arrayToRememberStarsTooltips[4].classList.remove("hidden");
    arrayToRememberStarsFilling[0].setAttribute("fill", "url(#editStar1GradFullId" + IdToRemember + ")");
    arrayToRememberStarsFilling[1].setAttribute("fill", "url(#editStar2GradFullId" + IdToRemember + ")");
    arrayToRememberStarsFilling[2].setAttribute("fill", "url(#editStar3GradFullId" + IdToRemember + ")");
    arrayToRememberStarsFilling[3].setAttribute("fill", "url(#editStar4GradFullId" + IdToRemember + ")");
};
const editMouseOutOf5Star = () => {
    arrayToRememberStarsFilling[4].setAttribute("fill", "none");
    arrayToRememberStarsFilling[3].setAttribute("fill", "none");
    arrayToRememberStarsFilling[2].setAttribute("fill", "none");
    arrayToRememberStarsFilling[1].setAttribute("fill", "none");
    arrayToRememberStarsFilling[0].setAttribute("fill", "none");
    arrayToRememberStarsTooltips[4].classList.add("hidden");
};
const editChoose5Star = () => {
    arrayToRememberStarsTooltips[4].classList.add("hidden");
    runNeededFunctionsAfterUserHasChosenRating();   
};

function editFilling5Star(event) {
    let bnds = event.target.getBoundingClientRect();
    let x = event.clientX - bnds.left;
    let number = Math.floor(x);

    if (number >= (editStarsDivWidth * 0.1)) {
        arrayToRememberStarsFilling[4].setAttribute("fill", "url(#editStar5Grad1Id" + IdToRemember + ")");
        arrayToRememberStarsTooltips[4].innerHTML = "4.1";
    }
    if (number >= (editStarsDivWidth * 0.2)) {
        arrayToRememberStarsFilling[4].setAttribute("fill", "url(#editStar5Grad2Id" + IdToRemember + ")");
        arrayToRememberStarsTooltips[4].innerHTML = "4.2";
    }
    if (number >= (editStarsDivWidth * 0.3)) {
        arrayToRememberStarsFilling[4].setAttribute("fill", "url(#editStar5Grad3Id" + IdToRemember + ")");
        arrayToRememberStarsTooltips[4].innerHTML = "4.3";
    }
    if (number >= (editStarsDivWidth * 0.4)) {
        arrayToRememberStarsFilling[4].setAttribute("fill", "url(#editStar5Grad4Id" + IdToRemember + ")");
        arrayToRememberStarsTooltips[4].innerHTML = "4.4";
    }
    if (number >= editStarsDivWidth / 2) {
        arrayToRememberStarsFilling[4].setAttribute("fill", "url(#editStar5Grad5Id" + IdToRemember + ")");
        arrayToRememberStarsTooltips[4].innerHTML = "4.5";
    }
    if (number >= (editStarsDivWidth * 0.5) + 1.6) {
        arrayToRememberStarsFilling[4].setAttribute("fill", "url(#editStar5Grad6Id" + IdToRemember + ")");
        arrayToRememberStarsTooltips[4].innerHTML = "4.6";
    }
    if (number >= (editStarsDivWidth * 0.6)) {
        arrayToRememberStarsFilling[4].setAttribute("fill", "url(#editStar5Grad7Id" + IdToRemember + ")");
        arrayToRememberStarsTooltips[4].innerHTML = "4.7";
    }
    if (number >= (editStarsDivWidth * 0.7)) {
        arrayToRememberStarsFilling[4].setAttribute("fill", "url(#editStar5Grad8Id" + IdToRemember + ")");
        arrayToRememberStarsTooltips[4].innerHTML = "4.8";
    }
    if (number >= (editStarsDivWidth * 0.8)) {
        arrayToRememberStarsFilling[4].setAttribute("fill", "url(#editStar5Grad9Id" + IdToRemember + ")");
        arrayToRememberStarsTooltips[4].innerHTML = "4.9";
    }
    if (number >= (editStarsDivWidth * 0.9)) {
        arrayToRememberStarsFilling[4].setAttribute("fill", "url(#editStar5GradFullId" + IdToRemember + ")");
        arrayToRememberStarsTooltips[4].innerHTML = "5";
    }
    editRatingValueToRemember = arrayToRememberStarsTooltips[4].innerHTML;
}

//6 STAR
const editMouseOver6Star = () => {
    arrayToRememberStarsTooltips[5].classList.remove("hidden");
    arrayToRememberStarsFilling[0].setAttribute("fill", "url(#editStar1GradFullId" + IdToRemember + ")");
    arrayToRememberStarsFilling[1].setAttribute("fill", "url(#editStar2GradFullId" + IdToRemember + ")");
    arrayToRememberStarsFilling[2].setAttribute("fill", "url(#editStar3GradFullId" + IdToRemember + ")");
    arrayToRememberStarsFilling[3].setAttribute("fill", "url(#editStar4GradFullId" + IdToRemember + ")");
    arrayToRememberStarsFilling[4].setAttribute("fill", "url(#editStar5GradFullId" + IdToRemember + ")");
};
const editMouseOutOf6Star = () => {
    arrayToRememberStarsFilling[5].setAttribute("fill", "none");
    arrayToRememberStarsFilling[4].setAttribute("fill", "none");
    arrayToRememberStarsFilling[3].setAttribute("fill", "none");
    arrayToRememberStarsFilling[2].setAttribute("fill", "none");
    arrayToRememberStarsFilling[1].setAttribute("fill", "none");
    arrayToRememberStarsFilling[0].setAttribute("fill", "none");
    arrayToRememberStarsTooltips[5].classList.add("hidden");
};
const editChoose6Star = () => {
    arrayToRememberStarsTooltips[5].classList.add("hidden");
    runNeededFunctionsAfterUserHasChosenRating();    
};

function editFilling6Star(event) {
    let bnds = event.target.getBoundingClientRect();
    let x = event.clientX - bnds.left;
    let number = Math.floor(x);

    if (number >= (editStarsDivWidth * 0.1)) {
        arrayToRememberStarsFilling[5].setAttribute("fill", "url(#editStar6Grad1Id" + IdToRemember + ")");
        arrayToRememberStarsTooltips[5].innerHTML = "5.1";
    }
    if (number >= (editStarsDivWidth * 0.2)) {
        arrayToRememberStarsFilling[5].setAttribute("fill", "url(#editStar6Grad2Id" + IdToRemember + ")");
        arrayToRememberStarsTooltips[5].innerHTML = "5.2";
    }
    if (number >= (editStarsDivWidth * 0.3)) {
        arrayToRememberStarsFilling[5].setAttribute("fill", "url(#editStar6Grad3Id" + IdToRemember + ")");
        arrayToRememberStarsTooltips[5].innerHTML = "5.3";
    }
    if (number >= (editStarsDivWidth * 0.4)) {
        arrayToRememberStarsFilling[5].setAttribute("fill", "url(#editStar6Grad4Id" + IdToRemember + ")");
        arrayToRememberStarsTooltips[5].innerHTML = "5.4";
    }
    if (number >= editStarsDivWidth / 2) {
        arrayToRememberStarsFilling[5].setAttribute("fill", "url(#editStar6Grad5Id" + IdToRemember + ")");
        arrayToRememberStarsTooltips[5].innerHTML = "5.5";
    }
    if (number >= (editStarsDivWidth * 0.5) + 1.6) {
        arrayToRememberStarsFilling[5].setAttribute("fill", "url(#editStar6Grad6Id" + IdToRemember + ")");
        arrayToRememberStarsTooltips[5].innerHTML = "5.6";
    }
    if (number >= (editStarsDivWidth * 0.6)) {
        arrayToRememberStarsFilling[5].setAttribute("fill", "url(#editStar6Grad7Id" + IdToRemember + ")");
        arrayToRememberStarsTooltips[5].innerHTML = "5.7";
    }
    if (number >= (editStarsDivWidth * 0.7)) {
        arrayToRememberStarsFilling[5].setAttribute("fill", "url(#editStar6Grad8Id" + IdToRemember + ")");
        arrayToRememberStarsTooltips[5].innerHTML = "5.8";
    }
    if (number >= (editStarsDivWidth * 0.8)) {
        arrayToRememberStarsFilling[5].setAttribute("fill", "url(#editStar6Grad9Id" + IdToRemember + ")");
        arrayToRememberStarsTooltips[5].innerHTML = "5.9";
    }
    if (number >= (editStarsDivWidth * 0.9)) {
        arrayToRememberStarsFilling[5].setAttribute("fill", "url(#editStar6GradFullId" + IdToRemember + ")");
        arrayToRememberStarsTooltips[5].innerHTML = "6";
    }
    editRatingValueToRemember = arrayToRememberStarsTooltips[5].innerHTML;
}

//7 STAR
const editMouseOver7Star = () => {
    arrayToRememberStarsTooltips[6].classList.remove("hidden");
    arrayToRememberStarsFilling[0].setAttribute("fill", "url(#editStar1GradFullId" + IdToRemember + ")");
    arrayToRememberStarsFilling[1].setAttribute("fill", "url(#editStar2GradFullId" + IdToRemember + ")");
    arrayToRememberStarsFilling[2].setAttribute("fill", "url(#editStar3GradFullId" + IdToRemember + ")");
    arrayToRememberStarsFilling[3].setAttribute("fill", "url(#editStar4GradFullId" + IdToRemember + ")");
    arrayToRememberStarsFilling[4].setAttribute("fill", "url(#editStar5GradFullId" + IdToRemember + ")");
    arrayToRememberStarsFilling[5].setAttribute("fill", "url(#editStar6GradFullId" + IdToRemember + ")");
};
const editMouseOutOf7Star = () => {
    arrayToRememberStarsFilling[6].setAttribute("fill", "none");
    arrayToRememberStarsFilling[5].setAttribute("fill", "none");
    arrayToRememberStarsFilling[4].setAttribute("fill", "none");
    arrayToRememberStarsFilling[3].setAttribute("fill", "none");
    arrayToRememberStarsFilling[2].setAttribute("fill", "none");
    arrayToRememberStarsFilling[1].setAttribute("fill", "none");
    arrayToRememberStarsFilling[0].setAttribute("fill", "none");
    arrayToRememberStarsTooltips[6].classList.add("hidden");
};
const editChoose7Star = () => {
    arrayToRememberStarsTooltips[6].classList.add("hidden");
    runNeededFunctionsAfterUserHasChosenRating();    
};

function editFilling7Star(event) {
    let bnds = event.target.getBoundingClientRect();
    let x = event.clientX - bnds.left;
    let number = Math.floor(x);

    if (number >= (editStarsDivWidth * 0.1)) {
        arrayToRememberStarsFilling[6].setAttribute("fill", "url(#editStar7Grad1Id" + IdToRemember + ")");
        arrayToRememberStarsTooltips[6].innerHTML = "6.1";
    }
    if (number >= (editStarsDivWidth * 0.2)) {
        arrayToRememberStarsFilling[6].setAttribute("fill", "url(#editStar7Grad2Id" + IdToRemember + ")");
        arrayToRememberStarsTooltips[6].innerHTML = "6.2";
    }
    if (number >= (editStarsDivWidth * 0.3)) {
        arrayToRememberStarsFilling[6].setAttribute("fill", "url(#editStar7Grad3Id" + IdToRemember + ")");
        arrayToRememberStarsTooltips[6].innerHTML = "6.3";
    }
    if (number >= (editStarsDivWidth * 0.4)) {
        arrayToRememberStarsFilling[6].setAttribute("fill", "url(#editStar7Grad4Id" + IdToRemember + ")");
        arrayToRememberStarsTooltips[6].innerHTML = "6.4";
    }
    if (number >= editStarsDivWidth / 2) {
        arrayToRememberStarsFilling[6].setAttribute("fill", "url(#editStar7Grad5Id" + IdToRemember + ")");
        arrayToRememberStarsTooltips[6].innerHTML = "6.5";
    }
    if (number >= (editStarsDivWidth * 0.5) + 1.6) {
        arrayToRememberStarsFilling[6].setAttribute("fill", "url(#editStar7Grad6Id" + IdToRemember + ")");
        arrayToRememberStarsTooltips[6].innerHTML = "6.6";
    }
    if (number >= (editStarsDivWidth * 0.6)) {
        arrayToRememberStarsFilling[6].setAttribute("fill", "url(#editStar7Grad7Id" + IdToRemember + ")");
        arrayToRememberStarsTooltips[6].innerHTML = "6.7";
    }
    if (number >= (editStarsDivWidth * 0.7)) {
        arrayToRememberStarsFilling[6].setAttribute("fill", "url(#editStar7Grad8Id" + IdToRemember + ")");
        arrayToRememberStarsTooltips[6].innerHTML = "6.8";
    }
    if (number >= (editStarsDivWidth * 0.8)) {
        arrayToRememberStarsFilling[6].setAttribute("fill", "url(#editStar7Grad9Id" + IdToRemember + ")");
        arrayToRememberStarsTooltips[6].innerHTML = "6.9";
    }
    if (number >= (editStarsDivWidth * 0.9)) {
        arrayToRememberStarsFilling[6].setAttribute("fill", "url(#editStar7GradFullId" + IdToRemember + ")");
        arrayToRememberStarsTooltips[6].innerHTML = "7";
    }
    editRatingValueToRemember = arrayToRememberStarsTooltips[6].innerHTML;
}

//8 STAR
const editMouseOver8Star = () => {
    arrayToRememberStarsTooltips[7].classList.remove("hidden");
    arrayToRememberStarsFilling[0].setAttribute("fill", "url(#editStar1GradFullId" + IdToRemember + ")");
    arrayToRememberStarsFilling[1].setAttribute("fill", "url(#editStar2GradFullId" + IdToRemember + ")");
    arrayToRememberStarsFilling[2].setAttribute("fill", "url(#editStar3GradFullId" + IdToRemember + ")");
    arrayToRememberStarsFilling[3].setAttribute("fill", "url(#editStar4GradFullId" + IdToRemember + ")");
    arrayToRememberStarsFilling[4].setAttribute("fill", "url(#editStar5GradFullId" + IdToRemember + ")");
    arrayToRememberStarsFilling[5].setAttribute("fill", "url(#editStar6GradFullId" + IdToRemember + ")");
    arrayToRememberStarsFilling[6].setAttribute("fill", "url(#editStar7GradFullId" + IdToRemember + ")");
};
const editMouseOutOf8Star = () => {
    arrayToRememberStarsFilling[7].setAttribute("fill", "none");
    arrayToRememberStarsFilling[6].setAttribute("fill", "none");
    arrayToRememberStarsFilling[5].setAttribute("fill", "none");
    arrayToRememberStarsFilling[4].setAttribute("fill", "none");
    arrayToRememberStarsFilling[3].setAttribute("fill", "none");
    arrayToRememberStarsFilling[2].setAttribute("fill", "none");
    arrayToRememberStarsFilling[1].setAttribute("fill", "none");
    arrayToRememberStarsFilling[0].setAttribute("fill", "none");
    arrayToRememberStarsTooltips[7].classList.add("hidden");
};
const editChoose8Star = () => {
    arrayToRememberStarsTooltips[7].classList.add("hidden");
    runNeededFunctionsAfterUserHasChosenRating();    
};

function editFilling8Star(event) {
    let bnds = event.target.getBoundingClientRect();
    let x = event.clientX - bnds.left;
    let number = Math.floor(x);

    if (number >= (editStarsDivWidth * 0.1)) {
        arrayToRememberStarsFilling[7].setAttribute("fill", "url(#editStar8Grad1Id" + IdToRemember + ")");
        arrayToRememberStarsTooltips[7].innerHTML = "7.1";
    }
    if (number >= (editStarsDivWidth * 0.2)) {
        arrayToRememberStarsFilling[7].setAttribute("fill", "url(#editStar8Grad2Id" + IdToRemember + ")");
        arrayToRememberStarsTooltips[7].innerHTML = "7.2";
    }
    if (number >= (editStarsDivWidth * 0.3)) {
        arrayToRememberStarsFilling[7].setAttribute("fill", "url(#editStar8Grad3Id" + IdToRemember + ")");
        arrayToRememberStarsTooltips[7].innerHTML = "7.3";
    }
    if (number >= (editStarsDivWidth * 0.4)) {
        arrayToRememberStarsFilling[7].setAttribute("fill", "url(#editStar8Grad4Id" + IdToRemember + ")");
        arrayToRememberStarsTooltips[7].innerHTML = "7.4";
    }
    if (number >= editStarsDivWidth / 2) {
        arrayToRememberStarsFilling[7].setAttribute("fill", "url(#editStar8Grad5Id" + IdToRemember + ")");
        arrayToRememberStarsTooltips[7].innerHTML = "7.5";
    }
    if (number >= (editStarsDivWidth * 0.5) + 1.6) {
        arrayToRememberStarsFilling[7].setAttribute("fill", "url(#editStar8Grad6Id" + IdToRemember + ")");
        arrayToRememberStarsTooltips[7].innerHTML = "7.6";
    }
    if (number >= (editStarsDivWidth * 0.6)) {
        arrayToRememberStarsFilling[7].setAttribute("fill", "url(#editStar8Grad7Id" + IdToRemember + ")");
        arrayToRememberStarsTooltips[7].innerHTML = "7.7";
    }
    if (number >= (editStarsDivWidth * 0.7)) {
        arrayToRememberStarsFilling[7].setAttribute("fill", "url(#editStar8Grad8Id" + IdToRemember + ")");
        arrayToRememberStarsTooltips[7].innerHTML = "7.8";
    }
    if (number >= (editStarsDivWidth * 0.8)) {
        arrayToRememberStarsFilling[7].setAttribute("fill", "url(#editStar8Grad9Id" + IdToRemember + ")");
        arrayToRememberStarsTooltips[7].innerHTML = "7.9";
    }
    if (number >= (editStarsDivWidth * 0.9)) {
        arrayToRememberStarsFilling[7].setAttribute("fill", "url(#editStar8GradFullId" + IdToRemember + ")");
        arrayToRememberStarsTooltips[7].innerHTML = "8";
    }
    editRatingValueToRemember = arrayToRememberStarsTooltips[7].innerHTML;
}

//9 STAR
const editMouseOver9Star = () => {
    arrayToRememberStarsTooltips[8].classList.remove("hidden");
    arrayToRememberStarsFilling[0].setAttribute("fill", "url(#editStar1GradFullId" + IdToRemember + ")");
    arrayToRememberStarsFilling[1].setAttribute("fill", "url(#editStar2GradFullId" + IdToRemember + ")");
    arrayToRememberStarsFilling[2].setAttribute("fill", "url(#editStar3GradFullId" + IdToRemember + ")");
    arrayToRememberStarsFilling[3].setAttribute("fill", "url(#editStar4GradFullId" + IdToRemember + ")");
    arrayToRememberStarsFilling[4].setAttribute("fill", "url(#editStar5GradFullId" + IdToRemember + ")");
    arrayToRememberStarsFilling[5].setAttribute("fill", "url(#editStar6GradFullId" + IdToRemember + ")");
    arrayToRememberStarsFilling[6].setAttribute("fill", "url(#editStar7GradFullId" + IdToRemember + ")");
    arrayToRememberStarsFilling[7].setAttribute("fill", "url(#editStar8GradFullId" + IdToRemember + ")");
};
const editMouseOutOf9Star = () => {
    arrayToRememberStarsFilling[8].setAttribute("fill", "none");
    arrayToRememberStarsFilling[7].setAttribute("fill", "none");
    arrayToRememberStarsFilling[6].setAttribute("fill", "none");
    arrayToRememberStarsFilling[5].setAttribute("fill", "none");
    arrayToRememberStarsFilling[4].setAttribute("fill", "none");
    arrayToRememberStarsFilling[3].setAttribute("fill", "none");
    arrayToRememberStarsFilling[2].setAttribute("fill", "none");
    arrayToRememberStarsFilling[1].setAttribute("fill", "none");
    arrayToRememberStarsFilling[0].setAttribute("fill", "none");
    arrayToRememberStarsTooltips[8].classList.add("hidden");
};
const editChoose9Star = () => {
    arrayToRememberStarsTooltips[8].classList.add("hidden");
    runNeededFunctionsAfterUserHasChosenRating();    
};

function editFilling9Star(event) {
    let bnds = event.target.getBoundingClientRect();
    let x = event.clientX - bnds.left;
    let number = Math.floor(x);

    if (number >= (editStarsDivWidth * 0.1)) {
        arrayToRememberStarsFilling[8].setAttribute("fill", "url(#editStar9Grad1Id" + IdToRemember + ")");
        arrayToRememberStarsTooltips[8].innerHTML = "8.1";
    }
    if (number >= (editStarsDivWidth * 0.2)) {
        arrayToRememberStarsFilling[8].setAttribute("fill", "url(#editStar9Grad2Id" + IdToRemember + ")");
        arrayToRememberStarsTooltips[8].innerHTML = "8.2";
    }
    if (number >= (editStarsDivWidth * 0.3)) {
        arrayToRememberStarsFilling[8].setAttribute("fill", "url(#editStar9Grad3Id" + IdToRemember + ")");
        arrayToRememberStarsTooltips[8].innerHTML = "8.3";
    }
    if (number >= (editStarsDivWidth * 0.4)) {
        arrayToRememberStarsFilling[8].setAttribute("fill", "url(#editStar9Grad4Id" + IdToRemember + ")");
        arrayToRememberStarsTooltips[8].innerHTML = "8.4";
    }
    if (number >= editStarsDivWidth / 2) {
        arrayToRememberStarsFilling[8].setAttribute("fill", "url(#editStar9Grad5Id" + IdToRemember + ")");
        arrayToRememberStarsTooltips[8].innerHTML = "8.5";
    }
    if (number >= (editStarsDivWidth * 0.5) + 1.6) {
        arrayToRememberStarsFilling[8].setAttribute("fill", "url(#editStar9Grad6Id" + IdToRemember + ")");
        arrayToRememberStarsTooltips[8].innerHTML = "8.6";
    }
    if (number >= (editStarsDivWidth * 0.6)) {
        arrayToRememberStarsFilling[8].setAttribute("fill", "url(#editStar9Grad7Id" + IdToRemember + ")");
        arrayToRememberStarsTooltips[8].innerHTML = "8.7";
    }
    if (number >= (editStarsDivWidth * 0.7)) {
        arrayToRememberStarsFilling[8].setAttribute("fill", "url(#editStar9Grad8Id" + IdToRemember + ")");
        arrayToRememberStarsTooltips[8].innerHTML = "8.8";
    }
    if (number >= (editStarsDivWidth * 0.8)) {
        arrayToRememberStarsFilling[8].setAttribute("fill", "url(#editStar9Grad9Id" + IdToRemember + ")");
        arrayToRememberStarsTooltips[8].innerHTML = "8.9";
    }
    if (number >= (editStarsDivWidth * 0.9)) {
        arrayToRememberStarsFilling[8].setAttribute("fill", "url(#editStar9GradFullId" + IdToRemember + ")");
        arrayToRememberStarsTooltips[8].innerHTML = "9";
    }
    editRatingValueToRemember = arrayToRememberStarsTooltips[8].innerHTML;
}

//10 STAR
const editMouseOver10Star = () => {
    arrayToRememberStarsTooltips[9].classList.remove("hidden");
    arrayToRememberStarsFilling[0].setAttribute("fill", "url(#editStar1GradFullId" + IdToRemember + ")");
    arrayToRememberStarsFilling[1].setAttribute("fill", "url(#editStar2GradFullId" + IdToRemember + ")");
    arrayToRememberStarsFilling[2].setAttribute("fill", "url(#editStar3GradFullId" + IdToRemember + ")");
    arrayToRememberStarsFilling[3].setAttribute("fill", "url(#editStar4GradFullId" + IdToRemember + ")");
    arrayToRememberStarsFilling[4].setAttribute("fill", "url(#editStar5GradFullId" + IdToRemember + ")");
    arrayToRememberStarsFilling[5].setAttribute("fill", "url(#editStar6GradFullId" + IdToRemember + ")");
    arrayToRememberStarsFilling[6].setAttribute("fill", "url(#editStar7GradFullId" + IdToRemember + ")");
    arrayToRememberStarsFilling[7].setAttribute("fill", "url(#editStar8GradFullId" + IdToRemember + ")");
    arrayToRememberStarsFilling[8].setAttribute("fill", "url(#editStar9GradFullId" + IdToRemember + ")");
};
const editMouseOutOf10Star = () => {
    arrayToRememberStarsFilling[9].setAttribute("fill", "none");
    arrayToRememberStarsFilling[8].setAttribute("fill", "none");
    arrayToRememberStarsFilling[7].setAttribute("fill", "none");
    arrayToRememberStarsFilling[6].setAttribute("fill", "none");
    arrayToRememberStarsFilling[5].setAttribute("fill", "none");
    arrayToRememberStarsFilling[4].setAttribute("fill", "none");
    arrayToRememberStarsFilling[3].setAttribute("fill", "none");
    arrayToRememberStarsFilling[2].setAttribute("fill", "none");
    arrayToRememberStarsFilling[1].setAttribute("fill", "none");
    arrayToRememberStarsFilling[0].setAttribute("fill", "none");
    arrayToRememberStarsTooltips[9].classList.add("hidden");
};
const editChoose10Star = () => {
    arrayToRememberStarsTooltips[9].classList.add("hidden");
    runNeededFunctionsAfterUserHasChosenRating(); 
};

function editFilling10Star(event) {
    let bnds = event.target.getBoundingClientRect();
    let x = event.clientX - bnds.left;
    let number = Math.floor(x);

    if (number >= (editStarsDivWidth * 0.1)) {
        arrayToRememberStarsFilling[9].setAttribute("fill", "url(#editStar10Grad1Id" + IdToRemember + ")");
        arrayToRememberStarsTooltips[9].innerHTML = "9.1";
    }
    if (number >= (editStarsDivWidth * 0.2)) {
        arrayToRememberStarsFilling[9].setAttribute("fill", "url(#editStar10Grad2Id" + IdToRemember + ")");
        arrayToRememberStarsTooltips[9].innerHTML = "9.2";
    }
    if (number >= (editStarsDivWidth * 0.3)) {
        arrayToRememberStarsFilling[9].setAttribute("fill", "url(#editStar10Grad3Id" + IdToRemember + ")");
        arrayToRememberStarsTooltips[9].innerHTML = "9.3";
    }
    if (number >= (editStarsDivWidth * 0.4)) {
        arrayToRememberStarsFilling[9].setAttribute("fill", "url(#editStar10Grad4Id" + IdToRemember + ")");
        arrayToRememberStarsTooltips[9].innerHTML = "9.4";
    }
    if (number >= editStarsDivWidth / 2) {
        arrayToRememberStarsFilling[9].setAttribute("fill", "url(#editStar10Grad5Id" + IdToRemember + ")");
        arrayToRememberStarsTooltips[9].innerHTML = "9.5";
    }
    if (number >= (editStarsDivWidth * 0.5) + 1.6) {
        arrayToRememberStarsFilling[9].setAttribute("fill", "url(#editStar10Grad6Id" + IdToRemember + ")");
        arrayToRememberStarsTooltips[9].innerHTML = "9.6";
    }
    if (number >= (editStarsDivWidth * 0.6)) {
        arrayToRememberStarsFilling[9].setAttribute("fill", "url(#editStar10Grad7Id" + IdToRemember + ")");
        arrayToRememberStarsTooltips[9].innerHTML = "9.7";
    }
    if (number >= (editStarsDivWidth * 0.7)) {
        arrayToRememberStarsFilling[9].setAttribute("fill", "url(#editStar10Grad8Id" + IdToRemember + ")");
        arrayToRememberStarsTooltips[9].innerHTML = "9.8";
    }
    if (number >= (editStarsDivWidth * 0.8)) {
        arrayToRememberStarsFilling[9].setAttribute("fill", "url(#editStar10Grad9Id" + IdToRemember + ")");
        arrayToRememberStarsTooltips[9].innerHTML = "9.9";
    }
    if (number >= (editStarsDivWidth * 0.9)) {
        arrayToRememberStarsFilling[9].setAttribute("fill", "url(#editStar10GradFullId" + IdToRemember + ")");
        arrayToRememberStarsTooltips[9].innerHTML = "10";
    }
    editRatingValueToRemember = arrayToRememberStarsTooltips[9].innerHTML;
}

//                          M   A   I   N                        \\
function starsRating(id) {
    rememberRatingValueWhenClosingModalWithoutSaving = getRatingValue(id);
    let ratingValue;    
    let divWithStars = document.getElementById("ratingAsStars" + id);

    const editStar1Element = divWithStars.querySelector("#editStar1Rating" + id);
    const editStar2Element = divWithStars.querySelector("#editStar2Rating" + id);
    const editStar3Element = divWithStars.querySelector("#editStar3Rating" + id);
    const editStar4Element = divWithStars.querySelector("#editStar4Rating" + id);
    const editStar5Element = divWithStars.querySelector("#editStar5Rating" + id);
    const editStar6Element = divWithStars.querySelector("#editStar6Rating" + id);
    const editStar7Element = divWithStars.querySelector("#editStar7Rating" + id);
    const editStar8Element = divWithStars.querySelector("#editStar8Rating" + id);
    const editStar9Element = divWithStars.querySelector("#editStar9Rating" + id);
    const editStar10Element = divWithStars.querySelector("#editStar10Rating" + id);
    let arrayOfStarsElements = [editStar1Element, editStar2Element, editStar3Element, editStar4Element, 
        editStar5Element, editStar6Element, editStar7Element, editStar8Element, editStar9Element, editStar10Element
    ];
    arrayToRememberStarsElements = arrayOfStarsElements;

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
    arrayToRememberStarsFilling = arrayOfStarsFilling;

    const editStar1Tooltip = document.getElementById("editStar1Tooltip" + id);
    const editStar2Tooltip = document.getElementById("editStar2Tooltip" + id);
    const editStar3Tooltip = document.getElementById("editStar3Tooltip" + id);
    const editStar4Tooltip = document.getElementById("editStar4Tooltip" + id);
    const editStar5Tooltip = document.getElementById("editStar5Tooltip" + id);
    const editStar6Tooltip = document.getElementById("editStar6Tooltip" + id);
    const editStar7Tooltip = document.getElementById("editStar7Tooltip" + id);
    const editStar8Tooltip = document.getElementById("editStar8Tooltip" + id);
    const editStar9Tooltip = document.getElementById("editStar9Tooltip" + id);
    const editStar10Tooltip = document.getElementById("editStar10Tooltip" + id);
    let arrayOfStarsTooltips = [editStar1Tooltip, editStar2Tooltip, editStar3Tooltip, editStar4Tooltip,
        editStar5Tooltip, editStar6Tooltip, editStar7Tooltip, editStar8Tooltip, editStar9Tooltip, editStar10Tooltip
    ];
    arrayToRememberStarsTooltips = arrayOfStarsTooltips;

    if (isRatingValueEmpty(id)) {
        runEventListenersForUserRatingChoosing();
    } else {
        ratingValue = getRatingValue(id);
        fillingStarsWithTheCorrespondingRating(ratingValue, id);
        runEventListenersWhenRatingIsChosenOrAlreadySet();
        runDoubleClickEventListeners();
    }
}