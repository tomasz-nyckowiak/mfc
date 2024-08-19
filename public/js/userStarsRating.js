const star1Element = document.querySelector("#star1Rating");
const star2Element = document.querySelector("#star2Rating");
const star3Element = document.querySelector("#star3Rating");
const star4Element = document.querySelector("#star4Rating");
const star5Element = document.querySelector("#star5Rating");
const star6Element = document.querySelector("#star6Rating");
const star7Element = document.querySelector("#star7Rating");
const star8Element = document.querySelector("#star8Rating");
const star9Element = document.querySelector("#star9Rating");
const star10Element = document.querySelector("#star10Rating");
const star1Tooltip = document.getElementById("star1Tooltip");
const star2Tooltip = document.getElementById("star2Tooltip");
const star3Tooltip = document.getElementById("star3Tooltip");
const star4Tooltip = document.getElementById("star4Tooltip");
const star5Tooltip = document.getElementById("star5Tooltip");
const star6Tooltip = document.getElementById("star6Tooltip");
const star7Tooltip = document.getElementById("star7Tooltip");
const star8Tooltip = document.getElementById("star8Tooltip");
const star9Tooltip = document.getElementById("star9Tooltip");
const star10Tooltip = document.getElementById("star10Tooltip");
const chosenRatingTooltip = document.getElementById("chosenRating");
const star1Fill = star1Element.querySelector("#star1Rating > svg > path");
const star2Fill = star2Element.querySelector("#star2Rating > svg > path");
const star3Fill = star3Element.querySelector("#star3Rating > svg > path");
const star4Fill = star4Element.querySelector("#star4Rating > svg > path");
const star5Fill = star5Element.querySelector("#star5Rating > svg > path");
const star6Fill = star6Element.querySelector("#star6Rating > svg > path");
const star7Fill = star7Element.querySelector("#star7Rating > svg > path");
const star8Fill = star8Element.querySelector("#star8Rating > svg > path");
const star9Fill = star9Element.querySelector("#star9Rating > svg > path");
const star10Fill = star10Element.querySelector("#star10Rating > svg > path");

let ratingValueToRemember = "";

function removingEventListeners() {
    star1Element.removeEventListener("mouseover", mouseOver1Star);
    star1Element.removeEventListener("mouseout", mouseOutOf1Star);
    star2Element.removeEventListener("mouseover", mouseOver2Star);
    star2Element.removeEventListener("mouseout", mouseOutOf2Star);
    star2Element.removeEventListener("mousemove", filling2Star, false);
    star3Element.removeEventListener("mouseover", mouseOver3Star);
    star3Element.removeEventListener("mouseout", mouseOutOf3Star);
    star3Element.removeEventListener("mousemove", filling3Star, false);
    star4Element.removeEventListener("mouseover", mouseOver4Star);
    star4Element.removeEventListener("mouseout", mouseOutOf4Star);
    star4Element.removeEventListener("mousemove", filling4Star, false);
    star5Element.removeEventListener("mouseover", mouseOver5Star);
    star5Element.removeEventListener("mouseout", mouseOutOf5Star);
    star5Element.removeEventListener("mousemove", filling5Star, false);
    star6Element.removeEventListener("mouseover", mouseOver6Star);
    star6Element.removeEventListener("mouseout", mouseOutOf6Star);
    star6Element.removeEventListener("mousemove", filling6Star, false);
    star7Element.removeEventListener("mouseover", mouseOver7Star);
    star7Element.removeEventListener("mouseout", mouseOutOf7Star);
    star7Element.removeEventListener("mousemove", filling7Star, false);
    star8Element.removeEventListener("mouseover", mouseOver8Star);
    star8Element.removeEventListener("mouseout", mouseOutOf8Star);
    star8Element.removeEventListener("mousemove", filling8Star, false);
    star9Element.removeEventListener("mouseover", mouseOver9Star);
    star9Element.removeEventListener("mouseout", mouseOutOf9Star);
    star9Element.removeEventListener("mousemove", filling9Star, false);
    star10Element.removeEventListener("mouseover", mouseOver10Star);
    star10Element.removeEventListener("mouseout", mouseOutOf10Star);
    star10Element.removeEventListener("mousemove", filling10Star, false);
}

function addingEventListeners() {
    ratingValueToRemember = "";
    star1Element.addEventListener("mouseover", mouseOver1Star);
    star1Element.addEventListener("mouseout", mouseOutOf1Star);
    star2Element.addEventListener("mouseover", mouseOver2Star);
    star2Element.addEventListener("mouseout", mouseOutOf2Star);
    star2Element.addEventListener("mousemove", filling2Star, false);    
    star3Element.addEventListener("mouseover", mouseOver3Star);
    star3Element.addEventListener("mouseout", mouseOutOf3Star);
    star3Element.addEventListener("mousemove", filling3Star, false);
    star4Element.addEventListener("mouseover", mouseOver4Star);
    star4Element.addEventListener("mouseout", mouseOutOf4Star);
    star4Element.addEventListener("mousemove", filling4Star, false);
    star5Element.addEventListener("mouseover", mouseOver5Star);
    star5Element.addEventListener("mouseout", mouseOutOf5Star);
    star5Element.addEventListener("mousemove", filling5Star, false);
    star6Element.addEventListener("mouseover", mouseOver6Star);
    star6Element.addEventListener("mouseout", mouseOutOf6Star);
    star6Element.addEventListener("mousemove", filling6Star, false);
    star7Element.addEventListener("mouseover", mouseOver7Star);
    star7Element.addEventListener("mouseout", mouseOutOf7Star);
    star7Element.addEventListener("mousemove", filling7Star, false);
    star8Element.addEventListener("mouseover", mouseOver8Star);
    star8Element.addEventListener("mouseout", mouseOutOf8Star);
    star8Element.addEventListener("mousemove", filling8Star, false);
    star9Element.addEventListener("mouseover", mouseOver9Star);
    star9Element.addEventListener("mouseout", mouseOutOf9Star);
    star9Element.addEventListener("mousemove", filling9Star, false);
    star10Element.addEventListener("mouseover", mouseOver10Star);
    star10Element.addEventListener("mouseout", mouseOutOf10Star);
    star10Element.addEventListener("mousemove", filling10Star, false);
}

