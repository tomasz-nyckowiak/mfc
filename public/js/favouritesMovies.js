//CONSTANTS
const arrayMovieItems = [
    "pickMoviesSelection1", "pickMoviesSelection2", "pickMoviesSelection3", "pickMoviesSelection4",
    "pickMoviesSelection5", "pickMoviesSelection6", "pickMoviesSelection7", "pickMoviesSelection8", 
    "pickMoviesSelection9", "pickMoviesSelection10"
];
const listMovieItemNameWithoutNumber = "movieItem";
const orderedListCheckBox = document.getElementById("orderedListCheckbox");
const unorderedListCheckBox = document.getElementById("unorderedListCheckbox");
const top10MoviesList = document.getElementById("top10MoviesList");
const hiddenInput = document.getElementById("typeOfList");
const top10MoviesSaveButton = document.getElementById("top10MoviesBtn");
//  ...  //

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