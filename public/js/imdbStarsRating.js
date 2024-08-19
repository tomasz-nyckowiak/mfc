const imdbStar1Element = document.querySelector("#imdbStar1Rating");
const imdbStar2Element = document.querySelector("#imdbStar2Rating");
const imdbStar3Element = document.querySelector("#imdbStar3Rating");
const imdbStar4Element = document.querySelector("#imdbStar4Rating");
const imdbStar5Element = document.querySelector("#imdbStar5Rating");
const imdbStar6Element = document.querySelector("#imdbStar6Rating");
const imdbStar7Element = document.querySelector("#imdbStar7Rating");
const imdbStar8Element = document.querySelector("#imdbStar8Rating");
const imdbStar9Element = document.querySelector("#imdbStar9Rating");
const imdbStar10Element = document.querySelector("#imdbStar10Rating");
const imdbStar1Tooltip = document.getElementById("imdbStar1Tooltip");
const imdbStar2Tooltip = document.getElementById("imdbStar2Tooltip");
const imdbStar3Tooltip = document.getElementById("imdbStar3Tooltip");
const imdbStar4Tooltip = document.getElementById("imdbStar4Tooltip");
const imdbStar5Tooltip = document.getElementById("imdbStar5Tooltip");
const imdbStar6Tooltip = document.getElementById("imdbStar6Tooltip");
const imdbStar7Tooltip = document.getElementById("imdbStar7Tooltip");
const imdbStar8Tooltip = document.getElementById("imdbStar8Tooltip");
const imdbStar9Tooltip = document.getElementById("imdbStar9Tooltip");
const imdbStar10Tooltip = document.getElementById("imdbStar10Tooltip");
const chosenImdbRatingTooltip = document.getElementById("chosenImdbRating");
const imdbStar1Fill = imdbStar1Element.querySelector("#imdbStar1Rating > svg > path");
const imdbStar2Fill = imdbStar2Element.querySelector("#imdbStar2Rating > svg > path");
const imdbStar3Fill = imdbStar3Element.querySelector("#imdbStar3Rating > svg > path");
const imdbStar4Fill = imdbStar4Element.querySelector("#imdbStar4Rating > svg > path");
const imdbStar5Fill = imdbStar5Element.querySelector("#imdbStar5Rating > svg > path");
const imdbStar6Fill = imdbStar6Element.querySelector("#imdbStar6Rating > svg > path");
const imdbStar7Fill = imdbStar7Element.querySelector("#imdbStar7Rating > svg > path");
const imdbStar8Fill = imdbStar8Element.querySelector("#imdbStar8Rating > svg > path");
const imdbStar9Fill = imdbStar9Element.querySelector("#imdbStar9Rating > svg > path");
const imdbStar10Fill = imdbStar10Element.querySelector("#imdbStar10Rating > svg > path");

let imdbRatingValueToRemember = "";

function removingEventListenersForImdbStars() {
    imdbStar1Element.removeEventListener("mouseover", mouseOver1ImdbStar);
    imdbStar1Element.removeEventListener("mouseout", mouseOutOf1ImdbStar);
    imdbStar2Element.removeEventListener("mouseover", mouseOver2ImdbStar);
    imdbStar2Element.removeEventListener("mouseout", mouseOutOf2ImdbStar);
    imdbStar2Element.removeEventListener("mousemove", filling2ImdbStar, false);
    imdbStar3Element.removeEventListener("mouseover", mouseOver3ImdbStar);
    imdbStar3Element.removeEventListener("mouseout", mouseOutOf3ImdbStar);
    imdbStar3Element.removeEventListener("mousemove", filling3ImdbStar, false);
    imdbStar4Element.removeEventListener("mouseover", mouseOver4ImdbStar);
    imdbStar4Element.removeEventListener("mouseout", mouseOutOf4ImdbStar);
    imdbStar4Element.removeEventListener("mousemove", filling4ImdbStar, false);
    imdbStar5Element.removeEventListener("mouseover", mouseOver5ImdbStar);
    imdbStar5Element.removeEventListener("mouseout", mouseOutOf5ImdbStar);
    imdbStar5Element.removeEventListener("mousemove", filling5ImdbStar, false);
    imdbStar6Element.removeEventListener("mouseover", mouseOver6ImdbStar);
    imdbStar6Element.removeEventListener("mouseout", mouseOutOf6ImdbStar);
    imdbStar6Element.removeEventListener("mousemove", filling6ImdbStar, false);
    imdbStar7Element.removeEventListener("mouseover", mouseOver7ImdbStar);
    imdbStar7Element.removeEventListener("mouseout", mouseOutOf7ImdbStar);
    imdbStar7Element.removeEventListener("mousemove", filling7ImdbStar, false);
    imdbStar8Element.removeEventListener("mouseover", mouseOver8ImdbStar);
    imdbStar8Element.removeEventListener("mouseout", mouseOutOf8ImdbStar);
    imdbStar8Element.removeEventListener("mousemove", filling8ImdbStar, false);
    imdbStar9Element.removeEventListener("mouseover", mouseOver9ImdbStar);
    imdbStar9Element.removeEventListener("mouseout", mouseOutOf9ImdbStar);
    imdbStar9Element.removeEventListener("mousemove", filling9ImdbStar, false);
    imdbStar10Element.removeEventListener("mouseover", mouseOver10ImdbStar);
    imdbStar10Element.removeEventListener("mouseout", mouseOutOf10ImdbStar);
    imdbStar10Element.removeEventListener("mousemove", filling10ImdbStar, false);
}