function settingStarsEmpty() {
    star1Fill.setAttribute("fill", "none");
    star2Fill.setAttribute("fill", "none");
    star3Fill.setAttribute("fill", "none");
    star4Fill.setAttribute("fill", "none");
    star5Fill.setAttribute("fill", "none");
    star6Fill.setAttribute("fill", "none");
    star7Fill.setAttribute("fill", "none");
    star8Fill.setAttribute("fill", "none");
    star9Fill.setAttribute("fill", "none");
    star10Fill.setAttribute("fill", "none");
}

function runDoubleClickEventListeners() {
    star1Element.addEventListener("dblclick", resetStarRating);
    star2Element.addEventListener("dblclick", resetStarRating);
    star3Element.addEventListener("dblclick", resetStarRating);
    star4Element.addEventListener("dblclick", resetStarRating);
    star5Element.addEventListener("dblclick", resetStarRating);
    star6Element.addEventListener("dblclick", resetStarRating);
    star7Element.addEventListener("dblclick", resetStarRating);
    star8Element.addEventListener("dblclick", resetStarRating);
    star9Element.addEventListener("dblclick", resetStarRating);
    star10Element.addEventListener("dblclick", resetStarRating);
}

const resetStarRating = () => {
    chosenRatingTooltip.classList.add("hidden");
    settingStarsEmpty();
    addingEventListeners();
    removeEventListenersForChosenRating();
    resetValueForHiddenInput(); 
};

function runNeededFunctionsAfterUserHasChosenRating() {
    removingEventListeners();
    runDoubleClickEventListeners();
    runEventListenersForChosenRating();
    setValueForHiddenInput();
}

//CHOSEN RATING
const mouseOverChosenRating = () => {
    chosenRatingTooltip.classList.remove("hidden");
    chosenRatingTooltip.innerHTML = firstPartForChosenRatingTooltipMessage + ratingValueToRemember + lastPartForChosenRatingTooltipMessage;
};
const mouseOutOfChosenRating = () => {
    chosenRatingTooltip.classList.add("hidden");
    chosenRatingTooltip.innerHTML = "";
};

function runEventListenersForChosenRating() {
    star1Element.addEventListener("mouseover", mouseOverChosenRating);
    star1Element.addEventListener("mouseout", mouseOutOfChosenRating);
    star2Element.addEventListener("mouseover", mouseOverChosenRating);
    star2Element.addEventListener("mouseout", mouseOutOfChosenRating);
    star3Element.addEventListener("mouseover", mouseOverChosenRating);
    star3Element.addEventListener("mouseout", mouseOutOfChosenRating);
    star4Element.addEventListener("mouseover", mouseOverChosenRating);
    star4Element.addEventListener("mouseout", mouseOutOfChosenRating);
    star5Element.addEventListener("mouseover", mouseOverChosenRating);
    star5Element.addEventListener("mouseout", mouseOutOfChosenRating);
    star6Element.addEventListener("mouseover", mouseOverChosenRating);
    star6Element.addEventListener("mouseout", mouseOutOfChosenRating);
    star7Element.addEventListener("mouseover", mouseOverChosenRating);
    star7Element.addEventListener("mouseout", mouseOutOfChosenRating);
    star8Element.addEventListener("mouseover", mouseOverChosenRating);
    star8Element.addEventListener("mouseout", mouseOutOfChosenRating);
    star9Element.addEventListener("mouseover", mouseOverChosenRating);
    star9Element.addEventListener("mouseout", mouseOutOfChosenRating);
    star10Element.addEventListener("mouseover", mouseOverChosenRating);
    star10Element.addEventListener("mouseout", mouseOutOfChosenRating);
}

function removeEventListenersForChosenRating() {
    star1Element.removeEventListener("mouseover", mouseOverChosenRating);
    star1Element.removeEventListener("mouseout", mouseOutOfChosenRating);
    star2Element.removeEventListener("mouseover", mouseOverChosenRating);
    star2Element.removeEventListener("mouseout", mouseOutOfChosenRating);
    star3Element.removeEventListener("mouseover", mouseOverChosenRating);
    star3Element.removeEventListener("mouseout", mouseOutOfChosenRating);
    star4Element.removeEventListener("mouseover", mouseOverChosenRating);
    star4Element.removeEventListener("mouseout", mouseOutOfChosenRating);
    star5Element.removeEventListener("mouseover", mouseOverChosenRating);
    star5Element.removeEventListener("mouseout", mouseOutOfChosenRating);
    star6Element.removeEventListener("mouseover", mouseOverChosenRating);
    star6Element.removeEventListener("mouseout", mouseOutOfChosenRating);
    star7Element.removeEventListener("mouseover", mouseOverChosenRating);
    star7Element.removeEventListener("mouseout", mouseOutOfChosenRating);
    star8Element.removeEventListener("mouseover", mouseOverChosenRating);
    star8Element.removeEventListener("mouseout", mouseOutOfChosenRating);
    star9Element.removeEventListener("mouseover", mouseOverChosenRating);
    star9Element.removeEventListener("mouseout", mouseOutOfChosenRating);
    star10Element.removeEventListener("mouseover", mouseOverChosenRating);
    star10Element.removeEventListener("mouseout", mouseOutOfChosenRating);
}

