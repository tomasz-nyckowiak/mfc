let data = test;

function expenseInput() {		
	let input = document.getElementById("inputNewExpense").value;			
	return input;
}

function addNewTitle2() {		
	//const dataFromPHPasJson = '{{ data|json_encode }}';
    // const dataObj = JSON.parse(dataFromPHPasJson);
    // console.log(JSON.stringify(dataObj.genres));
    let test = '{{ data.originalTitle|json_encode }}';
    console.log(test);
    //alert("Works!");
}