function addingEventListenersForImdbStars() {
    imdbRatingValueToRemember = "";
    imdbStar1Element.addEventListener("mouseover", mouseOver1ImdbStar);
    imdbStar1Element.addEventListener("mouseout", mouseOutOf1ImdbStar);
    imdbStar2Element.addEventListener("mouseover", mouseOver2ImdbStar);
    imdbStar2Element.addEventListener("mouseout", mouseOutOf2ImdbStar);
    imdbStar2Element.addEventListener("mousemove", filling2ImdbStar, false);    
    imdbStar3Element.addEventListener("mouseover", mouseOver3ImdbStar);
    imdbStar3Element.addEventListener("mouseout", mouseOutOf3ImdbStar);
    imdbStar3Element.addEventListener("mousemove", filling3ImdbStar, false);
    imdbStar4Element.addEventListener("mouseover", mouseOver4ImdbStar);
    imdbStar4Element.addEventListener("mouseout", mouseOutOf4ImdbStar);
    imdbStar4Element.addEventListener("mousemove", filling4ImdbStar, false);
    imdbStar5Element.addEventListener("mouseover", mouseOver5ImdbStar);
    imdbStar5Element.addEventListener("mouseout", mouseOutOf5ImdbStar);
    imdbStar5Element.addEventListener("mousemove", filling5ImdbStar, false);
    imdbStar6Element.addEventListener("mouseover", mouseOver6ImdbStar);
    imdbStar6Element.addEventListener("mouseout", mouseOutOf6ImdbStar);
    imdbStar6Element.addEventListener("mousemove", filling6ImdbStar, false);
    imdbStar7Element.addEventListener("mouseover", mouseOver7ImdbStar);
    imdbStar7Element.addEventListener("mouseout", mouseOutOf7ImdbStar);
    imdbStar7Element.addEventListener("mousemove", filling7ImdbStar, false);
    imdbStar8Element.addEventListener("mouseover", mouseOver8ImdbStar);
    imdbStar8Element.addEventListener("mouseout", mouseOutOf8ImdbStar);
    imdbStar8Element.addEventListener("mousemove", filling8ImdbStar, false);
    imdbStar9Element.addEventListener("mouseover", mouseOver9ImdbStar);
    imdbStar9Element.addEventListener("mouseout", mouseOutOf9ImdbStar);
    imdbStar9Element.addEventListener("mousemove", filling9ImdbStar, false);
    imdbStar10Element.addEventListener("mouseover", mouseOver10ImdbStar);
    imdbStar10Element.addEventListener("mouseout", mouseOutOf10ImdbStar);
    imdbStar10Element.addEventListener("mousemove", filling10ImdbStar, false);
}

function settingImdbStarsEmpty() {
    imdbStar1Fill.setAttribute("fill", "none");
    imdbStar2Fill.setAttribute("fill", "none");
    imdbStar3Fill.setAttribute("fill", "none");
    imdbStar4Fill.setAttribute("fill", "none");
    imdbStar5Fill.setAttribute("fill", "none");
    imdbStar6Fill.setAttribute("fill", "none");
    imdbStar7Fill.setAttribute("fill", "none");
    imdbStar8Fill.setAttribute("fill", "none");
    imdbStar9Fill.setAttribute("fill", "none");
    imdbStar10Fill.setAttribute("fill", "none");
}

function runDoubleClickEventListenersForImdbStars() {
    imdbStar1Element.addEventListener("dblclick", resetImdbStarRating);
    imdbStar2Element.addEventListener("dblclick", resetImdbStarRating);
    imdbStar3Element.addEventListener("dblclick", resetImdbStarRating);
    imdbStar4Element.addEventListener("dblclick", resetImdbStarRating);
    imdbStar5Element.addEventListener("dblclick", resetImdbStarRating);
    imdbStar6Element.addEventListener("dblclick", resetImdbStarRating);
    imdbStar7Element.addEventListener("dblclick", resetImdbStarRating);
    imdbStar8Element.addEventListener("dblclick", resetImdbStarRating);
    imdbStar9Element.addEventListener("dblclick", resetImdbStarRating);
    imdbStar10Element.addEventListener("dblclick", resetImdbStarRating);
}

const resetImdbStarRating = () => {
    chosenImdbRatingTooltip.classList.add("hidden");
    settingImdbStarsEmpty();
    addingEventListenersForImdbStars();
    removeEventListenersForChosenImdbRating();
    resetValueForHiddenImdbInput(); 
};

function runNeededFunctionsAfterUserHasChosenImdbRating() {
    removingEventListenersForImdbStars();
    runDoubleClickEventListenersForImdbStars();
    runEventListenersForChosenImdbRating();
    setValueForHiddenImdbInput();
}

//CHOSEN IMDB RATING
const mouseOverChosenImdbRating = () => {
    chosenImdbRatingTooltip.classList.remove("hidden");
    chosenImdbRatingTooltip.innerHTML = firstPartForChosenRatingTooltipMessage + imdbRatingValueToRemember + lastPartForChosenRatingTooltipMessage;
};
const mouseOutOfChosenImdbRating = () => {
    chosenImdbRatingTooltip.classList.add("hidden");
    chosenImdbRatingTooltip.innerHTML = "";
};

function runEventListenersForChosenImdbRating() {
    imdbStar1Element.addEventListener("mouseover", mouseOverChosenImdbRating);
    imdbStar1Element.addEventListener("mouseout", mouseOutOfChosenImdbRating);
    imdbStar2Element.addEventListener("mouseover", mouseOverChosenImdbRating);
    imdbStar2Element.addEventListener("mouseout", mouseOutOfChosenImdbRating);
    imdbStar3Element.addEventListener("mouseover", mouseOverChosenImdbRating);
    imdbStar3Element.addEventListener("mouseout", mouseOutOfChosenImdbRating);
    imdbStar4Element.addEventListener("mouseover", mouseOverChosenImdbRating);
    imdbStar4Element.addEventListener("mouseout", mouseOutOfChosenImdbRating);
    imdbStar5Element.addEventListener("mouseover", mouseOverChosenImdbRating);
    imdbStar5Element.addEventListener("mouseout", mouseOutOfChosenImdbRating);
    imdbStar6Element.addEventListener("mouseover", mouseOverChosenImdbRating);
    imdbStar6Element.addEventListener("mouseout", mouseOutOfChosenImdbRating);
    imdbStar7Element.addEventListener("mouseover", mouseOverChosenImdbRating);
    imdbStar7Element.addEventListener("mouseout", mouseOutOfChosenImdbRating);
    imdbStar8Element.addEventListener("mouseover", mouseOverChosenImdbRating);
    imdbStar8Element.addEventListener("mouseout", mouseOutOfChosenImdbRating);
    imdbStar9Element.addEventListener("mouseover", mouseOverChosenImdbRating);
    imdbStar9Element.addEventListener("mouseout", mouseOutOfChosenImdbRating);
    imdbStar10Element.addEventListener("mouseover", mouseOverChosenImdbRating);
    imdbStar10Element.addEventListener("mouseout", mouseOutOfChosenImdbRating);
}