function setValueForHiddenInput() {
    document.getElementById("rating").setAttribute("value", ratingValueToRemember);
}

function resetValueForHiddenInput() {
    document.getElementById("rating").setAttribute("value", "");
}
//      ...     \\

//1 STAR
const mouseOver1Star = () => {
    star1Fill.setAttribute("fill", "url(#star1GradFull)");
    star1Tooltip.classList.remove("hidden");
    star1Tooltip.innerHTML = "1";
    ratingValueToRemember = star1Tooltip.innerHTML;
};
const mouseOutOf1Star = () => {
    star1Fill.setAttribute("fill", "none");
    star1Tooltip.classList.add("hidden");
};
const choose1Star = () => {
    star1Tooltip.classList.add("hidden");
    runNeededFunctionsAfterUserHasChosenRating();  
};

star1Element.addEventListener("mouseover", mouseOver1Star);
star1Element.addEventListener("mouseout", mouseOutOf1Star);
star1Element.addEventListener("click", choose1Star);
//      ...     \\

//2 STAR
const mouseOver2Star = () => {
    star2Tooltip.classList.remove("hidden");
    star1Fill.setAttribute("fill", "url(#star1GradFull)");
};
const mouseOutOf2Star = () => {
    star2Fill.setAttribute("fill", "none");
    star1Fill.setAttribute("fill", "none");
    star2Tooltip.classList.add("hidden");
};
const choose2Star = () => {
    star2Tooltip.classList.add("hidden");
    runNeededFunctionsAfterUserHasChosenRating();
};

star2Element.addEventListener("mouseover", mouseOver2Star);
star2Element.addEventListener("mouseout", mouseOutOf2Star);
star2Element.addEventListener("click", choose2Star);
star2Element.addEventListener("mousemove", filling2Star, false);

function filling2Star(event) {
    let bnds = event.target.getBoundingClientRect();
    let x = event.clientX - bnds.left;
    let number = Math.floor(x);

    if (number >= (starsDivWidth * 0.1)) {
        star2Fill.setAttribute("fill", "url(#star2Grad1)");
        star2Tooltip.innerHTML = "1.1";
    }
    if (number >= (starsDivWidth * 0.2)) {
        star2Fill.setAttribute("fill", "url(#star2Grad2)");
        star2Tooltip.innerHTML = "1.2";
    }
    if (number >= (starsDivWidth * 0.3)) {
        star2Fill.setAttribute("fill", "url(#star2Grad3)");
        star2Tooltip.innerHTML = "1.3";
    }
    if (number >= (starsDivWidth * 0.4)) {
        star2Fill.setAttribute("fill", "url(#star2Grad4)");
        star2Tooltip.innerHTML = "1.4";
    }
    if (number >= starsDivWidth / 2) {
        star2Fill.setAttribute("fill", "url(#star2Grad5)");
        star2Tooltip.innerHTML = "1.5";
    }
    if (number >= (starsDivWidth * 0.5) + 1.6) {
        star2Fill.setAttribute("fill", "url(#star2Grad6)");
        star2Tooltip.innerHTML = "1.6";
    }
    if (number >= (starsDivWidth * 0.6)) {
        star2Fill.setAttribute("fill", "url(#star2Grad7)");
        star2Tooltip.innerHTML = "1.7";
    }
    if (number >= (starsDivWidth * 0.7)) {
        star2Fill.setAttribute("fill", "url(#star2Grad8)");
        star2Tooltip.innerHTML = "1.8";
    }
    if (number >= (starsDivWidth * 0.8)) {
        star2Fill.setAttribute("fill", "url(#star2Grad9)");
        star2Tooltip.innerHTML = "1.9";
    }
    if (number >= (starsDivWidth * 0.9)) {
        star2Fill.setAttribute("fill", "url(#star2GradFull)");
        star2Tooltip.innerHTML = "2";
    }
    ratingValueToRemember = star2Tooltip.innerHTML;
}
//      ...     \\

//STAR 3
const mouseOver3Star = () => {
    star3Tooltip.classList.remove("hidden");
    star1Fill.setAttribute("fill", "url(#star1GradFull)");
    star2Fill.setAttribute("fill", "url(#star2GradFull)");
};
const mouseOutOf3Star = () => {
    star3Fill.setAttribute("fill", "none");
    star2Fill.setAttribute("fill", "none");
    star1Fill.setAttribute("fill", "none");
    star3Tooltip.classList.add("hidden");
};
const choose3Star = () => {
    star3Tooltip.classList.add("hidden");
    runNeededFunctionsAfterUserHasChosenRating();
};

