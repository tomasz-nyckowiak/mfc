//CONSTANTS
const arrayMovieItemsEdit = [
    "editMoviesSelection1", "editMoviesSelection2", "editMoviesSelection3", "editMoviesSelection4",
    "editMoviesSelection5", "editMoviesSelection6", "editMoviesSelection7", "editMoviesSelection8",
    "editMoviesSelection9", "editMoviesSelection10"
];
const editListMovieItemNameWithoutNumber = "editMovieItem";
const editOrderedListCheckBox = document.getElementById("editOrderedListCheckbox");
const editUnorderedListCheckBox = document.getElementById("editUnorderedListCheckbox");
const editTop10MoviesList = document.getElementById("editTop10MoviesList");
const editHiddenInput = document.getElementById("editTypeOfList");
const editTop10MoviesSaveButton = document.getElementById("editTop10MoviesBtn");
//  ...  //

//MANAGING TYPE OF LIST
editUnorderedListCheckBox.addEventListener("click", function(){
    editUnorderedListCheckBox.setAttribute("disabled", true);
    editOrderedListCheckBox.checked = false;
    editOrderedListCheckBox.removeAttribute("disabled", true);
    
    editTop10MoviesList.classList.remove("list-decimal");
    editTop10MoviesList.classList.add("list-none");
    editHiddenInput.value = "unordered";
})

editOrderedListCheckBox.addEventListener("click", function(){
    editOrderedListCheckBox.setAttribute("disabled", true);
    editUnorderedListCheckBox.checked = false;
    editUnorderedListCheckBox.removeAttribute("disabled", true);
    
    editTop10MoviesList.classList.remove("list-none");
    editTop10MoviesList.classList.add("list-decimal");
    editHiddenInput.value = "ordered";
})