function removeEventListenersForChosenImdbRating() {
    imdbStar1Element.removeEventListener("mouseover", mouseOverChosenImdbRating);
    imdbStar1Element.removeEventListener("mouseout", mouseOutOfChosenImdbRating);
    imdbStar2Element.removeEventListener("mouseover", mouseOverChosenImdbRating);
    imdbStar2Element.removeEventListener("mouseout", mouseOutOfChosenImdbRating);
    imdbStar3Element.removeEventListener("mouseover", mouseOverChosenImdbRating);
    imdbStar3Element.removeEventListener("mouseout", mouseOutOfChosenImdbRating);
    imdbStar4Element.removeEventListener("mouseover", mouseOverChosenImdbRating);
    imdbStar4Element.removeEventListener("mouseout", mouseOutOfChosenImdbRating);
    imdbStar5Element.removeEventListener("mouseover", mouseOverChosenImdbRating);
    imdbStar5Element.removeEventListener("mouseout", mouseOutOfChosenImdbRating);
    imdbStar6Element.removeEventListener("mouseover", mouseOverChosenImdbRating);
    imdbStar6Element.removeEventListener("mouseout", mouseOutOfChosenImdbRating);
    imdbStar7Element.removeEventListener("mouseover", mouseOverChosenImdbRating);
    imdbStar7Element.removeEventListener("mouseout", mouseOutOfChosenImdbRating);
    imdbStar8Element.removeEventListener("mouseover", mouseOverChosenImdbRating);
    imdbStar8Element.removeEventListener("mouseout", mouseOutOfChosenImdbRating);
    imdbStar9Element.removeEventListener("mouseover", mouseOverChosenImdbRating);
    imdbStar9Element.removeEventListener("mouseout", mouseOutOfChosenImdbRating);
    imdbStar10Element.removeEventListener("mouseover", mouseOverChosenImdbRating);
    imdbStar10Element.removeEventListener("mouseout", mouseOutOfChosenImdbRating);
}

function setValueForHiddenImdbInput() {
    document.getElementById("imdbRating").setAttribute("value", imdbRatingValueToRemember);
}

function resetValueForHiddenImdbInput() {
    document.getElementById("imdbRating").setAttribute("value", "");
}
//      ...     \\

//1 STAR
const mouseOver1ImdbStar = () => {
    imdbStar1Fill.setAttribute("fill", "url(#imdbStar1GradFull)");
    imdbStar1Tooltip.classList.remove("hidden");
    imdbStar1Tooltip.innerHTML = "1";
    imdbRatingValueToRemember = imdbStar1Tooltip.innerHTML;
};
const mouseOutOf1ImdbStar = () => {
    imdbStar1Fill.setAttribute("fill", "none");
    imdbStar1Tooltip.classList.add("hidden");
};
const choose1ImdbStar = () => {
    imdbStar1Tooltip.classList.add("hidden");
    runNeededFunctionsAfterUserHasChosenImdbRating();  
};

imdbStar1Element.addEventListener("mouseover", mouseOver1ImdbStar);
imdbStar1Element.addEventListener("mouseout", mouseOutOf1ImdbStar);
imdbStar1Element.addEventListener("click", choose1ImdbStar);
//      ...     \\

//2 STAR
const mouseOver2ImdbStar = () => {
    imdbStar2Tooltip.classList.remove("hidden");
    imdbStar1Fill.setAttribute("fill", "url(#imdbStar1GradFull)");
};
const mouseOutOf2ImdbStar = () => {
    imdbStar2Fill.setAttribute("fill", "none");
    imdbStar1Fill.setAttribute("fill", "none");
    imdbStar2Tooltip.classList.add("hidden");
};
const choose2ImdbStar = () => {
    imdbStar2Tooltip.classList.add("hidden");
    runNeededFunctionsAfterUserHasChosenImdbRating();
};

imdbStar2Element.addEventListener("mouseover", mouseOver2ImdbStar);
imdbStar2Element.addEventListener("mouseout", mouseOutOf2ImdbStar);
imdbStar2Element.addEventListener("click", choose2ImdbStar);
imdbStar2Element.addEventListener("mousemove", filling2ImdbStar, false);

function filling2ImdbStar(event) {
    let bnds = event.target.getBoundingClientRect();
    let x = event.clientX - bnds.left;
    let number = Math.floor(x);

    if (number >= (starsDivWidth * 0.1)) {
        imdbStar2Fill.setAttribute("fill", "url(#imdbStar2Grad1)");
        imdbStar2Tooltip.innerHTML = "1.1";
    }
    if (number >= (starsDivWidth * 0.2)) {
        imdbStar2Fill.setAttribute("fill", "url(#imdbStar2Grad2)");
        imdbStar2Tooltip.innerHTML = "1.2";
    }
    if (number >= (starsDivWidth * 0.3)) {
        imdbStar2Fill.setAttribute("fill", "url(#imdbStar2Grad3)");
        imdbStar2Tooltip.innerHTML = "1.3";
    }
    if (number >= (starsDivWidth * 0.4)) {
        imdbStar2Fill.setAttribute("fill", "url(#imdbStar2Grad4)");
        imdbStar2Tooltip.innerHTML = "1.4";
    }
    if (number >= starsDivWidth / 2) {
        imdbStar2Fill.setAttribute("fill", "url(#imdbStar2Grad5)");
        imdbStar2Tooltip.innerHTML = "1.5";
    }
    if (number >= (starsDivWidth * 0.5) + 1.6) {
        imdbStar2Fill.setAttribute("fill", "url(#imdbStar2Grad6)");
        imdbStar2Tooltip.innerHTML = "1.6";
    }
    if (number >= (starsDivWidth * 0.6)) {
        imdbStar2Fill.setAttribute("fill", "url(#imdbStar2Grad7)");
        imdbStar2Tooltip.innerHTML = "1.7";
    }
    if (number >= (starsDivWidth * 0.7)) {
        imdbStar2Fill.setAttribute("fill", "url(#imdbStar2Grad8)");
        imdbStar2Tooltip.innerHTML = "1.8";
    }
    if (number >= (starsDivWidth * 0.8)) {
        imdbStar2Fill.setAttribute("fill", "url(#imdbStar2Grad9)");
        imdbStar2Tooltip.innerHTML = "1.9";
    }
    if (number >= (starsDivWidth * 0.9)) {
        imdbStar2Fill.setAttribute("fill", "url(#imdbStar2GradFull)");
        imdbStar2Tooltip.innerHTML = "2";
    }
    imdbRatingValueToRemember = imdbStar2Tooltip.innerHTML;
}
//      ...     \\