star3Element.addEventListener("mouseover", mouseOver3Star);
star3Element.addEventListener("mouseout", mouseOutOf3Star);
star3Element.addEventListener("click", choose3Star);
star3Element.addEventListener("mousemove", filling3Star, false);

function filling3Star(event) {
    let bnds = event.target.getBoundingClientRect();
    let x = event.clientX - bnds.left;
    let number = Math.floor(x);

    if (number >= (starsDivWidth * 0.1)) {
        star3Fill.setAttribute("fill", "url(#star3Grad1)");
        star3Tooltip.innerHTML = "2.1";
    }
    if (number >= (starsDivWidth * 0.2)) {
        star3Fill.setAttribute("fill", "url(#star3Grad2)");
        star3Tooltip.innerHTML = "2.2";
    }
    if (number >= (starsDivWidth * 0.3)) {
        star3Fill.setAttribute("fill", "url(#star3Grad3)");
        star3Tooltip.innerHTML = "2.3";
    }
    if (number >= (starsDivWidth * 0.4)) {
        star3Fill.setAttribute("fill", "url(#star3Grad4)");
        star3Tooltip.innerHTML = "2.4";
    }
    if (number >= starsDivWidth / 2) {
        star3Fill.setAttribute("fill", "url(#star3Grad5)");
        star3Tooltip.innerHTML = "2.5";
    }
    if (number >= (starsDivWidth * 0.5) + 1.6) {
        star3Fill.setAttribute("fill", "url(#star3Grad6)");
        star3Tooltip.innerHTML = "2.6";
    }
    if (number >= (starsDivWidth * 0.6)) {
        star3Fill.setAttribute("fill", "url(#star3Grad7)");
        star3Tooltip.innerHTML = "2.7";
    }
    if (number >= (starsDivWidth * 0.7)) {
        star3Fill.setAttribute("fill", "url(#star3Grad8)");
        star3Tooltip.innerHTML = "2.8";
    }
    if (number >= (starsDivWidth * 0.8)) {
        star3Fill.setAttribute("fill", "url(#star3Grad9)");
        star3Tooltip.innerHTML = "2.9";
    }
    if (number >= (starsDivWidth * 0.9)) {
        star3Fill.setAttribute("fill", "url(#star3GradFull)");
        star3Tooltip.innerHTML = "3";
    }
    ratingValueToRemember = star3Tooltip.innerHTML;
}
//      ...     \\

//4 STAR
const mouseOver4Star = () => {
    star4Tooltip.classList.remove("hidden");
    star1Fill.setAttribute("fill", "url(#star1GradFull)");
    star2Fill.setAttribute("fill", "url(#star2GradFull)");
    star3Fill.setAttribute("fill", "url(#star3GradFull)");
};
const mouseOutOf4Star = () => {
    star4Fill.setAttribute("fill", "none");
    star3Fill.setAttribute("fill", "none");
    star2Fill.setAttribute("fill", "none");
    star1Fill.setAttribute("fill", "none");
    star4Tooltip.classList.add("hidden");
};
const choose4Star = () => {
    star4Tooltip.classList.add("hidden");
    runNeededFunctionsAfterUserHasChosenRating();    
};

star4Element.addEventListener("mouseover", mouseOver4Star);
star4Element.addEventListener("mouseout", mouseOutOf4Star);
star4Element.addEventListener("click", choose4Star);
star4Element.addEventListener("mousemove", filling4Star, false);

function filling4Star(event) {
    let bnds = event.target.getBoundingClientRect();
    let x = event.clientX - bnds.left;
    let number = Math.floor(x);

    if (number >= (starsDivWidth * 0.1)) {
        star4Fill.setAttribute("fill", "url(#star4Grad1)");
        star4Tooltip.innerHTML = "3.1";
    }
    if (number >= (starsDivWidth * 0.2)) {
        star4Fill.setAttribute("fill", "url(#star4Grad2)");
        star4Tooltip.innerHTML = "3.2";
    }
    if (number >= (starsDivWidth * 0.3)) {
        star4Fill.setAttribute("fill", "url(#star4Grad3)");
        star4Tooltip.innerHTML = "3.3";
    }
    if (number >= (starsDivWidth * 0.4)) {
        star4Fill.setAttribute("fill", "url(#star4Grad4)");
        star4Tooltip.innerHTML = "3.4";
    }
    if (number >= starsDivWidth / 2) {
        star4Fill.setAttribute("fill", "url(#star4Grad5)");
        star4Tooltip.innerHTML = "3.5";
    }
    if (number >= (starsDivWidth * 0.5) + 1.6) {
        star4Fill.setAttribute("fill", "url(#star4Grad6)");
        star4Tooltip.innerHTML = "3.6";
    }
    if (number >= (starsDivWidth * 0.6)) {
        star4Fill.setAttribute("fill", "url(#star4Grad7)");
        star4Tooltip.innerHTML = "3.7";
    }
    if (number >= (starsDivWidth * 0.7)) {
        star4Fill.setAttribute("fill", "url(#star4Grad8)");
        star4Tooltip.innerHTML = "3.8";
    }
    if (number >= (starsDivWidth * 0.8)) {
        star4Fill.setAttribute("fill", "url(#star4Grad9)");
        star4Tooltip.innerHTML = "3.9";
    }
    if (number >= (starsDivWidth * 0.9)) {
        star4Fill.setAttribute("fill", "url(#star4GradFull)");
        star4Tooltip.innerHTML = "4";
    }
    ratingValueToRemember = star4Tooltip.innerHTML;
}
//      ...     \\

