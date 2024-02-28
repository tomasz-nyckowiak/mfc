//CONSTANTS
const arraySeriesItemsEdit = [
    "editSeriesSelection1", "editSeriesSelection2", "editSeriesSelection3", "editSeriesSelection4",
    "editSeriesSelection5"    
];
const editListSeriesItemNameWithoutNumber = "editSeriesItem";
const editOrderedListCheckBox = document.getElementById("editOrderedListCheckbox");
const editUnorderedListCheckBox = document.getElementById("editUnorderedListCheckbox");
const editTop5TvSeriesList = document.getElementById("editTop5TvSeriesList");
const editHiddenInput = document.getElementById("editTypeOfList");
const editTop5TvSeriesSaveButton = document.getElementById("editTop5TvSeriesBtn");
//  ...  //

//MANAGING TYPE OF LIST
editUnorderedListCheckBox.addEventListener("click", function(){
    editUnorderedListCheckBox.setAttribute("disabled", true);
    editOrderedListCheckBox.checked = false;
    editOrderedListCheckBox.removeAttribute("disabled", true);
    
    editTop5TvSeriesList.classList.remove("list-decimal");
    editTop5TvSeriesList.classList.add("list-none");
    editHiddenInput.value = "unordered";
})

editOrderedListCheckBox.addEventListener("click", function(){
    editOrderedListCheckBox.setAttribute("disabled", true);
    editUnorderedListCheckBox.checked = false;
    editUnorderedListCheckBox.removeAttribute("disabled", true);
    
    editTop5TvSeriesList.classList.remove("list-none");
    editTop5TvSeriesList.classList.add("list-decimal");
    editHiddenInput.value = "ordered";
})