//STAR 3
const mouseOver3ImdbStar = () => {
    imdbStar3Tooltip.classList.remove("hidden");
    imdbStar1Fill.setAttribute("fill", "url(#imdbStar1GradFull)");
    imdbStar2Fill.setAttribute("fill", "url(#imdbStar2GradFull)");
};
const mouseOutOf3ImdbStar = () => {
    imdbStar3Fill.setAttribute("fill", "none");
    imdbStar2Fill.setAttribute("fill", "none");
    imdbStar1Fill.setAttribute("fill", "none");
    imdbStar3Tooltip.classList.add("hidden");
};
const choose3ImdbStar = () => {
    imdbStar3Tooltip.classList.add("hidden");
    runNeededFunctionsAfterUserHasChosenImdbRating();
};

imdbStar3Element.addEventListener("mouseover", mouseOver3ImdbStar);
imdbStar3Element.addEventListener("mouseout", mouseOutOf3ImdbStar);
imdbStar3Element.addEventListener("click", choose3ImdbStar);
imdbStar3Element.addEventListener("mousemove", filling3ImdbStar, false);

function filling3ImdbStar(event) {
    let bnds = event.target.getBoundingClientRect();
    let x = event.clientX - bnds.left;
    let number = Math.floor(x);

    if (number >= (starsDivWidth * 0.1)) {
        imdbStar3Fill.setAttribute("fill", "url(#imdbStar3Grad1)");
        imdbStar3Tooltip.innerHTML = "2.1";
    }
    if (number >= (starsDivWidth * 0.2)) {
        imdbStar3Fill.setAttribute("fill", "url(#imdbStar3Grad2)");
        imdbStar3Tooltip.innerHTML = "2.2";
    }
    if (number >= (starsDivWidth * 0.3)) {
        imdbStar3Fill.setAttribute("fill", "url(#imdbStar3Grad3)");
        imdbStar3Tooltip.innerHTML = "2.3";
    }
    if (number >= (starsDivWidth * 0.4)) {
        imdbStar3Fill.setAttribute("fill", "url(#imdbStar3Grad4)");
        imdbStar3Tooltip.innerHTML = "2.4";
    }
    if (number >= starsDivWidth / 2) {
        imdbStar3Fill.setAttribute("fill", "url(#imdbStar3Grad5)");
        imdbStar3Tooltip.innerHTML = "2.5";
    }
    if (number >= (starsDivWidth * 0.5) + 1.6) {
        imdbStar3Fill.setAttribute("fill", "url(#imdbStar3Grad6)");
        imdbStar3Tooltip.innerHTML = "2.6";
    }
    if (number >= (starsDivWidth * 0.6)) {
        imdbStar3Fill.setAttribute("fill", "url(#imdbStar3Grad7)");
        imdbStar3Tooltip.innerHTML = "2.7";
    }
    if (number >= (starsDivWidth * 0.7)) {
        imdbStar3Fill.setAttribute("fill", "url(#imdbStar3Grad8)");
        imdbStar3Tooltip.innerHTML = "2.8";
    }
    if (number >= (starsDivWidth * 0.8)) {
        imdbStar3Fill.setAttribute("fill", "url(#imdbStar3Grad9)");
        imdbStar3Tooltip.innerHTML = "2.9";
    }
    if (number >= (starsDivWidth * 0.9)) {
        imdbStar3Fill.setAttribute("fill", "url(#imdbStar3GradFull)");
        imdbStar3Tooltip.innerHTML = "3";
    }
    imdbRatingValueToRemember = imdbStar3Tooltip.innerHTML;
}
//      ...     \\

//4 STAR
const mouseOver4ImdbStar = () => {
    imdbStar4Tooltip.classList.remove("hidden");
    imdbStar1Fill.setAttribute("fill", "url(#imdbStar1GradFull)");
    imdbStar2Fill.setAttribute("fill", "url(#imdbStar2GradFull)");
    imdbStar3Fill.setAttribute("fill", "url(#imdbStar3GradFull)");
};
const mouseOutOf4ImdbStar = () => {
    imdbStar4Fill.setAttribute("fill", "none");
    imdbStar3Fill.setAttribute("fill", "none");
    imdbStar2Fill.setAttribute("fill", "none");
    imdbStar1Fill.setAttribute("fill", "none");
    imdbStar4Tooltip.classList.add("hidden");
};
const choose4ImdbStar = () => {
    imdbStar4Tooltip.classList.add("hidden");
    runNeededFunctionsAfterUserHasChosenImdbRating();    
};

imdbStar4Element.addEventListener("mouseover", mouseOver4ImdbStar);
imdbStar4Element.addEventListener("mouseout", mouseOutOf4ImdbStar);
imdbStar4Element.addEventListener("click", choose4ImdbStar);
imdbStar4Element.addEventListener("mousemove", filling4ImdbStar, false);

function filling4ImdbStar(event) {
    let bnds = event.target.getBoundingClientRect();
    let x = event.clientX - bnds.left;
    let number = Math.floor(x);

    if (number >= (starsDivWidth * 0.1)) {
        imdbStar4Fill.setAttribute("fill", "url(#imdbStar4Grad1)");
        imdbStar4Tooltip.innerHTML = "3.1";
    }
    if (number >= (starsDivWidth * 0.2)) {
        imdbStar4Fill.setAttribute("fill", "url(#imdbStar4Grad2)");
        imdbStar4Tooltip.innerHTML = "3.2";
    }
    if (number >= (starsDivWidth * 0.3)) {
        imdbStar4Fill.setAttribute("fill", "url(#imdbStar4Grad3)");
        imdbStar4Tooltip.innerHTML = "3.3";
    }
    if (number >= (starsDivWidth * 0.4)) {
        imdbStar4Fill.setAttribute("fill", "url(#imdbStar4Grad4)");
        imdbStar4Tooltip.innerHTML = "3.4";
    }
    if (number >= starsDivWidth / 2) {
        imdbStar4Fill.setAttribute("fill", "url(#imdbStar4Grad5)");
        imdbStar4Tooltip.innerHTML = "3.5";
    }
    if (number >= (starsDivWidth * 0.5) + 1.6) {
        imdbStar4Fill.setAttribute("fill", "url(#imdbStar4Grad6)");
        imdbStar4Tooltip.innerHTML = "3.6";
    }
    if (number >= (starsDivWidth * 0.6)) {
        imdbStar4Fill.setAttribute("fill", "url(#imdbStar4Grad7)");
        imdbStar4Tooltip.innerHTML = "3.7";
    }
    if (number >= (starsDivWidth * 0.7)) {
        imdbStar4Fill.setAttribute("fill", "url(#imdbStar4Grad8)");
        imdbStar4Tooltip.innerHTML = "3.8";
    }
    if (number >= (starsDivWidth * 0.8)) {
        imdbStar4Fill.setAttribute("fill", "url(#imdbStar4Grad9)");
        imdbStar4Tooltip.innerHTML = "3.9";
    }
    if (number >= (starsDivWidth * 0.9)) {
        imdbStar4Fill.setAttribute("fill", "url(#imdbStar4GradFull)");
        imdbStar4Tooltip.innerHTML = "4";
    }
    imdbRatingValueToRemember = imdbStar4Tooltip.innerHTML;
}
//      ...     \\