//5 STAR
const mouseOver5Star = () => {
    star5Tooltip.classList.remove("hidden");
    star1Fill.setAttribute("fill", "url(#star1GradFull)");
    star2Fill.setAttribute("fill", "url(#star2GradFull)");
    star3Fill.setAttribute("fill", "url(#star3GradFull)");
    star4Fill.setAttribute("fill", "url(#star4GradFull)");
};
const mouseOutOf5Star = () => {
    star5Fill.setAttribute("fill", "none");
    star4Fill.setAttribute("fill", "none");
    star3Fill.setAttribute("fill", "none");
    star2Fill.setAttribute("fill", "none");
    star1Fill.setAttribute("fill", "none");
    star5Tooltip.classList.add("hidden");
};
const choose5Star = () => {
    star5Tooltip.classList.add("hidden");
    runNeededFunctionsAfterUserHasChosenRating();   
};

star5Element.addEventListener("mouseover", mouseOver5Star);
star5Element.addEventListener("mouseout", mouseOutOf5Star);
star5Element.addEventListener("click", choose5Star);
star5Element.addEventListener("mousemove", filling5Star, false);

function filling5Star(event) {
    let bnds = event.target.getBoundingClientRect();
    let x = event.clientX - bnds.left;
    let number = Math.floor(x);

    if (number >= (starsDivWidth * 0.1)) {
        star5Fill.setAttribute("fill", "url(#star5Grad1)");
        star5Tooltip.innerHTML = "4.1";
    }
    if (number >= (starsDivWidth * 0.2)) {
        star5Fill.setAttribute("fill", "url(#star5Grad2)");
        star5Tooltip.innerHTML = "4.2";
    }
    if (number >= (starsDivWidth * 0.3)) {
        star5Fill.setAttribute("fill", "url(#star5Grad3)");
        star5Tooltip.innerHTML = "4.3";
    }
    if (number >= (starsDivWidth * 0.4)) {
        star5Fill.setAttribute("fill", "url(#star5Grad4)");
        star5Tooltip.innerHTML = "4.4";
    }
    if (number >= starsDivWidth / 2) {
        star5Fill.setAttribute("fill", "url(#star5Grad5)");
        star5Tooltip.innerHTML = "4.5";
    }
    if (number >= (starsDivWidth * 0.5) + 1.6) {
        star5Fill.setAttribute("fill", "url(#star5Grad6)");
        star5Tooltip.innerHTML = "4.6";
    }
    if (number >= (starsDivWidth * 0.6)) {
        star5Fill.setAttribute("fill", "url(#star5Grad7)");
        star5Tooltip.innerHTML = "4.7";
    }
    if (number >= (starsDivWidth * 0.7)) {
        star5Fill.setAttribute("fill", "url(#star5Grad8)");
        star5Tooltip.innerHTML = "4.8";
    }
    if (number >= (starsDivWidth * 0.8)) {
        star5Fill.setAttribute("fill", "url(#star5Grad9)");
        star5Tooltip.innerHTML = "4.9";
    }
    if (number >= (starsDivWidth * 0.9)) {
        star5Fill.setAttribute("fill", "url(#star5GradFull)");
        star5Tooltip.innerHTML = "5";
    }
    ratingValueToRemember = star5Tooltip.innerHTML;
}
//      ...     \\

//6 STAR
const mouseOver6Star = () => {
    star6Tooltip.classList.remove("hidden");
    star1Fill.setAttribute("fill", "url(#star1GradFull)");
    star2Fill.setAttribute("fill", "url(#star2GradFull)");
    star3Fill.setAttribute("fill", "url(#star3GradFull)");
    star4Fill.setAttribute("fill", "url(#star4GradFull)");
    star5Fill.setAttribute("fill", "url(#star5GradFull)");
};
const mouseOutOf6Star = () => {
    star6Fill.setAttribute("fill", "none");
    star5Fill.setAttribute("fill", "none");
    star4Fill.setAttribute("fill", "none");
    star3Fill.setAttribute("fill", "none");
    star2Fill.setAttribute("fill", "none");
    star1Fill.setAttribute("fill", "none");
    star6Tooltip.classList.add("hidden");
};
const choose6Star = () => {
    star6Tooltip.classList.add("hidden");
    runNeededFunctionsAfterUserHasChosenRating();    
};

star6Element.addEventListener("mouseover", mouseOver6Star);
star6Element.addEventListener("mouseout", mouseOutOf6Star);
star6Element.addEventListener("click", choose6Star);
star6Element.addEventListener("mousemove", filling6Star, false);

