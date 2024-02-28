//CONSTANTS
const arraySeriesItems = ["pickSeriesSelection1", "pickSeriesSelection2", "pickSeriesSelection3", "pickSeriesSelection4",
    "pickSeriesSelection5"
];
const listSeriesItemNameWithoutNumber = "seriesItem";
const orderedListCheckBox = document.getElementById("orderedListCheckbox");
const unorderedListCheckBox = document.getElementById("unorderedListCheckbox");
const top5TvSeriesList = document.getElementById("top5TvSeriesList");
const hiddenInput = document.getElementById("typeOfList");
const top5TvSeriesSaveButton = document.getElementById("top5TvSeriesBtn");
//  ...  //

//MANAGING TYPE OF LIST
unorderedListCheckBox.addEventListener("click", function(){
    unorderedListCheckBox.setAttribute("disabled", true);
    orderedListCheckBox.checked = false;
    orderedListCheckBox.removeAttribute("disabled", true);
    
    top5TvSeriesList.classList.remove("list-decimal");
    top5TvSeriesList.classList.add("list-none");
    hiddenInput.value = "unordered";
})

orderedListCheckBox.addEventListener("click", function(){
    orderedListCheckBox.setAttribute("disabled", true);
    unorderedListCheckBox.checked = false;
    unorderedListCheckBox.removeAttribute("disabled", true);
    
    top5TvSeriesList.classList.remove("list-none");
    top5TvSeriesList.classList.add("list-decimal");
    hiddenInput.value = "ordered";
})