//5 STAR
const mouseOver5ImdbStar = () => {
    imdbStar5Tooltip.classList.remove("hidden");
    imdbStar1Fill.setAttribute("fill", "url(#imdbStar1GradFull)");
    imdbStar2Fill.setAttribute("fill", "url(#imdbStar2GradFull)");
    imdbStar3Fill.setAttribute("fill", "url(#imdbStar3GradFull)");
    imdbStar4Fill.setAttribute("fill", "url(#imdbStar4GradFull)");
};
const mouseOutOf5ImdbStar = () => {
    imdbStar5Fill.setAttribute("fill", "none");
    imdbStar4Fill.setAttribute("fill", "none");
    imdbStar3Fill.setAttribute("fill", "none");
    imdbStar2Fill.setAttribute("fill", "none");
    imdbStar1Fill.setAttribute("fill", "none");
    imdbStar5Tooltip.classList.add("hidden");
};
const choose5ImdbStar = () => {
    imdbStar5Tooltip.classList.add("hidden");
    runNeededFunctionsAfterUserHasChosenImdbRating();   
};

imdbStar5Element.addEventListener("mouseover", mouseOver5ImdbStar);
imdbStar5Element.addEventListener("mouseout", mouseOutOf5ImdbStar);
imdbStar5Element.addEventListener("click", choose5ImdbStar);
imdbStar5Element.addEventListener("mousemove", filling5ImdbStar, false);

function filling5ImdbStar(event) {
    let bnds = event.target.getBoundingClientRect();
    let x = event.clientX - bnds.left;
    let number = Math.floor(x);

    if (number >= (starsDivWidth * 0.1)) {
        imdbStar5Fill.setAttribute("fill", "url(#imdbStar5Grad1)");
        imdbStar5Tooltip.innerHTML = "4.1";
    }
    if (number >= (starsDivWidth * 0.2)) {
        imdbStar5Fill.setAttribute("fill", "url(#imdbStar5Grad2)");
        imdbStar5Tooltip.innerHTML = "4.2";
    }
    if (number >= (starsDivWidth * 0.3)) {
        imdbStar5Fill.setAttribute("fill", "url(#imdbStar5Grad3)");
        imdbStar5Tooltip.innerHTML = "4.3";
    }
    if (number >= (starsDivWidth * 0.4)) {
        imdbStar5Fill.setAttribute("fill", "url(#imdbStar5Grad4)");
        imdbStar5Tooltip.innerHTML = "4.4";
    }
    if (number >= starsDivWidth / 2) {
        imdbStar5Fill.setAttribute("fill", "url(#imdbStar5Grad5)");
        imdbStar5Tooltip.innerHTML = "4.5";
    }
    if (number >= (starsDivWidth * 0.5) + 1.6) {
        imdbStar5Fill.setAttribute("fill", "url(#imdbStar5Grad6)");
        imdbStar5Tooltip.innerHTML = "4.6";
    }
    if (number >= (starsDivWidth * 0.6)) {
        imdbStar5Fill.setAttribute("fill", "url(#imdbStar5Grad7)");
        imdbStar5Tooltip.innerHTML = "4.7";
    }
    if (number >= (starsDivWidth * 0.7)) {
        imdbStar5Fill.setAttribute("fill", "url(#imdbStar5Grad8)");
        imdbStar5Tooltip.innerHTML = "4.8";
    }
    if (number >= (starsDivWidth * 0.8)) {
        imdbStar5Fill.setAttribute("fill", "url(#imdbStar5Grad9)");
        imdbStar5Tooltip.innerHTML = "4.9";
    }
    if (number >= (starsDivWidth * 0.9)) {
        imdbStar5Fill.setAttribute("fill", "url(#imdbStar5GradFull)");
        imdbStar5Tooltip.innerHTML = "5";
    }
    imdbRatingValueToRemember = imdbStar5Tooltip.innerHTML;
}
//      ...     \\

//6 STAR
const mouseOver6ImdbStar = () => {
    imdbStar6Tooltip.classList.remove("hidden");
    imdbStar1Fill.setAttribute("fill", "url(#imdbStar1GradFull)");
    imdbStar2Fill.setAttribute("fill", "url(#imdbStar2GradFull)");
    imdbStar3Fill.setAttribute("fill", "url(#imdbStar3GradFull)");
    imdbStar4Fill.setAttribute("fill", "url(#imdbStar4GradFull)");
    imdbStar5Fill.setAttribute("fill", "url(#imdbStar5GradFull)");
};
const mouseOutOf6ImdbStar = () => {
    imdbStar6Fill.setAttribute("fill", "none");
    imdbStar5Fill.setAttribute("fill", "none");
    imdbStar4Fill.setAttribute("fill", "none");
    imdbStar3Fill.setAttribute("fill", "none");
    imdbStar2Fill.setAttribute("fill", "none");
    imdbStar1Fill.setAttribute("fill", "none");
    imdbStar6Tooltip.classList.add("hidden");
};
const choose6ImdbStar = () => {
    imdbStar6Tooltip.classList.add("hidden");
    runNeededFunctionsAfterUserHasChosenImdbRating();    
};

imdbStar6Element.addEventListener("mouseover", mouseOver6ImdbStar);
imdbStar6Element.addEventListener("mouseout", mouseOutOf6ImdbStar);
imdbStar6Element.addEventListener("click", choose6ImdbStar);
imdbStar6Element.addEventListener("mousemove", filling6ImdbStar, false);