function filling6Star(event) {
    let bnds = event.target.getBoundingClientRect();
    let x = event.clientX - bnds.left;
    let number = Math.floor(x);

    if (number >= (starsDivWidth * 0.1)) {
        star6Fill.setAttribute("fill", "url(#star6Grad1)");
        star6Tooltip.innerHTML = "5.1";
    }
    if (number >= (starsDivWidth * 0.2)) {
        star6Fill.setAttribute("fill", "url(#star6Grad2)");
        star6Tooltip.innerHTML = "5.2";
    }
    if (number >= (starsDivWidth * 0.3)) {
        star6Fill.setAttribute("fill", "url(#star6Grad3)");
        star6Tooltip.innerHTML = "5.3";
    }
    if (number >= (starsDivWidth * 0.4)) {
        star6Fill.setAttribute("fill", "url(#star6Grad4)");
        star6Tooltip.innerHTML = "5.4";
    }
    if (number >= starsDivWidth / 2) {
        star6Fill.setAttribute("fill", "url(#star6Grad5)");
        star6Tooltip.innerHTML = "5.5";
    }
    if (number >= (starsDivWidth * 0.5) + 1.6) {
        star6Fill.setAttribute("fill", "url(#star6Grad6)");
        star6Tooltip.innerHTML = "5.6";
    }
    if (number >= (starsDivWidth * 0.6)) {
        star6Fill.setAttribute("fill", "url(#star6Grad7)");
        star6Tooltip.innerHTML = "5.7";
    }
    if (number >= (starsDivWidth * 0.7)) {
        star6Fill.setAttribute("fill", "url(#star6Grad8)");
        star6Tooltip.innerHTML = "5.8";
    }
    if (number >= (starsDivWidth * 0.8)) {
        star6Fill.setAttribute("fill", "url(#star6Grad9)");
        star6Tooltip.innerHTML = "5.9";
    }
    if (number >= (starsDivWidth * 0.9)) {
        star6Fill.setAttribute("fill", "url(#star6GradFull)");
        star6Tooltip.innerHTML = "6";
    }
    ratingValueToRemember = star6Tooltip.innerHTML;
}
//      ...     \\

//7 STAR
const mouseOver7Star = () => {
    star7Tooltip.classList.remove("hidden");
    star1Fill.setAttribute("fill", "url(#star1GradFull)");
    star2Fill.setAttribute("fill", "url(#star2GradFull)");
    star3Fill.setAttribute("fill", "url(#star3GradFull)");
    star4Fill.setAttribute("fill", "url(#star4GradFull)");
    star5Fill.setAttribute("fill", "url(#star5GradFull)");
    star6Fill.setAttribute("fill", "url(#star6GradFull)");
};
const mouseOutOf7Star = () => {
    star7Fill.setAttribute("fill", "none");
    star6Fill.setAttribute("fill", "none");
    star5Fill.setAttribute("fill", "none");
    star4Fill.setAttribute("fill", "none");
    star3Fill.setAttribute("fill", "none");
    star2Fill.setAttribute("fill", "none");
    star1Fill.setAttribute("fill", "none");
    star7Tooltip.classList.add("hidden");
};
const choose7Star = () => {
    star7Tooltip.classList.add("hidden");
    runNeededFunctionsAfterUserHasChosenRating();    
};

star7Element.addEventListener("mouseover", mouseOver7Star);
star7Element.addEventListener("mouseout", mouseOutOf7Star);
star7Element.addEventListener("click", choose7Star);
star7Element.addEventListener("mousemove", filling7Star, false);

function filling7Star(event) {
    let bnds = event.target.getBoundingClientRect();
    let x = event.clientX - bnds.left;
    let number = Math.floor(x);

    if (number >= (starsDivWidth * 0.1)) {
        star7Fill.setAttribute("fill", "url(#star7Grad1)");
        star7Tooltip.innerHTML = "6.1";
    }
    if (number >= (starsDivWidth * 0.2)) {
        star7Fill.setAttribute("fill", "url(#star7Grad2)");
        star7Tooltip.innerHTML = "6.2";
    }
    if (number >= (starsDivWidth * 0.3)) {
        star7Fill.setAttribute("fill", "url(#star7Grad3)");
        star7Tooltip.innerHTML = "6.3";
    }
    if (number >= (starsDivWidth * 0.4)) {
        star7Fill.setAttribute("fill", "url(#star7Grad4)");
        star7Tooltip.innerHTML = "6.4";
    }
    if (number >= starsDivWidth / 2) {
        star7Fill.setAttribute("fill", "url(#star7Grad5)");
        star7Tooltip.innerHTML = "6.5";
    }
    if (number >= (starsDivWidth * 0.5) + 1.6) {
        star7Fill.setAttribute("fill", "url(#star7Grad6)");
        star7Tooltip.innerHTML = "6.6";
    }
    if (number >= (starsDivWidth * 0.6)) {
        star7Fill.setAttribute("fill", "url(#star7Grad7)");
        star7Tooltip.innerHTML = "6.7";
    }
    if (number >= (starsDivWidth * 0.7)) {
        star7Fill.setAttribute("fill", "url(#star7Grad8)");
        star7Tooltip.innerHTML = "6.8";
    }
    if (number >= (starsDivWidth * 0.8)) {
        star7Fill.setAttribute("fill", "url(#star7Grad9)");
        star7Tooltip.innerHTML = "6.9";
    }
    if (number >= (starsDivWidth * 0.9)) {
        star7Fill.setAttribute("fill", "url(#star7GradFull)");
        star7Tooltip.innerHTML = "7";
    }
    ratingValueToRemember = star7Tooltip.innerHTML;
}
//      ...     \\

//8 STAR
const mouseOver8Star = () => {
    star8Tooltip.classList.remove("hidden");
    star1Fill.setAttribute("fill", "url(#star1GradFull)");
    star2Fill.setAttribute("fill", "url(#star2GradFull)");
    star3Fill.setAttribute("fill", "url(#star3GradFull)");
    star4Fill.setAttribute("fill", "url(#star4GradFull)");
    star5Fill.setAttribute("fill", "url(#star5GradFull)");
    star6Fill.setAttribute("fill", "url(#star6GradFull)");
    star7Fill.setAttribute("fill", "url(#star7GradFull)");
};
const mouseOutOf8Star = () => {
    star8Fill.setAttribute("fill", "none");
    star7Fill.setAttribute("fill", "none");
    star6Fill.setAttribute("fill", "none");
    star5Fill.setAttribute("fill", "none");
    star4Fill.setAttribute("fill", "none");
    star3Fill.setAttribute("fill", "none");
    star2Fill.setAttribute("fill", "none");
    star1Fill.setAttribute("fill", "none");
    star8Tooltip.classList.add("hidden");
};
const choose8Star = () => {
    star8Tooltip.classList.add("hidden");
    runNeededFunctionsAfterUserHasChosenRating();    
};

star8Element.addEventListener("mouseover", mouseOver8Star);
star8Element.addEventListener("mouseout", mouseOutOf8Star);
star8Element.addEventListener("click", choose8Star);
star8Element.addEventListener("mousemove", filling8Star, false);

function filling8Star(event) {
    let bnds = event.target.getBoundingClientRect();
    let x = event.clientX - bnds.left;
    let number = Math.floor(x);

    if (number >= (starsDivWidth * 0.1)) {
        star8Fill.setAttribute("fill", "url(#star8Grad1)");
        star8Tooltip.innerHTML = "7.1";
    }
    if (number >= (starsDivWidth * 0.2)) {
        star8Fill.setAttribute("fill", "url(#star8Grad2)");
        star8Tooltip.innerHTML = "7.2";
    }
    if (number >= (starsDivWidth * 0.3)) {
        star8Fill.setAttribute("fill", "url(#star8Grad3)");
        star8Tooltip.innerHTML = "7.3";
    }
    if (number >= (starsDivWidth * 0.4)) {
        star8Fill.setAttribute("fill", "url(#star8Grad4)");
        star8Tooltip.innerHTML = "7.4";
    }
    if (number >= starsDivWidth / 2) {
        star8Fill.setAttribute("fill", "url(#star8Grad5)");
        star8Tooltip.innerHTML = "7.5";
    }
    if (number >= (starsDivWidth * 0.5) + 1.6) {
        star8Fill.setAttribute("fill", "url(#star8Grad6)");
        star8Tooltip.innerHTML = "7.6";
    }
    if (number >= (starsDivWidth * 0.6)) {
        star8Fill.setAttribute("fill", "url(#star8Grad7)");
        star8Tooltip.innerHTML = "7.7";
    }
    if (number >= (starsDivWidth * 0.7)) {
        star8Fill.setAttribute("fill", "url(#star8Grad8)");
        star8Tooltip.innerHTML = "7.8";
    }
    if (number >= (starsDivWidth * 0.8)) {
        star8Fill.setAttribute("fill", "url(#star8Grad9)");
        star8Tooltip.innerHTML = "7.9";
    }
    if (number >= (starsDivWidth * 0.9)) {
        star8Fill.setAttribute("fill", "url(#star8GradFull)");
        star8Tooltip.innerHTML = "8";
    }
    ratingValueToRemember = star8Tooltip.innerHTML;
}
//      ...     \\

//9 STAR
const mouseOver9Star = () => {
    star9Tooltip.classList.remove("hidden");
    star1Fill.setAttribute("fill", "url(#star1GradFull)");
    star2Fill.setAttribute("fill", "url(#star2GradFull)");
    star3Fill.setAttribute("fill", "url(#star3GradFull)");
    star4Fill.setAttribute("fill", "url(#star4GradFull)");
    star5Fill.setAttribute("fill", "url(#star5GradFull)");
    star6Fill.setAttribute("fill", "url(#star6GradFull)");
    star7Fill.setAttribute("fill", "url(#star7GradFull)");
    star8Fill.setAttribute("fill", "url(#star8GradFull)");
};
const mouseOutOf9Star = () => {
    star9Fill.setAttribute("fill", "none");
    star8Fill.setAttribute("fill", "none");
    star7Fill.setAttribute("fill", "none");
    star6Fill.setAttribute("fill", "none");
    star5Fill.setAttribute("fill", "none");
    star4Fill.setAttribute("fill", "none");
    star3Fill.setAttribute("fill", "none");
    star2Fill.setAttribute("fill", "none");
    star1Fill.setAttribute("fill", "none");
    star9Tooltip.classList.add("hidden");
};
const choose9Star = () => {
    star9Tooltip.classList.add("hidden");
    runNeededFunctionsAfterUserHasChosenRating();    
};

star9Element.addEventListener("mouseover", mouseOver9Star);
star9Element.addEventListener("mouseout", mouseOutOf9Star);
star9Element.addEventListener("click", choose9Star);
star9Element.addEventListener("mousemove", filling9Star, false);