function filling6ImdbStar(event) {
    let bnds = event.target.getBoundingClientRect();
    let x = event.clientX - bnds.left;
    let number = Math.floor(x);

    if (number >= (starsDivWidth * 0.1)) {
        imdbStar6Fill.setAttribute("fill", "url(#imdbStar6Grad1)");
        imdbStar6Tooltip.innerHTML = "5.1";
    }
    if (number >= (starsDivWidth * 0.2)) {
        imdbStar6Fill.setAttribute("fill", "url(#imdbStar6Grad2)");
        imdbStar6Tooltip.innerHTML = "5.2";
    }
    if (number >= (starsDivWidth * 0.3)) {
        imdbStar6Fill.setAttribute("fill", "url(#imdbStar6Grad3)");
        imdbStar6Tooltip.innerHTML = "5.3";
    }
    if (number >= (starsDivWidth * 0.4)) {
        imdbStar6Fill.setAttribute("fill", "url(#imdbStar6Grad4)");
        imdbStar6Tooltip.innerHTML = "5.4";
    }
    if (number >= starsDivWidth / 2) {
        imdbStar6Fill.setAttribute("fill", "url(#imdbStar6Grad5)");
        imdbStar6Tooltip.innerHTML = "5.5";
    }
    if (number >= (starsDivWidth * 0.5) + 1.6) {
        imdbStar6Fill.setAttribute("fill", "url(#imdbStar6Grad6)");
        imdbStar6Tooltip.innerHTML = "5.6";
    }
    if (number >= (starsDivWidth * 0.6)) {
        imdbStar6Fill.setAttribute("fill", "url(#imdbStar6Grad7)");
        imdbStar6Tooltip.innerHTML = "5.7";
    }
    if (number >= (starsDivWidth * 0.7)) {
        imdbStar6Fill.setAttribute("fill", "url(#imdbStar6Grad8)");
        imdbStar6Tooltip.innerHTML = "5.8";
    }
    if (number >= (starsDivWidth * 0.8)) {
        imdbStar6Fill.setAttribute("fill", "url(#imdbStar6Grad9)");
        imdbStar6Tooltip.innerHTML = "5.9";
    }
    if (number >= (starsDivWidth * 0.9)) {
        imdbStar6Fill.setAttribute("fill", "url(#imdbStar6GradFull)");
        imdbStar6Tooltip.innerHTML = "6";
    }
    imdbRatingValueToRemember = imdbStar6Tooltip.innerHTML;
}
//      ...     \\

//7 STAR
const mouseOver7ImdbStar = () => {
    imdbStar7Tooltip.classList.remove("hidden");
    imdbStar1Fill.setAttribute("fill", "url(#imdbStar1GradFull)");
    imdbStar2Fill.setAttribute("fill", "url(#imdbStar2GradFull)");
    imdbStar3Fill.setAttribute("fill", "url(#imdbStar3GradFull)");
    imdbStar4Fill.setAttribute("fill", "url(#imdbStar4GradFull)");
    imdbStar5Fill.setAttribute("fill", "url(#imdbStar5GradFull)");
    imdbStar6Fill.setAttribute("fill", "url(#imdbStar6GradFull)");
};
const mouseOutOf7ImdbStar = () => {
    imdbStar7Fill.setAttribute("fill", "none");
    imdbStar6Fill.setAttribute("fill", "none");
    imdbStar5Fill.setAttribute("fill", "none");
    imdbStar4Fill.setAttribute("fill", "none");
    imdbStar3Fill.setAttribute("fill", "none");
    imdbStar2Fill.setAttribute("fill", "none");
    imdbStar1Fill.setAttribute("fill", "none");
    imdbStar7Tooltip.classList.add("hidden");
};
const choose7ImdbStar = () => {
    imdbStar7Tooltip.classList.add("hidden");
    runNeededFunctionsAfterUserHasChosenImdbRating();    
};

imdbStar7Element.addEventListener("mouseover", mouseOver7ImdbStar);
imdbStar7Element.addEventListener("mouseout", mouseOutOf7ImdbStar);
imdbStar7Element.addEventListener("click", choose7ImdbStar);
imdbStar7Element.addEventListener("mousemove", filling7ImdbStar, false);

function filling7ImdbStar(event) {
    let bnds = event.target.getBoundingClientRect();
    let x = event.clientX - bnds.left;
    let number = Math.floor(x);

    if (number >= (starsDivWidth * 0.1)) {
        imdbStar7Fill.setAttribute("fill", "url(#imdbStar7Grad1)");
        imdbStar7Tooltip.innerHTML = "6.1";
    }
    if (number >= (starsDivWidth * 0.2)) {
        imdbStar7Fill.setAttribute("fill", "url(#imdbStar7Grad2)");
        imdbStar7Tooltip.innerHTML = "6.2";
    }
    if (number >= (starsDivWidth * 0.3)) {
        imdbStar7Fill.setAttribute("fill", "url(#imdbStar7Grad3)");
        imdbStar7Tooltip.innerHTML = "6.3";
    }
    if (number >= (starsDivWidth * 0.4)) {
        imdbStar7Fill.setAttribute("fill", "url(#imdbStar7Grad4)");
        imdbStar7Tooltip.innerHTML = "6.4";
    }
    if (number >= starsDivWidth / 2) {
        imdbStar7Fill.setAttribute("fill", "url(#imdbStar7Grad5)");
        imdbStar7Tooltip.innerHTML = "6.5";
    }
    if (number >= (starsDivWidth * 0.5) + 1.6) {
        imdbStar7Fill.setAttribute("fill", "url(#imdbStar7Grad6)");
        imdbStar7Tooltip.innerHTML = "6.6";
    }
    if (number >= (starsDivWidth * 0.6)) {
        imdbStar7Fill.setAttribute("fill", "url(#imdbStar7Grad7)");
        imdbStar7Tooltip.innerHTML = "6.7";
    }
    if (number >= (starsDivWidth * 0.7)) {
        imdbStar7Fill.setAttribute("fill", "url(#imdbStar7Grad8)");
        imdbStar7Tooltip.innerHTML = "6.8";
    }
    if (number >= (starsDivWidth * 0.8)) {
        imdbStar7Fill.setAttribute("fill", "url(#imdbStar7Grad9)");
        imdbStar7Tooltip.innerHTML = "6.9";
    }
    if (number >= (starsDivWidth * 0.9)) {
        imdbStar7Fill.setAttribute("fill", "url(#imdbStar7GradFull)");
        imdbStar7Tooltip.innerHTML = "7";
    }
    imdbRatingValueToRemember = imdbStar7Tooltip.innerHTML;
}
//      ...     \\