function filling9Star(event) {
    let bnds = event.target.getBoundingClientRect();
    let x = event.clientX - bnds.left;
    let number = Math.floor(x);

    if (number >= (starsDivWidth * 0.1)) {
        star9Fill.setAttribute("fill", "url(#star9Grad1)");
        star9Tooltip.innerHTML = "8.1";
    }
    if (number >= (starsDivWidth * 0.2)) {
        star9Fill.setAttribute("fill", "url(#star9Grad2)");
        star9Tooltip.innerHTML = "8.2";
    }
    if (number >= (starsDivWidth * 0.3)) {
        star9Fill.setAttribute("fill", "url(#star9Grad3)");
        star9Tooltip.innerHTML = "8.3";
    }
    if (number >= (starsDivWidth * 0.4)) {
        star9Fill.setAttribute("fill", "url(#star9Grad4)");
        star9Tooltip.innerHTML = "8.4";
    }
    if (number >= starsDivWidth / 2) {
        star9Fill.setAttribute("fill", "url(#star9Grad5)");
        star9Tooltip.innerHTML = "8.5";
    }
    if (number >= (starsDivWidth * 0.5) + 1.6) {
        star9Fill.setAttribute("fill", "url(#star9Grad6)");
        star9Tooltip.innerHTML = "8.6";
    }
    if (number >= (starsDivWidth * 0.6)) {
        star9Fill.setAttribute("fill", "url(#star9Grad7)");
        star9Tooltip.innerHTML = "8.7";
    }
    if (number >= (starsDivWidth * 0.7)) {
        star9Fill.setAttribute("fill", "url(#star9Grad8)");
        star9Tooltip.innerHTML = "8.8";
    }
    if (number >= (starsDivWidth * 0.8)) {
        star9Fill.setAttribute("fill", "url(#star9Grad9)");
        star9Tooltip.innerHTML = "8.9";
    }
    if (number >= (starsDivWidth * 0.9)) {
        star9Fill.setAttribute("fill", "url(#star9GradFull)");
        star9Tooltip.innerHTML = "9";
    }
    ratingValueToRemember = star9Tooltip.innerHTML;
}
//      ...     \\

//10 STAR
const mouseOver10Star = () => {
    star10Tooltip.classList.remove("hidden");
    star1Fill.setAttribute("fill", "url(#star1GradFull)");
    star2Fill.setAttribute("fill", "url(#star2GradFull)");
    star3Fill.setAttribute("fill", "url(#star3GradFull)");
    star4Fill.setAttribute("fill", "url(#star4GradFull)");
    star5Fill.setAttribute("fill", "url(#star5GradFull)");
    star6Fill.setAttribute("fill", "url(#star6GradFull)");
    star7Fill.setAttribute("fill", "url(#star7GradFull)");
    star8Fill.setAttribute("fill", "url(#star8GradFull)");
    star9Fill.setAttribute("fill", "url(#star9GradFull)");
};
const mouseOutOf10Star = () => {
    star10Fill.setAttribute("fill", "none");
    star9Fill.setAttribute("fill", "none");
    star8Fill.setAttribute("fill", "none");
    star7Fill.setAttribute("fill", "none");
    star6Fill.setAttribute("fill", "none");
    star5Fill.setAttribute("fill", "none");
    star4Fill.setAttribute("fill", "none");
    star3Fill.setAttribute("fill", "none");
    star2Fill.setAttribute("fill", "none");
    star1Fill.setAttribute("fill", "none");
    star10Tooltip.classList.add("hidden");
};
const choose10Star = () => {
    star10Tooltip.classList.add("hidden");
    runNeededFunctionsAfterUserHasChosenRating();    
};

star10Element.addEventListener("mouseover", mouseOver10Star);
star10Element.addEventListener("mouseout", mouseOutOf10Star);
star10Element.addEventListener("click", choose10Star);
star10Element.addEventListener("mousemove", filling10Star, false);

function filling10Star(event) {
    let bnds = event.target.getBoundingClientRect();
    let x = event.clientX - bnds.left;
    let number = Math.floor(x);

    if (number >= (starsDivWidth * 0.1)) {
        star10Fill.setAttribute("fill", "url(#star10Grad1)");
        star10Tooltip.innerHTML = "9.1";
    }
    if (number >= (starsDivWidth * 0.2)) {
        star10Fill.setAttribute("fill", "url(#star10Grad2)");
        star10Tooltip.innerHTML = "9.2";
    }
    if (number >= (starsDivWidth * 0.3)) {
        star10Fill.setAttribute("fill", "url(#star10Grad3)");
        star10Tooltip.innerHTML = "9.3";
    }
    if (number >= (starsDivWidth * 0.4)) {
        star10Fill.setAttribute("fill", "url(#star10Grad4)");
        star10Tooltip.innerHTML = "9.4";
    }
    if (number >= starsDivWidth / 2) {
        star10Fill.setAttribute("fill", "url(#star10Grad5)");
        star10Tooltip.innerHTML = "9.5";
    }
    if (number >= (starsDivWidth * 0.5) + 1.6) {
        star10Fill.setAttribute("fill", "url(#star10Grad6)");
        star10Tooltip.innerHTML = "9.6";
    }
    if (number >= (starsDivWidth * 0.6)) {
        star10Fill.setAttribute("fill", "url(#star10Grad7)");
        star10Tooltip.innerHTML = "9.7";
    }
    if (number >= (starsDivWidth * 0.7)) {
        star10Fill.setAttribute("fill", "url(#star10Grad8)");
        star10Tooltip.innerHTML = "9.8";
    }
    if (number >= (starsDivWidth * 0.8)) {
        star10Fill.setAttribute("fill", "url(#star10Grad9)");
        star10Tooltip.innerHTML = "9.9";
    }
    if (number >= (starsDivWidth * 0.9)) {
        star10Fill.setAttribute("fill", "url(#star10GradFull)");
        star10Tooltip.innerHTML = "10";
    }
    ratingValueToRemember = star10Tooltip.innerHTML;
}