//8 STAR
const mouseOver8ImdbStar = () => {
    imdbStar8Tooltip.classList.remove("hidden");
    imdbStar1Fill.setAttribute("fill", "url(#imdbStar1GradFull)");
    imdbStar2Fill.setAttribute("fill", "url(#imdbStar2GradFull)");
    imdbStar3Fill.setAttribute("fill", "url(#imdbStar3GradFull)");
    imdbStar4Fill.setAttribute("fill", "url(#imdbStar4GradFull)");
    imdbStar5Fill.setAttribute("fill", "url(#imdbStar5GradFull)");
    imdbStar6Fill.setAttribute("fill", "url(#imdbStar6GradFull)");
    imdbStar7Fill.setAttribute("fill", "url(#imdbStar7GradFull)");
};
const mouseOutOf8ImdbStar = () => {
    imdbStar8Fill.setAttribute("fill", "none");
    imdbStar7Fill.setAttribute("fill", "none");
    imdbStar6Fill.setAttribute("fill", "none");
    imdbStar5Fill.setAttribute("fill", "none");
    imdbStar4Fill.setAttribute("fill", "none");
    imdbStar3Fill.setAttribute("fill", "none");
    imdbStar2Fill.setAttribute("fill", "none");
    imdbStar1Fill.setAttribute("fill", "none");
    imdbStar8Tooltip.classList.add("hidden");
};
const choose8ImdbStar = () => {
    imdbStar8Tooltip.classList.add("hidden");
    runNeededFunctionsAfterUserHasChosenImdbRating();    
};

imdbStar8Element.addEventListener("mouseover", mouseOver8ImdbStar);
imdbStar8Element.addEventListener("mouseout", mouseOutOf8ImdbStar);
imdbStar8Element.addEventListener("click", choose8ImdbStar);
imdbStar8Element.addEventListener("mousemove", filling8ImdbStar, false);

function filling8ImdbStar(event) {
    let bnds = event.target.getBoundingClientRect();
    let x = event.clientX - bnds.left;
    let number = Math.floor(x);

    if (number >= (starsDivWidth * 0.1)) {
        imdbStar8Fill.setAttribute("fill", "url(#imdbStar8Grad1)");
        imdbStar8Tooltip.innerHTML = "7.1";
    }
    if (number >= (starsDivWidth * 0.2)) {
        imdbStar8Fill.setAttribute("fill", "url(#imdbStar8Grad2)");
        imdbStar8Tooltip.innerHTML = "7.2";
    }
    if (number >= (starsDivWidth * 0.3)) {
        imdbStar8Fill.setAttribute("fill", "url(#imdbStar8Grad3)");
        imdbStar8Tooltip.innerHTML = "7.3";
    }
    if (number >= (starsDivWidth * 0.4)) {
        imdbStar8Fill.setAttribute("fill", "url(#imdbStar8Grad4)");
        imdbStar8Tooltip.innerHTML = "7.4";
    }
    if (number >= starsDivWidth / 2) {
        imdbStar8Fill.setAttribute("fill", "url(#imdbStar8Grad5)");
        imdbStar8Tooltip.innerHTML = "7.5";
    }
    if (number >= (starsDivWidth * 0.5) + 1.6) {
        imdbStar8Fill.setAttribute("fill", "url(#imdbStar8Grad6)");
        imdbStar8Tooltip.innerHTML = "7.6";
    }
    if (number >= (starsDivWidth * 0.6)) {
        imdbStar8Fill.setAttribute("fill", "url(#imdbStar8Grad7)");
        imdbStar8Tooltip.innerHTML = "7.7";
    }
    if (number >= (starsDivWidth * 0.7)) {
        imdbStar8Fill.setAttribute("fill", "url(#imdbStar8Grad8)");
        imdbStar8Tooltip.innerHTML = "7.8";
    }
    if (number >= (starsDivWidth * 0.8)) {
        imdbStar8Fill.setAttribute("fill", "url(#imdbStar8Grad9)");
        imdbStar8Tooltip.innerHTML = "7.9";
    }
    if (number >= (starsDivWidth * 0.9)) {
        imdbStar8Fill.setAttribute("fill", "url(#imdbStar8GradFull)");
        imdbStar8Tooltip.innerHTML = "8";
    }
    imdbRatingValueToRemember = imdbStar8Tooltip.innerHTML;
}
//      ...     \\

//9 STAR
const mouseOver9ImdbStar = () => {
    imdbStar9Tooltip.classList.remove("hidden");
    imdbStar1Fill.setAttribute("fill", "url(#imdbStar1GradFull)");
    imdbStar2Fill.setAttribute("fill", "url(#imdbStar2GradFull)");
    imdbStar3Fill.setAttribute("fill", "url(#imdbStar3GradFull)");
    imdbStar4Fill.setAttribute("fill", "url(#imdbStar4GradFull)");
    imdbStar5Fill.setAttribute("fill", "url(#imdbStar5GradFull)");
    imdbStar6Fill.setAttribute("fill", "url(#imdbStar6GradFull)");
    imdbStar7Fill.setAttribute("fill", "url(#imdbStar7GradFull)");
    imdbStar8Fill.setAttribute("fill", "url(#imdbStar8GradFull)");
};
const mouseOutOf9ImdbStar = () => {
    imdbStar9Fill.setAttribute("fill", "none");
    imdbStar8Fill.setAttribute("fill", "none");
    imdbStar7Fill.setAttribute("fill", "none");
    imdbStar6Fill.setAttribute("fill", "none");
    imdbStar5Fill.setAttribute("fill", "none");
    imdbStar4Fill.setAttribute("fill", "none");
    imdbStar3Fill.setAttribute("fill", "none");
    imdbStar2Fill.setAttribute("fill", "none");
    imdbStar1Fill.setAttribute("fill", "none");
    imdbStar9Tooltip.classList.add("hidden");
};
const choose9ImdbStar = () => {
    imdbStar9Tooltip.classList.add("hidden");
    runNeededFunctionsAfterUserHasChosenImdbRating();    
};

imdbStar9Element.addEventListener("mouseover", mouseOver9ImdbStar);
imdbStar9Element.addEventListener("mouseout", mouseOutOf9ImdbStar);
imdbStar9Element.addEventListener("click", choose9ImdbStar);
imdbStar9Element.addEventListener("mousemove", filling9ImdbStar, false);

function filling9ImdbStar(event) {
    let bnds = event.target.getBoundingClientRect();
    let x = event.clientX - bnds.left;
    let number = Math.floor(x);

    if (number >= (starsDivWidth * 0.1)) {
        imdbStar9Fill.setAttribute("fill", "url(#imdbStar9Grad1)");
        imdbStar9Tooltip.innerHTML = "8.1";
    }
    if (number >= (starsDivWidth * 0.2)) {
        imdbStar9Fill.setAttribute("fill", "url(#imdbStar9Grad2)");
        imdbStar9Tooltip.innerHTML = "8.2";
    }
    if (number >= (starsDivWidth * 0.3)) {
        imdbStar9Fill.setAttribute("fill", "url(#imdbStar9Grad3)");
        imdbStar9Tooltip.innerHTML = "8.3";
    }
    if (number >= (starsDivWidth * 0.4)) {
        imdbStar9Fill.setAttribute("fill", "url(#imdbStar9Grad4)");
        imdbStar9Tooltip.innerHTML = "8.4";
    }
    if (number >= starsDivWidth / 2) {
        imdbStar9Fill.setAttribute("fill", "url(#imdbStar9Grad5)");
        imdbStar9Tooltip.innerHTML = "8.5";
    }
    if (number >= (starsDivWidth * 0.5) + 1.6) {
        imdbStar9Fill.setAttribute("fill", "url(#imdbStar9Grad6)");
        imdbStar9Tooltip.innerHTML = "8.6";
    }
    if (number >= (starsDivWidth * 0.6)) {
        imdbStar9Fill.setAttribute("fill", "url(#imdbStar9Grad7)");
        imdbStar9Tooltip.innerHTML = "8.7";
    }
    if (number >= (starsDivWidth * 0.7)) {
        imdbStar9Fill.setAttribute("fill", "url(#imdbStar9Grad8)");
        imdbStar9Tooltip.innerHTML = "8.8";
    }
    if (number >= (starsDivWidth * 0.8)) {
        imdbStar9Fill.setAttribute("fill", "url(#imdbStar9Grad9)");
        imdbStar9Tooltip.innerHTML = "8.9";
    }
    if (number >= (starsDivWidth * 0.9)) {
        imdbStar9Fill.setAttribute("fill", "url(#imdbStar9GradFull)");
        imdbStar9Tooltip.innerHTML = "9";
    }
    imdbRatingValueToRemember = imdbStar9Tooltip.innerHTML;
}
//      ...     \\

//10 STAR
const mouseOver10ImdbStar = () => {
    imdbStar10Tooltip.classList.remove("hidden");
    imdbStar1Fill.setAttribute("fill", "url(#imdbStar1GradFull)");
    imdbStar2Fill.setAttribute("fill", "url(#imdbStar2GradFull)");
    imdbStar3Fill.setAttribute("fill", "url(#imdbStar3GradFull)");
    imdbStar4Fill.setAttribute("fill", "url(#imdbStar4GradFull)");
    imdbStar5Fill.setAttribute("fill", "url(#imdbStar5GradFull)");
    imdbStar6Fill.setAttribute("fill", "url(#imdbStar6GradFull)");
    imdbStar7Fill.setAttribute("fill", "url(#imdbStar7GradFull)");
    imdbStar8Fill.setAttribute("fill", "url(#imdbStar8GradFull)");
    imdbStar9Fill.setAttribute("fill", "url(#imdbStar9GradFull)");
};
const mouseOutOf10ImdbStar = () => {
    imdbStar10Fill.setAttribute("fill", "none");
    imdbStar9Fill.setAttribute("fill", "none");
    imdbStar8Fill.setAttribute("fill", "none");
    imdbStar7Fill.setAttribute("fill", "none");
    imdbStar6Fill.setAttribute("fill", "none");
    imdbStar5Fill.setAttribute("fill", "none");
    imdbStar4Fill.setAttribute("fill", "none");
    imdbStar3Fill.setAttribute("fill", "none");
    imdbStar2Fill.setAttribute("fill", "none");
    imdbStar1Fill.setAttribute("fill", "none");
    imdbStar10Tooltip.classList.add("hidden");
};
const choose10ImdbStar = () => {
    imdbStar10Tooltip.classList.add("hidden");
    runNeededFunctionsAfterUserHasChosenImdbRating();    
};

imdbStar10Element.addEventListener("mouseover", mouseOver10ImdbStar);
imdbStar10Element.addEventListener("mouseout", mouseOutOf10ImdbStar);
imdbStar10Element.addEventListener("click", choose10ImdbStar);
imdbStar10Element.addEventListener("mousemove", filling10ImdbStar, false);

function filling10ImdbStar(event) {
    let bnds = event.target.getBoundingClientRect();
    let x = event.clientX - bnds.left;
    let number = Math.floor(x);

    if (number >= (starsDivWidth * 0.1)) {
        imdbStar10Fill.setAttribute("fill", "url(#imdbStar10Grad1)");
        imdbStar10Tooltip.innerHTML = "9.1";
    }
    if (number >= (starsDivWidth * 0.2)) {
        imdbStar10Fill.setAttribute("fill", "url(#imdbStar10Grad2)");
        imdbStar10Tooltip.innerHTML = "9.2";
    }
    if (number >= (starsDivWidth * 0.3)) {
        imdbStar10Fill.setAttribute("fill", "url(#imdbStar10Grad3)");
        imdbStar10Tooltip.innerHTML = "9.3";
    }
    if (number >= (starsDivWidth * 0.4)) {
        imdbStar10Fill.setAttribute("fill", "url(#imdbStar10Grad4)");
        imdbStar10Tooltip.innerHTML = "9.4";
    }
    if (number >= starsDivWidth / 2) {
        imdbStar10Fill.setAttribute("fill", "url(#imdbStar10Grad5)");
        imdbStar10Tooltip.innerHTML = "9.5";
    }
    if (number >= (starsDivWidth * 0.5) + 1.6) {
        imdbStar10Fill.setAttribute("fill", "url(#imdbStar10Grad6)");
        imdbStar10Tooltip.innerHTML = "9.6";
    }
    if (number >= (starsDivWidth * 0.6)) {
        imdbStar10Fill.setAttribute("fill", "url(#imdbStar10Grad7)");
        imdbStar10Tooltip.innerHTML = "9.7";
    }
    if (number >= (starsDivWidth * 0.7)) {
        imdbStar10Fill.setAttribute("fill", "url(#imdbStar10Grad8)");
        imdbStar10Tooltip.innerHTML = "9.8";
    }
    if (number >= (starsDivWidth * 0.8)) {
        imdbStar10Fill.setAttribute("fill", "url(#imdbStar10Grad9)");
        imdbStar10Tooltip.innerHTML = "9.9";
    }
    if (number >= (starsDivWidth * 0.9)) {
        imdbStar10Fill.setAttribute("fill", "url(#imdbStar10GradFull)");
        imdbStar10Tooltip.innerHTML = "10";
    }
    imdbRatingValueToRemember = imdbStar10Tooltip.innerHTML;
}
